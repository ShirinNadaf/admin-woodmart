import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 public profileForm:FormGroup ;
  
  constructor(
    private firestore: AngularFirestore,
    public productService: ProductService,
    public formBuilder: FormBuilder
  ){
  this.profileForm = this.formBuilder.group({
    firstName: []
  
  });
}
  ngOnInit(): void {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.productService.create_prod(this.profileForm.value);
  }
}
