"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[932],{6666:(C,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>L});var _=l(1120),p=l(6814),i=l(95),n=l(4769),u=l(9692);function d(e,a){1&e&&(n.TgZ(0,"p",13),n._uU(1,"Email is Required"),n.qZA())}function f(e,a){1&e&&(n.TgZ(0,"p",13),n._uU(1,"Email Invalid Format"),n.qZA())}function c(e,a){if(1&e&&(n.TgZ(0,"div",11),n.YNc(1,d,2,0,"p",12),n.YNc(2,f,2,0,"p",12),n.qZA()),2&e){const r=n.oxw();let t,o;n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("email"))?null:o.getError("email"))}}function h(e,a){1&e&&(n.TgZ(0,"p",13),n._uU(1,"Password is Required"),n.qZA())}function v(e,a){1&e&&(n.TgZ(0,"p",13),n._uU(1,"Password Invalid Format"),n.qZA())}function Z(e,a){if(1&e&&(n.TgZ(0,"div",11),n.YNc(1,h,2,0,"p",12),n.YNc(2,v,2,0,"p",12),n.qZA()),2&e){const r=n.oxw();let t,o;n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("password"))?null:o.getError("pattern"))}}function T(e,a){if(1&e&&(n.TgZ(0,"p",14),n._uU(1),n.qZA()),2&e){const r=n.oxw();n.xp6(1),n.Oqu(r.msg)}}function I(e,a){1&e&&n._UZ(0,"i",15)}let L=(()=>{class e{constructor(r,t){this._AuthService=r,this._Router=t,this.isLoading=!1,this.msg="",this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9]{6,}$/)])})}handelForm(){this.isLoading=!0,1==this.loginForm.valid&&this._AuthService.login(this.loginForm.value).subscribe({next:t=>{this.isLoading=!1,"success"==t.message&&(localStorage.setItem("token",t.token),this._Router.navigate(["/home"]))},error:t=>{this.msg=t.error.message,this.isLoading=!1}})}static#n=this.\u0275fac=function(t){return new(t||e)(n.Y36(u.e),n.Y36(_.F0))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:17,vars:6,consts:[[1,"w-75","m-auto","my-5","bg-main-light","p-3","shadow"],[3,"formGroup","ngSubmit"],[1,"form-item","my-3"],["type","email","formControlName","email","placeholder","Enter Your email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","password","formControlName","password","placeholder","Enter Your password",1,"form-control"],["class","my-3 alert alert-danger small m-0",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","bg-main","text-white",3,"disabled"],["class","fas fa-spin fa-spinner",4,"ngIf"],["routerLink","/forgetpass",1,"link-primary"],[1,"alert","alert-danger"],["class","small m-0",4,"ngIf"],[1,"small","m-0"],[1,"my-3","alert","alert-danger","small","m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(t,o){if(1&t&&(n.TgZ(0,"section",0)(1,"h3"),n._uU(2,"Login Now :"),n.qZA(),n.TgZ(3,"form",1),n.NdJ("ngSubmit",function(){return o.handelForm()}),n.TgZ(4,"div",2),n._UZ(5,"input",3),n.YNc(6,c,3,2,"div",4),n.qZA(),n.TgZ(7,"div",2),n._UZ(8,"input",5),n.YNc(9,Z,3,2,"div",4),n.qZA(),n.YNc(10,T,2,1,"p",6),n.TgZ(11,"div",7)(12,"button",8),n._uU(13,"Login "),n.YNc(14,I,1,0,"i",9),n.qZA(),n.TgZ(15,"a",10),n._uU(16,"Forgot Password"),n.qZA()()()()),2&t){let s,m;n.xp6(3),n.Q6J("formGroup",o.loginForm),n.xp6(3),n.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),n.xp6(3),n.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),n.xp6(1),n.Q6J("ngIf",o.msg),n.xp6(2),n.Q6J("disabled",o.loginForm.invalid),n.xp6(2),n.Q6J("ngIf",o.isLoading)}},dependencies:[p.ez,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,_.rH]})}return e})()}}]);