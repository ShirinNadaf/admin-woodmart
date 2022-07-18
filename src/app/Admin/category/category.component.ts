import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { Category } from './category.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('userForm') userForm:NgForm | undefined;
  url='https://products-c11f3-default-rtdb.firebaseio.com/category.json'
  categories=[
    {name:'',product:''}
  ];
  constructor(private http: HttpClient){}
  ngOnInit() {  
    this.fetchData();
  }
                                          
  onAddCat(userData: Category) {
      console.log(userData)
      this.categories.push(userData)
      this.http.post<Category>(this.url, userData).subscribe(
        (res)=>{
          console.log(res)
        }
      )
  }

  fetchData(){
    this.http.get<Category>(this.url)
    .pipe(map(resData=>{
      console.log(resData)
      for(const key in resData){
        console.log(key);
        // console.log(resData[key]);
    }
    }) )
    .subscribe(categories=>{
      // console.log(categories)
    })
  }
}