import { environment } from "@env/environment";
import { PoSyncSchema } from "@po-ui/ng-sync";

export const schemaSchema: PoSyncSchema = {
  getUrlApi: `${environment.api}/schemaSync`,
  diffUrlApi: `${environment.api}/schemaSync/diff`,
  deletedField: "deleted",
  fields: [
    "id",
    "getUrlApi",
    "diffUrlApi",
    "deletedField",
    "idField",
    "name",
    "pageSize",
  ],
  idField: "id",
  name: "schema",
  pageSize: 1,
};
