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
  product: any;
  message: boolean | undefined;
  addStudent: any;
 public categoryForm: FormGroup;
  
  constructor(private firestore: AngularFirestore,
    public productService :ProductService,
    public formBuilder: FormBuilder,
    public Routrt: Router) { 

      this.categoryForm = this.formBuilder.group({
        name: [''],
      })
    }
  // category =new FormGroup({
  //   name: new FormControl('')
  //  });
  ngOnInit(): void {
    
  }
  saveData(){
    //  console.log(this.addStudent.value);
        this.productService.create_prod(this.categoryForm.value);
        console.log("hi")
  
    }
}
