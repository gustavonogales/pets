import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PoModalComponent, PoNotificationService } from "@po-ui/ng-components";
import { Owner } from "@models/Owner.model";
import { OwnerService } from "@services/owner.service";
import { PrintService } from "@services/print.service";
import { PrintAction } from "src/app/utils/Print-action";

@Component({
  selector: "app-owner-view",
  templateUrl: "./owner-view.component.html",
  styleUrls: ["./owner-view.component.scss"],
})
export class OwnerViewComponent implements OnInit {
  public owner: Owner = new Owner();
  public modalText: string;
  public literals = {
    back: "Abrir PDF",
    edit: "Baixar PDF",
    remove: "Imprimir",
  };
  @ViewChild("confirmToRemove", { static: true }) modal: PoModalComponent;

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: PoNotificationService,
    private printService: PrintService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.params.id;
    this.owner = await this.ownerService.get(id);
  }

  public openPDF(): void {
    // this.router.navigateByUrl("/owners");
    this.printService.print(this.owner, PrintAction.OPEN);
  }

  public remove(): void {
    this.modalText = `Tem certeza que deseja remover ${this.owner.name}?`;

    this.modal.primaryAction = {
      action: () => {
        this.ownerService.delete(this.owner).then(() => {
          this.modal.close();
          this.notificationService.success("Dono excluído com sucesso!");
          this.router.navigateByUrl("/owners");
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

  public downloadPDF(): void {
    // this.router.navigateByUrl(`/owners/edit/${this.owner.id}`);
    this.printService.print(this.owner, PrintAction.DOWNLOAD);
  }

  public printPDF(): void {
    this.printService.print(this.owner, PrintAction.PRINT);
    // this.printService.printJsPdf(this.owner);
  }
}
