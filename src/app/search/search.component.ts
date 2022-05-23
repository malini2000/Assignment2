import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { NameSearchService } from '../name-search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name:string = "";
  arr:any;
  private service:NameSearchService

 
  
  constructor(service2:NameSearchService)
  { 

    this.service = service2;

    
    
  }
  doThings1(){
    this.service.getDetails(this.name).subscribe(data=>{
      this.arr = (data);
      console.log(data);
      console.log(this.arr);
    },
    error=>{
      console.log(error);
    });
  }
  
    
   

 



  ngOnInit(): void {
  }

}