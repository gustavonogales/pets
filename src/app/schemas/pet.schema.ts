import { environment } from '@env/environment';
import { PoSyncSchema } from '@po-ui/ng-sync';

export const petSchema: PoSyncSchema = {
  getUrlApi: `${environment.api}/pet`,
  diffUrlApi: `${environment.api}/pet/diff`,
  deletedField: 'deleted',
  fields: [
    'id',
    'name',
    'nickName',
    'ownerId',
    'breed',
    'size',
    'birthday',
    'species',
  ],
  idField: 'id',
  name: 'pet',
  pageSize: 1,
};
