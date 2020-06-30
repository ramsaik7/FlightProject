import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material/dialog';
import { Passenger } from '../../shared/_models/passenger';

@Component({
  selector: 'app-edit-passsenger',
  templateUrl: './edit-passsenger.component.html',
  styleUrls: ['./edit-passsenger.component.css']
})
export class EditPasssengerComponent implements OnInit {

  local_data: any;
  passenger: Passenger;
  action: string;
  ngOnInit() { }

  constructor(
    public dialogRef: MatDialogRef<EditPasssengerComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Passenger) {
    console.log(data);
    this.passenger = data;
    console.log(this.passenger);
  }


  doAction() {
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }



}
