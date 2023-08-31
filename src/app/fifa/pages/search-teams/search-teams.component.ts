import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teams } from 'src/app/interfaces/data.interface';
import { FifaService } from '../../services/fifa.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-teams',
  templateUrl: './search-teams.component.html',
  styleUrls: ['./search-teams.component.scss'],
  providers: [ConfirmationService, MessageService],

})
export class SearchTeamsComponent {
  public specificTeams: Teams[] = [];

  public myForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    dateStart: ['', Validators.required],
    dateEnd: ['', Validators.required],
  });


  constructor(private fb: FormBuilder,
              private fifaService: FifaService,
              private authService: AuthService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router
            ) {}

  confirm(event: Event, id: number) {
    if(!this.authService.isLogged) {
      this.router.navigateByUrl('/auth/login');
      return;
    };
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.deleteTeam(id);
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }

  deleteTeam(id: number): void {
    this.fifaService.deleteTeam(id)
    ?.pipe(
      switchMap( () => this.fifaService.getAllTeams(0, 100))
    )
    .subscribe(() => {
      this.specificTeams = this.specificTeams.filter(team => team.id !== id);
    });
  }

  goToUpdatePage(id: number) {
    if(!this.authService.isLogged) {
      this.router.navigateByUrl('/auth/login');
      return;
    }
    this.router.navigate(['/fifa/update-teams', id]);
  }

  onSubmit() {
    if(this.myForm.get('id')?.valid) {
      this.fifaService.getTeamById(this.myForm.controls['id'].value)
        .subscribe( data => {
          this.specificTeams = [];
          this.specificTeams.push(data);
        });
        return;
    }
    if(this.myForm.get('dateStart')?.valid && this.myForm.get('dateEnd')?.valid) {
      const dateStart = this.formDate(this.myForm.controls['dateStart'].value);
      const dateEnd = this.formDate(this.myForm.controls['dateEnd'].value);

      this.fifaService.getTeamByDate(dateStart, dateEnd)
        .subscribe(data => {
          this.specificTeams = data;
        });
    }
  }

  formDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }
}




