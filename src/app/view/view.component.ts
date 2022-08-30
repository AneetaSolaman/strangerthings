import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any;
  public viewData:any=[];
  data :any = []

  constructor(private db:ApiService, private route: ActivatedRoute,private router:Router) { 
    this.id = this.route.snapshot.params
  }

  ngOnInit(): void {
    console.log(this.id.id);
    this.viewData=this.db.viewDatabyId(this.id.id)
    console.log(this.viewData)
    this.data.push(this.db.viewitem)
    console.log("data",this.data);
    
  }

}
