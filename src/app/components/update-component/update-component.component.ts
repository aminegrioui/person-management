import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonDataServiceService } from './../../services/person-data-service.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  id: number = 0;
  person: Person = { id: 0, firstName: '', lastName: '', email: '' };
  constructor(
    private dataService: PersonDataServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getPerson(this.id).subscribe((data) => {
      this.person = data;
    });
  }

  updatePerson() {
    this.dataService.updatePerson(this.id, this.person).subscribe((data) => {
      alert('Updated ');
      this.router.navigate(['/persons']);
    });
  }
}
