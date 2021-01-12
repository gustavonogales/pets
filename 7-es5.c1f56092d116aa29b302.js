!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ll2E:function(t,r,i){"use strict";i.r(r),i.d(r,"PetsModule",function(){return S});var o,a=i("FpXt"),c=i("mrSG"),s=i("fXoL"),u=i("tyNb"),p=i("mBrC"),l=i("7Cbv"),d=i("1qDh"),m=((o=function(){function t(n){e(this,t),this.poSyncService=n,this.schema=p.a.name}return n(t,[{key:"getAll",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.poSyncService.getModel(this.schema).find().exec();case 2:return t=e.sent,e.abrupt("return",(console.log(t),t));case 4:case"end":return e.stop()}},e,this)}))}},{key:"get",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).findById(e).exec();case 2:if(n=t.sent,t.t0=n,t.t0){t.next=8;break}return t.next=7,this.poSyncService.getModel(this.schema).findOne({internalId:e}).exec();case 7:n=t.sent;case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}},t,this)}))}},{key:"update",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).save(e);case 2:case"end":return t.stop()}},t,this)}))}},{key:"create",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(),Object.assign(e,{internalId:n}),t.next=4,this.poSyncService.getModel(this.schema).save(e);case 4:case"end":return t.stop()}},t,this)}))}},{key:"delete",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.poSyncService.getModel(this.schema).remove(e);case 2:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||o)(s.Tb(d.d))},o.\u0275prov=s.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),f=i("wBT/"),v=["confirmToRemove"];function h(e,t){if(1&e&&(s.Pb(0,"div",6),s.Kb(1,"po-info",7),s.Ob(),s.Pb(2,"div",6),s.Kb(3,"po-info",8),s.Kb(4,"po-info",9),s.Ob()),2&e){var n=t.$implicit;s.wb(1),s.gc("p-value",n.name),s.wb(2),s.gc("p-value",n.breed),s.wb(1),s.gc("p-value",n.species)}}var b,y,g,w,k,x=((y=function(){function t(n,r,i){var o=this;e(this,t),this.router=n,this.petService=r,this.poSync=i,this.pets=[],this.loading=!0,this.actions=[{action:function(){return o.router.navigateByUrl("/pets/new")},label:"Novo Pet",icon:"po-icon-user-add"}],this.tableColumns=[{property:"name",label:"Nome"},{property:"nickName",label:"Apelido"},{property:"breed",label:"Ra\xe7a"},{property:"size",label:"Tamanho"},{property:"birthday",label:"Data Nascimento",type:"date",format:"dd-MM-yyyy"},{property:"species",label:"Esp\xe9cie"}],this.tableActions=[{action:this.onViewPet.bind(this),label:"Visualizar"},{action:this.onEditPet.bind(this),label:"Editar"},{action:this.onRemovePet.bind(this),label:"Remover",type:"danger",separator:!0}],this.poSync.onSync().subscribe(function(){return Object(c.a)(o,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPets();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))})}return n(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getPets();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Too soon");case 8:case"end":return e.stop()}},e,this,[[0,5]])}))}},{key:"getPets",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.petService.getAll();case 2:this.pets=e.sent.items,console.log(this.pets),this.loading=!1;case 5:case"end":return e.stop()}},e,this)}))}},{key:"onViewPet",value:function(e){this.router.navigateByUrl("/pets/"+(e.id?e.id:e.internalId))}},{key:"onEditPet",value:function(e){this.router.navigateByUrl("/pets/"+(e.id?e.id:e.internalId))}},{key:"onRemovePet",value:function(e){var t=this;this.modalText="Tem certeza que deseja remover ".concat(e.name,"?"),this.modal.primaryAction={action:function(){console.log(e),t.petService.delete(e).then(function(){t.pets.splice(t.pets.indexOf(e),1),t.modal.close()})},danger:!0,label:"Remover"},this.modal.secondaryAction={action:function(){return t.modal.close()},label:"Cancelar"},this.modal.open()}}]),t}()).\u0275fac=function(e){return new(e||y)(s.Jb(u.d),s.Jb(m),s.Jb(d.d))},y.\u0275cmp=s.Db({type:y,selectors:[["app-pets-list"]],viewQuery:function(e,t){var n;1&e&&s.vc(v,!0),2&e&&s.mc(n=s.Xb())&&(t.modal=n.first)},decls:7,vars:8,consts:[["p-title","Pets",3,"p-actions"],["p-property-title","nickName",1,"po-visible-md",3,"p-items","p-actions"],["p-list-view-content-template",""],["p-selectable","","p-sort","true",1,"po-hidden-md","po-hidden-sm",3,"p-loading","p-actions","p-items","p-columns"],["p-click-out","true","p-title","Remover Pet"],["confirmToRemove",""],[1,"po-row"],["p-label","Nome",1,"po-sm-6",3,"p-value"],["p-label","Ra\xe7a",1,"po-sm-6",3,"p-value"],["p-label","Esp\xe9cie",1,"po-sm-6",3,"p-value"]],template:function(e,t){1&e&&(s.Pb(0,"po-page-list",0),s.Pb(1,"po-list-view",1),s.xc(2,h,5,3,"ng-template",2),s.Ob(),s.Kb(3,"po-table",3),s.Ob(),s.Pb(4,"po-modal",4,5),s.zc(6),s.Ob()),2&e&&(s.gc("p-actions",t.actions),s.wb(1),s.gc("p-items",t.pets)("p-actions",t.tableActions),s.wb(2),s.gc("p-loading",t.loading)("p-actions",t.tableActions)("p-items",t.pets)("p-columns",t.tableColumns),s.wb(3),s.Bc("\n",t.modalText,"\n"))},directives:[f.o,f.h,f.i,f.p,f.k,f.f],styles:[""]}),y),R=((b=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=s.Db({type:b,selectors:[["app-pets-form"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Pb(0,"p"),s.zc(1,"pets-form works!"),s.Ob())},styles:[""]}),b),O=[{path:"",component:x},{path:"new",component:R},{path:"edit/:id",component:R},{path:"view/:id",component:(g=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=s.Db({type:g,selectors:[["app-pets-view"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Pb(0,"p"),s.zc(1,"pets-view works!"),s.Ob())},styles:[""]}),g)}],P=((k=function t(){e(this,t)}).\u0275mod=s.Hb({type:k}),k.\u0275inj=s.Gb({factory:function(e){return new(e||k)},imports:[[u.g.forChild(O)],u.g]}),k),S=((w=function t(){e(this,t)}).\u0275mod=s.Hb({type:w}),w.\u0275inj=s.Gb({factory:function(e){return new(e||w)},imports:[[a.a,P]]}),w)}}])}();