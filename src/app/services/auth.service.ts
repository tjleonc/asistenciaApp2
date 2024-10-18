import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage:Storage) {
    this.storage.create() // Crea la base de datos
   }

   async register(email: string, password: string){
    await this.storage.set(email, password)
   }

   async login(email:string, password:string){
    const storedPassword = await this.storage.get(email) // lo que realmente estamos haciendo es buscar la contraseña asociada con el email en el almacenamiento
    return storedPassword === password; // Si la contraseña almacenada es igual a la contraseña que se pasó como argumento, entonces devolverá true, de lo contrario devolverá false

   }
}
