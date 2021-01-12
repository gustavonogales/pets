import { environment } from '@env/environment';
import { PoSyncSchema } from '@po-ui/ng-sync';

export const ownerSchema: PoSyncSchema = {
  getUrlApi: `${environment.api}/owner`,
  diffUrlApi: `${environment.api}/owner/diff`,
  deletedField: 'deleted',
  fields: ['id', 'name', 'email', 'phone', 'address', 'birthday'],
  idField: 'id',
  name: 'owner',
  pageSize: 1,
};
