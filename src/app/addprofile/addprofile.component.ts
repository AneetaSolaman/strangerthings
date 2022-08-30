import { Component, OnInit,LOCALE_ID  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  'occ': string;
    job: string[] = [
        'Architect',
        'Astronaut',
        'Baker',
        'Builder',
        'Civil Engineer',
        'Clown',
        'Doctor',
        'Developer',
        'Engineer',
        'Editor',
        'Geologist',
        'Grocer',
        'Fire and Safety',
        'Farmer',
        'Hydrologist',
        'Illustrator',
        'IT',
        'Job analyst',
        'Kennel Manager',
        'Life Guard',
        'Manager',
        'Nurse',
        'Ophthalmologist',
        'Plumber',
        'Quality Analyst',
        'RnD',
        'Supervisor',
        'Taxi driver',
        'Undertaker',
        'Vloger',
        'Waiter',
        'Xray techinician',
        'Youth worker',
        'Zoologist'
    ];
  constructor(private fb:FormBuilder, private route:Router, private ds:ApiService){}
  
  addProfileForm = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
    password:['',[Validators.required]],
    phone:['',[Validators.required,]],
    occupation:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
  }
  reset(){
    console.log(this.addProfileForm.value)
  }
  submit(){

    var username=this.addProfileForm.value.username;
    var password=this.addProfileForm.value.password;
    var phone=this.addProfileForm.value.phone;
    var occupation=this.addProfileForm.value.occupation;
    var email=this.addProfileForm.value.email;

    if(this.addProfileForm.valid){

      const result = this.ds.submit(username, password  , phone , occupation , email );

      if(result){
        alert("successful");
        this.route.navigateByUrl('')
        this.ds.database.push(this.addProfileForm.value)
        console.log(this.ds.database);
        
        
        this.ds.saveData();
        console.log(this.addProfileForm)
  
      }
    }
    else{
      alert("invalid form")
    }
  }
}
