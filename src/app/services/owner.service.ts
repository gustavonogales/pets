import { Injectable } from '@angular/core';
import { PoSyncService } from '@po-ui/ng-sync';
import { Owner } from '@models/Owner.model';
import { ownerSchema } from '@schemas/owner.schema';
import { PoResponseApi } from '@po-ui/ng-components';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private readonly resource = 'owner';
  private readonly schema = ownerSchema.name;

  constructor(private poSyncService: PoSyncService) {}

  // getAll(): Observable<Owner[]> {
  //   return this.httpClient.get<Owner[]>(`${environment.api}/${this.resource}`);
  // }

  async getAll(): Promise<PoResponseApi> {
    const response = (await this.poSyncService
      .getModel(this.schema)
      .find()
      .exec()) as PoResponseApi;

    const arrayBirthday = response.items.map((owner) => {
      return {
        ...owner,
        birthdayDate: new Date(owner.birthday + ' 00:00:00'),
      };
    });

    console.log(arrayBirthday);

    return {
      hasNext: response.hasNext,
      items: arrayBirthday,
    };
  }

  // get(id: number): Observable<Owner> {
  //   return this.httpClient.get<Owner>(
  //     `${environment.api}/${this.resource}/${id}`
  //   );
  // }

  async get(id: string): Promise<Owner> {
    const entity = this.poSyncService.getModel(this.schema);

    let owner = (await entity.findById(id).exec()) as Owner;
    console.log(owner);
    console.log(this.schema);

    if (!owner)
      owner = (await entity.findOne({ internalId: id }).exec()) as Owner;

    console.log(owner);
    return owner;
  }

  // getPets(id: number): Observable<Owner> {
  //   return this.httpClient.get<Owner>(
  //     `${environment.api}/${this.resource}/${id}/pets`
  //   );
  // }

  // update(data: Owner): Observable<Owner> {
  //   return this.httpClient.put<Owner>(
  //     `${environment.api}/${this.resource}`,
  //     data
  //   );
  // }

  async update(data: Owner): Promise<void> {
    await this.poSyncService.getModel(this.schema).save(data);
  }

  // create(data: Owner): Observable<Owner> {
  //   return this.httpClient.post<Owner>(
  //     `${environment.api}/${this.resource}`,
  //     data
  //   );
  // }

  async create(data: Owner): Promise<void> {
    const internalId = uuidv4();
    Object.assign(data, { internalId });
    await this.poSyncService.getModel(this.schema).save(data);
  }

  // delete(owner: Owner): Observable<Owner> {
  //   return this.httpClient.delete<Owner>(
  //     `${environment.api}/${this.resource}/${owner.id}`
  //   );
  // }

  async delete(data: Owner): Promise<void> {
    await this.poSyncService.getModel(this.schema).remove(data);
  }
}
