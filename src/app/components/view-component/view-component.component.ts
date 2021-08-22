import { PersonDataServiceService } from './../../services/person-data-service.service';
import { Person } from './../../person';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  id:number=0;
  person:Person={id:0,firstName:"",lastName:"",email:""};
  constructor(private dataService: PersonDataServiceService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getPerson();
  }
  getPerson(){
     this.id = this.route.snapshot.params['id'];
     console.log("id : "+this.id);
       this.dataService.getPerson(this.id).subscribe((data) =>{
         console.log(data);
         this.person=data;
       })
  }

}
