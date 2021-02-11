!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ll2E:function(t,r,i){"use strict";i.r(r),i.d(r,"PetsModule",function(){return S});var o=i("FpXt"),a=i("mrSG"),c=i("fXoL"),s=i("tyNb");i("AytR");var p,u=i("7Cbv"),l=i("1qDh"),d=((p=function(){function t(n){e(this,t),this.poSyncService=n,this.schema="pet"}return n(t,[{key:"getAll",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.poSyncService.getModel(this.schema).find().exec();case 2:return t=e.sent,e.abrupt("return",(console.log(t),t));case 4:case"end":return e.stop()}},e,this)}))}},{key:"get",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).findById(e).exec();case 2:if(n=t.sent,t.t0=n,t.t0){t.next=8;break}return t.next=7,this.poSyncService.getModel(this.schema).findOne({internalId:e}).exec();case 7:n=t.sent;case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}},t,this)}))}},{key:"update",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).save(e);case 2:case"end":return t.stop()}},t,this)}))}},{key:"create",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(u.a)(),Object.assign(e,{internalId:n}),t.next=4,this.poSyncService.getModel(this.schema).save(e);case 4:case"end":return t.stop()}},t,this)}))}},{key:"delete",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).remove(e);case 2:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||p)(c.Ub(l.d))},p.\u0275prov=c.Gb({token:p,factory:p.\u0275fac,providedIn:"root"}),p),m=i("wBT/"),v=["confirmToRemove"];function f(e,t){if(1&e&&(c.Qb(0,"div",6),c.Lb(1,"po-info",7),c.Pb(),c.Qb(2,"div",6),c.Lb(3,"po-info",8),c.Lb(4,"po-info",9),c.Pb()),2&e){var n=t.$implicit;c.xb(1),c.hc("p-value",n.name),c.xb(2),c.hc("p-value",n.breed),c.xb(1),c.hc("p-value",n.species)}}var h,b,y,g,w,x=((b=function(){function t(n,r,i){var o=this;e(this,t),this.router=n,this.petService=r,this.poSync=i,this.pets=[],this.loading=!0,this.actions=[{action:function(){return o.router.navigateByUrl("/pets/new")},label:"Novo Pet",icon:"po-icon-user-add"}],this.tableColumns=[{property:"name",label:"Nome"},{property:"nickName",label:"Apelido"},{property:"breed",label:"Ra\xe7a"},{property:"size",label:"Tamanho"},{property:"birthday",label:"Data Nascimento",type:"date",format:"dd-MM-yyyy"},{property:"species",label:"Esp\xe9cie"}],this.tableActions=[{action:this.onViewPet.bind(this),label:"Visualizar"},{action:this.onEditPet.bind(this),label:"Editar"},{action:this.onRemovePet.bind(this),label:"Remover",type:"danger",separator:!0}],this.poSync.onSync().subscribe(function(){return Object(a.a)(o,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPets();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))})}return n(t,[{key:"ngOnInit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getPets();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Too soon");case 8:case"end":return e.stop()}},e,this,[[0,5]])}))}},{key:"getPets",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.petService.getAll();case 2:this.pets=e.sent.items,this.loading=!1;case 4:case"end":return e.stop()}},e,this)}))}},{key:"onViewPet",value:function(e){this.router.navigateByUrl("/pets/".concat(e.id?e.id:e.internalId))}},{key:"onEditPet",value:function(e){this.router.navigateByUrl("/pets/".concat(e.id?e.id:e.internalId))}},{key:"onRemovePet",value:function(e){var t=this;this.modalText="Tem certeza que deseja remover ".concat(e.name,"?"),this.modal.primaryAction={action:function(){console.log(e),t.petService.delete(e).then(function(){t.pets.splice(t.pets.indexOf(e),1),t.modal.close()})},danger:!0,label:"Remover"},this.modal.secondaryAction={action:function(){return t.modal.close()},label:"Cancelar"},this.modal.open()}}]),t}()).\u0275fac=function(e){return new(e||b)(c.Kb(s.d),c.Kb(d),c.Kb(l.d))},b.\u0275cmp=c.Eb({type:b,selectors:[["app-pets-list"]],viewQuery:function(e,t){var n;1&e&&c.wc(v,!0),2&e&&c.nc(n=c.Yb())&&(t.modal=n.first)},decls:7,vars:8,consts:[["p-title","Pets",3,"p-actions"],["p-property-title","nickName",1,"po-visible-md","po-visible-sm","po-visible-xs",3,"p-items","p-actions"],["p-list-view-content-template",""],["p-selectable","","p-sort","true",1,"po-hidden-md","po-hidden-sm",3,"p-loading","p-actions","p-items","p-columns"],["p-click-out","true","p-title","Remover Pet"],["confirmToRemove",""],[1,"po-row"],["p-label","Nome",1,"po-sm-6",3,"p-value"],["p-label","Ra\xe7a",1,"po-sm-6",3,"p-value"],["p-label","Esp\xe9cie",1,"po-sm-6",3,"p-value"]],template:function(e,t){1&e&&(c.Qb(0,"po-page-list",0),c.Qb(1,"po-list-view",1),c.yc(2,f,5,3,"ng-template",2),c.Pb(),c.Lb(3,"po-table",3),c.Pb(),c.Qb(4,"po-modal",4,5),c.Ac(6),c.Pb()),2&e&&(c.hc("p-actions",t.actions),c.xb(1),c.hc("p-items",t.pets)("p-actions",t.tableActions),c.xb(2),c.hc("p-loading",t.loading)("p-actions",t.tableActions)("p-items",t.pets)("p-columns",t.tableColumns),c.xb(3),c.Cc("\n",t.modalText,"\n"))},directives:[m.p,m.i,m.j,m.q,m.l,m.g],styles:[""]}),b),k=((h=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=c.Eb({type:h,selectors:[["app-pets-form"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Qb(0,"p"),c.Ac(1,"pets-form works!"),c.Pb())},styles:[""]}),h),R=[{path:"",component:x},{path:"new",component:k},{path:"edit/:id",component:k},{path:"view/:id",component:(y=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=c.Eb({type:y,selectors:[["app-pets-view"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Qb(0,"p"),c.Ac(1,"pets-view works!"),c.Pb())},styles:[""]}),y)}],P=((w=function t(){e(this,t)}).\u0275mod=c.Ib({type:w}),w.\u0275inj=c.Hb({factory:function(e){return new(e||w)},imports:[[s.g.forChild(R)],s.g]}),w),S=((g=function t(){e(this,t)}).\u0275mod=c.Ib({type:g}),g.\u0275inj=c.Hb({factory:function(e){return new(e||g)},imports:[[o.a,P]]}),g)}}])}();