import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data:any=[];

  constructor(private serve:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.data = this.serve.getData();
    console.log(this.data);
  }

  view(id:any){
    this.router.navigate(['view',id])
  }
  trailer(){
    this.router.navigate(['trailer'])
  }
}
