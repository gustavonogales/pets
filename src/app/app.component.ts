import { Component } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  PoNetworkService,
  PoNetworkType,
  PoSyncConfig,
  PoSyncService,
} from '@po-ui/ng-sync';
import { schemas } from '@schemas/.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private poSync: PoSyncService,
    private networkService: PoNetworkService,
    private notificationService: PoNotificationService
  ) {
    this.poSync.destroy().then(() => {
      const config: PoSyncConfig = {
        type: [
          PoNetworkType.ethernet,
          PoNetworkType.wifi,
          PoNetworkType._2g,
          PoNetworkType._3g,
          PoNetworkType._4g,
        ],
        period: 60,
      };

      this.poSync.prepare(schemas, config).then(async () => {
        await this.poSync.sync();
        this.poSync.onSync().subscribe(() => {
          console.log(`Sincronizou - ${new Date()}`);
        });
      });
    });

    this.networkService.onChange().subscribe((info) => {
      let msg = 'Você não está conectado à internet';
      if (info.status) msg = 'Conectado à internet';

      this.notificationService.information(msg);
    });
  }
}
