import { Person } from './../person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonDataServiceService {
  basurl: string = 'https://rest-api-spring-boot.azurewebsites.net';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.basurl}`);
  }

  addPerson(person: Person): Observable<Person[]> {
    return this.http.post<Person[]>(`${this.basurl}`, person);
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.basurl}/${id}`);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.basurl}/${id}`);
  }
  updatePerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.basurl}/${id}`, person);
  }
}
