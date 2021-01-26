import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { environment } from "@env/environment";
import { PoNotificationService, PoResponseApi } from "@po-ui/ng-components";
import { schemaSchema } from "./schemas/schema.schema";

import {
  PoNetworkService,
  PoNetworkType,
  PoSyncConfig,
  PoSyncService,
} from "@po-ui/ng-sync";
// import { schemas } from '@schemas/.';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public schemas = [];
  constructor(
    private poSync: PoSyncService,
    private networkService: PoNetworkService,
    private notificationService: PoNotificationService,
    private httpClient: HttpClient
  ) {
    this.poSync.destroy();
    this.syncPrepare();

    this.httpClient
      .get(`${environment.api}/schema`)
      .subscribe((response: []) => {
        this.schemas = response.map((schema: any) => {
          schema.diffUrlApi = `${environment.api}${schema.diffUrlApi}`;
          schema.getUrlApi = `${environment.api}${schema.getUrlApi}`;
          return schema;
        });
        console.log(this.schemas);
        this.syncPrepare();
      });

    this.networkService.onChange().subscribe((info) => {
      let msg = "Você não está conectado à internet";
      if (info.status) msg = "Conectado à internet";

      this.notificationService.information(msg);
    });
  }

  public async syncPrepare() {
    await this.poSync.destroy();

    this.poSync.onSync().subscribe(() => {
      console.log(`Sincronizou - ${new Date()}`);
    });

    const config: PoSyncConfig = {
      type: [
        PoNetworkType.ethernet,
        PoNetworkType.wifi,
        PoNetworkType._2g,
        PoNetworkType._3g,
        PoNetworkType._4g,
      ],
      period: 10,
    };

    // console.log("Schema dos Schemas", schemaSchema);

    // await this.poSync.prepare([schemaSchema], config);

    // await this.poSync.sync();

    // const response = (await this.poSync
    //   .getModel("schema")
    //   .find()
    //   .exec()) as PoResponseApi;

    // console.log("Select dos schemas", response);

    // this.schemas = response.items.map((schema) => {
    //   schema.diffUrlApi = `${environment.api}${schema.diffUrlApi}`;
    //   schema.getUrlApi = `${environment.api}${schema.getUrlApi}`;

    //   delete schema.lastSync;
    //   delete schema.updatedDate;
    //   delete schema.createdDate;
    //   delete schema.id;

    //   return schema;
    // });

    // this.schemas.push(schemaSchema);

    // console.log("Schemas Prontos", this.schemas);

    this.poSync.prepare(this.schemas, config).then(async () => {
      await this.poSync.sync();
    });
  }
}
