import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teams } from 'src/app/interfaces/data.interface';
import { FifaService } from '../../services/fifa.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-teams',
  templateUrl: './update-teams.component.html',
  styleUrls: ['./update-teams.component.scss']
})
export class UpdateTeamsComponent implements OnInit {

  public updatedTeam: Teams[] = [];

  private id: string = '';
  public myForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    estadio: ['', Validators.required],
    sitioWeb: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    fundacion: ['', Validators.required],
    entrenador: ['', Validators.required],
    capacidad: ['', Validators.required],
    valor: ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
              private fifaService: FifaService,
              private authService: AuthService,
              private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.fifaService.getTeamById(this.id).subscribe(data => {
      this.myForm.patchValue(data);
    })
  }

  onSubmit() {
    if(!this.authService.isLogged) return;

    this.fifaService.updateTeam(this.myForm.value, this.id).subscribe(data => {
      this.updatedTeam = [];
      this.updatedTeam.push(data);
      this.myForm.reset();
    });
  }
}
