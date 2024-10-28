import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  constructor(private db: Firestore, private authService: AuthService) {}

  async obtenerAsignaturasPorUsuario() {
    const uid = this.authService.getCurrentUserUid(); // Obtener el UID del usuario actual
    if (!uid) {
      console.error('El usuario no está autenticado');
      return []; // Retorna un array vacío si el usuario no está autenticado
    }

    const asignaturasRef = collection(this.db, 'asignatura');
    const q = query(asignaturasRef, where('alumnos', 'array-contains', uid)); // Filtrar por UID

    const querySnapshot = await getDocs(q);
    const asignaturas: any[] = [];

    querySnapshot.forEach((doc) => {
      asignaturas.push({ id: doc.id, ...doc.data() });
    });

    return asignaturas;
  }
}
