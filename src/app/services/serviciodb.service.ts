import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciodbService {

  private _storage: Storage | null = null; //lo que hace es que si no se inicializa, no se puede usar, por eso se inicializa en null
  constructor(private storage: Storage) { 

    this.init();
  }

  async init() {
    const storage = await this.storage.create(); //crea la base de datos
    this._storage = storage;
  }

  public guardar(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async leer(key:string){
    return await this._storage?.get(key);
}

}
