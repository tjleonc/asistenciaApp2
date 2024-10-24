import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;
  private auth = getAuth(); 

  constructor(private storage: Storage) {
    this.init(); // Inicializa el almacenamiento
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Función para registrar un nuevo usuario
  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      // Almacena la contraseña en el almacenamiento local
      console.log(`Usuario registrado: ${email}`);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, message: error.code };
    }
  }

  // Función para iniciar sesión
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(`Usuario autenticado: ${userCredential.user.email}`);
      return { success: true, user: userCredential.user };
    } catch (error:any) {
      console.error('Error en login:', error); // Para depuración
      return { success: false, message: error.code }; // Devuelve el error
    }
  }
}