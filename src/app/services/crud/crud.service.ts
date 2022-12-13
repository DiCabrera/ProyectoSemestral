import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  where,
  query,
  getDoc,
  getDocs,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

type Filter = {
  [key: string]: any;
};

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: Firestore) {}
  create(datos: any, collectionName: string) {
    const coll = collection(this.firestore, collectionName);
    return addDoc(coll, datos);
  }
  getAll(collectionName: string): Observable<any> {
    const coll = collection(this.firestore, collectionName);
    return collectionData(coll) as Observable<any>;
  }
  async getById(collectionName: string, id): Promise<any> {
    const coll = collection(this.firestore, `${collectionName}`);
    const document = await getDoc(doc(coll, id));
    return { ...document.data(), id: document.id };
  }
  async getByQuery(collectionName: string, filter: Filter): Promise<any[]> {
    const coll = collection(this.firestore, collectionName);
    const keys = Object.keys(filter);
    const values = Object.values(filter);
    const q = await query(coll, where(keys[0], '==', values[0]));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  async update(data: any, id: string, collectionName: string) {
    const coll = collection(this.firestore, collectionName);
    await setDoc(doc(coll, id), data);
  }
}
