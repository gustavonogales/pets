import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PoStorageModule } from '@po-ui/ng-storage';
import { OwnerService } from '@services/owner.service';
import { PoEntity, PoSyncModule, PoSyncService } from '@po-ui/ng-sync';
import { Owner } from '@models/Owner.model';
import { PoQueryBuilder } from '@po-ui/ng-sync/lib/models';

describe('OwnerService', () => {
  let service: OwnerService;
  let poSync: PoSyncService;

  const owner = {
    id: '1',
    name: 'Howell Rippin',
    email: 'Lacey_Powlowski86@gmail.com',
    phone: '(216) 394-0249',
    address: 'address 6',
    birthday: '1607264484',
    deleted: false,
  };

  beforeEach(() => {
    const PoSyncServiceStub = () => ({
      prepare: () => ({}),
      sync: () => ({}),
      destroy: () => ({}),
      getModel: (schema: string) => ({
        save: () => Promise.resolve(true),
        remove: () => Promise.resolve(true),
        find: () => ({
          exec: () => {
            Promise.resolve({ items: [], hasnext: false });
          },
        }),
        findOne: () => ({
          exec: () => {
            Promise.resolve({});
          },
        }),
        findById: (id: string) => ({
          exec: () => {
            Promise.resolve(owner);
          },
        }),
      }),
    });

    TestBed.configureTestingModule({
      imports: [PoStorageModule.forRoot(), PoSyncModule],
      providers: [
        OwnerService,
        { provide: PoSyncService, useFactory: PoSyncServiceStub },
      ],
    });
    service = TestBed.inject(OwnerService);
    poSync = TestBed.inject(PoSyncService);
  });

  it('should get owner with id 1', fakeAsync(() => {
    service.get('1').then((data: Owner) => {
      tick(1000);
      expect(data).toEqual(owner);
    });
  }));
});
