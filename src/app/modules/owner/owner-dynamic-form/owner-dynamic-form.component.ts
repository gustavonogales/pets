import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  PoDynamicFormField,
  PoNotificationService,
} from "@po-ui/ng-components";
import { Owner } from "@models/Owner.model";
import { OwnerService } from "@services/owner.service";

enum FormAction {
  INSERT = "insert",
  EDIT = "edit",
}

@Component({
  selector: "app-owner-form",
  templateUrl: "./owner-dynamic-form.component.html",
  styleUrls: ["./owner-dynamic-form.component.scss"],
})
export class OwnerDynamicFormComponent implements OnInit {
  private action: string = FormAction.INSERT;
  public owner: Owner = new Owner();
  // public owner$: Observable<Owner>;
  public form: FormGroup;
  public formTitle: string = "Novo Dono";
  public validateFields: string[] = ["name"];
  public fields: PoDynamicFormField[] = [];

  // public fields: PoDynamicFormField[] = [
  //   {
  //     property: "name",
  //     type: "String",
  //     label: "Nome Completo",
  //     required: true,
  //   },
  //   {
  //     property: "email",
  //     type: "String",
  //     label: "E-mail",
  //     pattern: "##",
  //     required: true,
  //   },
  //   {
  //     property: "address",
  //     type: "String",
  //     label: "Endereço",
  //     required: true,
  //   },
  //   {
  //     property: "phone",
  //     type: "String",
  //     label: "Telefone",
  //     mask: "(99) 99999-9999",
  //     required: true,
  //   },
  //   {
  //     property: "birthday",
  //     type: "Date",
  //     label: "Data de Nascimento",
  //     required: true,
  //   },
  // ];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private notificationService: PoNotificationService,
    private router: Router
  ) {
    // this.buildForm();
  }

  async ngOnInit(): Promise<void> {
    this.ownerService.ownerFields().subscribe((response: any[]) => {
      console.log(response);
      let a = response.filter((schema) => schema.name == "owner")[0].m;
      console.log(a);
    });

    const id =
      this.activatedRoute.snapshot.params.id ||
      this.activatedRoute.snapshot.params.internalId;
    if (id) {
      this.action = FormAction.EDIT;
      this.owner = await this.ownerService.get(id);
      console.log(this.owner);
    }

    this.formTitle = this.pageTitle();
  }

  get isEditAction(): boolean {
    return this.action === FormAction.EDIT;
  }

  private pageTitle(): string {
    return this.isEditAction ? "Atualizar Dono" : "Novo Dono";
  }

  public save(): void {
    // Object.assign(this.owner, this.form.value);

    console.log(this.owner);
    // this.isEditAction
    //   ? this.ownerService
    //       .update(this.owner)
    //       .then(() => this.goBack("Dono atualizado com sucesso!"))
    //   : this.ownerService
    //       .create(this.owner)
    //       .then(() => this.goBack("Dono cadastrado com sucesso!"));
  }

  private goBack(msg: string) {
    this.notificationService.success(msg);
    this.router.navigateByUrl("/owners");
  }

  public cancel(): void {
    this.router.navigateByUrl("/owners");
  }
}
