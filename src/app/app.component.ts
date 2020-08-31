import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spacex';

  constructor(private http: HttpClient){}
  YearArry:number[]=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  launch: boolean[]=[true,false]
  landing: boolean[]=[true,false]
  spackex;
  ngOnInit(): void {
    this.http.get("https://api.spacexdata.com/v3/launches?limit=100")
    .subscribe(data => {
    
      this.spackex=data;
     })
  }
  getYear(year){
    alert(year)
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=true&amp;land_success=true&amp;launch_year="+year)
    .subscribe(data => {
      
      this.spackex=data;
      

    })
  }
  launchSuccess(launch){
    alert(launch)
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success="+launch)
    .subscribe(data => {
      this.spackex=data;
    })
  }
  landSuccess(lands){
    alert(lands)
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=true&amp;land_success="+lands)
    .subscribe(data => {
         this.spackex=data;

    })
  }
}
