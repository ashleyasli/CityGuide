import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private httpCient : HttpClient) { }

  values : Value [] =[];

  ngOnInit() {
    alert("starting")
    this.getValues().subscribe(data => {
      this.values =data
    })
  }

  getValues(){
    return this.httpCient.get<Value[]>("https://localhost:44378/api/values");
  }
}
