import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  constructor(private firestore: AngularFirestore) { }
  category =new FormGroup({
    name: new FormControl('')
   });
  ngOnInit(): void {
    
  }
  saveData(){
    //  console.log(this.addStudent.value);
        this.product.AngularFirestore(this.category.value).subscribe((result: any)=>{
        console.log(result)
       
      });
    }
}
