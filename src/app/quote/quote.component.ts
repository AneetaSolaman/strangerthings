import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private router:Router,private ds:ApiService) { }
  userData1:any=[]
  ngOnInit(): void {
    this.ds.getData1().subscribe((res)=>{
      this.userData1=res;
      console.log("userdata1",this.userData1)
    })
  }

}
