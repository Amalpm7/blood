import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor() { }
  name=""
  bloodGroup=""
  dob=""
  lastDonation=""
  prevDiseases=""
  lastVaccination=""
  address=""
  pinNo=""
  mobileNo=""
  readToDonate=""
  readValues=()=>{
    let data={
      "name":this.name,
  "bloodGroup":this.bloodGroup,
  "dob":this.dob,
  "lastDonation":this.lastDonation,
  "prevDiseases":this.prevDiseases,
  "lastVaccination":this.lastVaccination,
  "address":this.address,
  "pinNo":this.pinNo,
  "mobileNo":this.mobileNo,
  "readToDonate":this.readToDonate
    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
