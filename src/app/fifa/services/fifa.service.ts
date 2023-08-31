import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Data, Teams } from '../../interfaces/data.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  private baseUrl: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllTeams(pagination: number, quantity: number = 100): Observable<Data> {
    const url = `${this.baseUrl}/equipos/listar/${pagination}/${quantity}`;
    return this.http.get<Data>(url)
      .pipe(
        map(data => data),
      )
  }

  deleteTeam(id: number) {
    if(!this.authService.isLogged) return;

    const url = `${this.baseUrl}/equipos/eliminar/${id}`;
    return this.http.delete(url);
  }

  getTeamById(id: string): Observable<Teams> {
    const url = `${this.baseUrl}/equipos/consultar/${id}`;
    return this.http.get<Teams>(url);
  }

  getTeamByDate(dateStart: string, dateEnd: string): Observable<Teams[]> {
    const url = `${this.baseUrl}/equipos/consultar/${dateStart}/${dateEnd}`;
    return this.http.get<Teams[]>(url);
  }

  createTeam(teamInformation: FormGroup): Observable<Teams> {
    const url = `${this.baseUrl}/equipos/crear`;
    return this.http.post<Teams>(url, teamInformation);
  }

  updateTeam(teamInformation: FormGroup, id: string): Observable<Teams> {
    const url = `${this.baseUrl}/equipos/actualizar/${id}`;
    return this.http.put<Teams>(url, teamInformation);
  }
}
