import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _storage: Storage | null = null;

  constructor(private storage:Storage) {
    this.init() // Crea la base de datos
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

   async register(email: string, password: string, confirmPassword: string):Promise<boolean>{
    if(password === confirmPassword){
      await this._storage?.set(email, password) // Almacena la contraseña en el almacenamiento
      console.log('Usuario registrado:', email);
      return true;
   }else{
    return false;
   }
  }

   async login(email:string, password:string):Promise<boolean>{
    const storedPassword = await this._storage?.get(email) // lo que realmente estamos haciendo es buscar la contraseña asociada con el email en el almacenamiento
    return storedPassword === password; // Si la contraseña almacenada es igual a la contraseña que se pasó como argumento, entonces devolverá true, de lo contrario devolverá false

   }
}
