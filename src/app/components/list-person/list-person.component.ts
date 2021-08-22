import { Router } from '@angular/router';
import { PersonDataServiceService } from './../../services/person-data-service.service';
import { Person } from './../../person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  persons: Person[] = [{ id: 0, firstName: '', lastName: '', email: '' }];
  constructor(
    private dataService: PersonDataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllPersons();
  }
  getAllPersons() {
    this.dataService.getUsers().subscribe((data) => {
      this.persons = data;
    });
  }

  deletePerson(id: number) {
    this.dataService.deletePerson(id).subscribe((data) => {
      this.getAllPersons();
      console.log(data);
    });
  }

  viewPerson(id: number) {
    this.router.navigate(['/view-person', id]);
  }
  updatePerson(id: number) {
    this.router.navigate(['/update-person', id]);
  }
}
