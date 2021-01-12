import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoModalComponent,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { PoSyncService } from '@po-ui/ng-sync';
import { Pet } from 'src/app/models/Pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  @ViewChild('confirmToRemove', { static: true }) modal: PoModalComponent;
  public pets: Pet[] = [];
  public loading: boolean = true;
  public modalText: string;

  public readonly actions: PoPageAction[] = [
    {
      action: () => this.router.navigateByUrl('/pets/new'),
      label: 'Novo Pet',
      icon: 'po-icon-user-add',
    },
  ];
  public readonly tableColumns: PoTableColumn[] = [
    { property: 'name', label: 'Nome' },
    { property: 'nickName', label: 'Apelido' },
    { property: 'breed', label: 'Raça' },
    { property: 'size', label: 'Tamanho' },
    {
      property: 'birthday',
      label: 'Data Nascimento',
      type: 'date',
      format: 'dd-MM-yyyy',
    },
    { property: 'species', label: 'Espécie' },
  ];
  public readonly tableActions: PoTableAction[] = [
    { action: this.onViewPet.bind(this), label: 'Visualizar' },
    { action: this.onEditPet.bind(this), label: 'Editar' },
    {
      action: this.onRemovePet.bind(this),
      label: 'Remover',
      type: 'danger',
      separator: true,
    },
  ];

  constructor(
    private router: Router,
    private petService: PetsService,
    private poSync: PoSyncService
  ) {
    this.poSync.onSync().subscribe(async () => await this.getPets());
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.getPets();
    } catch (err) {
      console.log('Too soon');
    }
  }

  private async getPets(): Promise<void> {
    this.pets = (await this.petService.getAll()).items as Pet[];
    console.log(this.pets);
    this.loading = false;
  }

  private onViewPet(pet: Pet): void {
    this.router.navigateByUrl(`/pets/${pet.id ? pet.id : pet.internalId}`);
  }

  private onEditPet(pet: Pet): void {
    this.router.navigateByUrl(`/pets/${pet.id ? pet.id : pet.internalId}`);
  }

  private onRemovePet(pet: Pet): void {
    this.modalText = `Tem certeza que deseja remover ${pet.name}?`;

    this.modal.primaryAction = {
      action: () => {
        console.log(pet);
        this.petService.delete(pet).then(() => {
          this.pets.splice(this.pets.indexOf(pet), 1);
          this.modal.close();
        });
      },
      danger: true,
      label: 'Remover',
    };

    this.modal.secondaryAction = {
      action: () => this.modal.close(),
      label: 'Cancelar',
    };

    this.modal.open();
  }
}
