import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public viewitem:any

  constructor(private http:HttpClient) { }
  getData1(){
    return this.http.get<any>('https://strangerthings-quotes.vercel.app/api/quotes/5');
  }

  public database:any = [
    { id: 1, name: "Eleven", age: 18, address: "Hawkins", phnno: 7777777777, occupation: "Actor", email: "eleven@gmail.com", img: "../../assets/milly.jpg" },
    { id: 2, name: "Mike", age: 19, address: "Toland", phnno: 11111111, occupation: "Actor", email: "mike@gmail.com", img: "../../assets/mike.jpg" },
    { id: 3, name: "Dustin", age: 18, address: "Holand", phnno: 222222222, occupation: "Actor", email: "dustin@gmail.com", img: "../../assets/dustin.jpg" },
    { id: 4, name: "Will", age: 19, address: "Tylo", phnno: 6235478952, occupation: "Actor", email: "will@gmail.com", img: "../../assets/imageswill.jpg" }

  ]
  userData:any=[];
  islogin:boolean=false;
  getData() {
    return <any>(this.database)
  }

  viewDatabyId(id:any){
    this.database.forEach((item:any) => {
      if (item.id == id) {
        this.viewitem = item
        return this.viewitem
      }
    })
    console.log(this.viewitem);
  }
  saveData() {
    localStorage.setItem("database", JSON.stringify(this.database));
  }

  submit(username: any, password: any, phnno: any, occupation: any, email: any) {

    let db = this.database;

    db = {
      username,
      password,
      phnno,
      occupation,
      email
    }
    return true;
  }
login(username:any,password:any){
  this.userData = localStorage.getItem('database');
  JSON.parse(this.userData).forEach((element:any)=>{7
    if(username == element.username && password == element.password){
      this.islogin = true;
    }
    else{
      this.islogin = false;
    }
  })

}

}
