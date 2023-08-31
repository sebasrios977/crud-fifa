import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/interfaces/data.interface';
import { FifaService } from 'src/app/fifa/services/fifa.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-see-teams',
  templateUrl: './see-teams.component.html',
  styleUrls: ['./see-teams.component.scss'],
  providers: [ConfirmationService, MessageService],
})


export class SeeTeamsComponent implements OnInit {

  public teams: Teams[] = [];
  public currentPage: number = 0;
  public totalPages: number[] = [];

  constructor(private fifaService: FifaService, private authService: AuthService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm(event: Event) {
    if(!this.authService.isLogged) return;
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }

  ngOnInit(): void {
    this.fifaService.getAllTeams(this.currentPage)
      .subscribe( data => {
        this.teams = data.content;
        this.totalPages = Array.from({ length: data.totalPages}, (_, index) => index + 1);
      });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.fifaService.getAllTeams(this.currentPage)
      .subscribe( data => {
        this.teams = data.content;
      });

      window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
