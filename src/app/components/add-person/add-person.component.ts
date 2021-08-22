import { PersonDataServiceService } from './../../services/person-data-service.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  

  person: Person = { id: 0, firstName: '', lastName: '', email: '' };
  constructor(
    private dataService: PersonDataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addPerson() {
    this.dataService.addPerson(this.person).subscribe((data) => {
      // alert('Successfull');
      this.goToList();
    });
    console.log(this.person);
  }

  goToList() {
    this.router.navigate(['/persons']);
  }
}
