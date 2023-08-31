import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FifaService } from '../../services/fifa.service';
import { Teams } from 'src/app/interfaces/data.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.scss']
})
export class CreateTeamsComponent {

  public registeredTeam: Teams[] = [];

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

  constructor(private fb: FormBuilder, private fifaService: FifaService, private authService: AuthService) {}


  onSubmit() {
    if(!this.authService.isLogged) return;

    this.fifaService.createTeam(this.myForm.value).subscribe(data => {
      this.registeredTeam.push(data);
      this.myForm.reset();
    });
  }


}
