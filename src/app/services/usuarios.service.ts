import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor(private auth: Auth,private firestore: Firestore){}

register({email, password}: any){
  return createUserWithEmailAndPassword(this.auth, email, password);

}

login({email, password}: any){
return signInWithEmailAndPassword(this.auth, email,password);
}







  getUsuarios(): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string): Observable<Usuario> {
    const usuarioRef = doc(this.firestore,`usuarios/${id}`);
    return docData(usuarioRef,{idField:'id'}) as Observable<Usuario>;
  }
  
  addUsuario(usuario:Usuario){
    const usuariosRef = collection(this.firestore,'usuarios');
    return addDoc(usuariosRef,usuario);
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return updateDoc(usuarioRef,
      {
        name:usuario.name,
        lastname:usuario.lastname,
        gender:usuario.gender,
        age:usuario.age,
        email:usuario.email,
        image:usuario.image
      });
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef) ;
  }
  
}
