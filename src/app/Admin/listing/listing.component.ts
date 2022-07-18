import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public listingForm:FormGroup | any;
  constructor(public formBuilder: FormBuilder) 
  {
    this.listingForm = this.formBuilder.group({
      name : [],
      
    });
  } 
  ngOnInit(): void {
  }
  onSubmit() {
    console.warn(this.listingForm.value);
  }
}
