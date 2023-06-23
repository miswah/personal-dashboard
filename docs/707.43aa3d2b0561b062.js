"use strict";(self.webpackChunkvuexy=self.webpackChunkvuexy||[]).push([[707],{51707:(N,_,o)=>{o.r(_),o.d(_,{SubjectsModule:()=>I});var a=o(36895),p=o(15861),t=o(94650),d=o(48111),f=o(43187),l=o(92340);let m=(()=>{class i{constructor(){this.supabase=(0,f.eI)(l.N.supabase.url,l.N.supabase.key)}getSubjects(){return this.supabase.from("subjects").select("*").order("id",{ascending:!0})}getSubjectViaId(e){return this.supabase.from("subjects").select("*").eq("id",e)}getChapters(e){return this.supabase.from("subject_chapters").select("*").eq("subject_id",e).order("id",{ascending:!0})}updateChapterStatus(e,c){return this.supabase.from("subject_chapters").update({is_completed:c}).eq("id",e)}getTopics(e){return this.supabase.from("subject_topics").select("*").eq("subject_id",e).order("id",{ascending:!0})}updateTopicStatus(e,c){return this.supabase.from("subject_topics").update({is_completed:c}).eq("id",e)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),h=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card"]],inputs:{subject:"subject"},decls:37,vars:9,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"row","text-center"],[1,"col-2"],[1,"subject-card-title"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p",6),t._uU(10,"Subject Code"),t.qZA()(),t.TgZ(11,"div",5)(12,"p"),t._uU(13),t.qZA(),t.TgZ(14,"p",6),t._uU(15,"Number of block"),t.qZA()(),t.TgZ(16,"div",5)(17,"p"),t._uU(18),t.qZA(),t.TgZ(19,"p",6),t._uU(20,"Number of Chapters"),t.qZA()(),t.TgZ(21,"div",5)(22,"p"),t._uU(23),t.qZA(),t.TgZ(24,"p",6),t._uU(25,"Completed Chapters"),t.qZA()(),t.TgZ(26,"div",5)(27,"p"),t._uU(28),t.qZA(),t.TgZ(29,"p",6),t._uU(30,"Next Chapter"),t.qZA()(),t.TgZ(31,"div",5)(32,"p"),t._uU(33),t.ALo(34,"date"),t.qZA(),t.TgZ(35,"p",6),t._uU(36,"Next Important Date"),t.qZA()()()()()()),2&e&&(t.xp6(3),t.Oqu(c.subject.title),t.xp6(5),t.Oqu(c.subject.subject_code),t.xp6(5),t.Oqu(c.subject.blocks),t.xp6(5),t.Oqu(c.subject.chapters),t.xp6(5),t.Oqu(c.subject.completed_chapters),t.xp6(5),t.Oqu(c.subject.next_chapter),t.xp6(5),t.Oqu(t.lcZ(34,7,c.subject.next_important_date)))},dependencies:[a.uU],styles:[".subject-card-title[_ngcontent-%COMP%]{font-weight:900}"]}),i})();function g(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"app-card",1),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.redirectToView(r.id))}),t.qZA()()}if(2&i){const e=s.$implicit;t.xp6(1),t.Q6J("subject",e)}}function Z(i,s){if(1&i&&(t.TgZ(0,"div",8)(1,"div",4)(2,"p",9),t._uU(3),t.qZA(),t.TgZ(4,"div",10)(5,"div",11)(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9,"Block"),t.qZA()(),t.TgZ(10,"div",11)(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Total Chapters"),t.qZA()(),t.TgZ(15,"div",11)(16,"p"),t._uU(17),t.qZA(),t.TgZ(18,"p"),t._uU(19,"Completed Chapters"),t.qZA()(),t.TgZ(20,"div",11)(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24,"Next Chapter"),t.qZA()(),t.TgZ(25,"div",11)(26,"p"),t._uU(27),t.ALo(28,"date"),t.qZA(),t.TgZ(29,"p"),t._uU(30,"Next Important Date"),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(3),t.AsE("",e.subject.subject_code," - ",e.subject.title,""),t.xp6(4),t.Oqu(e.subject.blocks),t.xp6(5),t.Oqu(e.subject.total_chapters),t.xp6(5),t.Oqu(e.subject.completed_chapters),t.xp6(5),t.Oqu(e.subject.next_chapter),t.xp6(5),t.Oqu(t.lcZ(28,7,e.subject.next_important_date))}}function v(i,s){1&i&&(t.TgZ(0,"button",15),t._UZ(1,"span",16),t._uU(2,"Completed"),t.qZA()),2&i&&(t.xp6(1),t.Tol("mr-25"),t.Q6J("data-feather","check"))}function x(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return t.KtG(r.updateChapterStatus(n.id))}),t._UZ(1,"span",16),t._uU(2,"Done"),t.qZA()}2&i&&(t.xp6(1),t.Tol("mr-25"),t.Q6J("data-feather","check"))}function T(i,s){if(1&i&&(t.TgZ(0,"li",12)(1,"span"),t._uU(2),t.qZA(),t.YNc(3,v,3,3,"button",13),t.YNc(4,x,3,3,"button",14),t.qZA()),2&i){const e=s.$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.is_completed),t.xp6(1),t.Q6J("ngIf",!e.is_completed)}}function C(i,s){if(1&i&&(t.TgZ(0,"a",21)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()),2&i){const e=t.oxw().$implicit;t.s9C("href",e.external_link,t.LSH),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.chapter)}}function S(i,s){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.title)}}function q(i,s){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.chapter)}}function w(i,s){1&i&&(t.TgZ(0,"button",15),t._UZ(1,"span",16),t._uU(2,"Completed"),t.qZA()),2&i&&(t.xp6(1),t.Tol("mr-25"),t.Q6J("data-feather","check"))}function A(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return t.KtG(r.updateTopicStatus(n.id))}),t._UZ(1,"span",16),t._uU(2,"Done"),t.qZA()}2&i&&(t.xp6(1),t.Tol("mr-25"),t.Q6J("data-feather","check"))}function U(i,s){if(1&i&&(t.TgZ(0,"li",12),t.YNc(1,C,5,3,"a",18),t.YNc(2,S,2,1,"span",19),t.YNc(3,q,2,1,"span",19),t.TgZ(4,"span",20),t.YNc(5,w,3,3,"button",13),t.YNc(6,A,3,3,"button",14),t.qZA()()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.external_link),t.xp6(1),t.Q6J("ngIf",!e.external_link),t.xp6(1),t.Q6J("ngIf",!e.external_link),t.xp6(2),t.Q6J("ngIf",e.is_completed),t.xp6(1),t.Q6J("ngIf",!e.is_completed)}}const y=[{path:"",component:(()=>{class i{constructor(e,c){this.router=e,this.subjectService=c,this.subjects=[]}ngOnInit(){this.getAllSubjects()}getAllSubjects(){var e=this;return(0,p.Z)(function*(){if(e.subjectService.listOfSubjects)return void(e.subjects=e.subjectService.listOfSubjects);let{data:c,error:n}=yield e.subjectService.getSubjects();n?console.error("error",n.message):(e.subjectService.listOfSubjects=c,e.subjects=c)})()}redirectToView(e){let c=this.subjects.findIndex(n=>n.id==e);this.subjectService.subjectData=this.subjects[c],this.router.navigate(["../subject/view",e])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.F0),t.Y36(m))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"subject","click"]],template:function(e,c){1&e&&t.YNc(0,g,2,1,"div",0),2&e&&t.Q6J("ngForOf",c.subjects)},dependencies:[a.sg,h]}),i})(),title:"Subjects - "+l.N.title,data:{animation:"subject"}},{path:"view/:id",component:(()=>{class i{constructor(e,c){this.route=e,this.subjectService=c,this.chapters=[],this.subjectId=0}ngOnInit(){this.route.paramMap.subscribe(e=>{this.subjectId=+e.get("id")}),this.getSubject(this.subjectId),this.getChapters(this.subjectId),this.getTopics(this.subjectId)}getSubject(e){var c=this;return(0,p.Z)(function*(){if(c.subjectService.subjectData&&c.subjectService.subjectData.id==e)return void(c.subject=c.subjectService.subjectData);let{data:n,error:r}=yield c.subjectService.getSubjectViaId(e);r?console.error("subject error",r.message):(c.subjectService.subjectData=n[0],c.subject=n[0])})()}getChapters(e){var c=this;return(0,p.Z)(function*(){if(c.subjectService.listOfChapters&&c.subjectService.listOfChapters[0].subject_id==e)return void(c.chapters=c.subjectService.listOfChapters);let{data:n,error:r}=yield c.subjectService.getChapters(e);r?console.error("error",r.message):(c.subjectService.listOfChapters=n,c.chapters=n),c.subjectService.getChapters(e)})()}getTopics(e){var c=this;return(0,p.Z)(function*(){if(c.subjectService.listOfTopics&&c.subjectService.listOfTopics[0]?.subject_id==e)return void(c.topics=c.subjectService.listOfTopics);let{data:n,error:r}=yield c.subjectService.getTopics(e);r?console.error("error",r.message):(c.subjectService.listOfTopics=n,c.topics=n)})()}updateChapterStatus(e){var c=this;return(0,p.Z)(function*(){let{data:n,error:r}=yield c.subjectService.updateChapterStatus(e,!0);if(r)console.error("update Error",r.message);else{console.log("success",n);let u=c.chapters.findIndex(b=>b.id===e);c.subjectService.listOfChapters[u].is_completed=!0,c.chapters[u].is_completed=!0}})()}updateTopicStatus(e){var c=this;return(0,p.Z)(function*(){let{data:n,error:r}=yield c.subjectService.updateTopicStatus(e,!0);if(r)console.error("update Error",r.message);else{console.log("success",n);let u=c.topics.findIndex(b=>b.id===e);c.subjectService.listOfTopics[u].is_completed=!0,c.topics[u].is_completed=!0}})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.gz),t.Y36(m))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view"]],decls:17,vars:3,consts:[["class","card",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"card","chapter-list"],[1,"card-body"],[1,"card-tite"],[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"card"],[1,"card-title","text-center"],[1,"row","text-center"],[1,"col-2"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],["type","button","class","btn btn-flat-success","rippleEffect","",4,"ngIf"],["type","button","class","btn btn-outline-primary","rippleEffect","",3,"click",4,"ngIf"],["type","button","rippleEffect","",1,"btn","btn-flat-success"],[3,"data-feather"],["type","button","rippleEffect","",1,"btn","btn-outline-primary",3,"click"],["target","_blank",3,"href",4,"ngIf"],[4,"ngIf"],[1,"pull-right"],["target","_blank",3,"href"]],template:function(e,c){1&e&&(t.YNc(0,Z,31,9,"div",0),t.TgZ(1,"div")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"p",5),t._uU(7,"Chapter List"),t.qZA(),t.TgZ(8,"ul",6),t.YNc(9,T,5,3,"li",7),t.qZA()()()(),t.TgZ(10,"div",2)(11,"div",3)(12,"div",4)(13,"p",5),t._uU(14,"Important Topic List"),t.qZA(),t.TgZ(15,"ul",6),t.YNc(16,U,7,5,"li",7),t.qZA()()()()()()),2&e&&(t.Q6J("ngIf",c.subject),t.xp6(9),t.Q6J("ngForOf",c.chapters),t.xp6(7),t.Q6J("ngForOf",c.topics))},dependencies:[a.sg,a.O5,a.uU],styles:[".icon-search-wrapper{max-width:300px}.icon-search-wrapper .feather-search{height:1.15rem;width:1.15rem}#icons-container .icon-card{width:128px}.icon-card{border:1px solid transparent}.icon-card.active{border-color:#7367f0}.icon-card.active i,.icon-card.active svg{color:#7367f0}@media (max-width: 1024px){#icons-container .icon-card{width:126px}}@media (max-width: 768px){#icons-container .icon-card{width:131px}}@media (max-width: 414px){#icons-container .icon-card{width:110px}}@media (max-width: 375px){#icons-container .icon-card{width:150px}}\n"],encapsulation:2}),i})(),title:"Subjects - "+l.N.title,data:{animation:"view"}}];let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.ez,d.Bz.forChild(y)]}),i})()}}]);