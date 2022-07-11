import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ListingComponent } from './Admin/listing/listing.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


// const config = {
//   apiKey: "AIzaSyDa3ay8xSWiA-FaOHY3VpIEQ7IAsH9TpGE",
//   authDomain: "woodmart-database.firebaseapp.com",
//   projectId: "woodmart-database",
//   storageBucket: "woodmart-database.appspot.com",
//   messagingSenderId: "1066553658614",
//   appId: "1:1066553658614:web:420aca8e7997f6f8a6f0d7"
// };

@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    CategoryComponent,
    ListingComponent,
    SidebarComponent,
    
    
    
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireStorageModule ,// storage
   
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
