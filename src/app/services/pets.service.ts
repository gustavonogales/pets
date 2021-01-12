import { Injectable } from '@angular/core';
import { Pet } from '@models/Pet.model';
import { PoResponseApi, PoSyncService } from '@po-ui/ng-sync';
import { petSchema } from '@schemas/pet.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  // private readonly resource = 'pet';
  private readonly schema = petSchema.name;

  constructor(private poSyncService: PoSyncService) {}

  // getAll(): Observable<Pet[]> {
  //   return this.httpClient.get<Pet[]>(`${environment.api}/${this.resource}`);
  // }

  async getAll(): Promise<PoResponseApi> {
    let response = await this.poSyncService.getModel(this.schema).find().exec();
    console.log(response);
    return response as PoResponseApi;
  }

  // get(id: number): Observable<Pet> {
  //   return this.httpClient.get<Pet>(
  //     `${environment.api}/${this.resource}/${id}`
  //   );
  // }

  async get(id: number): Promise<Pet> {
    let pet = (await this.poSyncService
      .getModel(this.schema)
      .findById(id)
      .exec()) as Pet;

    if (!pet) {
      pet = (await this.poSyncService
        .getModel(this.schema)
        .findOne({ internalId: id })
        .exec()) as Pet;
    }

    return pet;
  }

  // update(data: Pet): Observable<Pet> {
  //   return this.httpClient.put<Pet>(
  //     `${environment.api}/${this.resource}`,
  //     data
  //   );
  // }

  async update(data: Pet): Promise<void> {
    await this.poSyncService.getModel(this.schema).save(data);
  }

  // create(data: Pet): Observable<Pet> {
  //   return this.httpClient.post<Pet>(
  //     `${environment.api}/${this.resource}`,
  //     data
  //   );
  // }

  async create(data: Pet): Promise<void> {
    const internalId = uuidv4();
    Object.assign(data, { internalId });
    await this.poSyncService.getModel(this.schema).save(data);
  }

  // delete(pet: Pet): Observable<Pet> {
  //   return this.httpClient.delete<Pet>(
  //     `${environment.api}/${this.resource}/${pet.id}`
  //   );
  // }

  async delete(data: Pet): Promise<void> {
    await this.poSyncService.getModel(this.schema).remove(data);
  }
}
