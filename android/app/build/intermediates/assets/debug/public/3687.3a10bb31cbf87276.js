"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(P,d,s)=>{s.r(d),s.d(d,{LoginPageModule:()=>M});var p=s(6814),g=s(95),t=s(7027),c=s(6958),f=s(5861),e=s(6689);const h=[{path:"",component:(()=>{var n;class a{constructor(o,i){this.router=o,this.toastController=i,this.user={usuario:"",password:""},this.field=""}ngOnInit(){}ingresar(){console.log(this.user),this.validateModel(this.user)?(this.presentToast("top","Bienvenido "+this.user.usuario),this.router.navigate(["/home"],{state:{user:this.user}})):this.presentToast("bottom","Falta "+this.field,4e3)}validateModel(o){for(var[i,r]of Object.entries(o))if(""==r)return this.field=i,!1;return!0}presentToast(o,i,r){var u=this;return(0,f.Z)(function*(){yield(yield u.toastController.create({message:i,duration:r||2e3,position:o})).present()})()}}return(n=a).\u0275fac=function(o){return new(o||n)(e.Y36(c.F0),e.Y36(t.yF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:23,vars:4,consts:[[3,"translucent"],["id","toolbar1"],["id","titulo1"],[3,"fullscreen"],["alt","login_img","src","https://www.tipicochileno.cl/wp-content/uploads/2021/04/blog-H-escuela-rural-min-2.png",1,"scale-up-center"],["id","titulo2"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["id","ingresar","expand","block",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3,"StudentsDays"),e.qZA()()(),e.TgZ(4,"ion-content",3)(5,"ion-card"),e._UZ(6,"img",4),e.TgZ(7,"ion-card-header")(8,"ion-card-title",5),e._uU(9,"Inicio de sesi\xf3n"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-item")(12,"ion-label",6),e._uU(13,"Usuario"),e.qZA(),e.TgZ(14,"ion-input",7),e.NdJ("ngModelChange",function(u){return i.user.usuario=u}),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-label",6),e._uU(17,"Contrase\xf1a"),e.qZA(),e.TgZ(18,"ion-input",8),e.NdJ("ngModelChange",function(u){return i.user.password=u}),e.qZA()(),e.TgZ(19,"ion-row")(20,"ion-col")(21,"ion-button",9),e.NdJ("click",function(){return i.ingresar()}),e._uU(22,"Ingresar"),e.qZA()()()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(10),e.Q6J("ngModel",i.user.usuario),e.xp6(4),e.Q6J("ngModel",i.user.password))},dependencies:[g.JJ,g.On,t.YG,t.PM,t.FN,t.Zi,t.Dq,t.wI,t.W2,t.Gu,t.pK,t.Ie,t.Q$,t.Nd,t.wd,t.sr,t.j9],styles:["#titulo1[_ngcontent-%COMP%]{color:bisque}#toolbar1[_ngcontent-%COMP%]{color:azure}#titulo2[_ngcontent-%COMP%]{text-align:center;-webkit-text-decoration:solid;text-decoration:solid;color:bisque}ion-content[_ngcontent-%COMP%]{--background: #ffb000}.scale-up-center[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scale-up-center .9s}@keyframes _ngcontent-%COMP%_scale-up-center{0%{transform:scale(.5)}to{transform:scale(1)}}"]}),a})()}];let m=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(h),c.Bz]}),a})(),M=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,g.u5,t.Pc,m]}),a})()}}]);