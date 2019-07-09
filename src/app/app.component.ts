import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  result = 'low';
  public btnGroup = new FormControl(this.result);
  
  
  ngOnInit(): void{
    this.btnGroup
    .valueChanges
    .subscribe(val=>{
      this.result = val;
    });
  }
}
