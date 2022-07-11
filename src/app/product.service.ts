import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  AngularFirestore:any;
    constructor(private firestore: AngularFirestore) { }

  getprod() {
    return this.firestore
    .collection('Product_collection').snapshotChanges();
}
create_prod(product:Product) {
  return this.firestore
  .collection('Product_collection').add(Product);
}
update_prod(product:Product) {
  delete product.id;
  return this.firestore
  .collection('Product_collection').add(Product);
}
delete_prod(productId:string) {
  return this.firestore
  .doc('Product/' + productId).delete();
}
}


