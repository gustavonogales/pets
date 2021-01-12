import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Owner } from '@models/Owner.model';
import { OwnerService } from '@services/owner.service';

enum FormAction {
  INSERT = 'insert',
  EDIT = 'edit',
}

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss'],
})
export class OwnerFormComponent implements OnInit {
  private action: string = FormAction.INSERT;
  public owner: Owner = new Owner();
  // public owner$: Observable<Owner>;
  public form: FormGroup;
  public formTitle: string = 'Novo Dono';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private notificationService: PoNotificationService,
    private router: Router
  ) {
    this.buildForm();
  }

  async ngOnInit(): Promise<void> {
    const id =
      this.activatedRoute.snapshot.params.id ||
      this.activatedRoute.snapshot.params.internalId;
    if (id) {
      this.action = FormAction.EDIT;
      this.owner = await this.ownerService.get(id);
      console.log(this.owner);
      this.buildForm();
    }

    this.formTitle = this.pageTitle();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [this.owner.name, Validators.required],
      email: [
        this.owner.email,
        Validators.compose([Validators.required, Validators.email]),
      ],
      birthday: [this.owner.birthday, Validators.required],
      address: [this.owner.address, Validators.required],
      phone: [this.owner.phone, Validators.required],
      exemploDecimal: ['', Validators.required],
    });
  }

  get isEditAction(): boolean {
    return this.action === FormAction.EDIT;
  }

  private pageTitle(): string {
    return this.isEditAction ? 'Atualizar Dono' : 'Novo Dono';
  }

  public save(): void {
    Object.assign(this.owner, this.form.value);

    this.isEditAction
      ? this.ownerService
          .update(this.owner)
          .then(() => this.goBack('Dono atualizado com sucesso!'))
      : this.ownerService
          .create(this.owner)
          .then(() => this.goBack('Dono cadastrado com sucesso!'));
  }

  private goBack(msg: string) {
    this.notificationService.success(msg);
    this.router.navigateByUrl('/owners');
  }

  public cancel(): void {
    this.router.navigateByUrl('/owners');
  }
}
