import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material/dialog';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {


  ancillary: Ancillary;
  ngOnInit() { }
  constructor(
    public dialogRef: MatDialogRef<EditServicesComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.ancillary = data;
    console.log(this.ancillary);
  }


  doAction() {
    this.dialogRef.close({ data: this.ancillary });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}

export class Ancillary {
  ancillaryService: string;
}

