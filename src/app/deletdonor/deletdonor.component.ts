import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletdonor',
  templateUrl: './deletdonor.component.html',
  styleUrls: ['./deletdonor.component.css']
})
export class DeletdonorComponent implements OnInit {

  constructor() { }
  donorId=""
  readValue=()=>{
    let data={
      "donorId":this.donorId

    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
