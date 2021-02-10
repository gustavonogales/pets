import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  PoModalComponent,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
} from "@po-ui/ng-components";
import { Owner } from "@models/Owner.model";
import { OwnerService } from "@services/owner.service";
import { PoSyncService } from "@po-ui/ng-sync";

@Component({
  selector: "app-owner-list",
  templateUrl: "./owner-list.component.html",
  styleUrls: ["./owner-list.component.scss"],
})
export class OwnerListComponent implements OnInit {
  @ViewChild("table", { static: true }) table: PoTableComponent;
  @ViewChild("confirmToRemove", { static: true }) modal: PoModalComponent;

  public owners: Owner[] = [];
  public loading: boolean = true;
  public modalText: string;

  public readonly actions: PoPageAction[] = [
    {
      action: () => this.router.navigateByUrl("/owners/new"),
      label: "Novo Dono",
      icon: "po-icon-user-add",
    },
    {
      action: () => this.router.navigateByUrl("/owners/new-dynamic"),
      label: "Novo Dono (Dynamic)",
      icon: "po-icon-user-add",
    },
  ];
  public readonly tableColumns: PoTableColumn[] = [
    { property: "name", label: "Nome" },
    {
      property: "email",
      label: "E-mail",
      action: this.sendEmail.bind(this),
      type: "link",
    },
    { property: "phone", label: "Telefone" },
    { property: "address", label: "Endereço" },
    {
      property: "birthday",
      label: "Data Nascimento String",
      type: "date",
    },
    {
      property: "birthdayDate",
      label: "Data Nascimento Date",
      type: "date",
    },
  ];
  public readonly tableActions: PoTableAction[] = [
    { action: this.onViewOwner.bind(this), label: "Visualizar" },
    { action: this.onEditOwner.bind(this), label: "Editar" },
    { action: this.onEditDynamicOwner.bind(this), label: "Editar (Dynamic)" },
    {
      action: this.onRemoveOwner.bind(this),
      label: "Remover",
      type: "danger",
      separator: true,
    },
  ];

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private poSync: PoSyncService
  ) {
    this.poSync.onSync().subscribe(async () => await this.getOwners());
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.getOwners();
    } catch (err) {
      console.log("Too soon");
    }
  }

  private async getOwners(): Promise<void> {
    this.owners = (await this.ownerService.getAll()).items;
    this.loading = false;
  }

  private onEditOwner(owner: Owner): void {
    this.router.navigateByUrl(
      `/owners/edit/${owner.id ? owner.id : owner.internalId}`
    );
  }

  private onEditDynamicOwner(owner: Owner): void {
    this.router.navigateByUrl(
      `/owners/edit-dynamic/${owner.id ? owner.id : owner.internalId}`
    );
  }

  private onViewOwner(owner: Owner): void {
    this.router.navigateByUrl(
      `/owners/view/${owner.id ? owner.id : owner.internalId}`
    );
  }

  private onRemoveOwner(owner: Owner): void {
    this.modalText = `Tem certeza que deseja remover ${owner.name}?`;

    this.modal.primaryAction = {
      action: () => {
        this.ownerService.delete(owner).then(() => {
          this.owners.splice(this.owners.indexOf(owner), 1);
          this.modal.close();
        });
      },
      danger: true,
      label: "Remover",
    };

    this.modal.secondaryAction = {
      action: () => this.modal.close(),
      label: "Cancelar",
    };

    this.modal.open();
  }

  private sendEmail(owner: Owner) {
    const body = `Olá ${owner.name},`;
    const subject = "Contato - Gestão Pets";

    window.open(
      `mailto:${owner.email}?subject=${subject}&body=${body}`,
      "_self"
    );
  }
}
