"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_tables_tables_module_ts"],{

/***/ 12716:
/*!****************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesComponent": () => (/* binding */ DatatablesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/tables/datatables/i18n/de */ 67084);
/* harmony import */ var app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/tables/datatables/i18n/en */ 12228);
/* harmony import */ var app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/tables/datatables/i18n/fr */ 18383);
/* harmony import */ var app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/i18n/pt */ 49767);
/* harmony import */ var app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.snippetcode */ 29239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 3090);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);























const _c0 = ["tableRowDetails"];
function DatatablesComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_36_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35); const allRowsSelected_r32 = restoredCtx.allRowsSelected; const selectFn_r33 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r33(!allRowsSelected_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r32 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r32);
} }
function DatatablesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_37_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const onCheckboxChangeFn_r39 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r39($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r36 = ctx.rowIndex;
    const isSelected_r38 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowChkbxRef", rowIndex_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowChkbxRef", rowIndex_r36, "");
} }
function DatatablesComponent_ng_template_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r42.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return { "bg-light-primary": a0, "bg-light-success": a1, "bg-light-danger": a2, "bg-light-warning": a3, "bg-light-info": a4 }; };
function DatatablesComponent_ng_template_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r42 = ctx_r48.row;
    const name_r43 = ctx_r48.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r42.status == "1", row_r42.status == "2", row_r42.status == "3", row_r42.status == "4", row_r42.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r43));
} }
function DatatablesComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_39_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_39_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r42 = ctx.row;
    const name_r43 = ctx.value;
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r42.avatar.length > 0)("ngIfElse", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", name_r43, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r42.post, "");
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "badge-light-primary": a0, "badge-light-success": a1, "badge-light-danger": a2, "badge-light-warning": a3, "badge-light-info": a4 }; };
function DatatablesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r49 == "1", status_r49 == "2", status_r49 == "3", status_r49 == "4", status_r49 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r49 == 1 ? "Current" : status_r49 == 2 ? "Professional" : status_r49 == 3 ? "Rejected" : status_r49 == 4 ? "Resigned" : status_r49 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_53_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r52.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_53_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    const row_r52 = ctx_r59.row;
    const value_r51 = ctx_r59.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r52.status == "1", row_r52.status == "2", row_r52.status == "3", row_r52.status == "4", row_r52.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, value_r51));
} }
function DatatablesComponent_ng_template_53_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_53_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r60.editingName[rowIndex_r50 + "-full_name"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_53_div_0_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DatatablesComponent_ng_template_53_div_0_ng_template_3_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 69)(6, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r52 = ctx_r63.row;
    const value_r51 = ctx_r63.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r52.avatar.length > 0)("ngIfElse", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](value_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r52.post, "");
} }
function DatatablesComponent_ng_template_53_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_53_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r66); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r64.inlineEditingUpdateName($event, "full_name", rowIndex_r50)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r51);
} }
function DatatablesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_53_div_0_Template, 10, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_53_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
} }
function DatatablesComponent_ng_template_55_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_55_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r73.editingStatus[rowIndex_r68 + "-status"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, value_r70 == "1", value_r70 == "2", value_r70 == "3", value_r70 == "4", value_r70 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r70 == 1 ? "Current" : value_r70 == 2 ? "Professional" : value_r70 == 3 ? "Rejected" : value_r70 == 4 ? "Resigned" : value_r70 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_55_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_55_select_1_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r77.editingStatus[rowIndex_r68 + "-status"] = false)); })("change", function DatatablesComponent_ng_template_55_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r80.inlineEditingUpdateStatus($event, "status", rowIndex_r68)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Resigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r70);
} }
function DatatablesComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_55_div_0_Template, 3, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_55_select_1_Template, 11, 1, "select", 90);
} if (rf & 2) {
    const rowIndex_r68 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
} }
function DatatablesComponent_ng_template_57_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_57_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r88.editingAge[rowIndex_r84 + "-age"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r83, " ");
} }
function DatatablesComponent_ng_template_57_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_57_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r94); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r92.inlineEditingUpdateAge($event, "age", rowIndex_r84)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r83);
} }
function DatatablesComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_57_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_57_input_1_Template, 1, 1, "input", 97);
} if (rf & 2) {
    const rowIndex_r84 = ctx.rowIndex;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.editingAge[rowIndex_r84 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.editingAge[rowIndex_r84 + "-age"]);
} }
function DatatablesComponent_ng_template_59_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_59_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r102); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r101.editingSalary[rowIndex_r97 + "-salary"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r96, " ");
} }
function DatatablesComponent_ng_template_59_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_59_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r107); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r105.inlineEditingUpdateSalary($event, "salary", rowIndex_r97)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r96);
} }
function DatatablesComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_59_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_59_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r97 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
} }
function DatatablesComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 99)(1, "div")(2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "City : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 100)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Experience : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 100)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Start Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r109 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.experience, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.start_date, "");
} }
function DatatablesComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DatatablesComponent_ng_template_71_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r114); const row_r111 = restoredCtx.row; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r113.rowDetailsToggleExpand(row_r111)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r112 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("datatable-icon-right", !expanded_r112)("datatable-icon-down", expanded_r112);
} }
function DatatablesComponent_ng_template_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r115.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_73_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r115 = ctx_r121.row;
    const name_r116 = ctx_r121.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r115.status == "1", row_r115.status == "2", row_r115.status == "3", row_r115.status == "4", row_r115.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r116));
} }
function DatatablesComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_73_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_73_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r115 = ctx.row;
    const name_r116 = ctx.value;
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r115.avatar.length > 0)("ngIfElse", _r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r115.post, "");
} }
function DatatablesComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r122 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r122 == "1", status_r122 == "2", status_r122 == "3", status_r122 == "4", status_r122 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r122 == 1 ? "Current" : status_r122 == 2 ? "Professional" : status_r122 == 3 ? "Rejected" : status_r122 == 4 ? "Resigned" : status_r122 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_89_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r127); const allRowsSelected_r124 = restoredCtx.allRowsSelected; const selectFn_r125 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r125(!allRowsSelected_r124)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r124 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r124);
} }
function DatatablesComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_90_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r133); const onCheckboxChangeFn_r131 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r131($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r128 = ctx.rowIndex;
    const isSelected_r130 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowCustomChkbxRef", rowIndex_r128, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowCustomChkbxRef", rowIndex_r128, "");
} }
function DatatablesComponent_ng_template_92_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r134.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_92_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r134 = ctx_r140.row;
    const name_r135 = ctx_r140.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r134.status == "1", row_r134.status == "2", row_r134.status == "3", row_r134.status == "4", row_r134.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r135));
} }
function DatatablesComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_92_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_92_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r134 = ctx.row;
    const name_r135 = ctx.value;
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r134.avatar.length > 0)("ngIfElse", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r134.post, "");
} }
function DatatablesComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r141 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r141 == "1", status_r141 == "2", status_r141 == "3", status_r141 == "4", status_r141 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r141 == 1 ? "Current" : status_r141 == 2 ? "Professional" : status_r141 == 3 ? "Rejected" : status_r141 == 4 ? "Resigned" : status_r141 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_li_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sel_r142.full_name, " ");
} }
function DatatablesComponent_li_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r143.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_116_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r143 = ctx_r149.row;
    const name_r144 = ctx_r149.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r143.status == "1", row_r143.status == "2", row_r143.status == "3", row_r143.status == "4", row_r143.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r144));
} }
function DatatablesComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_116_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_116_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r143 = ctx.row;
    const name_r144 = ctx.value;
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r143.avatar.length > 0)("ngIfElse", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r143.post, "");
} }
function DatatablesComponent_ng_template_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r150 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r150 == "1", status_r150 == "2", status_r150 == "3", status_r150 == "4", status_r150 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r150 == 1 ? "Current" : status_r150 == 2 ? "Professional" : status_r150 == 3 ? "Rejected" : status_r150 == 4 ? "Resigned" : status_r150 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r151.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_134_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r151 = ctx_r157.row;
    const name_r152 = ctx_r157.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r151.status == "1", row_r151.status == "2", row_r151.status == "3", row_r151.status == "4", row_r151.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r152));
} }
function DatatablesComponent_ng_template_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_134_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_134_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r151 = ctx.row;
    const name_r152 = ctx.value;
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r151.avatar.length > 0)("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r151.post, "");
} }
function DatatablesComponent_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r158 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r158 == "1", status_r158 == "2", status_r158 == "3", status_r158 == "4", status_r158 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r158 == 1 ? "Current" : status_r158 == 2 ? "Professional" : status_r158 == 3 ? "Rejected" : status_r158 == 4 ? "Resigned" : status_r158 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class DatatablesComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this.tempData = [];
        this.selected = [];
        this.basicSelectedOption = 10;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.SelectionType;
        // snippet code variables
        this._snippetCodeKitchenSink = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeResponsive;
        this._snippetCodeMultilangual = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeMultilangual;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this._coreTranslationService.translate(app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__.locale, app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__.locale, app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__.locale, app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__.locale);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Inline editing Name
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateName(event, cell, rowIndex) {
        this.editingName[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateAge(event, cell, rowIndex) {
        this.editingAge[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateSalary(event, cell, rowIndex) {
        this.editingSalary[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateStatus(event, cell, rowIndex) {
        this.editingStatus[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Search (filter)
     *
     * @param event
     */
    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.kitchenSinkRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._datatablesService.onDatatablessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Datatables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Forms & Tables',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Datatables',
                        isLink: false
                    }
                ]
            }
        };
    }
}
DatatablesComponent.ɵfac = function DatatablesComponent_Factory(t) { return new (t || DatatablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__.DatatablesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.CoreTranslationService)); };
DatatablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DatatablesComponent, selectors: [["app-datatables"]], viewQuery: function DatatablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
    } }, decls: 145, vars: 129, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "ngx-datatable-kitchen-sink"], [3, "snippetCode"], [1, "card-title"], [1, "row"], [1, "col-12", "mb-50"], ["rippleEffect", "", 1, "btn", "btn-primary", "ml-1"], ["data-feather", "plus", 1, "mr-0", "mr-sm-1"], [1, "d-none", "d-sm-inline-block"], ["csvLink", "", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "float-right", "mr-1", 3, "data"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pl-1", "pl-md-0", "pb-md-0"], ["type", "search", "placeholder", "Search", 1, "form-control", "ml-25", 3, "keyup", "search"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH", "selectionType", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", "prop", "full_name", 3, "width"], ["name", "Email", "prop", "email", 3, "width"], ["name", "Date", "prop", "start_date", 3, "width"], ["name", "Salary", "prop", "salary", 3, "width"], ["name", "Status", "prop", "status", 3, "width"], ["name", "Actions", 3, "width", "sortable"], ["id", "ngx-datatable-inline-editing"], [1, "bootstrap", "core-bootstrap", 3, "headerHeight", "rowHeight", "limit", "columnMode", "footerHeight", "rows", "scrollbarH"], ["name", "Age", "prop", "age", 3, "width"], ["id", "ngx-datatable-row-details"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", "scrollbarH"], ["tableRowDetails", ""], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["id", "ngx-datatable-custom-checkbox"], [1, "col-12"], [1, "bootstrap", "core-bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "scrollbarH", "select", "activate"], [1, "selected-column", "col-12", "mt-1"], [1, "w-100"], [1, "mx-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "ngx-datatable-Responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "rowHeight", "footerHeight", "limit", "rows", "scrollbarH"], ["table", ""], ["name", "Action", 3, "width", "sortable"], ["id", "ngx-datatable-multi-purpose"], [1, "card-body"], [1, "card-text"], ["prop", "full_name", 3, "name", "width"], ["prop", "email", 3, "name", "width"], ["prop", "age", 3, "name", "width"], ["prop", "status", 3, "name", "width"], [3, "name", "width", "sortable"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "headerChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerChkbxRef", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "font-weight-bold", "line-height-1", "mb-25"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "badge", "badge-pill", 3, "ngClass"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "dropdownBrowserState", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "hide-arrow"], ["data-feather", "more-vertical", 1, "text-primary", "cursor-pointer", "mr-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBrowserState", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex", "align-items-center"], ["data-feather", "file-text", 1, "mr-50"], ["data-feather", "archive", 1, "mr-50"], ["data-feather", "trash-2", 1, "mr-50"], ["data-feather", "edit", 1, "text-primary", "cursor-pointer"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "class", "form-control form-control-sm", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], [1, "font-medium-1", "line-height-1", "mb-0"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["class", "form-control form-control-sm", 3, "value", "blur", "change", 4, "ngIf"], [1, "form-control", "form-control-sm", 3, "value", "blur", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["autofocus", "", "class", "form-control form-control-sm", "type", "number", 3, "value", "blur", 4, "ngIf"], ["autofocus", "", "type", "number", 1, "form-control", "form-control-sm", 3, "value", "blur"], [1, "ml-75", "pl-5", "pt-75"], [1, "ml-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 1, "text-body", 3, "click"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["type", "checkbox", "id", "headerCustomChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerCustomChkbxRef", 1, "custom-control-label"]], template: function DatatablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "section", 3)(4, "core-card-snippet", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Kitchen Sink");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Add New Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DatatablesComponent_Template_select_ngModelChange_19_listener($event) { return ctx.basicSelectedOption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function DatatablesComponent_Template_input_keyup_33_listener($event) { return ctx.filterUpdate($event); })("search", function DatatablesComponent_Template_input_search_33_listener($event) { return ctx.filterUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ngx-datatable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activate", function DatatablesComponent_Template_ngx_datatable_activate_34_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_34_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, DatatablesComponent_ng_template_36_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, DatatablesComponent_ng_template_37_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, DatatablesComponent_ng_template_39_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "ngx-datatable-column", 28)(41, "ngx-datatable-column", 29)(42, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, DatatablesComponent_ng_template_44_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, DatatablesComponent_ng_template_46_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "section", 33)(48, "core-card-snippet", 4)(49, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Inline Editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "ngx-datatable", 34)(52, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, DatatablesComponent_ng_template_53_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, DatatablesComponent_ng_template_55_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, DatatablesComponent_ng_template_57_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, DatatablesComponent_ng_template_59_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, DatatablesComponent_ng_template_61_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "section", 36)(63, "core-card-snippet", 4)(64, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Row Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "ngx-datatable", 37, 38)(68, "ngx-datatable-row-detail", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, DatatablesComponent_ng_template_69_Template, 14, 3, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "ngx-datatable-column", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, DatatablesComponent_ng_template_71_Template, 1, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](73, DatatablesComponent_ng_template_73_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "ngx-datatable-column", 28)(75, "ngx-datatable-column", 35)(76, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](78, DatatablesComponent_ng_template_78_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, DatatablesComponent_ng_template_80_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "section", 42)(82, "core-card-snippet", 4)(83, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "Custom Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 6)(86, "div", 43)(87, "ngx-datatable", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.customChkboxOnSelect($event); })("activate", function DatatablesComponent_Template_ngx_datatable_activate_87_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, DatatablesComponent_ng_template_89_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, DatatablesComponent_ng_template_90_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](92, DatatablesComponent_ng_template_92_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](93, "ngx-datatable-column", 28)(94, "ngx-datatable-column", 35)(95, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, DatatablesComponent_ng_template_97_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](99, DatatablesComponent_ng_template_99_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](101, "hr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, " Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](107, DatatablesComponent_li_107_Template, 2, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](108, DatatablesComponent_li_108_Template, 2, 0, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "section", 50)(110, "core-card-snippet", 4)(111, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "ngx-datatable", 51, 52)(115, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](116, DatatablesComponent_ng_template_116_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](117, "ngx-datatable-column", 28)(118, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](120, DatatablesComponent_ng_template_120_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "ngx-datatable-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](122, DatatablesComponent_ng_template_122_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "section", 54)(124, "core-card-snippet", 4)(125, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "Multilangual");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](127, "div", 55)(128, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, "Select preffered language from navbar to change the table language.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "ngx-datatable", 51, 52)(132, "ngx-datatable-column", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](134, DatatablesComponent_ng_template_134_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](135, "ngx-datatable-column", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](137, "ngx-datatable-column", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "ngx-datatable-column", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](141, DatatablesComponent_ng_template_141_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "ngx-datatable-column", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](144, DatatablesComponent_ng_template_144_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeKitchenSink);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx.exportCSVData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.kitchenSinkRows)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("scrollbarH", true)("selectionType", ctx.SelectionType.checkbox)("limit", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeInlineEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerHeight", 40)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 100)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeRowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeCustomCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.chkBoxSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeResponsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeMultilangual);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](133, 119, "HEADER.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](136, 121, "HEADER.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](138, 123, "HEADER.AGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](140, 125, "HEADER.STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](143, 127, "HEADER.ACTIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__.FeatherIconDirective, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__.ContentHeaderComponent, _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__.CoreCardSnippetComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailTemplateDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnCellDirective, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__.CsvDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__.InitialsPipe], styles: ["@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: auto !important;\n  height: initial !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.bg-white {\n  background-color: #ffffff !important;\n}.bg-white .card-header,\n.bg-white .card-footer {\n  background-color: transparent;\n}.border-white {\n  border: 1px solid #ffffff !important;\n}.border-top-white {\n  border-top: 1px solid #ffffff;\n}.border-bottom-white {\n  border-bottom: 1px solid #ffffff;\n}.border-left-white {\n  border-left: 1px solid #ffffff;\n}.border-right-white {\n  border-right: 1px solid #ffffff;\n}.bg-white.badge-glow,\n.border-white.badge-glow,\n.badge-white.badge-glow {\n  box-shadow: 0px 0px 10px #ffffff;\n}.overlay-white {\n  background: #ffffff; /* The Fallback */\n  background: rgba(255, 255, 255, 0.6);\n}input:focus ~ .bg-white {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ffffff !important;\n}.bg-black {\n  background-color: #000000 !important;\n}.bg-black .card-header,\n.bg-black .card-footer {\n  background-color: transparent;\n}.border-black {\n  border: 1px solid #000000 !important;\n}.border-top-black {\n  border-top: 1px solid #000000;\n}.border-bottom-black {\n  border-bottom: 1px solid #000000;\n}.border-left-black {\n  border-left: 1px solid #000000;\n}.border-right-black {\n  border-right: 1px solid #000000;\n}.bg-black.badge-glow,\n.border-black.badge-glow,\n.badge-black.badge-glow {\n  box-shadow: 0px 0px 10px #000000;\n}.overlay-black {\n  background: #000000; /* The Fallback */\n  background: rgba(0, 0, 0, 0.6);\n}input:focus ~ .bg-black {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #000000 !important;\n}.bg-dark {\n  background-color: #4b4b4b !important;\n}.bg-dark .card-header,\n.bg-dark .card-footer {\n  background-color: transparent;\n}.alert-dark {\n  background: rgba(75, 75, 75, 0.12) !important;\n  color: #4b4b4b !important;\n}.alert-dark .alert-heading {\n  box-shadow: rgba(75, 75, 75, 0.4) 0px 6px 15px -7px;\n}.alert-dark .alert-link {\n  color: #3e3e3e !important;\n}.alert-dark .close {\n  color: #4b4b4b !important;\n}.border-dark {\n  border: 1px solid #4b4b4b !important;\n}.border-top-dark {\n  border-top: 1px solid #4b4b4b;\n}.border-bottom-dark {\n  border-bottom: 1px solid #4b4b4b;\n}.border-left-dark {\n  border-left: 1px solid #4b4b4b;\n}.border-right-dark {\n  border-right: 1px solid #4b4b4b;\n}.bg-dark.badge-glow,\n.border-dark.badge-glow,\n.badge-dark.badge-glow {\n  box-shadow: 0px 0px 10px #4b4b4b;\n}.badge.badge-light-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n  color: #4b4b4b !important;\n}.overlay-dark {\n  background: #4b4b4b; /* The Fallback */\n  background: rgba(75, 75, 75, 0.6);\n}.btn-dark {\n  border-color: #4b4b4b !important;\n  background-color: #4b4b4b !important;\n  color: #fff !important;\n}.btn-dark:focus, .btn-dark:active, .btn-dark.active {\n  color: #fff;\n  background-color: #343434 !important;\n}.btn-dark:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #4b4b4b;\n}.btn-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-dark {\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-flat-dark:hover {\n  color: #4b4b4b;\n}.btn-flat-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.12);\n}.btn-flat-dark:active, .btn-flat-dark.active, .btn-flat-dark:focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-flat-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-dark {\n  background-color: #4b4b4b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-dark:hover:not(.disabled):not(:disabled) {\n  background-color: #626262;\n}.btn-relief-dark:active, .btn-relief-dark.active, .btn-relief-dark:focus {\n  background-color: #343434;\n}.btn-relief-dark:hover {\n  color: #fff;\n}.btn-relief-dark:active, .btn-relief-dark.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-dark {\n  border: 1px solid #4b4b4b !important;\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-outline-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.04);\n  color: #4b4b4b;\n}.btn-outline-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-dark.dropdown-toggle {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.waves-effect .waves-ripple,\n.btn-flat-dark.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(75, 75, 75, 0.2) 0, rgba(75, 75, 75, 0.3) 40%, rgba(75, 75, 75, 0.4) 50%, rgba(75, 75, 75, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-dark {\n  background-color: #4b4b4b;\n}.modal.modal-dark .modal-header .modal-title {\n  color: #4b4b4b;\n}.modal.modal-dark .modal-header .close {\n  color: #4b4b4b !important;\n}.progress-bar-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n}.progress-bar-dark .progress-bar {\n  background-color: #4b4b4b;\n}.timeline .timeline-point-dark {\n  border-color: #4b4b4b !important;\n}.timeline .timeline-point-dark i,\n.timeline .timeline-point-dark svg {\n  stroke: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator {\n  background-color: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator:before {\n  background: rgba(75, 75, 75, 0.12) !important;\n}.divider.divider-dark .divider-text:before, .divider.divider-dark .divider-text:after {\n  border-color: #4b4b4b !important;\n}input:focus ~ .bg-dark {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #4b4b4b !important;\n}.custom-control-dark .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #4b4b4b;\n  background-color: #4b4b4b;\n}.custom-control-dark.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-dark.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(75, 75, 75, 0.4) !important;\n}.custom-control-dark .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(75, 75, 75, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-dark .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #4b4b4b !important;\n}.custom-switch-dark .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4b4b4b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #4b4b4b !important;\n  border-color: #4b4b4b !important;\n}.text-dark.text-darken-1 {\n  color: #343434 !important;\n}.bg-dark.bg-darken-1 {\n  background-color: #343434 !important;\n}.border-dark.border-darken-1 {\n  border: 1px solid #343434 !important;\n}.border-top-dark.border-top-darken-1 {\n  border-top: 1px solid #343434 !important;\n}.border-bottom-dark.border-bottom-darken-1 {\n  border-bottom: 1px solid #343434 !important;\n}.border-left-dark.border-left-darken-1 {\n  border-left: 1px solid #343434 !important;\n}.border-right-dark.border-right-darken-1 {\n  border-right: 1px solid #343434 !important;\n}.overlay-dark.overlay-darken-1 {\n  background: #343434; /* The Fallback */\n  background: rgba(52, 52, 52, 0.6);\n}.text-dark.text-darken-2 {\n  color: #1e1e1e !important;\n}.bg-dark.bg-darken-2 {\n  background-color: #1e1e1e !important;\n}.border-dark.border-darken-2 {\n  border: 1px solid #1e1e1e !important;\n}.border-top-dark.border-top-darken-2 {\n  border-top: 1px solid #1e1e1e !important;\n}.border-bottom-dark.border-bottom-darken-2 {\n  border-bottom: 1px solid #1e1e1e !important;\n}.border-left-dark.border-left-darken-2 {\n  border-left: 1px solid #1e1e1e !important;\n}.border-right-dark.border-right-darken-2 {\n  border-right: 1px solid #1e1e1e !important;\n}.overlay-dark.overlay-darken-2 {\n  background: #1e1e1e; /* The Fallback */\n  background: rgba(30, 30, 30, 0.6);\n}.text-dark.text-darken-3 {\n  color: #626262 !important;\n}.bg-dark.bg-darken-3 {\n  background-color: #626262 !important;\n}.border-dark.border-darken-3 {\n  border: 1px solid #626262 !important;\n}.border-top-dark.border-top-darken-3 {\n  border-top: 1px solid #626262 !important;\n}.border-bottom-dark.border-bottom-darken-3 {\n  border-bottom: 1px solid #626262 !important;\n}.border-left-dark.border-left-darken-3 {\n  border-left: 1px solid #626262 !important;\n}.border-right-dark.border-right-darken-3 {\n  border-right: 1px solid #626262 !important;\n}.overlay-dark.overlay-darken-3 {\n  background: #626262; /* The Fallback */\n  background: rgba(98, 98, 98, 0.6);\n}.bg-light {\n  background-color: #f6f6f6 !important;\n}.bg-light .card-header,\n.bg-light .card-footer {\n  background-color: transparent;\n}.border-light {\n  border: 1px solid #f6f6f6 !important;\n}.border-top-light {\n  border-top: 1px solid #f6f6f6;\n}.border-bottom-light {\n  border-bottom: 1px solid #f6f6f6;\n}.border-left-light {\n  border-left: 1px solid #f6f6f6;\n}.border-right-light {\n  border-right: 1px solid #f6f6f6;\n}.bg-light.badge-glow,\n.border-light.badge-glow,\n.badge-light.badge-glow {\n  box-shadow: 0px 0px 10px #f6f6f6;\n}.overlay-light {\n  background: #f6f6f6; /* The Fallback */\n  background: rgba(246, 246, 246, 0.6);\n}input:focus ~ .bg-light {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #f6f6f6 !important;\n}.text-primary.text-lighten-5 {\n  color: #dedbfb !important;\n}.bg-primary.bg-lighten-5 {\n  background-color: #dedbfb !important;\n}.border-primary.border-lighten-5 {\n  border: 1px solid #dedbfb !important;\n}.border-top-primary.border-top-lighten-5 {\n  border-top: 1px solid #dedbfb !important;\n}.border-bottom-primary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #dedbfb !important;\n}.border-left-primary.border-left-lighten-5 {\n  border-left: 1px solid #dedbfb !important;\n}.border-right-primary.border-right-lighten-5 {\n  border-right: 1px solid #dedbfb !important;\n}.overlay-primary.overlay-lighten-5 {\n  background: #dedbfb; /* The Fallback */\n  background: rgba(222, 219, 251, 0.6);\n}.text-primary.text-lighten-4 {\n  color: #c9c4f9 !important;\n}.bg-primary.bg-lighten-4 {\n  background-color: #c9c4f9 !important;\n}.border-primary.border-lighten-4 {\n  border: 1px solid #c9c4f9 !important;\n}.border-top-primary.border-top-lighten-4 {\n  border-top: 1px solid #c9c4f9 !important;\n}.border-bottom-primary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #c9c4f9 !important;\n}.border-left-primary.border-left-lighten-4 {\n  border-left: 1px solid #c9c4f9 !important;\n}.border-right-primary.border-right-lighten-4 {\n  border-right: 1px solid #c9c4f9 !important;\n}.overlay-primary.overlay-lighten-4 {\n  background: #c9c4f9; /* The Fallback */\n  background: rgba(201, 196, 249, 0.6);\n}.text-primary.text-lighten-3 {\n  color: #b3adf7 !important;\n}.bg-primary.bg-lighten-3 {\n  background-color: #b3adf7 !important;\n}.border-primary.border-lighten-3 {\n  border: 1px solid #b3adf7 !important;\n}.border-top-primary.border-top-lighten-3 {\n  border-top: 1px solid #b3adf7 !important;\n}.border-bottom-primary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #b3adf7 !important;\n}.border-left-primary.border-left-lighten-3 {\n  border-left: 1px solid #b3adf7 !important;\n}.border-right-primary.border-right-lighten-3 {\n  border-right: 1px solid #b3adf7 !important;\n}.overlay-primary.overlay-lighten-3 {\n  background: #b3adf7; /* The Fallback */\n  background: rgba(179, 173, 247, 0.6);\n}.text-primary.text-lighten-2 {\n  color: #9e95f5 !important;\n}.bg-primary.bg-lighten-2 {\n  background-color: #9e95f5 !important;\n}.border-primary.border-lighten-2 {\n  border: 1px solid #9e95f5 !important;\n}.border-top-primary.border-top-lighten-2 {\n  border-top: 1px solid #9e95f5 !important;\n}.border-bottom-primary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9e95f5 !important;\n}.border-left-primary.border-left-lighten-2 {\n  border-left: 1px solid #9e95f5 !important;\n}.border-right-primary.border-right-lighten-2 {\n  border-right: 1px solid #9e95f5 !important;\n}.overlay-primary.overlay-lighten-2 {\n  background: #9e95f5; /* The Fallback */\n  background: rgba(158, 149, 245, 0.6);\n}.text-primary.text-lighten-1 {\n  color: #887ef2 !important;\n}.bg-primary.bg-lighten-1 {\n  background-color: #887ef2 !important;\n}.border-primary.border-lighten-1 {\n  border: 1px solid #887ef2 !important;\n}.border-top-primary.border-top-lighten-1 {\n  border-top: 1px solid #887ef2 !important;\n}.border-bottom-primary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #887ef2 !important;\n}.border-left-primary.border-left-lighten-1 {\n  border-left: 1px solid #887ef2 !important;\n}.border-right-primary.border-right-lighten-1 {\n  border-right: 1px solid #887ef2 !important;\n}.overlay-primary.overlay-lighten-1 {\n  background: #887ef2; /* The Fallback */\n  background: rgba(136, 126, 242, 0.6);\n}.bg-primary {\n  background-color: #7367f0 !important;\n}.bg-primary .card-header,\n.bg-primary .card-footer {\n  background-color: transparent;\n}.alert-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.alert-primary .alert-heading {\n  box-shadow: rgba(115, 103, 240, 0.4) 0px 6px 15px -7px;\n}.alert-primary .alert-link {\n  color: #5e50ee !important;\n}.alert-primary .close {\n  color: #7367f0 !important;\n}.bg-light-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.bg-light-primary.fc-h-event, .bg-light-primary.fc-v-event {\n  border-color: rgba(115, 103, 240, 0.1);\n}.bg-light-primary .fc-list-event-dot,\n.bg-light-primary .fc-daygrid-event-dot {\n  border-color: #7367f0 !important;\n}.bg-light-primary.fc-list-event:hover td {\n  background: rgba(115, 103, 240, 0.1) !important;\n}.bg-light-primary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-primary {\n  color: #7367f0 !important;\n}.border-primary {\n  border: 1px solid #7367f0 !important;\n}.border-top-primary {\n  border-top: 1px solid #7367f0;\n}.border-bottom-primary {\n  border-bottom: 1px solid #7367f0;\n}.border-left-primary {\n  border-left: 1px solid #7367f0;\n}.border-right-primary {\n  border-right: 1px solid #7367f0;\n}.bg-primary.badge-glow,\n.border-primary.badge-glow,\n.badge-primary.badge-glow {\n  box-shadow: 0px 0px 10px #7367f0;\n}.badge.badge-light-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n  color: #7367f0 !important;\n}.overlay-primary {\n  background: #7367f0; /* The Fallback */\n  background: rgba(115, 103, 240, 0.6);\n}.btn-primary {\n  border-color: #7367f0 !important;\n  background-color: #7367f0 !important;\n  color: #fff !important;\n}.btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  color: #fff;\n  background-color: #5e50ee !important;\n}.btn-primary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #7367f0;\n}.btn-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-primary {\n  background-color: transparent;\n  color: #7367f0;\n}.btn-flat-primary:hover {\n  color: #7367f0;\n}.btn-flat-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.12);\n}.btn-flat-primary:active, .btn-flat-primary.active, .btn-flat-primary:focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-flat-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-primary {\n  background-color: #7367f0;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-primary:hover:not(.disabled):not(:disabled) {\n  background-color: #887ef2;\n}.btn-relief-primary:active, .btn-relief-primary.active, .btn-relief-primary:focus {\n  background-color: #5e50ee;\n}.btn-relief-primary:hover {\n  color: #fff;\n}.btn-relief-primary:active, .btn-relief-primary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-primary {\n  border: 1px solid #7367f0 !important;\n  background-color: transparent;\n  color: #7367f0;\n}.btn-outline-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.04);\n  color: #7367f0;\n}.btn-outline-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-primary.dropdown-toggle {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.waves-effect .waves-ripple,\n.btn-flat-primary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(115, 103, 240, 0.2) 0, rgba(115, 103, 240, 0.3) 40%, rgba(115, 103, 240, 0.4) 50%, rgba(115, 103, 240, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-primary {\n  background-color: #7367f0;\n}.modal.modal-primary .modal-header .modal-title {\n  color: #7367f0;\n}.modal.modal-primary .modal-header .close {\n  color: #7367f0 !important;\n}.pagination-primary .page-item.active .page-link {\n  background: #7367f0 !important;\n  color: #fff;\n}.pagination-primary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-primary .page-item .page-link:hover {\n  color: #7367f0;\n}.pagination-primary .page-item.prev-item .page-link:hover, .pagination-primary .page-item.next-item .page-link:hover {\n  background: #7367f0;\n  color: #fff;\n}.pagination-primary .page-item.next-item .page-link:active:after, .pagination-primary .page-item.next-item .page-link:hover:after, .pagination-primary .page-item.next .page-link:active:after, .pagination-primary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-primary .page-item.prev-item .page-link:active:before, .pagination-primary .page-item.prev-item .page-link:hover:before, .pagination-primary .page-item.prev .page-link:active:before, .pagination-primary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-primary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #7367f0 !important;\n  border-color: #7367f0;\n  box-shadow: 0 4px 18px -4px rgba(115, 103, 240, 0.65);\n}.progress-bar-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n}.progress-bar-primary .progress-bar {\n  background-color: #7367f0;\n}.timeline .timeline-point-primary {\n  border-color: #7367f0 !important;\n}.timeline .timeline-point-primary i,\n.timeline .timeline-point-primary svg {\n  stroke: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator {\n  background-color: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator:before {\n  background: rgba(115, 103, 240, 0.12) !important;\n}.divider.divider-primary .divider-text:before, .divider.divider-primary .divider-text:after {\n  border-color: #7367f0 !important;\n}input:focus ~ .bg-primary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #7367f0 !important;\n}.custom-control-primary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #7367f0;\n  background-color: #7367f0;\n}.custom-control-primary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-primary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4) !important;\n}.custom-control-primary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(115, 103, 240, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-primary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #7367f0 !important;\n}.custom-switch-primary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #7367f0 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #7367f0 !important;\n  border-color: #7367f0 !important;\n}.text-primary.text-darken-1 {\n  color: #5e50ee !important;\n}.bg-primary.bg-darken-1 {\n  background-color: #5e50ee !important;\n}.border-primary.border-darken-1 {\n  border: 1px solid #5e50ee !important;\n}.border-top-primary.border-top-darken-1 {\n  border-top: 1px solid #5e50ee !important;\n}.border-bottom-primary.border-bottom-darken-1 {\n  border-bottom: 1px solid #5e50ee !important;\n}.border-left-primary.border-left-darken-1 {\n  border-left: 1px solid #5e50ee !important;\n}.border-right-primary.border-right-darken-1 {\n  border-right: 1px solid #5e50ee !important;\n}.overlay-primary.overlay-darken-1 {\n  background: #5e50ee; /* The Fallback */\n  background: rgba(94, 80, 238, 0.6);\n}.text-primary.text-darken-2 {\n  color: #4839eb !important;\n}.bg-primary.bg-darken-2 {\n  background-color: #4839eb !important;\n}.border-primary.border-darken-2 {\n  border: 1px solid #4839eb !important;\n}.border-top-primary.border-top-darken-2 {\n  border-top: 1px solid #4839eb !important;\n}.border-bottom-primary.border-bottom-darken-2 {\n  border-bottom: 1px solid #4839eb !important;\n}.border-left-primary.border-left-darken-2 {\n  border-left: 1px solid #4839eb !important;\n}.border-right-primary.border-right-darken-2 {\n  border-right: 1px solid #4839eb !important;\n}.overlay-primary.overlay-darken-2 {\n  background: #4839eb; /* The Fallback */\n  background: rgba(72, 57, 235, 0.6);\n}.text-primary.text-darken-3 {\n  color: #3321e9 !important;\n}.bg-primary.bg-darken-3 {\n  background-color: #3321e9 !important;\n}.border-primary.border-darken-3 {\n  border: 1px solid #3321e9 !important;\n}.border-top-primary.border-top-darken-3 {\n  border-top: 1px solid #3321e9 !important;\n}.border-bottom-primary.border-bottom-darken-3 {\n  border-bottom: 1px solid #3321e9 !important;\n}.border-left-primary.border-left-darken-3 {\n  border-left: 1px solid #3321e9 !important;\n}.border-right-primary.border-right-darken-3 {\n  border-right: 1px solid #3321e9 !important;\n}.overlay-primary.overlay-darken-3 {\n  background: #3321e9; /* The Fallback */\n  background: rgba(51, 33, 233, 0.6);\n}.text-primary.text-darken-4 {\n  color: #2716db !important;\n}.bg-primary.bg-darken-4 {\n  background-color: #2716db !important;\n}.border-primary.border-darken-4 {\n  border: 1px solid #2716db !important;\n}.border-top-primary.border-top-darken-4 {\n  border-top: 1px solid #2716db !important;\n}.border-bottom-primary.border-bottom-darken-4 {\n  border-bottom: 1px solid #2716db !important;\n}.border-left-primary.border-left-darken-4 {\n  border-left: 1px solid #2716db !important;\n}.border-right-primary.border-right-darken-4 {\n  border-right: 1px solid #2716db !important;\n}.overlay-primary.overlay-darken-4 {\n  background: #2716db; /* The Fallback */\n  background: rgba(39, 22, 219, 0.6);\n}.text-primary.text-accent-1 {\n  color: #bdfdff !important;\n}.bg-primary.bg-accent-1 {\n  background-color: #bdfdff !important;\n}.border-primary.border-accent-1 {\n  border: 1px solid #bdfdff !important;\n}.border-top-primary.border-top-accent-1 {\n  border-top: 1px solid #bdfdff !important;\n}.border-bottom-primary.border-bottom-accent-1 {\n  border-bottom: 1px solid #bdfdff !important;\n}.border-left-primary.border-left-accent-1 {\n  border-left: 1px solid #bdfdff !important;\n}.border-right-primary.border-right-accent-1 {\n  border-right: 1px solid #bdfdff !important;\n}.overlay-primary.overlay-accent-1 {\n  background: #bdfdff; /* The Fallback */\n  background: rgba(189, 253, 255, 0.6);\n}.text-primary.text-accent-2 {\n  color: #8afbff !important;\n}.bg-primary.bg-accent-2 {\n  background-color: #8afbff !important;\n}.border-primary.border-accent-2 {\n  border: 1px solid #8afbff !important;\n}.border-top-primary.border-top-accent-2 {\n  border-top: 1px solid #8afbff !important;\n}.border-bottom-primary.border-bottom-accent-2 {\n  border-bottom: 1px solid #8afbff !important;\n}.border-left-primary.border-left-accent-2 {\n  border-left: 1px solid #8afbff !important;\n}.border-right-primary.border-right-accent-2 {\n  border-right: 1px solid #8afbff !important;\n}.overlay-primary.overlay-accent-2 {\n  background: #8afbff; /* The Fallback */\n  background: rgba(138, 251, 255, 0.6);\n}.text-primary.text-accent-3 {\n  color: #57faff !important;\n}.bg-primary.bg-accent-3 {\n  background-color: #57faff !important;\n}.border-primary.border-accent-3 {\n  border: 1px solid #57faff !important;\n}.border-top-primary.border-top-accent-3 {\n  border-top: 1px solid #57faff !important;\n}.border-bottom-primary.border-bottom-accent-3 {\n  border-bottom: 1px solid #57faff !important;\n}.border-left-primary.border-left-accent-3 {\n  border-left: 1px solid #57faff !important;\n}.border-right-primary.border-right-accent-3 {\n  border-right: 1px solid #57faff !important;\n}.overlay-primary.overlay-accent-3 {\n  background: #57faff; /* The Fallback */\n  background: rgba(87, 250, 255, 0.6);\n}.text-primary.text-accent-4 {\n  color: #3df9ff !important;\n}.bg-primary.bg-accent-4 {\n  background-color: #3df9ff !important;\n}.border-primary.border-accent-4 {\n  border: 1px solid #3df9ff !important;\n}.border-top-primary.border-top-accent-4 {\n  border-top: 1px solid #3df9ff !important;\n}.border-bottom-primary.border-bottom-accent-4 {\n  border-bottom: 1px solid #3df9ff !important;\n}.border-left-primary.border-left-accent-4 {\n  border-left: 1px solid #3df9ff !important;\n}.border-right-primary.border-right-accent-4 {\n  border-right: 1px solid #3df9ff !important;\n}.overlay-primary.overlay-accent-4 {\n  background: #3df9ff; /* The Fallback */\n  background: rgba(61, 249, 255, 0.6);\n}.text-secondary.text-lighten-5 {\n  color: #c4c6c8 !important;\n}.bg-secondary.bg-lighten-5 {\n  background-color: #c4c6c8 !important;\n}.border-secondary.border-lighten-5 {\n  border: 1px solid #c4c6c8 !important;\n}.border-top-secondary.border-top-lighten-5 {\n  border-top: 1px solid #c4c6c8 !important;\n}.border-bottom-secondary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #c4c6c8 !important;\n}.border-left-secondary.border-left-lighten-5 {\n  border-left: 1px solid #c4c6c8 !important;\n}.border-right-secondary.border-right-lighten-5 {\n  border-right: 1px solid #c4c6c8 !important;\n}.overlay-secondary.overlay-lighten-5 {\n  background: #c4c6c8; /* The Fallback */\n  background: rgba(196, 198, 200, 0.6);\n}.text-secondary.text-lighten-4 {\n  color: #b7b9bc !important;\n}.bg-secondary.bg-lighten-4 {\n  background-color: #b7b9bc !important;\n}.border-secondary.border-lighten-4 {\n  border: 1px solid #b7b9bc !important;\n}.border-top-secondary.border-top-lighten-4 {\n  border-top: 1px solid #b7b9bc !important;\n}.border-bottom-secondary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #b7b9bc !important;\n}.border-left-secondary.border-left-lighten-4 {\n  border-left: 1px solid #b7b9bc !important;\n}.border-right-secondary.border-right-lighten-4 {\n  border-right: 1px solid #b7b9bc !important;\n}.overlay-secondary.overlay-lighten-4 {\n  background: #b7b9bc; /* The Fallback */\n  background: rgba(183, 185, 188, 0.6);\n}.text-secondary.text-lighten-3 {\n  color: #aaacb0 !important;\n}.bg-secondary.bg-lighten-3 {\n  background-color: #aaacb0 !important;\n}.border-secondary.border-lighten-3 {\n  border: 1px solid #aaacb0 !important;\n}.border-top-secondary.border-top-lighten-3 {\n  border-top: 1px solid #aaacb0 !important;\n}.border-bottom-secondary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #aaacb0 !important;\n}.border-left-secondary.border-left-lighten-3 {\n  border-left: 1px solid #aaacb0 !important;\n}.border-right-secondary.border-right-lighten-3 {\n  border-right: 1px solid #aaacb0 !important;\n}.overlay-secondary.overlay-lighten-3 {\n  background: #aaacb0; /* The Fallback */\n  background: rgba(170, 172, 176, 0.6);\n}.text-secondary.text-lighten-2 {\n  color: #9ca0a4 !important;\n}.bg-secondary.bg-lighten-2 {\n  background-color: #9ca0a4 !important;\n}.border-secondary.border-lighten-2 {\n  border: 1px solid #9ca0a4 !important;\n}.border-top-secondary.border-top-lighten-2 {\n  border-top: 1px solid #9ca0a4 !important;\n}.border-bottom-secondary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9ca0a4 !important;\n}.border-left-secondary.border-left-lighten-2 {\n  border-left: 1px solid #9ca0a4 !important;\n}.border-right-secondary.border-right-lighten-2 {\n  border-right: 1px solid #9ca0a4 !important;\n}.overlay-secondary.overlay-lighten-2 {\n  background: #9ca0a4; /* The Fallback */\n  background: rgba(156, 160, 164, 0.6);\n}.text-secondary.text-lighten-1 {\n  color: #8f9397 !important;\n}.bg-secondary.bg-lighten-1 {\n  background-color: #8f9397 !important;\n}.border-secondary.border-lighten-1 {\n  border: 1px solid #8f9397 !important;\n}.border-top-secondary.border-top-lighten-1 {\n  border-top: 1px solid #8f9397 !important;\n}.border-bottom-secondary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #8f9397 !important;\n}.border-left-secondary.border-left-lighten-1 {\n  border-left: 1px solid #8f9397 !important;\n}.border-right-secondary.border-right-lighten-1 {\n  border-right: 1px solid #8f9397 !important;\n}.overlay-secondary.overlay-lighten-1 {\n  background: #8f9397; /* The Fallback */\n  background: rgba(143, 147, 151, 0.6);\n}.bg-secondary {\n  background-color: #82868b !important;\n}.bg-secondary .card-header,\n.bg-secondary .card-footer {\n  background-color: transparent;\n}.alert-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.alert-secondary .alert-heading {\n  box-shadow: rgba(130, 134, 139, 0.4) 0px 6px 15px -7px;\n}.alert-secondary .alert-link {\n  color: #75797e !important;\n}.alert-secondary .close {\n  color: #82868b !important;\n}.bg-light-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.bg-light-secondary.fc-h-event, .bg-light-secondary.fc-v-event {\n  border-color: rgba(130, 134, 139, 0.1);\n}.bg-light-secondary .fc-list-event-dot,\n.bg-light-secondary .fc-daygrid-event-dot {\n  border-color: #82868b !important;\n}.bg-light-secondary.fc-list-event:hover td {\n  background: rgba(130, 134, 139, 0.1) !important;\n}.bg-light-secondary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-secondary {\n  color: #82868b !important;\n}.border-secondary {\n  border: 1px solid #82868b !important;\n}.border-top-secondary {\n  border-top: 1px solid #82868b;\n}.border-bottom-secondary {\n  border-bottom: 1px solid #82868b;\n}.border-left-secondary {\n  border-left: 1px solid #82868b;\n}.border-right-secondary {\n  border-right: 1px solid #82868b;\n}.bg-secondary.badge-glow,\n.border-secondary.badge-glow,\n.badge-secondary.badge-glow {\n  box-shadow: 0px 0px 10px #82868b;\n}.badge.badge-light-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n  color: #82868b !important;\n}.overlay-secondary {\n  background: #82868b; /* The Fallback */\n  background: rgba(130, 134, 139, 0.6);\n}.btn-secondary {\n  border-color: #82868b !important;\n  background-color: #82868b !important;\n  color: #fff !important;\n}.btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\n  color: #fff;\n  background-color: #75797e !important;\n}.btn-secondary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #82868b;\n}.btn-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-secondary {\n  background-color: transparent;\n  color: #82868b;\n}.btn-flat-secondary:hover {\n  color: #82868b;\n}.btn-flat-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.12);\n}.btn-flat-secondary:active, .btn-flat-secondary.active, .btn-flat-secondary:focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-flat-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-secondary {\n  background-color: #82868b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: #8f9397;\n}.btn-relief-secondary:active, .btn-relief-secondary.active, .btn-relief-secondary:focus {\n  background-color: #75797e;\n}.btn-relief-secondary:hover {\n  color: #fff;\n}.btn-relief-secondary:active, .btn-relief-secondary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-secondary {\n  border: 1px solid #82868b !important;\n  background-color: transparent;\n  color: #82868b;\n}.btn-outline-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.04);\n  color: #82868b;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-secondary.dropdown-toggle {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.waves-effect .waves-ripple,\n.btn-flat-secondary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(130, 134, 139, 0.2) 0, rgba(130, 134, 139, 0.3) 40%, rgba(130, 134, 139, 0.4) 50%, rgba(130, 134, 139, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-secondary {\n  background-color: #82868b;\n}.modal.modal-secondary .modal-header .modal-title {\n  color: #82868b;\n}.modal.modal-secondary .modal-header .close {\n  color: #82868b !important;\n}.pagination-secondary .page-item.active .page-link {\n  background: #82868b !important;\n  color: #fff;\n}.pagination-secondary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-secondary .page-item .page-link:hover {\n  color: #82868b;\n}.pagination-secondary .page-item.prev-item .page-link:hover, .pagination-secondary .page-item.next-item .page-link:hover {\n  background: #82868b;\n  color: #fff;\n}.pagination-secondary .page-item.next-item .page-link:active:after, .pagination-secondary .page-item.next-item .page-link:hover:after, .pagination-secondary .page-item.next .page-link:active:after, .pagination-secondary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-secondary .page-item.prev-item .page-link:active:before, .pagination-secondary .page-item.prev-item .page-link:hover:before, .pagination-secondary .page-item.prev .page-link:active:before, .pagination-secondary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-secondary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #82868b !important;\n  border-color: #82868b;\n  box-shadow: 0 4px 18px -4px rgba(130, 134, 139, 0.65);\n}.progress-bar-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n}.progress-bar-secondary .progress-bar {\n  background-color: #82868b;\n}.timeline .timeline-point-secondary {\n  border-color: #82868b !important;\n}.timeline .timeline-point-secondary i,\n.timeline .timeline-point-secondary svg {\n  stroke: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator {\n  background-color: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator:before {\n  background: rgba(130, 134, 139, 0.12) !important;\n}.divider.divider-secondary .divider-text:before, .divider.divider-secondary .divider-text:after {\n  border-color: #82868b !important;\n}input:focus ~ .bg-secondary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #82868b !important;\n}.custom-control-secondary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #82868b;\n  background-color: #82868b;\n}.custom-control-secondary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-secondary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(130, 134, 139, 0.4) !important;\n}.custom-control-secondary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(130, 134, 139, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-secondary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #82868b !important;\n}.custom-switch-secondary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #82868b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #82868b !important;\n  border-color: #82868b !important;\n}.text-secondary.text-darken-1 {\n  color: #75797e !important;\n}.bg-secondary.bg-darken-1 {\n  background-color: #75797e !important;\n}.border-secondary.border-darken-1 {\n  border: 1px solid #75797e !important;\n}.border-top-secondary.border-top-darken-1 {\n  border-top: 1px solid #75797e !important;\n}.border-bottom-secondary.border-bottom-darken-1 {\n  border-bottom: 1px solid #75797e !important;\n}.border-left-secondary.border-left-darken-1 {\n  border-left: 1px solid #75797e !important;\n}.border-right-secondary.border-right-darken-1 {\n  border-right: 1px solid #75797e !important;\n}.overlay-secondary.overlay-darken-1 {\n  background: #75797e; /* The Fallback */\n  background: rgba(117, 121, 126, 0.6);\n}.text-secondary.text-darken-2 {\n  color: #696d71 !important;\n}.bg-secondary.bg-darken-2 {\n  background-color: #696d71 !important;\n}.border-secondary.border-darken-2 {\n  border: 1px solid #696d71 !important;\n}.border-top-secondary.border-top-darken-2 {\n  border-top: 1px solid #696d71 !important;\n}.border-bottom-secondary.border-bottom-darken-2 {\n  border-bottom: 1px solid #696d71 !important;\n}.border-left-secondary.border-left-darken-2 {\n  border-left: 1px solid #696d71 !important;\n}.border-right-secondary.border-right-darken-2 {\n  border-right: 1px solid #696d71 !important;\n}.overlay-secondary.overlay-darken-2 {\n  background: #696d71; /* The Fallback */\n  background: rgba(105, 109, 113, 0.6);\n}.text-secondary.text-darken-3 {\n  color: #5d6064 !important;\n}.bg-secondary.bg-darken-3 {\n  background-color: #5d6064 !important;\n}.border-secondary.border-darken-3 {\n  border: 1px solid #5d6064 !important;\n}.border-top-secondary.border-top-darken-3 {\n  border-top: 1px solid #5d6064 !important;\n}.border-bottom-secondary.border-bottom-darken-3 {\n  border-bottom: 1px solid #5d6064 !important;\n}.border-left-secondary.border-left-darken-3 {\n  border-left: 1px solid #5d6064 !important;\n}.border-right-secondary.border-right-darken-3 {\n  border-right: 1px solid #5d6064 !important;\n}.overlay-secondary.overlay-darken-3 {\n  background: #5d6064; /* The Fallback */\n  background: rgba(93, 96, 100, 0.6);\n}.text-secondary.text-darken-4 {\n  color: #505357 !important;\n}.bg-secondary.bg-darken-4 {\n  background-color: #505357 !important;\n}.border-secondary.border-darken-4 {\n  border: 1px solid #505357 !important;\n}.border-top-secondary.border-top-darken-4 {\n  border-top: 1px solid #505357 !important;\n}.border-bottom-secondary.border-bottom-darken-4 {\n  border-bottom: 1px solid #505357 !important;\n}.border-left-secondary.border-left-darken-4 {\n  border-left: 1px solid #505357 !important;\n}.border-right-secondary.border-right-darken-4 {\n  border-right: 1px solid #505357 !important;\n}.overlay-secondary.overlay-darken-4 {\n  background: #505357; /* The Fallback */\n  background: rgba(80, 83, 87, 0.6);\n}.text-success.text-lighten-5 {\n  color: #88e7b2 !important;\n}.bg-success.bg-lighten-5 {\n  background-color: #88e7b2 !important;\n}.border-success.border-lighten-5 {\n  border: 1px solid #88e7b2 !important;\n}.border-top-success.border-top-lighten-5 {\n  border-top: 1px solid #88e7b2 !important;\n}.border-bottom-success.border-bottom-lighten-5 {\n  border-bottom: 1px solid #88e7b2 !important;\n}.border-left-success.border-left-lighten-5 {\n  border-left: 1px solid #88e7b2 !important;\n}.border-right-success.border-right-lighten-5 {\n  border-right: 1px solid #88e7b2 !important;\n}.overlay-success.overlay-lighten-5 {\n  background: #88e7b2; /* The Fallback */\n  background: rgba(136, 231, 178, 0.6);\n}.text-success.text-lighten-4 {\n  color: #72e3a4 !important;\n}.bg-success.bg-lighten-4 {\n  background-color: #72e3a4 !important;\n}.border-success.border-lighten-4 {\n  border: 1px solid #72e3a4 !important;\n}.border-top-success.border-top-lighten-4 {\n  border-top: 1px solid #72e3a4 !important;\n}.border-bottom-success.border-bottom-lighten-4 {\n  border-bottom: 1px solid #72e3a4 !important;\n}.border-left-success.border-left-lighten-4 {\n  border-left: 1px solid #72e3a4 !important;\n}.border-right-success.border-right-lighten-4 {\n  border-right: 1px solid #72e3a4 !important;\n}.overlay-success.overlay-lighten-4 {\n  background: #72e3a4; /* The Fallback */\n  background: rgba(114, 227, 164, 0.6);\n}.text-success.text-lighten-3 {\n  color: #5dde97 !important;\n}.bg-success.bg-lighten-3 {\n  background-color: #5dde97 !important;\n}.border-success.border-lighten-3 {\n  border: 1px solid #5dde97 !important;\n}.border-top-success.border-top-lighten-3 {\n  border-top: 1px solid #5dde97 !important;\n}.border-bottom-success.border-bottom-lighten-3 {\n  border-bottom: 1px solid #5dde97 !important;\n}.border-left-success.border-left-lighten-3 {\n  border-left: 1px solid #5dde97 !important;\n}.border-right-success.border-right-lighten-3 {\n  border-right: 1px solid #5dde97 !important;\n}.overlay-success.overlay-lighten-3 {\n  background: #5dde97; /* The Fallback */\n  background: rgba(93, 222, 151, 0.6);\n}.text-success.text-lighten-2 {\n  color: #48da89 !important;\n}.bg-success.bg-lighten-2 {\n  background-color: #48da89 !important;\n}.border-success.border-lighten-2 {\n  border: 1px solid #48da89 !important;\n}.border-top-success.border-top-lighten-2 {\n  border-top: 1px solid #48da89 !important;\n}.border-bottom-success.border-bottom-lighten-2 {\n  border-bottom: 1px solid #48da89 !important;\n}.border-left-success.border-left-lighten-2 {\n  border-left: 1px solid #48da89 !important;\n}.border-right-success.border-right-lighten-2 {\n  border-right: 1px solid #48da89 !important;\n}.overlay-success.overlay-lighten-2 {\n  background: #48da89; /* The Fallback */\n  background: rgba(72, 218, 137, 0.6);\n}.text-success.text-lighten-1 {\n  color: #33d67c !important;\n}.bg-success.bg-lighten-1 {\n  background-color: #33d67c !important;\n}.border-success.border-lighten-1 {\n  border: 1px solid #33d67c !important;\n}.border-top-success.border-top-lighten-1 {\n  border-top: 1px solid #33d67c !important;\n}.border-bottom-success.border-bottom-lighten-1 {\n  border-bottom: 1px solid #33d67c !important;\n}.border-left-success.border-left-lighten-1 {\n  border-left: 1px solid #33d67c !important;\n}.border-right-success.border-right-lighten-1 {\n  border-right: 1px solid #33d67c !important;\n}.overlay-success.overlay-lighten-1 {\n  background: #33d67c; /* The Fallback */\n  background: rgba(51, 214, 124, 0.6);\n}.bg-success {\n  background-color: #28c76f !important;\n}.bg-success .card-header,\n.bg-success .card-footer {\n  background-color: transparent;\n}.alert-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.alert-success .alert-heading {\n  box-shadow: rgba(40, 199, 111, 0.4) 0px 6px 15px -7px;\n}.alert-success .alert-link {\n  color: #24b263 !important;\n}.alert-success .close {\n  color: #28c76f !important;\n}.bg-light-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.bg-light-success.fc-h-event, .bg-light-success.fc-v-event {\n  border-color: rgba(40, 199, 111, 0.1);\n}.bg-light-success .fc-list-event-dot,\n.bg-light-success .fc-daygrid-event-dot {\n  border-color: #28c76f !important;\n}.bg-light-success.fc-list-event:hover td {\n  background: rgba(40, 199, 111, 0.1) !important;\n}.bg-light-success.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-success {\n  color: #28c76f !important;\n}.border-success {\n  border: 1px solid #28c76f !important;\n}.border-top-success {\n  border-top: 1px solid #28c76f;\n}.border-bottom-success {\n  border-bottom: 1px solid #28c76f;\n}.border-left-success {\n  border-left: 1px solid #28c76f;\n}.border-right-success {\n  border-right: 1px solid #28c76f;\n}.bg-success.badge-glow,\n.border-success.badge-glow,\n.badge-success.badge-glow {\n  box-shadow: 0px 0px 10px #28c76f;\n}.badge.badge-light-success {\n  background-color: rgba(40, 199, 111, 0.12);\n  color: #28c76f !important;\n}.overlay-success {\n  background: #28c76f; /* The Fallback */\n  background: rgba(40, 199, 111, 0.6);\n}.btn-success {\n  border-color: #28c76f !important;\n  background-color: #28c76f !important;\n  color: #fff !important;\n}.btn-success:focus, .btn-success:active, .btn-success.active {\n  color: #fff;\n  background-color: #24b263 !important;\n}.btn-success:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #28c76f;\n}.btn-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-success {\n  background-color: transparent;\n  color: #28c76f;\n}.btn-flat-success:hover {\n  color: #28c76f;\n}.btn-flat-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.12);\n}.btn-flat-success:active, .btn-flat-success.active, .btn-flat-success:focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-flat-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-success {\n  background-color: #28c76f;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-success:hover:not(.disabled):not(:disabled) {\n  background-color: #33d67c;\n}.btn-relief-success:active, .btn-relief-success.active, .btn-relief-success:focus {\n  background-color: #24b263;\n}.btn-relief-success:hover {\n  color: #fff;\n}.btn-relief-success:active, .btn-relief-success.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-success {\n  border: 1px solid #28c76f !important;\n  background-color: transparent;\n  color: #28c76f;\n}.btn-outline-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.04);\n  color: #28c76f;\n}.btn-outline-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-success.dropdown-toggle {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.waves-effect .waves-ripple,\n.btn-flat-success.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(40, 199, 111, 0.2) 0, rgba(40, 199, 111, 0.3) 40%, rgba(40, 199, 111, 0.4) 50%, rgba(40, 199, 111, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-success {\n  background-color: #28c76f;\n}.modal.modal-success .modal-header .modal-title {\n  color: #28c76f;\n}.modal.modal-success .modal-header .close {\n  color: #28c76f !important;\n}.pagination-success .page-item.active .page-link {\n  background: #28c76f !important;\n  color: #fff;\n}.pagination-success .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-success .page-item .page-link:hover {\n  color: #28c76f;\n}.pagination-success .page-item.prev-item .page-link:hover, .pagination-success .page-item.next-item .page-link:hover {\n  background: #28c76f;\n  color: #fff;\n}.pagination-success .page-item.next-item .page-link:active:after, .pagination-success .page-item.next-item .page-link:hover:after, .pagination-success .page-item.next .page-link:active:after, .pagination-success .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-success .page-item.prev-item .page-link:active:before, .pagination-success .page-item.prev-item .page-link:hover:before, .pagination-success .page-item.prev .page-link:active:before, .pagination-success .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-success .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #28c76f !important;\n  border-color: #28c76f;\n  box-shadow: 0 4px 18px -4px rgba(40, 199, 111, 0.65);\n}.progress-bar-success {\n  background-color: rgba(40, 199, 111, 0.12);\n}.progress-bar-success .progress-bar {\n  background-color: #28c76f;\n}.timeline .timeline-point-success {\n  border-color: #28c76f !important;\n}.timeline .timeline-point-success i,\n.timeline .timeline-point-success svg {\n  stroke: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator {\n  background-color: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator:before {\n  background: rgba(40, 199, 111, 0.12) !important;\n}.divider.divider-success .divider-text:before, .divider.divider-success .divider-text:after {\n  border-color: #28c76f !important;\n}input:focus ~ .bg-success {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #28c76f !important;\n}.custom-control-success .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #28c76f;\n  background-color: #28c76f;\n}.custom-control-success.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-success.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4) !important;\n}.custom-control-success .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(40, 199, 111, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-success .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #28c76f !important;\n}.custom-switch-success .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #28c76f !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #28c76f !important;\n  border-color: #28c76f !important;\n}.text-success.text-darken-1 {\n  color: #24b263 !important;\n}.bg-success.bg-darken-1 {\n  background-color: #24b263 !important;\n}.border-success.border-darken-1 {\n  border: 1px solid #24b263 !important;\n}.border-top-success.border-top-darken-1 {\n  border-top: 1px solid #24b263 !important;\n}.border-bottom-success.border-bottom-darken-1 {\n  border-bottom: 1px solid #24b263 !important;\n}.border-left-success.border-left-darken-1 {\n  border-left: 1px solid #24b263 !important;\n}.border-right-success.border-right-darken-1 {\n  border-right: 1px solid #24b263 !important;\n}.overlay-success.overlay-darken-1 {\n  background: #24b263; /* The Fallback */\n  background: rgba(36, 178, 99, 0.6);\n}.text-success.text-darken-2 {\n  color: #1f9d57 !important;\n}.bg-success.bg-darken-2 {\n  background-color: #1f9d57 !important;\n}.border-success.border-darken-2 {\n  border: 1px solid #1f9d57 !important;\n}.border-top-success.border-top-darken-2 {\n  border-top: 1px solid #1f9d57 !important;\n}.border-bottom-success.border-bottom-darken-2 {\n  border-bottom: 1px solid #1f9d57 !important;\n}.border-left-success.border-left-darken-2 {\n  border-left: 1px solid #1f9d57 !important;\n}.border-right-success.border-right-darken-2 {\n  border-right: 1px solid #1f9d57 !important;\n}.overlay-success.overlay-darken-2 {\n  background: #1f9d57; /* The Fallback */\n  background: rgba(31, 157, 87, 0.6);\n}.text-success.text-darken-3 {\n  color: #1b874b !important;\n}.bg-success.bg-darken-3 {\n  background-color: #1b874b !important;\n}.border-success.border-darken-3 {\n  border: 1px solid #1b874b !important;\n}.border-top-success.border-top-darken-3 {\n  border-top: 1px solid #1b874b !important;\n}.border-bottom-success.border-bottom-darken-3 {\n  border-bottom: 1px solid #1b874b !important;\n}.border-left-success.border-left-darken-3 {\n  border-left: 1px solid #1b874b !important;\n}.border-right-success.border-right-darken-3 {\n  border-right: 1px solid #1b874b !important;\n}.overlay-success.overlay-darken-3 {\n  background: #1b874b; /* The Fallback */\n  background: rgba(27, 135, 75, 0.6);\n}.text-success.text-darken-4 {\n  color: #177240 !important;\n}.bg-success.bg-darken-4 {\n  background-color: #177240 !important;\n}.border-success.border-darken-4 {\n  border: 1px solid #177240 !important;\n}.border-top-success.border-top-darken-4 {\n  border-top: 1px solid #177240 !important;\n}.border-bottom-success.border-bottom-darken-4 {\n  border-bottom: 1px solid #177240 !important;\n}.border-left-success.border-left-darken-4 {\n  border-left: 1px solid #177240 !important;\n}.border-right-success.border-right-darken-4 {\n  border-right: 1px solid #177240 !important;\n}.overlay-success.overlay-darken-4 {\n  background: #177240; /* The Fallback */\n  background: rgba(23, 114, 64, 0.6);\n}.text-success.text-accent-1 {\n  color: #e1fff1 !important;\n}.bg-success.bg-accent-1 {\n  background-color: #e1fff1 !important;\n}.border-success.border-accent-1 {\n  border: 1px solid #e1fff1 !important;\n}.border-top-success.border-top-accent-1 {\n  border-top: 1px solid #e1fff1 !important;\n}.border-bottom-success.border-bottom-accent-1 {\n  border-bottom: 1px solid #e1fff1 !important;\n}.border-left-success.border-left-accent-1 {\n  border-left: 1px solid #e1fff1 !important;\n}.border-right-success.border-right-accent-1 {\n  border-right: 1px solid #e1fff1 !important;\n}.overlay-success.overlay-accent-1 {\n  background: #e1fff1; /* The Fallback */\n  background: rgba(225, 255, 241, 0.6);\n}.text-success.text-accent-2 {\n  color: #aeffd9 !important;\n}.bg-success.bg-accent-2 {\n  background-color: #aeffd9 !important;\n}.border-success.border-accent-2 {\n  border: 1px solid #aeffd9 !important;\n}.border-top-success.border-top-accent-2 {\n  border-top: 1px solid #aeffd9 !important;\n}.border-bottom-success.border-bottom-accent-2 {\n  border-bottom: 1px solid #aeffd9 !important;\n}.border-left-success.border-left-accent-2 {\n  border-left: 1px solid #aeffd9 !important;\n}.border-right-success.border-right-accent-2 {\n  border-right: 1px solid #aeffd9 !important;\n}.overlay-success.overlay-accent-2 {\n  background: #aeffd9; /* The Fallback */\n  background: rgba(174, 255, 217, 0.6);\n}.text-success.text-accent-3 {\n  color: #7bffc1 !important;\n}.bg-success.bg-accent-3 {\n  background-color: #7bffc1 !important;\n}.border-success.border-accent-3 {\n  border: 1px solid #7bffc1 !important;\n}.border-top-success.border-top-accent-3 {\n  border-top: 1px solid #7bffc1 !important;\n}.border-bottom-success.border-bottom-accent-3 {\n  border-bottom: 1px solid #7bffc1 !important;\n}.border-left-success.border-left-accent-3 {\n  border-left: 1px solid #7bffc1 !important;\n}.border-right-success.border-right-accent-3 {\n  border-right: 1px solid #7bffc1 !important;\n}.overlay-success.overlay-accent-3 {\n  background: #7bffc1; /* The Fallback */\n  background: rgba(123, 255, 193, 0.6);\n}.text-success.text-accent-4 {\n  color: #62ffb5 !important;\n}.bg-success.bg-accent-4 {\n  background-color: #62ffb5 !important;\n}.border-success.border-accent-4 {\n  border: 1px solid #62ffb5 !important;\n}.border-top-success.border-top-accent-4 {\n  border-top: 1px solid #62ffb5 !important;\n}.border-bottom-success.border-bottom-accent-4 {\n  border-bottom: 1px solid #62ffb5 !important;\n}.border-left-success.border-left-accent-4 {\n  border-left: 1px solid #62ffb5 !important;\n}.border-right-success.border-right-accent-4 {\n  border-right: 1px solid #62ffb5 !important;\n}.overlay-success.overlay-accent-4 {\n  background: #62ffb5; /* The Fallback */\n  background: rgba(98, 255, 181, 0.6);\n}.text-info.text-lighten-5 {\n  color: #69efff !important;\n}.bg-info.bg-lighten-5 {\n  background-color: #69efff !important;\n}.border-info.border-lighten-5 {\n  border: 1px solid #69efff !important;\n}.border-top-info.border-top-lighten-5 {\n  border-top: 1px solid #69efff !important;\n}.border-bottom-info.border-bottom-lighten-5 {\n  border-bottom: 1px solid #69efff !important;\n}.border-left-info.border-left-lighten-5 {\n  border-left: 1px solid #69efff !important;\n}.border-right-info.border-right-lighten-5 {\n  border-right: 1px solid #69efff !important;\n}.overlay-info.overlay-lighten-5 {\n  background: #69efff; /* The Fallback */\n  background: rgba(105, 239, 255, 0.6);\n}.text-info.text-lighten-4 {\n  color: #4fecff !important;\n}.bg-info.bg-lighten-4 {\n  background-color: #4fecff !important;\n}.border-info.border-lighten-4 {\n  border: 1px solid #4fecff !important;\n}.border-top-info.border-top-lighten-4 {\n  border-top: 1px solid #4fecff !important;\n}.border-bottom-info.border-bottom-lighten-4 {\n  border-bottom: 1px solid #4fecff !important;\n}.border-left-info.border-left-lighten-4 {\n  border-left: 1px solid #4fecff !important;\n}.border-right-info.border-right-lighten-4 {\n  border-right: 1px solid #4fecff !important;\n}.overlay-info.overlay-lighten-4 {\n  background: #4fecff; /* The Fallback */\n  background: rgba(79, 236, 255, 0.6);\n}.text-info.text-lighten-3 {\n  color: #36e9ff !important;\n}.bg-info.bg-lighten-3 {\n  background-color: #36e9ff !important;\n}.border-info.border-lighten-3 {\n  border: 1px solid #36e9ff !important;\n}.border-top-info.border-top-lighten-3 {\n  border-top: 1px solid #36e9ff !important;\n}.border-bottom-info.border-bottom-lighten-3 {\n  border-bottom: 1px solid #36e9ff !important;\n}.border-left-info.border-left-lighten-3 {\n  border-left: 1px solid #36e9ff !important;\n}.border-right-info.border-right-lighten-3 {\n  border-right: 1px solid #36e9ff !important;\n}.overlay-info.overlay-lighten-3 {\n  background: #36e9ff; /* The Fallback */\n  background: rgba(54, 233, 255, 0.6);\n}.text-info.text-lighten-2 {\n  color: #1ce7ff !important;\n}.bg-info.bg-lighten-2 {\n  background-color: #1ce7ff !important;\n}.border-info.border-lighten-2 {\n  border: 1px solid #1ce7ff !important;\n}.border-top-info.border-top-lighten-2 {\n  border-top: 1px solid #1ce7ff !important;\n}.border-bottom-info.border-bottom-lighten-2 {\n  border-bottom: 1px solid #1ce7ff !important;\n}.border-left-info.border-left-lighten-2 {\n  border-left: 1px solid #1ce7ff !important;\n}.border-right-info.border-right-lighten-2 {\n  border-right: 1px solid #1ce7ff !important;\n}.overlay-info.overlay-lighten-2 {\n  background: #1ce7ff; /* The Fallback */\n  background: rgba(28, 231, 255, 0.6);\n}.text-info.text-lighten-1 {\n  color: #03e4ff !important;\n}.bg-info.bg-lighten-1 {\n  background-color: #03e4ff !important;\n}.border-info.border-lighten-1 {\n  border: 1px solid #03e4ff !important;\n}.border-top-info.border-top-lighten-1 {\n  border-top: 1px solid #03e4ff !important;\n}.border-bottom-info.border-bottom-lighten-1 {\n  border-bottom: 1px solid #03e4ff !important;\n}.border-left-info.border-left-lighten-1 {\n  border-left: 1px solid #03e4ff !important;\n}.border-right-info.border-right-lighten-1 {\n  border-right: 1px solid #03e4ff !important;\n}.overlay-info.overlay-lighten-1 {\n  background: #03e4ff; /* The Fallback */\n  background: rgba(3, 228, 255, 0.6);\n}.bg-info {\n  background-color: #00cfe8 !important;\n}.bg-info .card-header,\n.bg-info .card-footer {\n  background-color: transparent;\n}.alert-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.alert-info .alert-heading {\n  box-shadow: rgba(0, 207, 232, 0.4) 0px 6px 15px -7px;\n}.alert-info .alert-link {\n  color: #00b8cf !important;\n}.alert-info .close {\n  color: #00cfe8 !important;\n}.bg-light-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.bg-light-info.fc-h-event, .bg-light-info.fc-v-event {\n  border-color: rgba(0, 207, 232, 0.1);\n}.bg-light-info .fc-list-event-dot,\n.bg-light-info .fc-daygrid-event-dot {\n  border-color: #00cfe8 !important;\n}.bg-light-info.fc-list-event:hover td {\n  background: rgba(0, 207, 232, 0.1) !important;\n}.bg-light-info.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-info {\n  color: #00cfe8 !important;\n}.border-info {\n  border: 1px solid #00cfe8 !important;\n}.border-top-info {\n  border-top: 1px solid #00cfe8;\n}.border-bottom-info {\n  border-bottom: 1px solid #00cfe8;\n}.border-left-info {\n  border-left: 1px solid #00cfe8;\n}.border-right-info {\n  border-right: 1px solid #00cfe8;\n}.bg-info.badge-glow,\n.border-info.badge-glow,\n.badge-info.badge-glow {\n  box-shadow: 0px 0px 10px #00cfe8;\n}.badge.badge-light-info {\n  background-color: rgba(0, 207, 232, 0.12);\n  color: #00cfe8 !important;\n}.overlay-info {\n  background: #00cfe8; /* The Fallback */\n  background: rgba(0, 207, 232, 0.6);\n}.btn-info {\n  border-color: #00cfe8 !important;\n  background-color: #00cfe8 !important;\n  color: #fff !important;\n}.btn-info:focus, .btn-info:active, .btn-info.active {\n  color: #fff;\n  background-color: #00b8cf !important;\n}.btn-info:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #00cfe8;\n}.btn-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-info {\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-flat-info:hover {\n  color: #00cfe8;\n}.btn-flat-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.12);\n}.btn-flat-info:active, .btn-flat-info.active, .btn-flat-info:focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-flat-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-info {\n  background-color: #00cfe8;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-info:hover:not(.disabled):not(:disabled) {\n  background-color: #03e4ff;\n}.btn-relief-info:active, .btn-relief-info.active, .btn-relief-info:focus {\n  background-color: #00b8cf;\n}.btn-relief-info:hover {\n  color: #fff;\n}.btn-relief-info:active, .btn-relief-info.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-info {\n  border: 1px solid #00cfe8 !important;\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-outline-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.04);\n  color: #00cfe8;\n}.btn-outline-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-info.dropdown-toggle {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.waves-effect .waves-ripple,\n.btn-flat-info.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(0, 207, 232, 0.2) 0, rgba(0, 207, 232, 0.3) 40%, rgba(0, 207, 232, 0.4) 50%, rgba(0, 207, 232, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-info {\n  background-color: #00cfe8;\n}.modal.modal-info .modal-header .modal-title {\n  color: #00cfe8;\n}.modal.modal-info .modal-header .close {\n  color: #00cfe8 !important;\n}.pagination-info .page-item.active .page-link {\n  background: #00cfe8 !important;\n  color: #fff;\n}.pagination-info .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-info .page-item .page-link:hover {\n  color: #00cfe8;\n}.pagination-info .page-item.prev-item .page-link:hover, .pagination-info .page-item.next-item .page-link:hover {\n  background: #00cfe8;\n  color: #fff;\n}.pagination-info .page-item.next-item .page-link:active:after, .pagination-info .page-item.next-item .page-link:hover:after, .pagination-info .page-item.next .page-link:active:after, .pagination-info .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-info .page-item.prev-item .page-link:active:before, .pagination-info .page-item.prev-item .page-link:hover:before, .pagination-info .page-item.prev .page-link:active:before, .pagination-info .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-info .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #00cfe8 !important;\n  border-color: #00cfe8;\n  box-shadow: 0 4px 18px -4px rgba(0, 207, 232, 0.65);\n}.progress-bar-info {\n  background-color: rgba(0, 207, 232, 0.12);\n}.progress-bar-info .progress-bar {\n  background-color: #00cfe8;\n}.timeline .timeline-point-info {\n  border-color: #00cfe8 !important;\n}.timeline .timeline-point-info i,\n.timeline .timeline-point-info svg {\n  stroke: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator {\n  background-color: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator:before {\n  background: rgba(0, 207, 232, 0.12) !important;\n}.divider.divider-info .divider-text:before, .divider.divider-info .divider-text:after {\n  border-color: #00cfe8 !important;\n}input:focus ~ .bg-info {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #00cfe8 !important;\n}.custom-control-info .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #00cfe8;\n  background-color: #00cfe8;\n}.custom-control-info.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-info.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4) !important;\n}.custom-control-info .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 207, 232, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-info .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #00cfe8 !important;\n}.custom-switch-info .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #00cfe8 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #00cfe8 !important;\n  border-color: #00cfe8 !important;\n}.text-info.text-darken-1 {\n  color: #00b8cf !important;\n}.bg-info.bg-darken-1 {\n  background-color: #00b8cf !important;\n}.border-info.border-darken-1 {\n  border: 1px solid #00b8cf !important;\n}.border-top-info.border-top-darken-1 {\n  border-top: 1px solid #00b8cf !important;\n}.border-bottom-info.border-bottom-darken-1 {\n  border-bottom: 1px solid #00b8cf !important;\n}.border-left-info.border-left-darken-1 {\n  border-left: 1px solid #00b8cf !important;\n}.border-right-info.border-right-darken-1 {\n  border-right: 1px solid #00b8cf !important;\n}.overlay-info.overlay-darken-1 {\n  background: #00b8cf; /* The Fallback */\n  background: rgba(0, 184, 207, 0.6);\n}.text-info.text-darken-2 {\n  color: #00a1b5 !important;\n}.bg-info.bg-darken-2 {\n  background-color: #00a1b5 !important;\n}.border-info.border-darken-2 {\n  border: 1px solid #00a1b5 !important;\n}.border-top-info.border-top-darken-2 {\n  border-top: 1px solid #00a1b5 !important;\n}.border-bottom-info.border-bottom-darken-2 {\n  border-bottom: 1px solid #00a1b5 !important;\n}.border-left-info.border-left-darken-2 {\n  border-left: 1px solid #00a1b5 !important;\n}.border-right-info.border-right-darken-2 {\n  border-right: 1px solid #00a1b5 !important;\n}.overlay-info.overlay-darken-2 {\n  background: #00a1b5; /* The Fallback */\n  background: rgba(0, 161, 181, 0.6);\n}.text-info.text-darken-3 {\n  color: #008b9c !important;\n}.bg-info.bg-darken-3 {\n  background-color: #008b9c !important;\n}.border-info.border-darken-3 {\n  border: 1px solid #008b9c !important;\n}.border-top-info.border-top-darken-3 {\n  border-top: 1px solid #008b9c !important;\n}.border-bottom-info.border-bottom-darken-3 {\n  border-bottom: 1px solid #008b9c !important;\n}.border-left-info.border-left-darken-3 {\n  border-left: 1px solid #008b9c !important;\n}.border-right-info.border-right-darken-3 {\n  border-right: 1px solid #008b9c !important;\n}.overlay-info.overlay-darken-3 {\n  background: #008b9c; /* The Fallback */\n  background: rgba(0, 139, 156, 0.6);\n}.text-info.text-darken-4 {\n  color: #007482 !important;\n}.bg-info.bg-darken-4 {\n  background-color: #007482 !important;\n}.border-info.border-darken-4 {\n  border: 1px solid #007482 !important;\n}.border-top-info.border-top-darken-4 {\n  border-top: 1px solid #007482 !important;\n}.border-bottom-info.border-bottom-darken-4 {\n  border-bottom: 1px solid #007482 !important;\n}.border-left-info.border-left-darken-4 {\n  border-left: 1px solid #007482 !important;\n}.border-right-info.border-right-darken-4 {\n  border-right: 1px solid #007482 !important;\n}.overlay-info.overlay-darken-4 {\n  background: #007482; /* The Fallback */\n  background: rgba(0, 116, 130, 0.6);\n}.text-info.text-accent-1 {\n  color: #feffff !important;\n}.bg-info.bg-accent-1 {\n  background-color: #feffff !important;\n}.border-info.border-accent-1 {\n  border: 1px solid #feffff !important;\n}.border-top-info.border-top-accent-1 {\n  border-top: 1px solid #feffff !important;\n}.border-bottom-info.border-bottom-accent-1 {\n  border-bottom: 1px solid #feffff !important;\n}.border-left-info.border-left-accent-1 {\n  border-left: 1px solid #feffff !important;\n}.border-right-info.border-right-accent-1 {\n  border-right: 1px solid #feffff !important;\n}.overlay-info.overlay-accent-1 {\n  background: #feffff; /* The Fallback */\n  background: rgba(254, 255, 255, 0.6);\n}.text-info.text-accent-2 {\n  color: #cbf5ff !important;\n}.bg-info.bg-accent-2 {\n  background-color: #cbf5ff !important;\n}.border-info.border-accent-2 {\n  border: 1px solid #cbf5ff !important;\n}.border-top-info.border-top-accent-2 {\n  border-top: 1px solid #cbf5ff !important;\n}.border-bottom-info.border-bottom-accent-2 {\n  border-bottom: 1px solid #cbf5ff !important;\n}.border-left-info.border-left-accent-2 {\n  border-left: 1px solid #cbf5ff !important;\n}.border-right-info.border-right-accent-2 {\n  border-right: 1px solid #cbf5ff !important;\n}.overlay-info.overlay-accent-2 {\n  background: #cbf5ff; /* The Fallback */\n  background: rgba(203, 245, 255, 0.6);\n}.text-info.text-accent-3 {\n  color: #98ecff !important;\n}.bg-info.bg-accent-3 {\n  background-color: #98ecff !important;\n}.border-info.border-accent-3 {\n  border: 1px solid #98ecff !important;\n}.border-top-info.border-top-accent-3 {\n  border-top: 1px solid #98ecff !important;\n}.border-bottom-info.border-bottom-accent-3 {\n  border-bottom: 1px solid #98ecff !important;\n}.border-left-info.border-left-accent-3 {\n  border-left: 1px solid #98ecff !important;\n}.border-right-info.border-right-accent-3 {\n  border-right: 1px solid #98ecff !important;\n}.overlay-info.overlay-accent-3 {\n  background: #98ecff; /* The Fallback */\n  background: rgba(152, 236, 255, 0.6);\n}.text-info.text-accent-4 {\n  color: #7fe7ff !important;\n}.bg-info.bg-accent-4 {\n  background-color: #7fe7ff !important;\n}.border-info.border-accent-4 {\n  border: 1px solid #7fe7ff !important;\n}.border-top-info.border-top-accent-4 {\n  border-top: 1px solid #7fe7ff !important;\n}.border-bottom-info.border-bottom-accent-4 {\n  border-bottom: 1px solid #7fe7ff !important;\n}.border-left-info.border-left-accent-4 {\n  border-left: 1px solid #7fe7ff !important;\n}.border-right-info.border-right-accent-4 {\n  border-right: 1px solid #7fe7ff !important;\n}.overlay-info.overlay-accent-4 {\n  background: #7fe7ff; /* The Fallback */\n  background: rgba(127, 231, 255, 0.6);\n}.text-warning.text-lighten-5 {\n  color: #ffe0c3 !important;\n}.bg-warning.bg-lighten-5 {\n  background-color: #ffe0c3 !important;\n}.border-warning.border-lighten-5 {\n  border: 1px solid #ffe0c3 !important;\n}.border-top-warning.border-top-lighten-5 {\n  border-top: 1px solid #ffe0c3 !important;\n}.border-bottom-warning.border-bottom-lighten-5 {\n  border-bottom: 1px solid #ffe0c3 !important;\n}.border-left-warning.border-left-lighten-5 {\n  border-left: 1px solid #ffe0c3 !important;\n}.border-right-warning.border-right-lighten-5 {\n  border-right: 1px solid #ffe0c3 !important;\n}.overlay-warning.overlay-lighten-5 {\n  background: #ffe0c3; /* The Fallback */\n  background: rgba(255, 224, 195, 0.6);\n}.text-warning.text-lighten-4 {\n  color: #ffd3a9 !important;\n}.bg-warning.bg-lighten-4 {\n  background-color: #ffd3a9 !important;\n}.border-warning.border-lighten-4 {\n  border: 1px solid #ffd3a9 !important;\n}.border-top-warning.border-top-lighten-4 {\n  border-top: 1px solid #ffd3a9 !important;\n}.border-bottom-warning.border-bottom-lighten-4 {\n  border-bottom: 1px solid #ffd3a9 !important;\n}.border-left-warning.border-left-lighten-4 {\n  border-left: 1px solid #ffd3a9 !important;\n}.border-right-warning.border-right-lighten-4 {\n  border-right: 1px solid #ffd3a9 !important;\n}.overlay-warning.overlay-lighten-4 {\n  background: #ffd3a9; /* The Fallback */\n  background: rgba(255, 211, 169, 0.6);\n}.text-warning.text-lighten-3 {\n  color: #ffc690 !important;\n}.bg-warning.bg-lighten-3 {\n  background-color: #ffc690 !important;\n}.border-warning.border-lighten-3 {\n  border: 1px solid #ffc690 !important;\n}.border-top-warning.border-top-lighten-3 {\n  border-top: 1px solid #ffc690 !important;\n}.border-bottom-warning.border-bottom-lighten-3 {\n  border-bottom: 1px solid #ffc690 !important;\n}.border-left-warning.border-left-lighten-3 {\n  border-left: 1px solid #ffc690 !important;\n}.border-right-warning.border-right-lighten-3 {\n  border-right: 1px solid #ffc690 !important;\n}.overlay-warning.overlay-lighten-3 {\n  background: #ffc690; /* The Fallback */\n  background: rgba(255, 198, 144, 0.6);\n}.text-warning.text-lighten-2 {\n  color: #ffb976 !important;\n}.bg-warning.bg-lighten-2 {\n  background-color: #ffb976 !important;\n}.border-warning.border-lighten-2 {\n  border: 1px solid #ffb976 !important;\n}.border-top-warning.border-top-lighten-2 {\n  border-top: 1px solid #ffb976 !important;\n}.border-bottom-warning.border-bottom-lighten-2 {\n  border-bottom: 1px solid #ffb976 !important;\n}.border-left-warning.border-left-lighten-2 {\n  border-left: 1px solid #ffb976 !important;\n}.border-right-warning.border-right-lighten-2 {\n  border-right: 1px solid #ffb976 !important;\n}.overlay-warning.overlay-lighten-2 {\n  background: #ffb976; /* The Fallback */\n  background: rgba(255, 185, 118, 0.6);\n}.text-warning.text-lighten-1 {\n  color: #ffac5d !important;\n}.bg-warning.bg-lighten-1 {\n  background-color: #ffac5d !important;\n}.border-warning.border-lighten-1 {\n  border: 1px solid #ffac5d !important;\n}.border-top-warning.border-top-lighten-1 {\n  border-top: 1px solid #ffac5d !important;\n}.border-bottom-warning.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ffac5d !important;\n}.border-left-warning.border-left-lighten-1 {\n  border-left: 1px solid #ffac5d !important;\n}.border-right-warning.border-right-lighten-1 {\n  border-right: 1px solid #ffac5d !important;\n}.overlay-warning.overlay-lighten-1 {\n  background: #ffac5d; /* The Fallback */\n  background: rgba(255, 172, 93, 0.6);\n}.bg-warning {\n  background-color: #ff9f43 !important;\n}.bg-warning .card-header,\n.bg-warning .card-footer {\n  background-color: transparent;\n}.alert-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.alert-warning .alert-heading {\n  box-shadow: rgba(255, 159, 67, 0.4) 0px 6px 15px -7px;\n}.alert-warning .alert-link {\n  color: #ff922a !important;\n}.alert-warning .close {\n  color: #ff9f43 !important;\n}.bg-light-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.bg-light-warning.fc-h-event, .bg-light-warning.fc-v-event {\n  border-color: rgba(255, 159, 67, 0.1);\n}.bg-light-warning .fc-list-event-dot,\n.bg-light-warning .fc-daygrid-event-dot {\n  border-color: #ff9f43 !important;\n}.bg-light-warning.fc-list-event:hover td {\n  background: rgba(255, 159, 67, 0.1) !important;\n}.bg-light-warning.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-warning {\n  color: #ff9f43 !important;\n}.border-warning {\n  border: 1px solid #ff9f43 !important;\n}.border-top-warning {\n  border-top: 1px solid #ff9f43;\n}.border-bottom-warning {\n  border-bottom: 1px solid #ff9f43;\n}.border-left-warning {\n  border-left: 1px solid #ff9f43;\n}.border-right-warning {\n  border-right: 1px solid #ff9f43;\n}.bg-warning.badge-glow,\n.border-warning.badge-glow,\n.badge-warning.badge-glow {\n  box-shadow: 0px 0px 10px #ff9f43;\n}.badge.badge-light-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n  color: #ff9f43 !important;\n}.overlay-warning {\n  background: #ff9f43; /* The Fallback */\n  background: rgba(255, 159, 67, 0.6);\n}.btn-warning {\n  border-color: #ff9f43 !important;\n  background-color: #ff9f43 !important;\n  color: #fff !important;\n}.btn-warning:focus, .btn-warning:active, .btn-warning.active {\n  color: #fff;\n  background-color: #ff922a !important;\n}.btn-warning:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ff9f43;\n}.btn-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-warning {\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-flat-warning:hover {\n  color: #ff9f43;\n}.btn-flat-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.12);\n}.btn-flat-warning:active, .btn-flat-warning.active, .btn-flat-warning:focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-flat-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-warning {\n  background-color: #ff9f43;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-warning:hover:not(.disabled):not(:disabled) {\n  background-color: #ffac5d;\n}.btn-relief-warning:active, .btn-relief-warning.active, .btn-relief-warning:focus {\n  background-color: #ff922a;\n}.btn-relief-warning:hover {\n  color: #fff;\n}.btn-relief-warning:active, .btn-relief-warning.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-warning {\n  border: 1px solid #ff9f43 !important;\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-outline-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.04);\n  color: #ff9f43;\n}.btn-outline-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-warning.dropdown-toggle {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.waves-effect .waves-ripple,\n.btn-flat-warning.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(255, 159, 67, 0.2) 0, rgba(255, 159, 67, 0.3) 40%, rgba(255, 159, 67, 0.4) 50%, rgba(255, 159, 67, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-warning {\n  background-color: #ff9f43;\n}.modal.modal-warning .modal-header .modal-title {\n  color: #ff9f43;\n}.modal.modal-warning .modal-header .close {\n  color: #ff9f43 !important;\n}.pagination-warning .page-item.active .page-link {\n  background: #ff9f43 !important;\n  color: #fff;\n}.pagination-warning .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-warning .page-item .page-link:hover {\n  color: #ff9f43;\n}.pagination-warning .page-item.prev-item .page-link:hover, .pagination-warning .page-item.next-item .page-link:hover {\n  background: #ff9f43;\n  color: #fff;\n}.pagination-warning .page-item.next-item .page-link:active:after, .pagination-warning .page-item.next-item .page-link:hover:after, .pagination-warning .page-item.next .page-link:active:after, .pagination-warning .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-warning .page-item.prev-item .page-link:active:before, .pagination-warning .page-item.prev-item .page-link:hover:before, .pagination-warning .page-item.prev .page-link:active:before, .pagination-warning .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-warning .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ff9f43 !important;\n  border-color: #ff9f43;\n  box-shadow: 0 4px 18px -4px rgba(255, 159, 67, 0.65);\n}.progress-bar-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n}.progress-bar-warning .progress-bar {\n  background-color: #ff9f43;\n}.timeline .timeline-point-warning {\n  border-color: #ff9f43 !important;\n}.timeline .timeline-point-warning i,\n.timeline .timeline-point-warning svg {\n  stroke: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator {\n  background-color: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator:before {\n  background: rgba(255, 159, 67, 0.12) !important;\n}.divider.divider-warning .divider-text:before, .divider.divider-warning .divider-text:after {\n  border-color: #ff9f43 !important;\n}input:focus ~ .bg-warning {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ff9f43 !important;\n}.custom-control-warning .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}.custom-control-warning.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-warning.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4) !important;\n}.custom-control-warning .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(255, 159, 67, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-warning .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ff9f43 !important;\n}.custom-switch-warning .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ff9f43 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ff9f43 !important;\n  border-color: #ff9f43 !important;\n}.text-warning.text-darken-1 {\n  color: #ff922a !important;\n}.bg-warning.bg-darken-1 {\n  background-color: #ff922a !important;\n}.border-warning.border-darken-1 {\n  border: 1px solid #ff922a !important;\n}.border-top-warning.border-top-darken-1 {\n  border-top: 1px solid #ff922a !important;\n}.border-bottom-warning.border-bottom-darken-1 {\n  border-bottom: 1px solid #ff922a !important;\n}.border-left-warning.border-left-darken-1 {\n  border-left: 1px solid #ff922a !important;\n}.border-right-warning.border-right-darken-1 {\n  border-right: 1px solid #ff922a !important;\n}.overlay-warning.overlay-darken-1 {\n  background: #ff922a; /* The Fallback */\n  background: rgba(255, 146, 42, 0.6);\n}.text-warning.text-darken-2 {\n  color: #ff8510 !important;\n}.bg-warning.bg-darken-2 {\n  background-color: #ff8510 !important;\n}.border-warning.border-darken-2 {\n  border: 1px solid #ff8510 !important;\n}.border-top-warning.border-top-darken-2 {\n  border-top: 1px solid #ff8510 !important;\n}.border-bottom-warning.border-bottom-darken-2 {\n  border-bottom: 1px solid #ff8510 !important;\n}.border-left-warning.border-left-darken-2 {\n  border-left: 1px solid #ff8510 !important;\n}.border-right-warning.border-right-darken-2 {\n  border-right: 1px solid #ff8510 !important;\n}.overlay-warning.overlay-darken-2 {\n  background: #ff8510; /* The Fallback */\n  background: rgba(255, 133, 16, 0.6);\n}.text-warning.text-darken-3 {\n  color: #f67800 !important;\n}.bg-warning.bg-darken-3 {\n  background-color: #f67800 !important;\n}.border-warning.border-darken-3 {\n  border: 1px solid #f67800 !important;\n}.border-top-warning.border-top-darken-3 {\n  border-top: 1px solid #f67800 !important;\n}.border-bottom-warning.border-bottom-darken-3 {\n  border-bottom: 1px solid #f67800 !important;\n}.border-left-warning.border-left-darken-3 {\n  border-left: 1px solid #f67800 !important;\n}.border-right-warning.border-right-darken-3 {\n  border-right: 1px solid #f67800 !important;\n}.overlay-warning.overlay-darken-3 {\n  background: #f67800; /* The Fallback */\n  background: rgba(246, 120, 0, 0.6);\n}.text-warning.text-darken-4 {\n  color: #dc6c00 !important;\n}.bg-warning.bg-darken-4 {\n  background-color: #dc6c00 !important;\n}.border-warning.border-darken-4 {\n  border: 1px solid #dc6c00 !important;\n}.border-top-warning.border-top-darken-4 {\n  border-top: 1px solid #dc6c00 !important;\n}.border-bottom-warning.border-bottom-darken-4 {\n  border-bottom: 1px solid #dc6c00 !important;\n}.border-left-warning.border-left-darken-4 {\n  border-left: 1px solid #dc6c00 !important;\n}.border-right-warning.border-right-darken-4 {\n  border-right: 1px solid #dc6c00 !important;\n}.overlay-warning.overlay-darken-4 {\n  background: #dc6c00; /* The Fallback */\n  background: rgba(220, 108, 0, 0.6);\n}.text-warning.text-accent-1 {\n  color: #fff5ef !important;\n}.bg-warning.bg-accent-1 {\n  background-color: #fff5ef !important;\n}.border-warning.border-accent-1 {\n  border: 1px solid #fff5ef !important;\n}.border-top-warning.border-top-accent-1 {\n  border-top: 1px solid #fff5ef !important;\n}.border-bottom-warning.border-bottom-accent-1 {\n  border-bottom: 1px solid #fff5ef !important;\n}.border-left-warning.border-left-accent-1 {\n  border-left: 1px solid #fff5ef !important;\n}.border-right-warning.border-right-accent-1 {\n  border-right: 1px solid #fff5ef !important;\n}.overlay-warning.overlay-accent-1 {\n  background: #fff5ef; /* The Fallback */\n  background: rgba(255, 245, 239, 0.6);\n}.text-warning.text-accent-2 {\n  color: #ffe5d8 !important;\n}.bg-warning.bg-accent-2 {\n  background-color: #ffe5d8 !important;\n}.border-warning.border-accent-2 {\n  border: 1px solid #ffe5d8 !important;\n}.border-top-warning.border-top-accent-2 {\n  border-top: 1px solid #ffe5d8 !important;\n}.border-bottom-warning.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffe5d8 !important;\n}.border-left-warning.border-left-accent-2 {\n  border-left: 1px solid #ffe5d8 !important;\n}.border-right-warning.border-right-accent-2 {\n  border-right: 1px solid #ffe5d8 !important;\n}.overlay-warning.overlay-accent-2 {\n  background: #ffe5d8; /* The Fallback */\n  background: rgba(255, 229, 216, 0.6);\n}.text-warning.text-accent-3 {\n  color: #fff6f3 !important;\n}.bg-warning.bg-accent-3 {\n  background-color: #fff6f3 !important;\n}.border-warning.border-accent-3 {\n  border: 1px solid #fff6f3 !important;\n}.border-top-warning.border-top-accent-3 {\n  border-top: 1px solid #fff6f3 !important;\n}.border-bottom-warning.border-bottom-accent-3 {\n  border-bottom: 1px solid #fff6f3 !important;\n}.border-left-warning.border-left-accent-3 {\n  border-left: 1px solid #fff6f3 !important;\n}.border-right-warning.border-right-accent-3 {\n  border-right: 1px solid #fff6f3 !important;\n}.overlay-warning.overlay-accent-3 {\n  background: #fff6f3; /* The Fallback */\n  background: rgba(255, 246, 243, 0.6);\n}.text-warning.text-accent-4 {\n  color: #ffe3da !important;\n}.bg-warning.bg-accent-4 {\n  background-color: #ffe3da !important;\n}.border-warning.border-accent-4 {\n  border: 1px solid #ffe3da !important;\n}.border-top-warning.border-top-accent-4 {\n  border-top: 1px solid #ffe3da !important;\n}.border-bottom-warning.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffe3da !important;\n}.border-left-warning.border-left-accent-4 {\n  border-left: 1px solid #ffe3da !important;\n}.border-right-warning.border-right-accent-4 {\n  border-right: 1px solid #ffe3da !important;\n}.overlay-warning.overlay-accent-4 {\n  background: #ffe3da; /* The Fallback */\n  background: rgba(255, 227, 218, 0.6);\n}.text-danger.text-lighten-5 {\n  color: #f8c6c6 !important;\n}.bg-danger.bg-lighten-5 {\n  background-color: #f8c6c6 !important;\n}.border-danger.border-lighten-5 {\n  border: 1px solid #f8c6c6 !important;\n}.border-top-danger.border-top-lighten-5 {\n  border-top: 1px solid #f8c6c6 !important;\n}.border-bottom-danger.border-bottom-lighten-5 {\n  border-bottom: 1px solid #f8c6c6 !important;\n}.border-left-danger.border-left-lighten-5 {\n  border-left: 1px solid #f8c6c6 !important;\n}.border-right-danger.border-right-lighten-5 {\n  border-right: 1px solid #f8c6c6 !important;\n}.overlay-danger.overlay-lighten-5 {\n  background: #f8c6c6; /* The Fallback */\n  background: rgba(248, 198, 198, 0.6);\n}.text-danger.text-lighten-4 {\n  color: #f5afaf !important;\n}.bg-danger.bg-lighten-4 {\n  background-color: #f5afaf !important;\n}.border-danger.border-lighten-4 {\n  border: 1px solid #f5afaf !important;\n}.border-top-danger.border-top-lighten-4 {\n  border-top: 1px solid #f5afaf !important;\n}.border-bottom-danger.border-bottom-lighten-4 {\n  border-bottom: 1px solid #f5afaf !important;\n}.border-left-danger.border-left-lighten-4 {\n  border-left: 1px solid #f5afaf !important;\n}.border-right-danger.border-right-lighten-4 {\n  border-right: 1px solid #f5afaf !important;\n}.overlay-danger.overlay-lighten-4 {\n  background: #f5afaf; /* The Fallback */\n  background: rgba(245, 175, 175, 0.6);\n}.text-danger.text-lighten-3 {\n  color: #f29899 !important;\n}.bg-danger.bg-lighten-3 {\n  background-color: #f29899 !important;\n}.border-danger.border-lighten-3 {\n  border: 1px solid #f29899 !important;\n}.border-top-danger.border-top-lighten-3 {\n  border-top: 1px solid #f29899 !important;\n}.border-bottom-danger.border-bottom-lighten-3 {\n  border-bottom: 1px solid #f29899 !important;\n}.border-left-danger.border-left-lighten-3 {\n  border-left: 1px solid #f29899 !important;\n}.border-right-danger.border-right-lighten-3 {\n  border-right: 1px solid #f29899 !important;\n}.overlay-danger.overlay-lighten-3 {\n  background: #f29899; /* The Fallback */\n  background: rgba(242, 152, 153, 0.6);\n}.text-danger.text-lighten-2 {\n  color: #f08182 !important;\n}.bg-danger.bg-lighten-2 {\n  background-color: #f08182 !important;\n}.border-danger.border-lighten-2 {\n  border: 1px solid #f08182 !important;\n}.border-top-danger.border-top-lighten-2 {\n  border-top: 1px solid #f08182 !important;\n}.border-bottom-danger.border-bottom-lighten-2 {\n  border-bottom: 1px solid #f08182 !important;\n}.border-left-danger.border-left-lighten-2 {\n  border-left: 1px solid #f08182 !important;\n}.border-right-danger.border-right-lighten-2 {\n  border-right: 1px solid #f08182 !important;\n}.overlay-danger.overlay-lighten-2 {\n  background: #f08182; /* The Fallback */\n  background: rgba(240, 129, 130, 0.6);\n}.text-danger.text-lighten-1 {\n  color: #ed6b6c !important;\n}.bg-danger.bg-lighten-1 {\n  background-color: #ed6b6c !important;\n}.border-danger.border-lighten-1 {\n  border: 1px solid #ed6b6c !important;\n}.border-top-danger.border-top-lighten-1 {\n  border-top: 1px solid #ed6b6c !important;\n}.border-bottom-danger.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ed6b6c !important;\n}.border-left-danger.border-left-lighten-1 {\n  border-left: 1px solid #ed6b6c !important;\n}.border-right-danger.border-right-lighten-1 {\n  border-right: 1px solid #ed6b6c !important;\n}.overlay-danger.overlay-lighten-1 {\n  background: #ed6b6c; /* The Fallback */\n  background: rgba(237, 107, 108, 0.6);\n}.bg-danger {\n  background-color: #ea5455 !important;\n}.bg-danger .card-header,\n.bg-danger .card-footer {\n  background-color: transparent;\n}.alert-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.alert-danger .alert-heading {\n  box-shadow: rgba(234, 84, 85, 0.4) 0px 6px 15px -7px;\n}.alert-danger .alert-link {\n  color: #e73d3e !important;\n}.alert-danger .close {\n  color: #ea5455 !important;\n}.bg-light-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.bg-light-danger.fc-h-event, .bg-light-danger.fc-v-event {\n  border-color: rgba(234, 84, 85, 0.1);\n}.bg-light-danger .fc-list-event-dot,\n.bg-light-danger .fc-daygrid-event-dot {\n  border-color: #ea5455 !important;\n}.bg-light-danger.fc-list-event:hover td {\n  background: rgba(234, 84, 85, 0.1) !important;\n}.bg-light-danger.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-danger {\n  color: #ea5455 !important;\n}.border-danger {\n  border: 1px solid #ea5455 !important;\n}.border-top-danger {\n  border-top: 1px solid #ea5455;\n}.border-bottom-danger {\n  border-bottom: 1px solid #ea5455;\n}.border-left-danger {\n  border-left: 1px solid #ea5455;\n}.border-right-danger {\n  border-right: 1px solid #ea5455;\n}.bg-danger.badge-glow,\n.border-danger.badge-glow,\n.badge-danger.badge-glow {\n  box-shadow: 0px 0px 10px #ea5455;\n}.badge.badge-light-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n  color: #ea5455 !important;\n}.overlay-danger {\n  background: #ea5455; /* The Fallback */\n  background: rgba(234, 84, 85, 0.6);\n}.btn-danger {\n  border-color: #ea5455 !important;\n  background-color: #ea5455 !important;\n  color: #fff !important;\n}.btn-danger:focus, .btn-danger:active, .btn-danger.active {\n  color: #fff;\n  background-color: #e73d3e !important;\n}.btn-danger:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ea5455;\n}.btn-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-danger {\n  background-color: transparent;\n  color: #ea5455;\n}.btn-flat-danger:hover {\n  color: #ea5455;\n}.btn-flat-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.12);\n}.btn-flat-danger:active, .btn-flat-danger.active, .btn-flat-danger:focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-flat-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-danger {\n  background-color: #ea5455;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-danger:hover:not(.disabled):not(:disabled) {\n  background-color: #ed6b6c;\n}.btn-relief-danger:active, .btn-relief-danger.active, .btn-relief-danger:focus {\n  background-color: #e73d3e;\n}.btn-relief-danger:hover {\n  color: #fff;\n}.btn-relief-danger:active, .btn-relief-danger.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-danger {\n  border: 1px solid #ea5455 !important;\n  background-color: transparent;\n  color: #ea5455;\n}.btn-outline-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.04);\n  color: #ea5455;\n}.btn-outline-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-danger.dropdown-toggle {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.waves-effect .waves-ripple,\n.btn-flat-danger.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(234, 84, 85, 0.2) 0, rgba(234, 84, 85, 0.3) 40%, rgba(234, 84, 85, 0.4) 50%, rgba(234, 84, 85, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-danger {\n  background-color: #ea5455;\n}.modal.modal-danger .modal-header .modal-title {\n  color: #ea5455;\n}.modal.modal-danger .modal-header .close {\n  color: #ea5455 !important;\n}.pagination-danger .page-item.active .page-link {\n  background: #ea5455 !important;\n  color: #fff;\n}.pagination-danger .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-danger .page-item .page-link:hover {\n  color: #ea5455;\n}.pagination-danger .page-item.prev-item .page-link:hover, .pagination-danger .page-item.next-item .page-link:hover {\n  background: #ea5455;\n  color: #fff;\n}.pagination-danger .page-item.next-item .page-link:active:after, .pagination-danger .page-item.next-item .page-link:hover:after, .pagination-danger .page-item.next .page-link:active:after, .pagination-danger .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-danger .page-item.prev-item .page-link:active:before, .pagination-danger .page-item.prev-item .page-link:hover:before, .pagination-danger .page-item.prev .page-link:active:before, .pagination-danger .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-danger .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ea5455 !important;\n  border-color: #ea5455;\n  box-shadow: 0 4px 18px -4px rgba(234, 84, 85, 0.65);\n}.progress-bar-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n}.progress-bar-danger .progress-bar {\n  background-color: #ea5455;\n}.timeline .timeline-point-danger {\n  border-color: #ea5455 !important;\n}.timeline .timeline-point-danger i,\n.timeline .timeline-point-danger svg {\n  stroke: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator {\n  background-color: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator:before {\n  background: rgba(234, 84, 85, 0.12) !important;\n}.divider.divider-danger .divider-text:before, .divider.divider-danger .divider-text:after {\n  border-color: #ea5455 !important;\n}input:focus ~ .bg-danger {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ea5455 !important;\n}.custom-control-danger .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ea5455;\n  background-color: #ea5455;\n}.custom-control-danger.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-danger.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4) !important;\n}.custom-control-danger .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(234, 84, 85, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-danger .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ea5455 !important;\n}.custom-switch-danger .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ea5455 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ea5455 !important;\n  border-color: #ea5455 !important;\n}.text-danger.text-darken-1 {\n  color: #e73d3e !important;\n}.bg-danger.bg-darken-1 {\n  background-color: #e73d3e !important;\n}.border-danger.border-darken-1 {\n  border: 1px solid #e73d3e !important;\n}.border-top-danger.border-top-darken-1 {\n  border-top: 1px solid #e73d3e !important;\n}.border-bottom-danger.border-bottom-darken-1 {\n  border-bottom: 1px solid #e73d3e !important;\n}.border-left-danger.border-left-darken-1 {\n  border-left: 1px solid #e73d3e !important;\n}.border-right-danger.border-right-darken-1 {\n  border-right: 1px solid #e73d3e !important;\n}.overlay-danger.overlay-darken-1 {\n  background: #e73d3e; /* The Fallback */\n  background: rgba(231, 61, 62, 0.6);\n}.text-danger.text-darken-2 {\n  color: #e42728 !important;\n}.bg-danger.bg-darken-2 {\n  background-color: #e42728 !important;\n}.border-danger.border-darken-2 {\n  border: 1px solid #e42728 !important;\n}.border-top-danger.border-top-darken-2 {\n  border-top: 1px solid #e42728 !important;\n}.border-bottom-danger.border-bottom-darken-2 {\n  border-bottom: 1px solid #e42728 !important;\n}.border-left-danger.border-left-darken-2 {\n  border-left: 1px solid #e42728 !important;\n}.border-right-danger.border-right-darken-2 {\n  border-right: 1px solid #e42728 !important;\n}.overlay-danger.overlay-darken-2 {\n  background: #e42728; /* The Fallback */\n  background: rgba(228, 39, 40, 0.6);\n}.text-danger.text-darken-3 {\n  color: #d71a1c !important;\n}.bg-danger.bg-darken-3 {\n  background-color: #d71a1c !important;\n}.border-danger.border-darken-3 {\n  border: 1px solid #d71a1c !important;\n}.border-top-danger.border-top-darken-3 {\n  border-top: 1px solid #d71a1c !important;\n}.border-bottom-danger.border-bottom-darken-3 {\n  border-bottom: 1px solid #d71a1c !important;\n}.border-left-danger.border-left-darken-3 {\n  border-left: 1px solid #d71a1c !important;\n}.border-right-danger.border-right-darken-3 {\n  border-right: 1px solid #d71a1c !important;\n}.overlay-danger.overlay-darken-3 {\n  background: #d71a1c; /* The Fallback */\n  background: rgba(215, 26, 28, 0.6);\n}.text-danger.text-darken-4 {\n  color: #c01819 !important;\n}.bg-danger.bg-darken-4 {\n  background-color: #c01819 !important;\n}.border-danger.border-darken-4 {\n  border: 1px solid #c01819 !important;\n}.border-top-danger.border-top-darken-4 {\n  border-top: 1px solid #c01819 !important;\n}.border-bottom-danger.border-bottom-darken-4 {\n  border-bottom: 1px solid #c01819 !important;\n}.border-left-danger.border-left-darken-4 {\n  border-left: 1px solid #c01819 !important;\n}.border-right-danger.border-right-darken-4 {\n  border-right: 1px solid #c01819 !important;\n}.overlay-danger.overlay-darken-4 {\n  background: #c01819; /* The Fallback */\n  background: rgba(192, 24, 25, 0.6);\n}.text-danger.text-accent-1 {\n  color: #ffeef1 !important;\n}.bg-danger.bg-accent-1 {\n  background-color: #ffeef1 !important;\n}.border-danger.border-accent-1 {\n  border: 1px solid #ffeef1 !important;\n}.border-top-danger.border-top-accent-1 {\n  border-top: 1px solid #ffeef1 !important;\n}.border-bottom-danger.border-bottom-accent-1 {\n  border-bottom: 1px solid #ffeef1 !important;\n}.border-left-danger.border-left-accent-1 {\n  border-left: 1px solid #ffeef1 !important;\n}.border-right-danger.border-right-accent-1 {\n  border-right: 1px solid #ffeef1 !important;\n}.overlay-danger.overlay-accent-1 {\n  background: #ffeef1; /* The Fallback */\n  background: rgba(255, 238, 241, 0.6);\n}.text-danger.text-accent-2 {\n  color: #ffd6db !important;\n}.bg-danger.bg-accent-2 {\n  background-color: #ffd6db !important;\n}.border-danger.border-accent-2 {\n  border: 1px solid #ffd6db !important;\n}.border-top-danger.border-top-accent-2 {\n  border-top: 1px solid #ffd6db !important;\n}.border-bottom-danger.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffd6db !important;\n}.border-left-danger.border-left-accent-2 {\n  border-left: 1px solid #ffd6db !important;\n}.border-right-danger.border-right-accent-2 {\n  border-right: 1px solid #ffd6db !important;\n}.overlay-danger.overlay-accent-2 {\n  background: #ffd6db; /* The Fallback */\n  background: rgba(255, 214, 219, 0.6);\n}.text-danger.text-accent-3 {\n  color: #ffecee !important;\n}.bg-danger.bg-accent-3 {\n  background-color: #ffecee !important;\n}.border-danger.border-accent-3 {\n  border: 1px solid #ffecee !important;\n}.border-top-danger.border-top-accent-3 {\n  border-top: 1px solid #ffecee !important;\n}.border-bottom-danger.border-bottom-accent-3 {\n  border-bottom: 1px solid #ffecee !important;\n}.border-left-danger.border-left-accent-3 {\n  border-left: 1px solid #ffecee !important;\n}.border-right-danger.border-right-accent-3 {\n  border-right: 1px solid #ffecee !important;\n}.overlay-danger.overlay-accent-3 {\n  background: #ffecee; /* The Fallback */\n  background: rgba(255, 236, 238, 0.6);\n}.text-danger.text-accent-4 {\n  color: #ffd3d7 !important;\n}.bg-danger.bg-accent-4 {\n  background-color: #ffd3d7 !important;\n}.border-danger.border-accent-4 {\n  border: 1px solid #ffd3d7 !important;\n}.border-top-danger.border-top-accent-4 {\n  border-top: 1px solid #ffd3d7 !important;\n}.border-bottom-danger.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffd3d7 !important;\n}.border-left-danger.border-left-accent-4 {\n  border-left: 1px solid #ffd3d7 !important;\n}.border-right-danger.border-right-accent-4 {\n  border-right: 1px solid #ffd3d7 !important;\n}.overlay-danger.overlay-accent-4 {\n  background: #ffd3d7; /* The Fallback */\n  background: rgba(255, 211, 215, 0.6);\n}.bg-gradient-dark,\n.btn-gradient-dark {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #4b4b4b, #1e1e1e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.dark-layout .bg-gradient-dark,\n.dark-layout .btn-gradient-dark {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-dark:hover, .bg-gradient-dark:active,\n.btn-gradient-dark:hover,\n.btn-gradient-dark:active {\n  color: #fff;\n}.bg-gradient-dark:hover:not(.disabled):not(:disabled),\n.btn-gradient-dark:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-dark:active,\n.btn-gradient-dark:active {\n  transform: translateY(0);\n}.bg-gradient-dark:active, .bg-gradient-dark:focus,\n.btn-gradient-dark:active,\n.btn-gradient-dark:focus {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary,\n.btn-gradient-primary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #7367f0, #9e95f5);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary:hover, .bg-gradient-primary:active,\n.btn-gradient-primary:hover,\n.btn-gradient-primary:active {\n  color: #fff;\n}.bg-gradient-primary:hover:not(.disabled):not(:disabled),\n.btn-gradient-primary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-primary:active,\n.btn-gradient-primary:active {\n  transform: translateY(0);\n}.bg-gradient-primary:active, .bg-gradient-primary:focus,\n.btn-gradient-primary:active,\n.btn-gradient-primary:focus {\n  background-image: linear-gradient(47deg, #4839eb, #7367f0);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary,\n.btn-gradient-secondary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #82868b, #9ca0a4);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary:hover, .bg-gradient-secondary:active,\n.btn-gradient-secondary:hover,\n.btn-gradient-secondary:active {\n  color: #fff;\n}.bg-gradient-secondary:hover:not(.disabled):not(:disabled),\n.btn-gradient-secondary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-secondary:active,\n.btn-gradient-secondary:active {\n  transform: translateY(0);\n}.bg-gradient-secondary:active, .bg-gradient-secondary:focus,\n.btn-gradient-secondary:active,\n.btn-gradient-secondary:focus {\n  background-image: linear-gradient(47deg, #696d71, #82868b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success,\n.btn-gradient-success {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #28c76f, #48da89);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success:hover, .bg-gradient-success:active,\n.btn-gradient-success:hover,\n.btn-gradient-success:active {\n  color: #fff;\n}.bg-gradient-success:hover:not(.disabled):not(:disabled),\n.btn-gradient-success:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-success:active,\n.btn-gradient-success:active {\n  transform: translateY(0);\n}.bg-gradient-success:active, .bg-gradient-success:focus,\n.btn-gradient-success:active,\n.btn-gradient-success:focus {\n  background-image: linear-gradient(47deg, #1f9d57, #28c76f);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info,\n.btn-gradient-info {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #00cfe8, #1ce7ff);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info:hover, .bg-gradient-info:active,\n.btn-gradient-info:hover,\n.btn-gradient-info:active {\n  color: #fff;\n}.bg-gradient-info:hover:not(.disabled):not(:disabled),\n.btn-gradient-info:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-info:active,\n.btn-gradient-info:active {\n  transform: translateY(0);\n}.bg-gradient-info:active, .bg-gradient-info:focus,\n.btn-gradient-info:active,\n.btn-gradient-info:focus {\n  background-image: linear-gradient(47deg, #00a1b5, #00cfe8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning,\n.btn-gradient-warning {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ff9f43, #ffb976);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning:hover, .bg-gradient-warning:active,\n.btn-gradient-warning:hover,\n.btn-gradient-warning:active {\n  color: #fff;\n}.bg-gradient-warning:hover:not(.disabled):not(:disabled),\n.btn-gradient-warning:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-warning:active,\n.btn-gradient-warning:active {\n  transform: translateY(0);\n}.bg-gradient-warning:active, .bg-gradient-warning:focus,\n.btn-gradient-warning:active,\n.btn-gradient-warning:focus {\n  background-image: linear-gradient(47deg, #ff8510, #ff9f43);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger,\n.btn-gradient-danger {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ea5455, #f08182);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger:hover, .bg-gradient-danger:active,\n.btn-gradient-danger:hover,\n.btn-gradient-danger:active {\n  color: #fff;\n}.bg-gradient-danger:hover:not(.disabled):not(:disabled),\n.btn-gradient-danger:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-danger:active,\n.btn-gradient-danger:active {\n  transform: translateY(0);\n}.bg-gradient-danger:active, .bg-gradient-danger:focus,\n.btn-gradient-danger:active,\n.btn-gradient-danger:focus {\n  background-image: linear-gradient(47deg, #e42728, #ea5455);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #f3f2f7;\n  text-transform: uppercase;\n  height: 40px !important;\n  border-top: 1px solid #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n  padding: 0.75rem 1rem;\n  font-weight: bold;\n  font-size: 0.8rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell-template-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .sort-btn:before {\n  font-size: 1.3rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #f6f6f6;\n  color: #6e6b7b;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem 1rem;\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #fff;\n  color: #636363;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #636363;\n  line-height: 20px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover {\n  vertical-align: sub;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover a {\n  background-color: #7367f0 !important;\n  color: #fff !important;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: transparent !important;\n  color: #7367f0 !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 2px 0px 11px 0px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #fff;\n  color: #636363;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  background-color: #f3f2f7;\n  border-top-left-radius: 28px;\n  border-bottom-left-radius: 28px;\n  border-top-right-radius: 28px;\n  border-bottom-right-radius: 28px;\n  height: 36px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .page-count {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-cell {\n  overflow: visible !important;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}.dark-layout .datatable-header-inner,\n.dark-layout .datatable-header {\n  background-color: #343d55 !important;\n  border-top: 1px solid #3b4253 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #283046 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #636363;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #b4b7bd;\n}.dark-layout .datatable-body-row {\n  border-color: #3b4253 !important;\n}.dark-layout .datatable-body-row.active {\n  background-color: #283046 !important;\n  color: inherit !important;\n}.dark-layout .datatable-body {\n  background-color: #283046 !important;\n}.dark-layout .pager {\n  background-color: #242b3d !important;\n}.datatable-scroll {\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYW5ndWxhci9saWJzL2RhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vU2Vjb25kJTIwU3RvcmFnZS9wZXJzb25hbC1kYXNoYm9hcmQvc3JjL2FwcC9tYWluL3RhYmxlcy9kYXRhdGFibGVzL2RhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29yZS9jb2xvcnMvX3BhbGV0dGUuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21peGlucy9oZXgycmdiLnNjc3MiLCIuLi8uLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21peGlucy9hbGVydC5zY3NzIiwiLi4vLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29yZS9jb2xvcnMvcGFsZXR0ZS1ncmFkaWVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JhZGllbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9fdmFyaWFibGVzLWRhcmsuc2NzcyIsImRhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck1yQjs7Q0FBQSxDRkVSO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDR3BHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGLENEQUU7RUFDRSx1QkFBQTtFQUFBLDBCQUFBO0FDRUosQ0RESTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0dOLENERk07RUFDRSxpQkFBQTtBQ0lSLENEQ0k7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDQ04sQ0RBTTtFQUNFLHFDQUFBO0FDRVIsQ0RBTTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0VSLENEQU07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFUixDRENJO0VBR0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDRE4sQ0RJRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRkosQ0RHSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRE4sQ0RHSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0ROLENER1E7RUFDRSxnQkFBQTtBQ0RWLENES2M7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDSGhCLENEU007RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1BSLENEU007Ozs7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUFIsQ0RjTTtFQUNFLGlCQUFBO0FDWlIsQ0NyQ007RUFDRSxvQ0FBQTtBRHdDUixDQ3RDUTs7RUFFRSw2QkFBQTtBRHdDVixDQ3NCTTtFQUNFLG9DQUFBO0FEbkJSLENDc0JNO0VBQ0UsNkJBQUE7QURuQlIsQ0NzQk07RUFDRSxnQ0FBQTtBRG5CUixDQ3NCTTtFQUNFLDhCQUFBO0FEbkJSLENDc0JNO0VBQ0UsK0JBQUE7QURuQlIsQ0MwQlE7OztFQUNFLGdDQUFBO0FEckJWLENDcUNNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnlIRixDQ2tVTTtFQUNFLGlFQUFBO0FEL1RSLENDaEZNO0VBQ0Usb0NBQUE7QURtRlIsQ0NqRlE7O0VBRUUsNkJBQUE7QURtRlYsQ0NyQk07RUFDRSxvQ0FBQTtBRHdCUixDQ3JCTTtFQUNFLDZCQUFBO0FEd0JSLENDckJNO0VBQ0UsZ0NBQUE7QUR3QlIsQ0NyQk07RUFDRSw4QkFBQTtBRHdCUixDQ3JCTTtFQUNFLCtCQUFBO0FEd0JSLENDakJROzs7RUFDRSxnQ0FBQTtBRHNCVixDQ05NO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQiw4QkFBQTtBRm9LRixDQ3VSTTtFQUNFLGlFQUFBO0FEcFJSLENDM0hNO0VBQ0Usb0NBQUE7QUQ4SFIsQ0M1SFE7O0VBRUUsNkJBQUE7QUQ4SFYsQ0N4SFE7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FEMkhWLENDekhVO0VHM0RSLG1EQUFBO0FKdUxGLENDeEhVO0VBQ0UseUJBQUE7QUQwSFosQ0N0SFU7RUFDRSx5QkFBQTtBRHdIWixDQzlFTTtFQUNFLG9DQUFBO0FEaUZSLENDOUVNO0VBQ0UsNkJBQUE7QURpRlIsQ0M5RU07RUFDRSxnQ0FBQTtBRGlGUixDQzlFTTtFQUNFLDhCQUFBO0FEaUZSLENDOUVNO0VBQ0UsK0JBQUE7QURpRlIsQ0MxRVE7OztFQUNFLGdDQUFBO0FEK0VWLENDdkVVO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtBRDBFWixDQ3BFTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZrT0YsQ0NuRVE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURzRVYsQ0NwRVU7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRG9FWixDQ2pFVTtFQUNFLG1DQUFBO0FEbUVaLENDaEVVO0VBQ0UsZ0JBQUE7QURrRVosQ0MzRFE7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIdUlULENDNURVO0VBQ0UsY0U1RUg7QUgwSVQsQ0MzRFU7RUFDRSx3Q0FBQTtBRDZEWixDQzFEVTtFQUdFLHVDQUFBO0VBQ0EsY0V2Rkg7QUhpSlQsQ0N2RFU7RUFDRSwrU0FBQTtBRHlEWixDQ2xEUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEcURWLENDbkRZO0VBQ0UseUJBQUE7QURxRGQsQ0M5Q1U7RUFHRSx5QkFBQTtBRDhDWixDQzNDVTtFQUNFLFdJOU5KO0FMMlFSLENDM0NVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUQ0Q1osQ0NyQ1E7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUgrS1QsQ0N0Q1U7RUFDRSx3Q0FBQTtFQUNBLGNFM0lIO0FIbUxULENDdENVO0VBQ0UsZ0JBQUE7QUR3Q1osQ0N0Q1U7RUFHRSx1Q0FBQTtFQUNBLGNFcEpIO0FIMExULENDbkNVO0VBQ0UsK1NBQUE7QURxQ1osQ0NsQ1U7RUFDRSx1Q0FBQTtFQUNBLGNFN0pIO0FIaU1ULENDMUJZOztFQUNFLGlLQUFBO0FEOEJkLENDZlU7RUFDRSx5QkV4TEg7QUgwTVQsQ0NSYztFQUNFLGNFbk1QO0FIOE1ULENDVGM7RUFDRSx5QkFBQTtBRFdoQixDQzRFUTtFQUNFLHdDQUFBO0FEekVWLENDMkVVO0VBQ0UseUJFalNIO0FId05ULENDaUZVO0VBQ0UsZ0NBQUE7QUQ5RVosQ0NnRlk7O0VBRUUsMEJBQUE7QUQ5RWQsQ0NpRlk7RUFDRSxvQ0FBQTtBRC9FZCxDQ2dGYztFQUNFLDZDQUFBO0FEOUVoQixDQ3lGWTtFQUVFLGdDQUFBO0FEdkZkLENDaUdNO0VBQ0UsaUVBQUE7QUQ5RlIsQ0NvR1U7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSG9QVCxDQ3FHWTs7Ozs7RUFHRSx3REFBQTtBRGpHZCxDQ29HVTtFQUNFLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEbEdaLENDb0dVO0VBQ0UsZ0NBQUE7QURsR1osQ0MwR1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEdkdaLENDaUhjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRDlHaEIsQ0NxSE07RUFDRSx5QkFBQTtBRGxIUixDQ3FITTtFQUNFLG9DQUFBO0FEbEhSLENDcUhNO0VBQ0Usb0NBQUE7QURsSFIsQ0NxSE07RUFDRSx3Q0FBQTtBRGxIUixDQ3FITTtFQUNFLDJDQUFBO0FEbEhSLENDcUhNO0VBQ0UseUNBQUE7QURsSFIsQ0NxSE07RUFDRSwwQ0FBQTtBRGxIUixDQ3FITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGK1pGLENDb0ZNO0VBQ0UseUJBQUE7QURqRlIsQ0NvRk07RUFDRSxvQ0FBQTtBRGpGUixDQ29GTTtFQUNFLG9DQUFBO0FEakZSLENDb0ZNO0VBQ0Usd0NBQUE7QURqRlIsQ0NvRk07RUFDRSwyQ0FBQTtBRGpGUixDQ29GTTtFQUNFLHlDQUFBO0FEakZSLENDb0ZNO0VBQ0UsMENBQUE7QURqRlIsQ0NvRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRmdjRixDQ21ETTtFQUNFLHlCQUFBO0FEaERSLENDbURNO0VBQ0Usb0NBQUE7QURoRFIsQ0NtRE07RUFDRSxvQ0FBQTtBRGhEUixDQ21ETTtFQUNFLHdDQUFBO0FEaERSLENDbURNO0VBQ0UsMkNBQUE7QURoRFIsQ0NtRE07RUFDRSx5Q0FBQTtBRGhEUixDQ21ETTtFQUNFLDBDQUFBO0FEaERSLENDbURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZpZUYsQ0NwYk07RUFDRSxvQ0FBQTtBRHViUixDQ3JiUTs7RUFFRSw2QkFBQTtBRHViVixDQ3pYTTtFQUNFLG9DQUFBO0FENFhSLENDelhNO0VBQ0UsNkJBQUE7QUQ0WFIsQ0N6WE07RUFDRSxnQ0FBQTtBRDRYUixDQ3pYTTtFQUNFLDhCQUFBO0FENFhSLENDelhNO0VBQ0UsK0JBQUE7QUQ0WFIsQ0NyWFE7OztFQUNFLGdDQUFBO0FEMFhWLENDMVdNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRndnQkYsQ0M3RU07RUFDRSxpRUFBQTtBRGdGUixDQ3pCTTtFQUNFLHlCQUFBO0FENEJSLENDekJNO0VBQ0Usb0NBQUE7QUQ0QlIsQ0N6Qk07RUFDRSxvQ0FBQTtBRDRCUixDQ3pCTTtFQUNFLHdDQUFBO0FENEJSLENDekJNO0VBQ0UsMkNBQUE7QUQ0QlIsQ0N6Qk07RUFDRSx5Q0FBQTtBRDRCUixDQ3pCTTtFQUNFLDBDQUFBO0FENEJSLENDekJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY2aUJGLENDMURNO0VBQ0UseUJBQUE7QUQ2RFIsQ0MxRE07RUFDRSxvQ0FBQTtBRDZEUixDQzFETTtFQUNFLG9DQUFBO0FENkRSLENDMURNO0VBQ0Usd0NBQUE7QUQ2RFIsQ0MxRE07RUFDRSwyQ0FBQTtBRDZEUixDQzFETTtFQUNFLHlDQUFBO0FENkRSLENDMURNO0VBQ0UsMENBQUE7QUQ2RFIsQ0MxRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjhrQkYsQ0MzRk07RUFDRSx5QkFBQTtBRDhGUixDQzNGTTtFQUNFLG9DQUFBO0FEOEZSLENDM0ZNO0VBQ0Usb0NBQUE7QUQ4RlIsQ0MzRk07RUFDRSx3Q0FBQTtBRDhGUixDQzNGTTtFQUNFLDJDQUFBO0FEOEZSLENDM0ZNO0VBQ0UseUNBQUE7QUQ4RlIsQ0MzRk07RUFDRSwwQ0FBQTtBRDhGUixDQzNGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK21CRixDQzVITTtFQUNFLHlCQUFBO0FEK0hSLENDNUhNO0VBQ0Usb0NBQUE7QUQrSFIsQ0M1SE07RUFDRSxvQ0FBQTtBRCtIUixDQzVITTtFQUNFLHdDQUFBO0FEK0hSLENDNUhNO0VBQ0UsMkNBQUE7QUQrSFIsQ0M1SE07RUFDRSx5Q0FBQTtBRCtIUixDQzVITTtFQUNFLDBDQUFBO0FEK0hSLENDNUhNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZncEJGLENDN0pNO0VBQ0UseUJBQUE7QURnS1IsQ0M3Sk07RUFDRSxvQ0FBQTtBRGdLUixDQzdKTTtFQUNFLG9DQUFBO0FEZ0tSLENDN0pNO0VBQ0Usd0NBQUE7QURnS1IsQ0M3Sk07RUFDRSwyQ0FBQTtBRGdLUixDQzdKTTtFQUNFLHlDQUFBO0FEZ0tSLENDN0pNO0VBQ0UsMENBQUE7QURnS1IsQ0M3Sk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmlyQkYsQ0Nwb0JNO0VBQ0Usb0NBQUE7QUR1b0JSLENDcm9CUTs7RUFFRSw2QkFBQTtBRHVvQlYsQ0Nqb0JRO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBRG9vQlYsQ0Nsb0JVO0VHM0RSLHNEQUFBO0FKZ3NCRixDQ2pvQlU7RUFDRSx5QkFBQTtBRG1vQlosQ0MvbkJVO0VBQ0UseUJBQUE7QURpb0JaLENDMW5CUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUQ2bkJWLENDMW5CVTtFQUVFLHNDQUFBO0FEMm5CWixDQ3huQlU7O0VBRUUsZ0NBQUE7QUQwbkJaLENDdG5CWTtFQUNFLCtDQUFBO0FEd25CZCxDQ3JuQlk7RUFDRSxjSUVEO0FMcW5CYixDQy9tQlE7RUFDRSx5QkFBQTtBRGtuQlYsQ0M3bUJNO0VBQ0Usb0NBQUE7QURnbkJSLENDN21CTTtFQUNFLDZCQUFBO0FEZ25CUixDQzdtQk07RUFDRSxnQ0FBQTtBRGduQlIsQ0M3bUJNO0VBQ0UsOEJBQUE7QURnbkJSLENDN21CTTtFQUNFLCtCQUFBO0FEZ25CUixDQ3ptQlE7OztFQUNFLGdDQUFBO0FEOG1CVixDQ3RtQlU7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0FEeW1CWixDQ25tQk07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGaXdCRixDQ2xtQlE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURxbUJWLENDbm1CVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEbW1CWixDQ2htQlU7RUFDRSxtQ0FBQTtBRGttQlosQ0MvbEJVO0VBQ0UsZ0JBQUE7QURpbUJaLENDMWxCUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUhzcUJULENDM2xCVTtFQUNFLGNFNUVIO0FIeXFCVCxDQzFsQlU7RUFDRSwyQ0FBQTtBRDRsQlosQ0N6bEJVO0VBR0UsMENBQUE7RUFDQSxjRXZGSDtBSGdyQlQsQ0N0bEJVO0VBQ0UsK1NBQUE7QUR3bEJaLENDamxCUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEb2xCVixDQzlrQlk7RUFDRSx5QkFBQTtBRGdsQmQsQ0M3a0JVO0VBR0UseUJBQUE7QUQ2a0JaLENDMWtCVTtFQUNFLFdJOU5KO0FMMHlCUixDQzFrQlU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRDJrQlosQ0Nwa0JRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIOHNCVCxDQ3JrQlU7RUFDRSwyQ0FBQTtFQUNBLGNFM0lIO0FIa3RCVCxDQ3JrQlU7RUFDRSxnQkFBQTtBRHVrQlosQ0Nya0JVO0VBR0UsMENBQUE7RUFDQSxjRXBKSDtBSHl0QlQsQ0Nsa0JVO0VBQ0UsK1NBQUE7QURva0JaLENDamtCVTtFQUNFLDBDQUFBO0VBQ0EsY0U3Skg7QUhndUJULENDempCWTs7RUFDRSw2S0FBQTtBRDZqQmQsQ0M5aUJVO0VBQ0UseUJFeExIO0FIeXVCVCxDQ3ZpQmM7RUFDRSxjRW5NUDtBSDZ1QlQsQ0N4aUJjO0VBQ0UseUJBQUE7QUQwaUJoQixDQzloQmM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMNDFCUixDQy9oQmdCO0VBQ0UsV0k5VFY7QUwrMUJSLENDM2hCYztFQUNFLGNFOU5QO0FIMnZCVCxDQ3ZoQmM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUxzMkJSLENDamhCa0I7RUFDRSwyVEFBQTtBRG1oQnBCLENDcmdCa0I7RUFDRSwyVEFBQTtBRHVnQnBCLENDcmZjO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8scURBQUE7QUR3ZmhCLENDL2VRO0VBQ0UsMkNBQUE7QURrZlYsQ0NoZlU7RUFDRSx5QkVqU0g7QUhteEJULENDMWVVO0VBQ0UsZ0NBQUE7QUQ2ZVosQ0MzZVk7O0VBRUUsMEJBQUE7QUQ2ZWQsQ0MxZVk7RUFDRSxvQ0FBQTtBRDRlZCxDQzNlYztFQUNFLGdEQUFBO0FENmVoQixDQ2xlWTtFQUVFLGdDQUFBO0FEb2VkLENDMWRNO0VBQ0UsaUVBQUE7QUQ2ZFIsQ0N2ZFU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSCt5QlQsQ0N0ZFk7Ozs7O0VBR0UsMkRBQUE7QUQwZGQsQ0N2ZFU7RUFDRSxzREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRHlkWixDQ3ZkVTtFQUNFLGdDQUFBO0FEeWRaLENDamRVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRG9kWixDQzFjYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ2Y2hCLENDdGNNO0VBQ0UseUJBQUE7QUR5Y1IsQ0N0Y007RUFDRSxvQ0FBQTtBRHljUixDQ3RjTTtFQUNFLG9DQUFBO0FEeWNSLENDdGNNO0VBQ0Usd0NBQUE7QUR5Y1IsQ0N0Y007RUFDRSwyQ0FBQTtBRHljUixDQ3RjTTtFQUNFLHlDQUFBO0FEeWNSLENDdGNNO0VBQ0UsMENBQUE7QUR5Y1IsQ0N0Y007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjA5QkYsQ0N2ZU07RUFDRSx5QkFBQTtBRDBlUixDQ3ZlTTtFQUNFLG9DQUFBO0FEMGVSLENDdmVNO0VBQ0Usb0NBQUE7QUQwZVIsQ0N2ZU07RUFDRSx3Q0FBQTtBRDBlUixDQ3ZlTTtFQUNFLDJDQUFBO0FEMGVSLENDdmVNO0VBQ0UseUNBQUE7QUQwZVIsQ0N2ZU07RUFDRSwwQ0FBQTtBRDBlUixDQ3ZlTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGMi9CRixDQ3hnQk07RUFDRSx5QkFBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0Usb0NBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLG9DQUFBO0FEMmdCUixDQ3hnQk07RUFDRSx3Q0FBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0UsMkNBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLHlDQUFBO0FEMmdCUixDQ3hnQk07RUFDRSwwQ0FBQTtBRDJnQlIsQ0N4Z0JNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY0aENGLENDemlCTTtFQUNFLHlCQUFBO0FENGlCUixDQ3ppQk07RUFDRSxvQ0FBQTtBRDRpQlIsQ0N6aUJNO0VBQ0Usb0NBQUE7QUQ0aUJSLENDemlCTTtFQUNFLHdDQUFBO0FENGlCUixDQ3ppQk07RUFDRSwyQ0FBQTtBRDRpQlIsQ0N6aUJNO0VBQ0UseUNBQUE7QUQ0aUJSLENDemlCTTtFQUNFLDBDQUFBO0FENGlCUixDQ3ppQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjZqQ0YsQ0Mxa0JNO0VBQ0UseUJBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLG9DQUFBO0FENmtCUixDQzFrQk07RUFDRSxvQ0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0Usd0NBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLDJDQUFBO0FENmtCUixDQzFrQk07RUFDRSx5Q0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0UsMENBQUE7QUQ2a0JSLENDMWtCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOGxDRixDQzNtQk07RUFDRSx5QkFBQTtBRDhtQlIsQ0MzbUJNO0VBQ0Usb0NBQUE7QUQ4bUJSLENDM21CTTtFQUNFLG9DQUFBO0FEOG1CUixDQzNtQk07RUFDRSx3Q0FBQTtBRDhtQlIsQ0MzbUJNO0VBQ0UsMkNBQUE7QUQ4bUJSLENDM21CTTtFQUNFLHlDQUFBO0FEOG1CUixDQzNtQk07RUFDRSwwQ0FBQTtBRDhtQlIsQ0MzbUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrbkNGLENDNW9CTTtFQUNFLHlCQUFBO0FEK29CUixDQzVvQk07RUFDRSxvQ0FBQTtBRCtvQlIsQ0M1b0JNO0VBQ0Usb0NBQUE7QUQrb0JSLENDNW9CTTtFQUNFLHdDQUFBO0FEK29CUixDQzVvQk07RUFDRSwyQ0FBQTtBRCtvQlIsQ0M1b0JNO0VBQ0UseUNBQUE7QUQrb0JSLENDNW9CTTtFQUNFLDBDQUFBO0FEK29CUixDQzVvQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRmdxQ0YsQ0M3cUJNO0VBQ0UseUJBQUE7QURnckJSLENDN3FCTTtFQUNFLG9DQUFBO0FEZ3JCUixDQzdxQk07RUFDRSxvQ0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0Usd0NBQUE7QURnckJSLENDN3FCTTtFQUNFLDJDQUFBO0FEZ3JCUixDQzdxQk07RUFDRSx5Q0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0UsMENBQUE7QURnckJSLENDN3FCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGaXNDRixDQzlzQk07RUFDRSx5QkFBQTtBRGl0QlIsQ0M5c0JNO0VBQ0Usb0NBQUE7QURpdEJSLENDOXNCTTtFQUNFLG9DQUFBO0FEaXRCUixDQzlzQk07RUFDRSx3Q0FBQTtBRGl0QlIsQ0M5c0JNO0VBQ0UsMkNBQUE7QURpdEJSLENDOXNCTTtFQUNFLHlDQUFBO0FEaXRCUixDQzlzQk07RUFDRSwwQ0FBQTtBRGl0QlIsQ0M5c0JNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZrdUNGLENDL3VCTTtFQUNFLHlCQUFBO0FEa3ZCUixDQy91Qk07RUFDRSxvQ0FBQTtBRGt2QlIsQ0MvdUJNO0VBQ0Usb0NBQUE7QURrdkJSLENDL3VCTTtFQUNFLHdDQUFBO0FEa3ZCUixDQy91Qk07RUFDRSwyQ0FBQTtBRGt2QlIsQ0MvdUJNO0VBQ0UseUNBQUE7QURrdkJSLENDL3VCTTtFQUNFLDBDQUFBO0FEa3ZCUixDQy91Qk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm13Q0YsQ0NoeEJNO0VBQ0UseUJBQUE7QURteEJSLENDaHhCTTtFQUNFLG9DQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSxvQ0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0Usd0NBQUE7QURteEJSLENDaHhCTTtFQUNFLDJDQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSx5Q0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0UsMENBQUE7QURteEJSLENDaHhCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGb3lDRixDQ2p6Qk07RUFDRSx5QkFBQTtBRG96QlIsQ0NqekJNO0VBQ0Usb0NBQUE7QURvekJSLENDanpCTTtFQUNFLG9DQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSx3Q0FBQTtBRG96QlIsQ0NqekJNO0VBQ0UsMkNBQUE7QURvekJSLENDanpCTTtFQUNFLHlDQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSwwQ0FBQTtBRG96QlIsQ0NqekJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxMENGLENDbDFCTTtFQUNFLHlCQUFBO0FEcTFCUixDQ2wxQk07RUFDRSxvQ0FBQTtBRHExQlIsQ0NsMUJNO0VBQ0Usb0NBQUE7QURxMUJSLENDbDFCTTtFQUNFLHdDQUFBO0FEcTFCUixDQ2wxQk07RUFDRSwyQ0FBQTtBRHExQlIsQ0NsMUJNO0VBQ0UseUNBQUE7QURxMUJSLENDbDFCTTtFQUNFLDBDQUFBO0FEcTFCUixDQ2wxQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnMyQ0YsQ0N6ekNNO0VBQ0Usb0NBQUE7QUQ0ekNSLENDMXpDUTs7RUFFRSw2QkFBQTtBRDR6Q1YsQ0N0ekNRO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBRHl6Q1YsQ0N2ekNVO0VHM0RSLHNEQUFBO0FKcTNDRixDQ3R6Q1U7RUFDRSx5QkFBQTtBRHd6Q1osQ0NwekNVO0VBQ0UseUJBQUE7QURzekNaLENDL3lDUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QURrekNWLENDL3lDVTtFQUVFLHNDQUFBO0FEZ3pDWixDQzd5Q1U7O0VBRUUsZ0NBQUE7QUQreUNaLENDM3lDWTtFQUNFLCtDQUFBO0FENnlDZCxDQzF5Q1k7RUFDRSxjSUVEO0FMMHlDYixDQ3B5Q1E7RUFDRSx5QkFBQTtBRHV5Q1YsQ0NseUNNO0VBQ0Usb0NBQUE7QURxeUNSLENDbHlDTTtFQUNFLDZCQUFBO0FEcXlDUixDQ2x5Q007RUFDRSxnQ0FBQTtBRHF5Q1IsQ0NseUNNO0VBQ0UsOEJBQUE7QURxeUNSLENDbHlDTTtFQUNFLCtCQUFBO0FEcXlDUixDQzl4Q1E7OztFQUNFLGdDQUFBO0FEbXlDVixDQzN4Q1U7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0FEOHhDWixDQ3h4Q007RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGczdDRixDQ3Z4Q1E7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUQweENWLENDeHhDVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEd3hDWixDQ3J4Q1U7RUFDRSxtQ0FBQTtBRHV4Q1osQ0NweENVO0VBQ0UsZ0JBQUE7QURzeENaLENDL3dDUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUgyMUNULENDaHhDVTtFQUNFLGNFNUVIO0FIODFDVCxDQy93Q1U7RUFDRSwyQ0FBQTtBRGl4Q1osQ0M5d0NVO0VBR0UsMENBQUE7RUFDQSxjRXZGSDtBSHEyQ1QsQ0Mzd0NVO0VBQ0UsK1NBQUE7QUQ2d0NaLENDdHdDUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEeXdDVixDQ253Q1k7RUFDRSx5QkFBQTtBRHF3Q2QsQ0Nsd0NVO0VBR0UseUJBQUE7QURrd0NaLENDL3ZDVTtFQUNFLFdJOU5KO0FMKzlDUixDQy92Q1U7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGd3Q1osQ0N6dkNRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIbTRDVCxDQzF2Q1U7RUFDRSwyQ0FBQTtFQUNBLGNFM0lIO0FIdTRDVCxDQzF2Q1U7RUFDRSxnQkFBQTtBRDR2Q1osQ0MxdkNVO0VBR0UsMENBQUE7RUFDQSxjRXBKSDtBSDg0Q1QsQ0N2dkNVO0VBQ0UsK1NBQUE7QUR5dkNaLENDdHZDVTtFQUNFLDBDQUFBO0VBQ0EsY0U3Skg7QUhxNUNULENDOXVDWTs7RUFDRSw2S0FBQTtBRGt2Q2QsQ0NudUNVO0VBQ0UseUJFeExIO0FIODVDVCxDQzV0Q2M7RUFDRSxjRW5NUDtBSGs2Q1QsQ0M3dENjO0VBQ0UseUJBQUE7QUQrdENoQixDQ250Q2M7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMaWhEUixDQ3B0Q2dCO0VBQ0UsV0k5VFY7QUxvaERSLENDaHRDYztFQUNFLGNFOU5QO0FIZzdDVCxDQzVzQ2M7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUwyaERSLENDdHNDa0I7RUFDRSwyVEFBQTtBRHdzQ3BCLENDMXJDa0I7RUFDRSwyVEFBQTtBRDRyQ3BCLENDMXFDYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLHFEQUFBO0FENnFDaEIsQ0NwcUNRO0VBQ0UsMkNBQUE7QUR1cUNWLENDcnFDVTtFQUNFLHlCRWpTSDtBSHc4Q1QsQ0MvcENVO0VBQ0UsZ0NBQUE7QURrcUNaLENDaHFDWTs7RUFFRSwwQkFBQTtBRGtxQ2QsQ0MvcENZO0VBQ0Usb0NBQUE7QURpcUNkLENDaHFDYztFQUNFLGdEQUFBO0FEa3FDaEIsQ0N2cENZO0VBRUUsZ0NBQUE7QUR5cENkLENDL29DTTtFQUNFLGlFQUFBO0FEa3BDUixDQzVvQ1U7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSG8rQ1QsQ0Mzb0NZOzs7OztFQUdFLDJEQUFBO0FEK29DZCxDQzVvQ1U7RUFDRSxzREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRDhvQ1osQ0M1b0NVO0VBQ0UsZ0NBQUE7QUQ4b0NaLENDdG9DVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUR5b0NaLENDL25DYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURrb0NoQixDQzNuQ007RUFDRSx5QkFBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0Usb0NBQUE7QUQ4bkNSLENDM25DTTtFQUNFLG9DQUFBO0FEOG5DUixDQzNuQ007RUFDRSx3Q0FBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0UsMkNBQUE7QUQ4bkNSLENDM25DTTtFQUNFLHlDQUFBO0FEOG5DUixDQzNuQ007RUFDRSwwQ0FBQTtBRDhuQ1IsQ0MzbkNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrb0RGLENDNXBDTTtFQUNFLHlCQUFBO0FEK3BDUixDQzVwQ007RUFDRSxvQ0FBQTtBRCtwQ1IsQ0M1cENNO0VBQ0Usb0NBQUE7QUQrcENSLENDNXBDTTtFQUNFLHdDQUFBO0FEK3BDUixDQzVwQ007RUFDRSwyQ0FBQTtBRCtwQ1IsQ0M1cENNO0VBQ0UseUNBQUE7QUQrcENSLENDNXBDTTtFQUNFLDBDQUFBO0FEK3BDUixDQzVwQ007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmdyREYsQ0M3ckNNO0VBQ0UseUJBQUE7QURnc0NSLENDN3JDTTtFQUNFLG9DQUFBO0FEZ3NDUixDQzdyQ007RUFDRSxvQ0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0Usd0NBQUE7QURnc0NSLENDN3JDTTtFQUNFLDJDQUFBO0FEZ3NDUixDQzdyQ007RUFDRSx5Q0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0UsMENBQUE7QURnc0NSLENDN3JDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGaXRERixDQzl0Q007RUFDRSx5QkFBQTtBRGl1Q1IsQ0M5dENNO0VBQ0Usb0NBQUE7QURpdUNSLENDOXRDTTtFQUNFLG9DQUFBO0FEaXVDUixDQzl0Q007RUFDRSx3Q0FBQTtBRGl1Q1IsQ0M5dENNO0VBQ0UsMkNBQUE7QURpdUNSLENDOXRDTTtFQUNFLHlDQUFBO0FEaXVDUixDQzl0Q007RUFDRSwwQ0FBQTtBRGl1Q1IsQ0M5dENNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZrdkRGLENDL3ZDTTtFQUNFLHlCQUFBO0FEa3dDUixDQy92Q007RUFDRSxvQ0FBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0Usb0NBQUE7QURrd0NSLENDL3ZDTTtFQUNFLHdDQUFBO0FEa3dDUixDQy92Q007RUFDRSwyQ0FBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0UseUNBQUE7QURrd0NSLENDL3ZDTTtFQUNFLDBDQUFBO0FEa3dDUixDQy92Q007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm14REYsQ0NoeUNNO0VBQ0UseUJBQUE7QURteUNSLENDaHlDTTtFQUNFLG9DQUFBO0FEbXlDUixDQ2h5Q007RUFDRSxvQ0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0Usd0NBQUE7QURteUNSLENDaHlDTTtFQUNFLDJDQUFBO0FEbXlDUixDQ2h5Q007RUFDRSx5Q0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0UsMENBQUE7QURteUNSLENDaHlDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGb3pERixDQ2owQ007RUFDRSx5QkFBQTtBRG8wQ1IsQ0NqMENNO0VBQ0Usb0NBQUE7QURvMENSLENDajBDTTtFQUNFLG9DQUFBO0FEbzBDUixDQ2owQ007RUFDRSx3Q0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0UsMkNBQUE7QURvMENSLENDajBDTTtFQUNFLHlDQUFBO0FEbzBDUixDQ2owQ007RUFDRSwwQ0FBQTtBRG8wQ1IsQ0NqMENNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZxMURGLENDbDJDTTtFQUNFLHlCQUFBO0FEcTJDUixDQ2wyQ007RUFDRSxvQ0FBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0Usb0NBQUE7QURxMkNSLENDbDJDTTtFQUNFLHdDQUFBO0FEcTJDUixDQ2wyQ007RUFDRSwyQ0FBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0UseUNBQUE7QURxMkNSLENDbDJDTTtFQUNFLDBDQUFBO0FEcTJDUixDQ2wyQ007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnMzREYsQ0NuNENNO0VBQ0UseUJBQUE7QURzNENSLENDbjRDTTtFQUNFLG9DQUFBO0FEczRDUixDQ240Q007RUFDRSxvQ0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0Usd0NBQUE7QURzNENSLENDbjRDTTtFQUNFLDJDQUFBO0FEczRDUixDQ240Q007RUFDRSx5Q0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0UsMENBQUE7QURzNENSLENDbjRDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGdTVERixDQzEyRE07RUFDRSxvQ0FBQTtBRDYyRFIsQ0MzMkRROztFQUVFLDZCQUFBO0FENjJEVixDQ3YyRFE7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FEMDJEVixDQ3gyRFU7RUczRFIscURBQUE7QUpzNkRGLENDdjJEVTtFQUNFLHlCQUFBO0FEeTJEWixDQ3IyRFU7RUFDRSx5QkFBQTtBRHUyRFosQ0NoMkRRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRG0yRFYsQ0NoMkRVO0VBRUUscUNBQUE7QURpMkRaLENDOTFEVTs7RUFFRSxnQ0FBQTtBRGcyRFosQ0M1MURZO0VBQ0UsOENBQUE7QUQ4MURkLENDMzFEWTtFQUNFLGNJRUQ7QUwyMURiLENDcjFEUTtFQUNFLHlCQUFBO0FEdzFEVixDQ24xRE07RUFDRSxvQ0FBQTtBRHMxRFIsQ0NuMURNO0VBQ0UsNkJBQUE7QURzMURSLENDbjFETTtFQUNFLGdDQUFBO0FEczFEUixDQ24xRE07RUFDRSw4QkFBQTtBRHMxRFIsQ0NuMURNO0VBQ0UsK0JBQUE7QURzMURSLENDLzBEUTs7O0VBQ0UsZ0NBQUE7QURvMURWLENDNTBEVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUQrMERaLENDejBETTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZ1K0RGLENDeDBEUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRDIwRFYsQ0N6MERVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QUR5MERaLENDdDBEVTtFQUNFLG1DQUFBO0FEdzBEWixDQ3IwRFU7RUFDRSxnQkFBQTtBRHUwRFosQ0NoMERRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSDQ0RFQsQ0NqMERVO0VBQ0UsY0U1RUg7QUgrNERULENDaDBEVTtFQUNFLDBDQUFBO0FEazBEWixDQy96RFU7RUFHRSx5Q0FBQTtFQUNBLGNFdkZIO0FIczVEVCxDQzV6RFU7RUFDRSwrU0FBQTtBRDh6RFosQ0N2ekRRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QUQwekRWLENDcHpEWTtFQUNFLHlCQUFBO0FEc3pEZCxDQ256RFU7RUFHRSx5QkFBQTtBRG16RFosQ0NoekRVO0VBQ0UsV0k5Tko7QUxnaEVSLENDaHpEVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEaXpEWixDQzF5RFE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUhvN0RULENDM3lEVTtFQUNFLDBDQUFBO0VBQ0EsY0UzSUg7QUh3N0RULENDM3lEVTtFQUNFLGdCQUFBO0FENnlEWixDQzN5RFU7RUFHRSx5Q0FBQTtFQUNBLGNFcEpIO0FIKzdEVCxDQ3h5RFU7RUFDRSwrU0FBQTtBRDB5RFosQ0N2eURVO0VBQ0UseUNBQUE7RUFDQSxjRTdKSDtBSHM4RFQsQ0MveERZOztFQUNFLHlLQUFBO0FEbXlEZCxDQ3B4RFU7RUFDRSx5QkV4TEg7QUgrOERULENDN3dEYztFQUNFLGNFbk1QO0FIbTlEVCxDQzl3RGM7RUFDRSx5QkFBQTtBRGd4RGhCLENDcHdEYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUxra0VSLENDcndEZ0I7RUFDRSxXSTlUVjtBTHFrRVIsQ0Nqd0RjO0VBQ0UsY0U5TlA7QUhpK0RULENDN3ZEYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTDRrRVIsQ0N2dkRrQjtFQUNFLDJUQUFBO0FEeXZEcEIsQ0MzdURrQjtFQUNFLDJUQUFBO0FENnVEcEIsQ0MzdERjO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sb0RBQUE7QUQ4dERoQixDQ3J0RFE7RUFDRSwwQ0FBQTtBRHd0RFYsQ0N0dERVO0VBQ0UseUJFalNIO0FIeS9EVCxDQ2h0RFU7RUFDRSxnQ0FBQTtBRG10RFosQ0NqdERZOztFQUVFLDBCQUFBO0FEbXREZCxDQ2h0RFk7RUFDRSxvQ0FBQTtBRGt0RGQsQ0NqdERjO0VBQ0UsK0NBQUE7QURtdERoQixDQ3hzRFk7RUFFRSxnQ0FBQTtBRDBzRGQsQ0Noc0RNO0VBQ0UsaUVBQUE7QURtc0RSLENDN3JEVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIcWhFVCxDQzVyRFk7Ozs7O0VBR0UsMERBQUE7QURnc0RkLENDN3JEVTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEK3JEWixDQzdyRFU7RUFDRSxnQ0FBQTtBRCtyRFosQ0N2ckRVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRDByRFosQ0NockRjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRG1yRGhCLENDNXFETTtFQUNFLHlCQUFBO0FEK3FEUixDQzVxRE07RUFDRSxvQ0FBQTtBRCtxRFIsQ0M1cURNO0VBQ0Usb0NBQUE7QUQrcURSLENDNXFETTtFQUNFLHdDQUFBO0FEK3FEUixDQzVxRE07RUFDRSwyQ0FBQTtBRCtxRFIsQ0M1cURNO0VBQ0UseUNBQUE7QUQrcURSLENDNXFETTtFQUNFLDBDQUFBO0FEK3FEUixDQzVxRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmdzRUYsQ0M3c0RNO0VBQ0UseUJBQUE7QURndERSLENDN3NETTtFQUNFLG9DQUFBO0FEZ3REUixDQzdzRE07RUFDRSxvQ0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0Usd0NBQUE7QURndERSLENDN3NETTtFQUNFLDJDQUFBO0FEZ3REUixDQzdzRE07RUFDRSx5Q0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0UsMENBQUE7QURndERSLENDN3NETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGaXVFRixDQzl1RE07RUFDRSx5QkFBQTtBRGl2RFIsQ0M5dURNO0VBQ0Usb0NBQUE7QURpdkRSLENDOXVETTtFQUNFLG9DQUFBO0FEaXZEUixDQzl1RE07RUFDRSx3Q0FBQTtBRGl2RFIsQ0M5dURNO0VBQ0UsMkNBQUE7QURpdkRSLENDOXVETTtFQUNFLHlDQUFBO0FEaXZEUixDQzl1RE07RUFDRSwwQ0FBQTtBRGl2RFIsQ0M5dURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZrd0VGLENDL3dETTtFQUNFLHlCQUFBO0FEa3hEUixDQy93RE07RUFDRSxvQ0FBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0Usb0NBQUE7QURreERSLENDL3dETTtFQUNFLHdDQUFBO0FEa3hEUixDQy93RE07RUFDRSwyQ0FBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0UseUNBQUE7QURreERSLENDL3dETTtFQUNFLDBDQUFBO0FEa3hEUixDQy93RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRm15RUYsQ0NoekRNO0VBQ0UseUJBQUE7QURtekRSLENDaHpETTtFQUNFLG9DQUFBO0FEbXpEUixDQ2h6RE07RUFDRSxvQ0FBQTtBRG16RFIsQ0NoekRNO0VBQ0Usd0NBQUE7QURtekRSLENDaHpETTtFQUNFLDJDQUFBO0FEbXpEUixDQ2h6RE07RUFDRSx5Q0FBQTtBRG16RFIsQ0NoekRNO0VBQ0UsMENBQUE7QURtekRSLENDaHpETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbzBFRixDQ2oxRE07RUFDRSx5QkFBQTtBRG8xRFIsQ0NqMURNO0VBQ0Usb0NBQUE7QURvMURSLENDajFETTtFQUNFLG9DQUFBO0FEbzFEUixDQ2oxRE07RUFDRSx3Q0FBQTtBRG8xRFIsQ0NqMURNO0VBQ0UsMkNBQUE7QURvMURSLENDajFETTtFQUNFLHlDQUFBO0FEbzFEUixDQ2oxRE07RUFDRSwwQ0FBQTtBRG8xRFIsQ0NqMURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxMkVGLENDbDNETTtFQUNFLHlCQUFBO0FEcTNEUixDQ2wzRE07RUFDRSxvQ0FBQTtBRHEzRFIsQ0NsM0RNO0VBQ0Usb0NBQUE7QURxM0RSLENDbDNETTtFQUNFLHdDQUFBO0FEcTNEUixDQ2wzRE07RUFDRSwyQ0FBQTtBRHEzRFIsQ0NsM0RNO0VBQ0UseUNBQUE7QURxM0RSLENDbDNETTtFQUNFLDBDQUFBO0FEcTNEUixDQ2wzRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM0RUYsQ0NuNURNO0VBQ0UseUJBQUE7QURzNURSLENDbjVETTtFQUNFLG9DQUFBO0FEczVEUixDQ241RE07RUFDRSxvQ0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0Usd0NBQUE7QURzNURSLENDbjVETTtFQUNFLDJDQUFBO0FEczVEUixDQ241RE07RUFDRSx5Q0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0UsMENBQUE7QURzNURSLENDbjVETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGdTZFRixDQ3A3RE07RUFDRSx5QkFBQTtBRHU3RFIsQ0NwN0RNO0VBQ0Usb0NBQUE7QUR1N0RSLENDcDdETTtFQUNFLG9DQUFBO0FEdTdEUixDQ3A3RE07RUFDRSx3Q0FBQTtBRHU3RFIsQ0NwN0RNO0VBQ0UsMkNBQUE7QUR1N0RSLENDcDdETTtFQUNFLHlDQUFBO0FEdTdEUixDQ3A3RE07RUFDRSwwQ0FBQTtBRHU3RFIsQ0NwN0RNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ3OEVGLENDcjlETTtFQUNFLHlCQUFBO0FEdzlEUixDQ3I5RE07RUFDRSxvQ0FBQTtBRHc5RFIsQ0NyOURNO0VBQ0Usb0NBQUE7QUR3OURSLENDcjlETTtFQUNFLHdDQUFBO0FEdzlEUixDQ3I5RE07RUFDRSwyQ0FBQTtBRHc5RFIsQ0NyOURNO0VBQ0UseUNBQUE7QUR3OURSLENDcjlETTtFQUNFLDBDQUFBO0FEdzlEUixDQ3I5RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnkrRUYsQ0N0L0RNO0VBQ0UseUJBQUE7QUR5L0RSLENDdC9ETTtFQUNFLG9DQUFBO0FEeS9EUixDQ3QvRE07RUFDRSxvQ0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0Usd0NBQUE7QUR5L0RSLENDdC9ETTtFQUNFLDJDQUFBO0FEeS9EUixDQ3QvRE07RUFDRSx5Q0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0UsMENBQUE7QUR5L0RSLENDdC9ETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMGdGRixDQ3ZoRU07RUFDRSx5QkFBQTtBRDBoRVIsQ0N2aEVNO0VBQ0Usb0NBQUE7QUQwaEVSLENDdmhFTTtFQUNFLG9DQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSx3Q0FBQTtBRDBoRVIsQ0N2aEVNO0VBQ0UsMkNBQUE7QUQwaEVSLENDdmhFTTtFQUNFLHlDQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSwwQ0FBQTtBRDBoRVIsQ0N2aEVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUYyaUZGLENDeGpFTTtFQUNFLHlCQUFBO0FEMmpFUixDQ3hqRU07RUFDRSxvQ0FBQTtBRDJqRVIsQ0N4akVNO0VBQ0Usb0NBQUE7QUQyakVSLENDeGpFTTtFQUNFLHdDQUFBO0FEMmpFUixDQ3hqRU07RUFDRSwyQ0FBQTtBRDJqRVIsQ0N4akVNO0VBQ0UseUNBQUE7QUQyakVSLENDeGpFTTtFQUNFLDBDQUFBO0FEMmpFUixDQ3hqRU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjRrRkYsQ0MvaEZNO0VBQ0Usb0NBQUE7QURraUZSLENDaGlGUTs7RUFFRSw2QkFBQTtBRGtpRlYsQ0M1aEZRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRCtoRlYsQ0M3aEZVO0VHM0RSLG9EQUFBO0FKMmxGRixDQzVoRlU7RUFDRSx5QkFBQTtBRDhoRlosQ0MxaEZVO0VBQ0UseUJBQUE7QUQ0aEZaLENDcmhGUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUR3aEZWLENDcmhGVTtFQUVFLG9DQUFBO0FEc2hGWixDQ25oRlU7O0VBRUUsZ0NBQUE7QURxaEZaLENDamhGWTtFQUNFLDZDQUFBO0FEbWhGZCxDQ2hoRlk7RUFDRSxjSUVEO0FMZ2hGYixDQzFnRlE7RUFDRSx5QkFBQTtBRDZnRlYsQ0N4Z0ZNO0VBQ0Usb0NBQUE7QUQyZ0ZSLENDeGdGTTtFQUNFLDZCQUFBO0FEMmdGUixDQ3hnRk07RUFDRSxnQ0FBQTtBRDJnRlIsQ0N4Z0ZNO0VBQ0UsOEJBQUE7QUQyZ0ZSLENDeGdGTTtFQUNFLCtCQUFBO0FEMmdGUixDQ3BnRlE7OztFQUNFLGdDQUFBO0FEeWdGVixDQ2pnRlU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FEb2dGWixDQzkvRU07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGNHBGRixDQzcvRVE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURnZ0ZWLENDOS9FVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEOC9FWixDQzMvRVU7RUFDRSxtQ0FBQTtBRDYvRVosQ0MxL0VVO0VBQ0UsZ0JBQUE7QUQ0L0VaLENDci9FUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUhpa0ZULENDdC9FVTtFQUNFLGNFNUVIO0FIb2tGVCxDQ3IvRVU7RUFDRSx5Q0FBQTtBRHUvRVosQ0NwL0VVO0VBR0Usd0NBQUE7RUFDQSxjRXZGSDtBSDJrRlQsQ0NqL0VVO0VBQ0UsK1NBQUE7QURtL0VaLENDNStFUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEKytFVixDQ3orRVk7RUFDRSx5QkFBQTtBRDIrRWQsQ0N4K0VVO0VBR0UseUJBQUE7QUR3K0VaLENDcitFVTtFQUNFLFdJOU5KO0FMcXNGUixDQ3IrRVU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRHMrRVosQ0MvOUVRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIeW1GVCxDQ2grRVU7RUFDRSx5Q0FBQTtFQUNBLGNFM0lIO0FINm1GVCxDQ2grRVU7RUFDRSxnQkFBQTtBRGsrRVosQ0NoK0VVO0VBR0Usd0NBQUE7RUFDQSxjRXBKSDtBSG9uRlQsQ0M3OUVVO0VBQ0UsK1NBQUE7QUQrOUVaLENDNTlFVTtFQUNFLHdDQUFBO0VBQ0EsY0U3Skg7QUgybkZULENDcDlFWTs7RUFDRSxxS0FBQTtBRHc5RWQsQ0N6OEVVO0VBQ0UseUJFeExIO0FIb29GVCxDQ2w4RWM7RUFDRSxjRW5NUDtBSHdvRlQsQ0NuOEVjO0VBQ0UseUJBQUE7QURxOEVoQixDQ3o3RWM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMdXZGUixDQzE3RWdCO0VBQ0UsV0k5VFY7QUwwdkZSLENDdDdFYztFQUNFLGNFOU5QO0FIc3BGVCxDQ2w3RWM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUxpd0ZSLENDNTZFa0I7RUFDRSwyVEFBQTtBRDg2RXBCLENDaDZFa0I7RUFDRSwyVEFBQTtBRGs2RXBCLENDaDVFYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG1EQUFBO0FEbTVFaEIsQ0MxNEVRO0VBQ0UseUNBQUE7QUQ2NEVWLENDMzRFVTtFQUNFLHlCRWpTSDtBSDhxRlQsQ0NyNEVVO0VBQ0UsZ0NBQUE7QUR3NEVaLENDdDRFWTs7RUFFRSwwQkFBQTtBRHc0RWQsQ0NyNEVZO0VBQ0Usb0NBQUE7QUR1NEVkLENDdDRFYztFQUNFLDhDQUFBO0FEdzRFaEIsQ0M3M0VZO0VBRUUsZ0NBQUE7QUQrM0VkLENDcjNFTTtFQUNFLGlFQUFBO0FEdzNFUixDQ2wzRVU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSDBzRlQsQ0NqM0VZOzs7OztFQUdFLHlEQUFBO0FEcTNFZCxDQ2wzRVU7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRG8zRVosQ0NsM0VVO0VBQ0UsZ0NBQUE7QURvM0VaLENDNTJFVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUQrMkVaLENDcjJFYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUR3MkVoQixDQ2oyRU07RUFDRSx5QkFBQTtBRG8yRVIsQ0NqMkVNO0VBQ0Usb0NBQUE7QURvMkVSLENDajJFTTtFQUNFLG9DQUFBO0FEbzJFUixDQ2oyRU07RUFDRSx3Q0FBQTtBRG8yRVIsQ0NqMkVNO0VBQ0UsMkNBQUE7QURvMkVSLENDajJFTTtFQUNFLHlDQUFBO0FEbzJFUixDQ2oyRU07RUFDRSwwQ0FBQTtBRG8yRVIsQ0NqMkVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZxM0ZGLENDbDRFTTtFQUNFLHlCQUFBO0FEcTRFUixDQ2w0RU07RUFDRSxvQ0FBQTtBRHE0RVIsQ0NsNEVNO0VBQ0Usb0NBQUE7QURxNEVSLENDbDRFTTtFQUNFLHdDQUFBO0FEcTRFUixDQ2w0RU07RUFDRSwyQ0FBQTtBRHE0RVIsQ0NsNEVNO0VBQ0UseUNBQUE7QURxNEVSLENDbDRFTTtFQUNFLDBDQUFBO0FEcTRFUixDQ2w0RU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnM1RkYsQ0NuNkVNO0VBQ0UseUJBQUE7QURzNkVSLENDbjZFTTtFQUNFLG9DQUFBO0FEczZFUixDQ242RU07RUFDRSxvQ0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0Usd0NBQUE7QURzNkVSLENDbjZFTTtFQUNFLDJDQUFBO0FEczZFUixDQ242RU07RUFDRSx5Q0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0UsMENBQUE7QURzNkVSLENDbjZFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGdTdGRixDQ3A4RU07RUFDRSx5QkFBQTtBRHU4RVIsQ0NwOEVNO0VBQ0Usb0NBQUE7QUR1OEVSLENDcDhFTTtFQUNFLG9DQUFBO0FEdThFUixDQ3A4RU07RUFDRSx3Q0FBQTtBRHU4RVIsQ0NwOEVNO0VBQ0UsMkNBQUE7QUR1OEVSLENDcDhFTTtFQUNFLHlDQUFBO0FEdThFUixDQ3A4RU07RUFDRSwwQ0FBQTtBRHU4RVIsQ0NwOEVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZ3OUZGLENDcitFTTtFQUNFLHlCQUFBO0FEdytFUixDQ3IrRU07RUFDRSxvQ0FBQTtBRHcrRVIsQ0NyK0VNO0VBQ0Usb0NBQUE7QUR3K0VSLENDcitFTTtFQUNFLHdDQUFBO0FEdytFUixDQ3IrRU07RUFDRSwyQ0FBQTtBRHcrRVIsQ0NyK0VNO0VBQ0UseUNBQUE7QUR3K0VSLENDcitFTTtFQUNFLDBDQUFBO0FEdytFUixDQ3IrRU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnkvRkYsQ0N0Z0ZNO0VBQ0UseUJBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLG9DQUFBO0FEeWdGUixDQ3RnRk07RUFDRSxvQ0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0Usd0NBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLDJDQUFBO0FEeWdGUixDQ3RnRk07RUFDRSx5Q0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0UsMENBQUE7QUR5Z0ZSLENDdGdGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMGhHRixDQ3ZpRk07RUFDRSx5QkFBQTtBRDBpRlIsQ0N2aUZNO0VBQ0Usb0NBQUE7QUQwaUZSLENDdmlGTTtFQUNFLG9DQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSx3Q0FBQTtBRDBpRlIsQ0N2aUZNO0VBQ0UsMkNBQUE7QUQwaUZSLENDdmlGTTtFQUNFLHlDQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSwwQ0FBQTtBRDBpRlIsQ0N2aUZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYyakdGLENDeGtGTTtFQUNFLHlCQUFBO0FEMmtGUixDQ3hrRk07RUFDRSxvQ0FBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0Usb0NBQUE7QUQya0ZSLENDeGtGTTtFQUNFLHdDQUFBO0FEMmtGUixDQ3hrRk07RUFDRSwyQ0FBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0UseUNBQUE7QUQya0ZSLENDeGtGTTtFQUNFLDBDQUFBO0FEMmtGUixDQ3hrRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjRsR0YsQ0N6bUZNO0VBQ0UseUJBQUE7QUQ0bUZSLENDem1GTTtFQUNFLG9DQUFBO0FENG1GUixDQ3ptRk07RUFDRSxvQ0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0Usd0NBQUE7QUQ0bUZSLENDem1GTTtFQUNFLDJDQUFBO0FENG1GUixDQ3ptRk07RUFDRSx5Q0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0UsMENBQUE7QUQ0bUZSLENDem1GTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGNm5HRixDQzFvRk07RUFDRSx5QkFBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0Usb0NBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLG9DQUFBO0FENm9GUixDQzFvRk07RUFDRSx3Q0FBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0UsMkNBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLHlDQUFBO0FENm9GUixDQzFvRk07RUFDRSwwQ0FBQTtBRDZvRlIsQ0Mxb0ZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY4cEdGLENDM3FGTTtFQUNFLHlCQUFBO0FEOHFGUixDQzNxRk07RUFDRSxvQ0FBQTtBRDhxRlIsQ0MzcUZNO0VBQ0Usb0NBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLHdDQUFBO0FEOHFGUixDQzNxRk07RUFDRSwyQ0FBQTtBRDhxRlIsQ0MzcUZNO0VBQ0UseUNBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLDBDQUFBO0FEOHFGUixDQzNxRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRityR0YsQ0M1c0ZNO0VBQ0UseUJBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLG9DQUFBO0FEK3NGUixDQzVzRk07RUFDRSxvQ0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0Usd0NBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLDJDQUFBO0FEK3NGUixDQzVzRk07RUFDRSx5Q0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0UsMENBQUE7QUQrc0ZSLENDNXNGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGZ3VHRixDQzd1Rk07RUFDRSx5QkFBQTtBRGd2RlIsQ0M3dUZNO0VBQ0Usb0NBQUE7QURndkZSLENDN3VGTTtFQUNFLG9DQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSx3Q0FBQTtBRGd2RlIsQ0M3dUZNO0VBQ0UsMkNBQUE7QURndkZSLENDN3VGTTtFQUNFLHlDQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSwwQ0FBQTtBRGd2RlIsQ0M3dUZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZpd0dGLENDcHRHTTtFQUNFLG9DQUFBO0FEdXRHUixDQ3J0R1E7O0VBRUUsNkJBQUE7QUR1dEdWLENDanRHUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QURvdEdWLENDbHRHVTtFRzNEUixxREFBQTtBSmd4R0YsQ0NqdEdVO0VBQ0UseUJBQUE7QURtdEdaLENDL3NHVTtFQUNFLHlCQUFBO0FEaXRHWixDQzFzR1E7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FENnNHVixDQzFzR1U7RUFFRSxxQ0FBQTtBRDJzR1osQ0N4c0dVOztFQUVFLGdDQUFBO0FEMHNHWixDQ3RzR1k7RUFDRSw4Q0FBQTtBRHdzR2QsQ0Nyc0dZO0VBQ0UsY0lFRDtBTHFzR2IsQ0MvckdRO0VBQ0UseUJBQUE7QURrc0dWLENDN3JHTTtFQUNFLG9DQUFBO0FEZ3NHUixDQzdyR007RUFDRSw2QkFBQTtBRGdzR1IsQ0M3ckdNO0VBQ0UsZ0NBQUE7QURnc0dSLENDN3JHTTtFQUNFLDhCQUFBO0FEZ3NHUixDQzdyR007RUFDRSwrQkFBQTtBRGdzR1IsQ0N6ckdROzs7RUFDRSxnQ0FBQTtBRDhyR1YsQ0N0ckdVO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtBRHlyR1osQ0NuckdNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRmkxR0YsQ0NsckdRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEcXJHVixDQ25yR1U7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRG1yR1osQ0NockdVO0VBQ0UsbUNBQUE7QURrckdaLENDL3FHVTtFQUNFLGdCQUFBO0FEaXJHWixDQzFxR1E7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIc3ZHVCxDQzNxR1U7RUFDRSxjRTVFSDtBSHl2R1QsQ0MxcUdVO0VBQ0UsMENBQUE7QUQ0cUdaLENDenFHVTtFQUdFLHlDQUFBO0VBQ0EsY0V2Rkg7QUhnd0dULENDdHFHVTtFQUNFLCtTQUFBO0FEd3FHWixDQ2pxR1E7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRG9xR1YsQ0M5cEdZO0VBQ0UseUJBQUE7QURncUdkLENDN3BHVTtFQUdFLHlCQUFBO0FENnBHWixDQzFwR1U7RUFDRSxXSTlOSjtBTDAzR1IsQ0MxcEdVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUQycEdaLENDcHBHUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSDh4R1QsQ0NycEdVO0VBQ0UsMENBQUE7RUFDQSxjRTNJSDtBSGt5R1QsQ0NycEdVO0VBQ0UsZ0JBQUE7QUR1cEdaLENDcnBHVTtFQUdFLHlDQUFBO0VBQ0EsY0VwSkg7QUh5eUdULENDbHBHVTtFQUNFLCtTQUFBO0FEb3BHWixDQ2pwR1U7RUFDRSx5Q0FBQTtFQUNBLGNFN0pIO0FIZ3pHVCxDQ3pvR1k7O0VBQ0UseUtBQUE7QUQ2b0dkLENDOW5HVTtFQUNFLHlCRXhMSDtBSHl6R1QsQ0N2bkdjO0VBQ0UsY0VuTVA7QUg2ekdULENDeG5HYztFQUNFLHlCQUFBO0FEMG5HaEIsQ0M5bUdjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTDQ2R1IsQ0MvbUdnQjtFQUNFLFdJOVRWO0FMKzZHUixDQzNtR2M7RUFDRSxjRTlOUDtBSDIwR1QsQ0N2bUdjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMczdHUixDQ2ptR2tCO0VBQ0UsMlRBQUE7QURtbUdwQixDQ3JsR2tCO0VBQ0UsMlRBQUE7QUR1bEdwQixDQ3JrR2M7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxvREFBQTtBRHdrR2hCLENDL2pHUTtFQUNFLDBDQUFBO0FEa2tHVixDQ2hrR1U7RUFDRSx5QkVqU0g7QUhtMkdULENDMWpHVTtFQUNFLGdDQUFBO0FENmpHWixDQzNqR1k7O0VBRUUsMEJBQUE7QUQ2akdkLENDMWpHWTtFQUNFLG9DQUFBO0FENGpHZCxDQzNqR2M7RUFDRSwrQ0FBQTtBRDZqR2hCLENDbGpHWTtFQUVFLGdDQUFBO0FEb2pHZCxDQzFpR007RUFDRSxpRUFBQTtBRDZpR1IsQ0N2aUdVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUgrM0dULENDdGlHWTs7Ozs7RUFHRSwwREFBQTtBRDBpR2QsQ0N2aUdVO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUR5aUdaLENDdmlHVTtFQUNFLGdDQUFBO0FEeWlHWixDQ2ppR1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEb2lHWixDQzFoR2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FENmhHaEIsQ0N0aEdNO0VBQ0UseUJBQUE7QUR5aEdSLENDdGhHTTtFQUNFLG9DQUFBO0FEeWhHUixDQ3RoR007RUFDRSxvQ0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0Usd0NBQUE7QUR5aEdSLENDdGhHTTtFQUNFLDJDQUFBO0FEeWhHUixDQ3RoR007RUFDRSx5Q0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0UsMENBQUE7QUR5aEdSLENDdGhHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMGlIRixDQ3ZqR007RUFDRSx5QkFBQTtBRDBqR1IsQ0N2akdNO0VBQ0Usb0NBQUE7QUQwakdSLENDdmpHTTtFQUNFLG9DQUFBO0FEMGpHUixDQ3ZqR007RUFDRSx3Q0FBQTtBRDBqR1IsQ0N2akdNO0VBQ0UsMkNBQUE7QUQwakdSLENDdmpHTTtFQUNFLHlDQUFBO0FEMGpHUixDQ3ZqR007RUFDRSwwQ0FBQTtBRDBqR1IsQ0N2akdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUYya0hGLENDeGxHTTtFQUNFLHlCQUFBO0FEMmxHUixDQ3hsR007RUFDRSxvQ0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0Usb0NBQUE7QUQybEdSLENDeGxHTTtFQUNFLHdDQUFBO0FEMmxHUixDQ3hsR007RUFDRSwyQ0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0UseUNBQUE7QUQybEdSLENDeGxHTTtFQUNFLDBDQUFBO0FEMmxHUixDQ3hsR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjRtSEYsQ0N6bkdNO0VBQ0UseUJBQUE7QUQ0bkdSLENDem5HTTtFQUNFLG9DQUFBO0FENG5HUixDQ3puR007RUFDRSxvQ0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0Usd0NBQUE7QUQ0bkdSLENDem5HTTtFQUNFLDJDQUFBO0FENG5HUixDQ3puR007RUFDRSx5Q0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0UsMENBQUE7QUQ0bkdSLENDem5HTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGNm9IRixDQzFwR007RUFDRSx5QkFBQTtBRDZwR1IsQ0MxcEdNO0VBQ0Usb0NBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLG9DQUFBO0FENnBHUixDQzFwR007RUFDRSx3Q0FBQTtBRDZwR1IsQ0MxcEdNO0VBQ0UsMkNBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLHlDQUFBO0FENnBHUixDQzFwR007RUFDRSwwQ0FBQTtBRDZwR1IsQ0MxcEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY4cUhGLENDM3JHTTtFQUNFLHlCQUFBO0FEOHJHUixDQzNyR007RUFDRSxvQ0FBQTtBRDhyR1IsQ0MzckdNO0VBQ0Usb0NBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLHdDQUFBO0FEOHJHUixDQzNyR007RUFDRSwyQ0FBQTtBRDhyR1IsQ0MzckdNO0VBQ0UseUNBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLDBDQUFBO0FEOHJHUixDQzNyR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRitzSEYsQ0M1dEdNO0VBQ0UseUJBQUE7QUQrdEdSLENDNXRHTTtFQUNFLG9DQUFBO0FEK3RHUixDQzV0R007RUFDRSxvQ0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0Usd0NBQUE7QUQrdEdSLENDNXRHTTtFQUNFLDJDQUFBO0FEK3RHUixDQzV0R007RUFDRSx5Q0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0UsMENBQUE7QUQrdEdSLENDNXRHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGZ3ZIRixDQzd2R007RUFDRSx5QkFBQTtBRGd3R1IsQ0M3dkdNO0VBQ0Usb0NBQUE7QURnd0dSLENDN3ZHTTtFQUNFLG9DQUFBO0FEZ3dHUixDQzd2R007RUFDRSx3Q0FBQTtBRGd3R1IsQ0M3dkdNO0VBQ0UsMkNBQUE7QURnd0dSLENDN3ZHTTtFQUNFLHlDQUFBO0FEZ3dHUixDQzd2R007RUFDRSwwQ0FBQTtBRGd3R1IsQ0M3dkdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZpeEhGLENDOXhHTTtFQUNFLHlCQUFBO0FEaXlHUixDQzl4R007RUFDRSxvQ0FBQTtBRGl5R1IsQ0M5eEdNO0VBQ0Usb0NBQUE7QURpeUdSLENDOXhHTTtFQUNFLHdDQUFBO0FEaXlHUixDQzl4R007RUFDRSwyQ0FBQTtBRGl5R1IsQ0M5eEdNO0VBQ0UseUNBQUE7QURpeUdSLENDOXhHTTtFQUNFLDBDQUFBO0FEaXlHUixDQzl4R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmt6SEYsQ0MvekdNO0VBQ0UseUJBQUE7QURrMEdSLENDL3pHTTtFQUNFLG9DQUFBO0FEazBHUixDQy96R007RUFDRSxvQ0FBQTtBRGswR1IsQ0MvekdNO0VBQ0Usd0NBQUE7QURrMEdSLENDL3pHTTtFQUNFLDJDQUFBO0FEazBHUixDQy96R007RUFDRSx5Q0FBQTtBRGswR1IsQ0MvekdNO0VBQ0UsMENBQUE7QURrMEdSLENDL3pHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbTFIRixDQ2gyR007RUFDRSx5QkFBQTtBRG0yR1IsQ0NoMkdNO0VBQ0Usb0NBQUE7QURtMkdSLENDaDJHTTtFQUNFLG9DQUFBO0FEbTJHUixDQ2gyR007RUFDRSx3Q0FBQTtBRG0yR1IsQ0NoMkdNO0VBQ0UsMkNBQUE7QURtMkdSLENDaDJHTTtFQUNFLHlDQUFBO0FEbTJHUixDQ2gyR007RUFDRSwwQ0FBQTtBRG0yR1IsQ0NoMkdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZvM0hGLENDajRHTTtFQUNFLHlCQUFBO0FEbzRHUixDQ2o0R007RUFDRSxvQ0FBQTtBRG80R1IsQ0NqNEdNO0VBQ0Usb0NBQUE7QURvNEdSLENDajRHTTtFQUNFLHdDQUFBO0FEbzRHUixDQ2o0R007RUFDRSwyQ0FBQTtBRG80R1IsQ0NqNEdNO0VBQ0UseUNBQUE7QURvNEdSLENDajRHTTtFQUNFLDBDQUFBO0FEbzRHUixDQ2o0R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnE1SEYsQ0NsNkdNO0VBQ0UseUJBQUE7QURxNkdSLENDbDZHTTtFQUNFLG9DQUFBO0FEcTZHUixDQ2w2R007RUFDRSxvQ0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0Usd0NBQUE7QURxNkdSLENDbDZHTTtFQUNFLDJDQUFBO0FEcTZHUixDQ2w2R007RUFDRSx5Q0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0UsMENBQUE7QURxNkdSLENDbDZHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGczdIRixDQ3o0SE07RUFDRSxvQ0FBQTtBRDQ0SFIsQ0MxNEhROztFQUVFLDZCQUFBO0FENDRIVixDQ3Q0SFE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FEeTRIVixDQ3Y0SFU7RUczRFIsb0RBQUE7QUpxOEhGLENDdDRIVTtFQUNFLHlCQUFBO0FEdzRIWixDQ3A0SFU7RUFDRSx5QkFBQTtBRHM0SFosQ0MvM0hRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRGs0SFYsQ0MvM0hVO0VBRUUsb0NBQUE7QURnNEhaLENDNzNIVTs7RUFFRSxnQ0FBQTtBRCszSFosQ0MzM0hZO0VBQ0UsNkNBQUE7QUQ2M0hkLENDMTNIWTtFQUNFLGNJRUQ7QUwwM0hiLENDcDNIUTtFQUNFLHlCQUFBO0FEdTNIVixDQ2wzSE07RUFDRSxvQ0FBQTtBRHEzSFIsQ0NsM0hNO0VBQ0UsNkJBQUE7QURxM0hSLENDbDNITTtFQUNFLGdDQUFBO0FEcTNIUixDQ2wzSE07RUFDRSw4QkFBQTtBRHEzSFIsQ0NsM0hNO0VBQ0UsK0JBQUE7QURxM0hSLENDOTJIUTs7O0VBQ0UsZ0NBQUE7QURtM0hWLENDMzJIVTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUQ4MkhaLENDeDJITTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZzZ0lGLENDdjJIUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRDAySFYsQ0N4MkhVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QUR3MkhaLENDcjJIVTtFQUNFLG1DQUFBO0FEdTJIWixDQ3AySFU7RUFDRSxnQkFBQTtBRHMySFosQ0MvMUhRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSDI2SFQsQ0NoMkhVO0VBQ0UsY0U1RUg7QUg4NkhULENDLzFIVTtFQUNFLHlDQUFBO0FEaTJIWixDQzkxSFU7RUFHRSx3Q0FBQTtFQUNBLGNFdkZIO0FIcTdIVCxDQzMxSFU7RUFDRSwrU0FBQTtBRDYxSFosQ0N0MUhRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QUR5MUhWLENDbjFIWTtFQUNFLHlCQUFBO0FEcTFIZCxDQ2wxSFU7RUFHRSx5QkFBQTtBRGsxSFosQ0MvMEhVO0VBQ0UsV0k5Tko7QUwraUlSLENDLzBIVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEZzFIWixDQ3owSFE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUhtOUhULENDMTBIVTtFQUNFLHlDQUFBO0VBQ0EsY0UzSUg7QUh1OUhULENDMTBIVTtFQUNFLGdCQUFBO0FENDBIWixDQzEwSFU7RUFHRSx3Q0FBQTtFQUNBLGNFcEpIO0FIODlIVCxDQ3YwSFU7RUFDRSwrU0FBQTtBRHkwSFosQ0N0MEhVO0VBQ0Usd0NBQUE7RUFDQSxjRTdKSDtBSHErSFQsQ0M5ekhZOztFQUNFLHFLQUFBO0FEazBIZCxDQ256SFU7RUFDRSx5QkV4TEg7QUg4K0hULENDNXlIYztFQUNFLGNFbk1QO0FIay9IVCxDQzd5SGM7RUFDRSx5QkFBQTtBRCt5SGhCLENDbnlIYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUxpbUlSLENDcHlIZ0I7RUFDRSxXSTlUVjtBTG9tSVIsQ0NoeUhjO0VBQ0UsY0U5TlA7QUhnZ0lULENDNXhIYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTDJtSVIsQ0N0eEhrQjtFQUNFLDJUQUFBO0FEd3hIcEIsQ0Mxd0hrQjtFQUNFLDJUQUFBO0FENHdIcEIsQ0MxdkhjO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sbURBQUE7QUQ2dkhoQixDQ3B2SFE7RUFDRSx5Q0FBQTtBRHV2SFYsQ0NydkhVO0VBQ0UseUJFalNIO0FId2hJVCxDQy91SFU7RUFDRSxnQ0FBQTtBRGt2SFosQ0NodkhZOztFQUVFLDBCQUFBO0FEa3ZIZCxDQy91SFk7RUFDRSxvQ0FBQTtBRGl2SGQsQ0NodkhjO0VBQ0UsOENBQUE7QURrdkhoQixDQ3Z1SFk7RUFFRSxnQ0FBQTtBRHl1SGQsQ0MvdEhNO0VBQ0UsaUVBQUE7QURrdUhSLENDNXRIVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIb2pJVCxDQzN0SFk7Ozs7O0VBR0UseURBQUE7QUQrdEhkLENDNXRIVTtFQUNFLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEOHRIWixDQzV0SFU7RUFDRSxnQ0FBQTtBRDh0SFosQ0N0dEhVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRHl0SFosQ0Mvc0hjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRGt0SGhCLENDM3NITTtFQUNFLHlCQUFBO0FEOHNIUixDQzNzSE07RUFDRSxvQ0FBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0Usb0NBQUE7QUQ4c0hSLENDM3NITTtFQUNFLHdDQUFBO0FEOHNIUixDQzNzSE07RUFDRSwyQ0FBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0UseUNBQUE7QUQ4c0hSLENDM3NITTtFQUNFLDBDQUFBO0FEOHNIUixDQzNzSE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRit0SUYsQ0M1dUhNO0VBQ0UseUJBQUE7QUQrdUhSLENDNXVITTtFQUNFLG9DQUFBO0FEK3VIUixDQzV1SE07RUFDRSxvQ0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0Usd0NBQUE7QUQrdUhSLENDNXVITTtFQUNFLDJDQUFBO0FEK3VIUixDQzV1SE07RUFDRSx5Q0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0UsMENBQUE7QUQrdUhSLENDNXVITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGZ3dJRixDQzd3SE07RUFDRSx5QkFBQTtBRGd4SFIsQ0M3d0hNO0VBQ0Usb0NBQUE7QURneEhSLENDN3dITTtFQUNFLG9DQUFBO0FEZ3hIUixDQzd3SE07RUFDRSx3Q0FBQTtBRGd4SFIsQ0M3d0hNO0VBQ0UsMkNBQUE7QURneEhSLENDN3dITTtFQUNFLHlDQUFBO0FEZ3hIUixDQzd3SE07RUFDRSwwQ0FBQTtBRGd4SFIsQ0M3d0hNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZpeUlGLENDOXlITTtFQUNFLHlCQUFBO0FEaXpIUixDQzl5SE07RUFDRSxvQ0FBQTtBRGl6SFIsQ0M5eUhNO0VBQ0Usb0NBQUE7QURpekhSLENDOXlITTtFQUNFLHdDQUFBO0FEaXpIUixDQzl5SE07RUFDRSwyQ0FBQTtBRGl6SFIsQ0M5eUhNO0VBQ0UseUNBQUE7QURpekhSLENDOXlITTtFQUNFLDBDQUFBO0FEaXpIUixDQzl5SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmswSUYsQ0MvMEhNO0VBQ0UseUJBQUE7QURrMUhSLENDLzBITTtFQUNFLG9DQUFBO0FEazFIUixDQy8wSE07RUFDRSxvQ0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0Usd0NBQUE7QURrMUhSLENDLzBITTtFQUNFLDJDQUFBO0FEazFIUixDQy8wSE07RUFDRSx5Q0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0UsMENBQUE7QURrMUhSLENDLzBITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbTJJRixDQ2gzSE07RUFDRSx5QkFBQTtBRG0zSFIsQ0NoM0hNO0VBQ0Usb0NBQUE7QURtM0hSLENDaDNITTtFQUNFLG9DQUFBO0FEbTNIUixDQ2gzSE07RUFDRSx3Q0FBQTtBRG0zSFIsQ0NoM0hNO0VBQ0UsMkNBQUE7QURtM0hSLENDaDNITTtFQUNFLHlDQUFBO0FEbTNIUixDQ2gzSE07RUFDRSwwQ0FBQTtBRG0zSFIsQ0NoM0hNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZvNElGLENDajVITTtFQUNFLHlCQUFBO0FEbzVIUixDQ2o1SE07RUFDRSxvQ0FBQTtBRG81SFIsQ0NqNUhNO0VBQ0Usb0NBQUE7QURvNUhSLENDajVITTtFQUNFLHdDQUFBO0FEbzVIUixDQ2o1SE07RUFDRSwyQ0FBQTtBRG81SFIsQ0NqNUhNO0VBQ0UseUNBQUE7QURvNUhSLENDajVITTtFQUNFLDBDQUFBO0FEbzVIUixDQ2o1SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnE2SUYsQ0NsN0hNO0VBQ0UseUJBQUE7QURxN0hSLENDbDdITTtFQUNFLG9DQUFBO0FEcTdIUixDQ2w3SE07RUFDRSxvQ0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0Usd0NBQUE7QURxN0hSLENDbDdITTtFQUNFLDJDQUFBO0FEcTdIUixDQ2w3SE07RUFDRSx5Q0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0UsMENBQUE7QURxN0hSLENDbDdITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGczhJRixDTTE2SVE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEZVUseUJBQUE7QU5zNklaLENNMTZJWTs7RUNaViwwREFBQTtFQUNBLDJCQUFBO0VEYVkseUJBQUE7QU44NklkLENNcjZJVTs7O0VBRUUsV0R6Q0o7QUxpOUlSLENNdDZJVTs7RUFDRSwyQkFBQTtBTnk2SVosQ012NklVOztFQUNFLHdCQUFBO0FOMDZJWixDTXg2SVU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOMDZJWixDTTc4SVE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FObzhJWixDTWw4SVU7OztFQUVFLFdEekNKO0FMOCtJUixDTW44SVU7O0VBQ0UsMkJBQUE7QU5zOElaLENNcDhJVTs7RUFDRSx3QkFBQTtBTnU4SVosQ01yOElVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTnU4SVosQ00xK0lROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTmkrSVosQ00vOUlVOzs7RUFFRSxXRHpDSjtBTDJnSlIsQ01oK0lVOztFQUNFLDJCQUFBO0FObStJWixDTWorSVU7O0VBQ0Usd0JBQUE7QU5vK0laLENNbCtJVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU5vK0laLENNdmdKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU44L0laLENNNS9JVTs7O0VBRUUsV0R6Q0o7QUx3aUpSLENNNy9JVTs7RUFDRSwyQkFBQTtBTmdnSlosQ005L0lVOztFQUNFLHdCQUFBO0FOaWdKWixDTS8vSVU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOaWdKWixDTXBpSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FOMmhKWixDTXpoSlU7OztFQUVFLFdEekNKO0FMcWtKUixDTTFoSlU7O0VBQ0UsMkJBQUE7QU42aEpaLENNM2hKVTs7RUFDRSx3QkFBQTtBTjhoSlosQ001aEpVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTjhoSlosQ01qa0pROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTndqSlosQ010akpVOzs7RUFFRSxXRHpDSjtBTGttSlIsQ012akpVOztFQUNFLDJCQUFBO0FOMGpKWixDTXhqSlU7O0VBQ0Usd0JBQUE7QU4yakpaLENNempKVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU4yakpaLENNOWxKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU5xbEpaLENNbmxKVTs7O0VBRUUsV0R6Q0o7QUwrbkpSLENNcGxKVTs7RUFDRSwyQkFBQTtBTnVsSlosQ01ybEpVOztFQUNFLHdCQUFBO0FOd2xKWixDTXRsSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOd2xKWixDRnBvSk07RUFDRSx1QkFBQTtBRXVvSlIsQ0Zwb0pNO0VBQ0UseUJPZ0tRO0VQL0pSLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBRXNvSlIsQ0Zwb0pRO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVzb0pWLENGbm9KUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUVxb0pWLENGbG9KVTtFQUNFLGlCQUFBO0FFb29KWixDRi9uSk07RUFDRSxxQk8wRU87QUx1akpmLENGL25KUTtFQUNFLDZCQUFBO0VBQUEseUJBQUE7QUVpb0pWLENGOW5KUTtFQUNFLHlCTy9DQTtFUGdEQSxjTzBDRztBTHNsSmIsQ0Y1bkpVO0VBQ0UsaUJBQUE7QUU4bkpaLENGMW5KUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFNG5KVixDRnhuSk07RUFDRSxzQk9sRUE7RVBtRUEsY085REc7RVArREgsZ0JBQUE7RUFDQSxtQkFBQTtBRTBuSlIsQ0Z2bkpVO0VBQ0UsY09wRUQ7RVBxRUMsaUJBQUE7QUV5bkpaLENGcG5KYztFQUVFLG1CQUFBO0FFcW5KaEIsQ0ZwbkpnQjtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRXNuSmxCLENGbG5KZ0I7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0FFb25KbEIsQ0YvbUpZO0VBQ0UsbUNBQUE7QUVpbkpkLENGL21KZ0I7RUFDRSxzQk92R1Y7RVB3R1UsY09uR1A7QUxvdEpYLENGNW1KZ0I7RUFDRSxjT21ETDtBTDJqSmIsQ0Z6bUpVO0VBQ0UseUJPOE1JO0VQN01KLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBRTJtSlosQ0Z4bUpRO0VBQ0UsY09vQ0c7QUxza0piLENGcm1KUTtFQUNFLHVCQUFBO0FFdW1KVixDRnBtSk07RUFDRSw0QkFBQTtBRXNtSlIsQ0YvbEpBO0VBQ0U7SUFDRSxhQUFBO0VFa21KRjtFRi9sSkE7SUFDRSw2QkFBQTtJQUNBLG9CQUFBO0VFaW1KRjtBQUNGLENGOWxKQTtFQUNFO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VFZ21KRjtFRjdsSkE7SUFDRSxhQUFBO0VFK2xKRjtBQUNGLENGNWxKQTtFQUNFO0lBQ0UsYUFBQTtFRThsSkY7RUYzbEpBO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VFNmxKRjtBQUNGLENGeGxKRTs7RUFFRSxvQ0FBQTtFQUNBLHdDQUFBO0FFMGxKSixDRnRsSkk7RUFDRSxvQ0FBQTtBRXdsSk4sQ0Z2bEpNO0VBQ0UsY09wTEc7QUw2d0pYLENGdmxKTTtFQUNFLGNVckxnQjtBUjh3SnhCLENGcGxKRTtFQUNFLGdDQUFBO0FFc2xKSixDRnJsSkk7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FFdWxKTixDRm5sSkU7RUFDRSxvQ0FBQTtBRXFsSkosQ0ZsbEpFO0VBQ0Usb0NBQUE7QUVvbEpKLENTM3lKQTtFQUNFLHNCQUFBO0FUOHlKRiIsImZpbGUiOiJkYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9ib290c3RyYXAuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5AaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvY29sb3JzJztcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4kZGF0YXRhYmxlcy1iZy1oZWFkZXItY29sb3I6ICR0YWJsZS1oZWFkLWJnO1xuJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjogJGdyYXktNDAwO1xuJGRhdGF0YWJsZXMtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGRhdGF0YWJsZXMtZm9vdGVyLXRleHQtY29sb3I6ICR0ZXh0LW11dGVkO1xuJGRhdGF0YWJsZXMtZGFyay10ZXh0LWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xuJGRhdGF0YWJsZXMtZGFyay1mb290ZXItYmctY29sb3I6ICR0aGVtZS1kYXJrLWNhcmQtYmc7XG4kZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvcjogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuJGRhdGF0YWJsZXMtZGFyay1oZWFkZXItYmctY29sb3I6ICR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZztcbiRkYXRhdGFibGVzLWRhcmstYm9keS1iZy1jb2xvcjogJHRoZW1lLWRhcmstdGFibGUtYmc7XG4kZGF0YXRhYmxlcy1kYXJrLWFjdGl2ZS1iZy1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcblxuLm5neC1kYXRhdGFibGUge1xuICAmLmJvb3RzdHJhcCB7XG4gICAgJi5jb3JlLWJvb3RzdHJhcCB7XG4gICAgICAmLmhlaWdodC03MC12aCB7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWJnLWhlYWRlci1jb2xvcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlcy1ib3JkZXItY29sb3I7XG5cbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ydC1pY29uIHBvc2l0aW9uaW5nXG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zb3J0LWJ0biB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjtcblxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS01MDtcbiAgICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbCB7XG4gICAgICAgICAgLmNlbGwtbGluZS1oZWlnaHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy10ZXh0LWNvbG9yO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLXRleHQtY29sb3I7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaTpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgICAmLmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4IDExcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICY6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLXRleHQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQtbXV0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjhweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtY291bnQge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy1mb290ZXItdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmhlYWRlci1oZWlnaHQtNTAge1xuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gbWVkaWEgcXVlcnkgZm9yIFNtYWxsICYgTWVkaXVtIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFnZS1jb3VudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5kYXRhdGFibGUtcGFnZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG59XG5cbi8vIGRhcmsgbGF5b3V0IHN0eWxlXG4uZGFyay1sYXlvdXQge1xuICAuZGF0YXRhYmxlLWhlYWRlci1pbm5lcixcbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWRhcmstaGVhZGVyLWJnLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGVzLWRhcmstYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAge1xuICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWRhcmstZm9vdGVyLWJnLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLXRleHQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWRhcmstYWN0aXZlLWJnLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1ib2R5LWJnLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGFnZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLXBhZ2luYXRpb24tYmcgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLypcbmJvb3RzdHJhcCB0YWJsZSB0aGVtZVxuKi9cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgICYuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0ODNmZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG4gICAgfVxuICAgIC5lbXB0eS1yb3cge1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiAgICAgICRhbGVydC1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAkYWxlcnQtcGFkZGluZy15ICRhbGVydC1wYWRkaW5nLXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFN1bW1hcnkgcm93IHN0eWxlc1xuICAuZGF0YXRhYmxlLXN1bW1hcnktcm93IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJzsgLypcbmJvb3RzdHJhcCB0YWJsZSB0aGVtZVxuKi9cbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQ0ZDc7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZDRkNztcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdy5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDgzZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmVtcHR5LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgY29sb3I6ICNlZGVkZWQ7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDEuMnJlbTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAgM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgY29sb3I6ICNlZGVkZWQ7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBwYWRkaW5nOiAwIDNweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLmJnLXdoaXRlIC5jYXJkLWhlYWRlcixcbi5iZy13aGl0ZSAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2hpdGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmJvcmRlci1ib3R0b20td2hpdGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmJvcmRlci1sZWZ0LXdoaXRlIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdoaXRlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmJnLXdoaXRlLmJhZGdlLWdsb3csXG4uYm9yZGVyLXdoaXRlLmJhZGdlLWdsb3csXG4uYmFkZ2Utd2hpdGUuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmZmZmZmO1xufVxuXG4ub3ZlcmxheS13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLXdoaXRlIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cbi5iZy1ibGFjayAuY2FyZC1oZWFkZXIsXG4uYmctYmxhY2sgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib3JkZXItYmxhY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWJsYWNrIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5ib3JkZXItYm90dG9tLWJsYWNrIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5ib3JkZXItbGVmdC1ibGFjayB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmJvcmRlci1yaWdodC1ibGFjayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5iZy1ibGFjay5iYWRnZS1nbG93LFxuLmJvcmRlci1ibGFjay5iYWRnZS1nbG93LFxuLmJhZGdlLWJsYWNrLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcbn1cblxuLm92ZXJsYXktYmxhY2sge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1ibGFjayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cbi5iZy1kYXJrIC5jYXJkLWhlYWRlcixcbi5iZy1kYXJrIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzUsIDc1LCA3NSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cbi5hbGVydC1kYXJrIC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSg3NSwgNzUsIDc1LCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuLmFsZXJ0LWRhcmsgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzNlM2UzZSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LWRhcmsgLmNsb3NlIHtcbiAgY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXJrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYXJrIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhcmsge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0Yjtcbn1cblxuLmJvcmRlci1sZWZ0LWRhcmsge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjRiNGI7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFyayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG59XG5cbi5iZy1kYXJrLmJhZGdlLWdsb3csXG4uYm9yZGVyLWRhcmsuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1kYXJrLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzRiNGI0Yjtcbn1cblxuLmJhZGdlLmJhZGdlLWxpZ2h0LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMTIpO1xuICBjb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYXJrIHtcbiAgYmFja2dyb3VuZDogIzRiNGI0YjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNzUsIDc1LCA3NSwgMC42KTtcbn1cblxuLmJ0bi1kYXJrIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tZGFyazpmb2N1cywgLmJ0bi1kYXJrOmFjdGl2ZSwgLmJ0bi1kYXJrLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG4uYnRuLWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggIzRiNGI0Yjtcbn1cbi5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWZsYXQtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tZmxhdC1kYXJrOmhvdmVyIHtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLWZsYXQtZGFyazpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4xMik7XG59XG4uYnRuLWZsYXQtZGFyazphY3RpdmUsIC5idG4tZmxhdC1kYXJrLmFjdGl2ZSwgLmJ0bi1mbGF0LWRhcms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMik7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1mbGF0LWRhcmsuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNGI0YjRiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtZGFyazpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjYyNjI7XG59XG4uYnRuLXJlbGllZi1kYXJrOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFyay5hY3RpdmUsIC5idG4tcmVsaWVmLWRhcms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuLmJ0bi1yZWxpZWYtZGFyazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtZGFyazphY3RpdmUsIC5idG4tcmVsaWVmLWRhcmsuYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS1kYXJrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLW91dGxpbmUtZGFyazpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4wNCk7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4yKTtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLW91dGxpbmUtZGFyay5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM0YjRiNGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4yKTtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG5cbi5idG4tb3V0bGluZS1kYXJrLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LWRhcmsud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSg3NSwgNzUsIDc1LCAwLjIpIDAsIHJnYmEoNzUsIDc1LCA3NSwgMC4zKSA0MCUsIHJnYmEoNzUsIDc1LCA3NSwgMC40KSA1MCUsIHJnYmEoNzUsIDc1LCA3NSwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XG59XG5cbi5tb2RhbC5tb2RhbC1kYXJrIC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4ubW9kYWwubW9kYWwtZGFyayAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9ncmVzcy1iYXItZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLWRhcmsgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFyayB7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYXJrIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhcmsgc3ZnIHtcbiAgc3Ryb2tlOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhcmsudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYXJrLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCA3NSwgNzUsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLmRpdmlkZXItZGFyayAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci1kYXJrIC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtZGFyayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhcmsgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xufVxuLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDc1LCA3NSwgNzUsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1kYXJrIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWRhcmsgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtZGFyayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLWRhcmsgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kYXJrLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyay5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXJrLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFyay5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFyay5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhcmsuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYXJrLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFyay5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzM0MzQzNDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDUyLCA1MiwgMC42KTtcbn1cblxuLnRleHQtZGFyay50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICMxZTFlMWUgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFyay5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhcmsuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhcmsuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYXJrLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFyay5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhcmsub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNik7XG59XG5cbi50ZXh0LWRhcmsudGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjNjI2MjYyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrLmJnLWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhcmsuYm9yZGVyLWRhcmtlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYXJrLmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYXJrLmJvcmRlci1ib3R0b20tZGFya2VuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFyay5ib3JkZXItbGVmdC1kYXJrZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhcmsuYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYXJrLm92ZXJsYXktZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kOiAjNjI2MjYyOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg5OCwgOTgsIDk4LCAwLjYpO1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQgLmNhcmQtaGVhZGVyLFxuLmJnLWxpZ2h0IC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYm9yZGVyLWxpZ2h0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1saWdodCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1saWdodCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuXG4uYm9yZGVyLWxlZnQtbGlnaHQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG5cbi5ib3JkZXItcmlnaHQtbGlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuXG4uYmctbGlnaHQuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItbGlnaHQuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1saWdodC5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNmNmY2ZjY7XG59XG5cbi5vdmVybGF5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC42KTtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICNmNmY2ZjYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjZGVkYmZiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRiZmIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkYmZiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGJmYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRiZmIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVkYmZiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZGJmYiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2RlZGJmYjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIyLCAyMTksIDI1MSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjYzljNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM0ZjkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzljNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M5YzRmOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOWM0ZjkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzljNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M5YzRmOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2M5YzRmOTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjAxLCAxOTYsIDI0OSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjYjNhZGY3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2FkZjcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNhZGY3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2IzYWRmNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2FkZjcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNhZGY3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2IzYWRmNyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogI2IzYWRmNzsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTc5LCAxNzMsIDI0NywgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjOWU5NWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTk1ZjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5NWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzllOTVmNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTk1ZjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOWU5NWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzllOTVmNSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogIzllOTVmNTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNDksIDI0NSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjODg3ZWYyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODdlZjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg3ZWYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzg4N2VmMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODdlZjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODg3ZWYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4N2VmMiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogIzg4N2VmMjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMjYsIDI0MiwgMC42KTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4uYmctcHJpbWFyeSAuY2FyZC1oZWFkZXIsXG4uYmctcHJpbWFyeSAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFsZXJ0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtcHJpbWFyeSAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1wcmltYXJ5IC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cbi5hbGVydC1wcmltYXJ5IC5jbG9zZSB7XG4gIGNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXByaW1hcnkuZmMtaC1ldmVudCwgLmJnLWxpZ2h0LXByaW1hcnkuZmMtdi1ldmVudCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEpO1xufVxuLmJnLWxpZ2h0LXByaW1hcnkgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LXByaW1hcnkgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtcHJpbWFyeS5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtcHJpbWFyeS5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzM2N2YwO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MzY3ZjA7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzM2N2YwO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzM2N2YwO1xufVxuXG4uYmctcHJpbWFyeS5iYWRnZS1nbG93LFxuLmJvcmRlci1wcmltYXJ5LmJhZGdlLWdsb3csXG4uYmFkZ2UtcHJpbWFyeS5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM3MzY3ZjA7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKTtcbiAgY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM3MzY3ZjA7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNik7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICM3MzY3ZjA7XG59XG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM3MzY3ZjA7XG59XG4uYnRuLWZsYXQtcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLmJ0bi1mbGF0LXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LXByaW1hcnk6YWN0aXZlLCAuYnRuLWZsYXQtcHJpbWFyeS5hY3RpdmUsIC5idG4tZmxhdC1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjIpO1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5idG4tZmxhdC1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzczNjdmMCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmJ0bi1yZWxpZWYtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tcmVsaWVmLXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg3ZWYyO1xufVxuLmJ0bi1yZWxpZWYtcHJpbWFyeTphY3RpdmUsIC5idG4tcmVsaWVmLXByaW1hcnkuYWN0aXZlLCAuYnRuLXJlbGllZi1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNTBlZTtcbn1cbi5idG4tcmVsaWVmLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tcmVsaWVmLXByaW1hcnk6YWN0aXZlLCAuYnRuLXJlbGllZi1wcmltYXJ5LmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MzY3ZjAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMDQpO1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMik7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNzM2N2YwJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMik7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1wcmltYXJ5LndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4yKSAwLCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMykgNDAlLCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNCkgNTAlLCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xufVxuXG4ubW9kYWwubW9kYWwtcHJpbWFyeSAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLm1vZGFsLm1vZGFsLXByaW1hcnkgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzM2N2YwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzczNjdmMCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM3MzY3ZjAnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1wcmltYXJ5IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgxMTUsIDEwMywgMjQwLCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKTtcbn1cbi5wcm9ncmVzcy1iYXItcHJpbWFyeSAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkgaSxcbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtcHJpbWFyeSBzdmcge1xuICBzdHJva2U6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtcHJpbWFyeS50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1wcmltYXJ5IC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLXByaW1hcnkgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1wcmltYXJ5IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1wcmltYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjA7XG59XG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTE1LCAxMDMsIDI0MCwgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC42NSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXN3aXRjaC1wcmltYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItcHJpbWFyeSAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gIGJhY2tncm91bmQ6ICM3MzY3ZjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1kYXJrZW4tMSB7XG4gIGNvbG9yOiAjNWU1MGVlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWRhcmtlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtZGFya2VuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjNWU1MGVlOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg5NCwgODAsIDIzOCwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICM0ODM5ZWIgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICM0ODM5ZWI7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDcyLCA1NywgMjM1LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogIzMzMjFlOSAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogIzMzMjFlOTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNTEsIDMzLCAyMzMsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1kYXJrZW4tNCB7XG4gIGNvbG9yOiAjMjcxNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWRhcmtlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtZGFya2VuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1kYXJrZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjMjcxNmRiOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMjIsIDIxOSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWFjY2VudC0xIHtcbiAgY29sb3I6ICNiZGZkZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItYWNjZW50LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1hY2NlbnQtMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWFjY2VudC0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtYWNjZW50LTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQ6ICNiZGZkZmY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4OSwgMjUzLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1hY2NlbnQtMiB7XG4gIGNvbG9yOiAjOGFmYmZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWFjY2VudC0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtYWNjZW50LTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tYWNjZW50LTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1hY2NlbnQtMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWFjY2VudC0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kOiAjOGFmYmZmOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMzgsIDI1MSwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtYWNjZW50LTMge1xuICBjb2xvcjogIzU3ZmFmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1hY2NlbnQtMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWFjY2VudC0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWFjY2VudC0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtYWNjZW50LTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1hY2NlbnQtMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZDogIzU3ZmFmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDI1MCwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtYWNjZW50LTQge1xuICBjb2xvcjogIzNkZjlmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1hY2NlbnQtNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWFjY2VudC00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWFjY2VudC00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtYWNjZW50LTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1hY2NlbnQtNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWFjY2VudC00IHtcbiAgYmFja2dyb3VuZDogIzNkZjlmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNjEsIDI0OSwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogI2M0YzZjOCAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1saWdodGVuLTUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2M0YzZjODsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTgsIDIwMCwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtbGlnaHRlbi00IHtcbiAgY29sb3I6ICNiN2I5YmMgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICNiN2I5YmM7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMTg1LCAxODgsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjYWFhY2IwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kOiAjYWFhY2IwOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNzAsIDE3MiwgMTc2LCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1saWdodGVuLTIge1xuICBjb2xvcjogIzljYTBhNCAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogIzljYTBhNDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU2LCAxNjAsIDE2NCwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICM4ZjkzOTcgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICM4ZjkzOTc7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgMTQ3LCAxNTEsIDAuNik7XG59XG5cbi5iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4uYmctc2Vjb25kYXJ5IC5jYXJkLWhlYWRlcixcbi5iZy1zZWNvbmRhcnkgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtc2Vjb25kYXJ5IC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuLmFsZXJ0LXNlY29uZGFyeSAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtc2Vjb25kYXJ5IC5jbG9zZSB7XG4gIGNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtc2Vjb25kYXJ5LmZjLWgtZXZlbnQsIC5iZy1saWdodC1zZWNvbmRhcnkuZmMtdi1ldmVudCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEpO1xufVxuLmJnLWxpZ2h0LXNlY29uZGFyeSAuZmMtbGlzdC1ldmVudC1kb3QsXG4uYmctbGlnaHQtc2Vjb25kYXJ5IC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XG4gIGJvcmRlci1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXNlY29uZGFyeS5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtc2Vjb25kYXJ5LmZjLWxpc3QtZXZlbnQgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogIzZlNmI3Yjtcbn1cblxuLmF2YXRhci5iZy1saWdodC1zZWNvbmRhcnkge1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4Mjg2OGI7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODI4NjhiO1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODI4NjhiO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4Mjg2OGI7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItc2Vjb25kYXJ5LmJhZGdlLWdsb3csXG4uYmFkZ2Utc2Vjb25kYXJ5LmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzgyODY4Yjtcbn1cblxuLmJhZGdlLmJhZGdlLWxpZ2h0LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4xMik7XG4gIGNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICM4Mjg2OGI7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuNik7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLXNlY29uZGFyeTphY3RpdmUsIC5idG4tc2Vjb25kYXJ5LmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG4uYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjODI4NjhiO1xufVxuLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzgyODY4Yjtcbn1cbi5idG4tZmxhdC1zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogIzgyODY4Yjtcbn1cbi5idG4tZmxhdC1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMTIpO1xufVxuLmJ0bi1mbGF0LXNlY29uZGFyeTphY3RpdmUsIC5idG4tZmxhdC1zZWNvbmRhcnkuYWN0aXZlLCAuYnRuLWZsYXQtc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjIpO1xuICBjb2xvcjogIzgyODY4Yjtcbn1cbi5idG4tZmxhdC1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzODI4NjhiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5Mzk3O1xufVxuLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5LmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1Nzk3ZTtcbn1cbi5idG4tcmVsaWVmLXNlY29uZGFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5LmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyODY4YiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjA0KTtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMik7XG4gIGNvbG9yOiAjODI4NjhiO1xufVxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM4Mjg2OGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uc2hvdyA+IC5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjIpO1xuICBjb2xvcjogIzgyODY4Yjtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1zZWNvbmRhcnkud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgxMzAsIDEzNCwgMTM5LCAwLjIpIDAsIHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4zKSA0MCUsIHJnYmEoMTMwLCAxMzQsIDEzOSwgMC40KSA1MCUsIHJnYmEoMTMwLCAxMzQsIDEzOSwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyODY4Yjtcbn1cblxuLm1vZGFsLm1vZGFsLXNlY29uZGFyeSAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjODI4NjhiO1xufVxuLm1vZGFsLm1vZGFsLXNlY29uZGFyeSAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogIzgyODY4YiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlciwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODI4NjhiO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzODI4NjhiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzODI4NjhiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXBpbGwtc2Vjb25kYXJ5IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1zZWNvbmRhcnkgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjg2OGI7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXNlY29uZGFyeSBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zZWNvbmRhcnkgc3ZnIHtcbiAgc3Ryb2tlOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXNlY29uZGFyeS50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXNlY29uZGFyeS50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLXNlY29uZGFyeSAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci1zZWNvbmRhcnkgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1zZWNvbmRhcnkge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM4Mjg2OGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjg2OGI7XG59XG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTMwLCAxMzQsIDEzOSwgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtc2Vjb25kYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItc2Vjb25kYXJ5IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogIzgyODY4YiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3NTc5N2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc5N2UgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjNzU3OTdlOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMTcsIDEyMSwgMTI2LCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjNjk2ZDcxICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2ZDcxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2OTZkNzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY5NmQ3MSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk2ZDcxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2OTZkNzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY5NmQ3MSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICM2OTZkNzE7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTMsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICM1ZDYwNjQgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDYwNjQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWRhcmtlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVkNjA2NCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNWQ2MDY0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZDYwNjQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzVkNjA2NCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNWQ2MDY0ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogIzVkNjA2NDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoOTMsIDk2LCAxMDAsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWRhcmtlbi00IHtcbiAgY29sb3I6ICM1MDUzNTcgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUzNTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWRhcmtlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTM1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1kYXJrZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTA1MzU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MDUzNTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1kYXJrZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzUwNTM1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTA1MzU3ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzUwNTM1NzsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoODAsIDgzLCA4NywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogIzg4ZTdiMjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAyMzEsIDE3OCwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogIzcyZTNhNDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAyMjcsIDE2NCwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogIzVkZGU5NzsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoOTMsIDIyMiwgMTUxLCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjNDhkYTg5OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg3MiwgMjE4LCAxMzcsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMzM2Q2N2M7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCAyMTQsIDEyNCwgMC42KTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4uYmctc3VjY2VzcyAuY2FyZC1oZWFkZXIsXG4uYmctc3VjY2VzcyAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cbi5hbGVydC1zdWNjZXNzIC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0MCwgMTk5LCAxMTEsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtc3VjY2VzcyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMjRiMjYzICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtc3VjY2VzcyAuY2xvc2Uge1xuICBjb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXN1Y2Nlc3MuZmMtaC1ldmVudCwgLmJnLWxpZ2h0LXN1Y2Nlc3MuZmMtdi1ldmVudCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMSk7XG59XG4uYmctbGlnaHQtc3VjY2VzcyAuZmMtbGlzdC1ldmVudC1kb3QsXG4uYmctbGlnaHQtc3VjY2VzcyAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zdWNjZXNzLmZjLWxpc3QtZXZlbnQ6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXN1Y2Nlc3MuZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3Mge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI4Yzc2Zjtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2VzcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjhjNzZmO1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzI4Yzc2Zjtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI4Yzc2Zjtcbn1cblxuLmJnLXN1Y2Nlc3MuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItc3VjY2Vzcy5iYWRnZS1nbG93LFxuLmJhZGdlLXN1Y2Nlc3MuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMjhjNzZmO1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEyKTtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMyOGM3NmY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC42KTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tc3VjY2Vzczpmb2N1cywgLmJ0bi1zdWNjZXNzOmFjdGl2ZSwgLmJ0bi1zdWNjZXNzLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRiMjYzICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Y2Nlc3M6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggIzI4Yzc2Zjtcbn1cbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWZsYXQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tZmxhdC1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLWZsYXQtc3VjY2Vzczpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEyKTtcbn1cbi5idG4tZmxhdC1zdWNjZXNzOmFjdGl2ZSwgLmJ0bi1mbGF0LXN1Y2Nlc3MuYWN0aXZlLCAuYnRuLWZsYXQtc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjIpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tZmxhdC1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI4Yzc2Zicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmJ0bi1yZWxpZWYtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tcmVsaWVmLXN1Y2Nlc3M6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNkNjdjO1xufVxuLmJ0bi1yZWxpZWYtc3VjY2VzczphY3RpdmUsIC5idG4tcmVsaWVmLXN1Y2Nlc3MuYWN0aXZlLCAuYnRuLXJlbGllZi1zdWNjZXNzOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YjI2Mztcbn1cbi5idG4tcmVsaWVmLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tcmVsaWVmLXN1Y2Nlc3M6YWN0aXZlLCAuYnRuLXJlbGllZi1zdWNjZXNzLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOGM3NmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4wNCk7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjIpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI4Yzc2Zicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMik7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1zdWNjZXNzLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoNDAsIDE5OSwgMTExLCAwLjIpIDAsIHJnYmEoNDAsIDE5OSwgMTExLCAwLjMpIDQwJSwgcmdiYSg0MCwgMTk5LCAxMTEsIDAuNCkgNTAlLCByZ2JhKDQwLCAxOTksIDExMSwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG59XG5cbi5tb2RhbC5tb2RhbC1zdWNjZXNzIC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4ubW9kYWwubW9kYWwtc3VjY2VzcyAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICMyOGM3NmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOGM3NmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMjhjNzZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI4Yzc2Zicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLXN1Y2Nlc3MgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyOGM3NmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKDQwLCAxOTksIDExMSwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEyKTtcbn1cbi5wcm9ncmVzcy1iYXItc3VjY2VzcyAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2Zjtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3MgaSxcbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc3VjY2VzcyBzdmcge1xuICBzdHJva2U6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc3VjY2Vzcy50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3MudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLXN1Y2Nlc3MgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItc3VjY2VzcyAuZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLXN1Y2Nlc3Mge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2Zjtcbn1cbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc3VjY2Vzcy5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSg0MCwgMTk5LCAxMTEsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1zdWNjZXNzIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC42NSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXN3aXRjaC1zdWNjZXNzIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItc3VjY2VzcyAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gIGJhY2tncm91bmQ6ICMyOGM3NmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1kYXJrZW4tMSB7XG4gIGNvbG9yOiAjMjRiMjYzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWRhcmtlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtZGFya2VuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1kYXJrZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjMjRiMjYzOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMTc4LCA5OSwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICMxZjlkNTcgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICMxZjlkNTc7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxNTcsIDg3LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogIzFiODc0YiAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogIzFiODc0YjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsIDEzNSwgNzUsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1kYXJrZW4tNCB7XG4gIGNvbG9yOiAjMTc3MjQwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWRhcmtlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtZGFya2VuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1kYXJrZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWRhcmtlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjMTc3MjQwOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMywgMTE0LCA2NCwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWFjY2VudC0xIHtcbiAgY29sb3I6ICNlMWZmZjEgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItYWNjZW50LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1hY2NlbnQtMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWFjY2VudC0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtYWNjZW50LTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQ6ICNlMWZmZjE7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjU1LCAyNDEsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1hY2NlbnQtMiB7XG4gIGNvbG9yOiAjYWVmZmQ5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWFjY2VudC0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtYWNjZW50LTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tYWNjZW50LTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1hY2NlbnQtMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWFjY2VudC0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kOiAjYWVmZmQ5OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNzQsIDI1NSwgMjE3LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtYWNjZW50LTMge1xuICBjb2xvcjogIzdiZmZjMSAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1hY2NlbnQtMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWFjY2VudC0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWFjY2VudC0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtYWNjZW50LTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1hY2NlbnQtMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZDogIzdiZmZjMTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTIzLCAyNTUsIDE5MywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWFjY2VudC00IHtcbiAgY29sb3I6ICM2MmZmYjUgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItYWNjZW50LTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1hY2NlbnQtNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1hY2NlbnQtNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWFjY2VudC00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtYWNjZW50LTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQ6ICM2MmZmYjU7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk4LCAyNTUsIDE4MSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogIzY5ZWZmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAyMzksIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogIzRmZWNmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNzksIDIzNiwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtbGlnaHRlbi0zIHtcbiAgY29sb3I6ICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1saWdodGVuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1saWdodGVuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1saWdodGVuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kOiAjMzZlOWZmOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgMjMzLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTIge1xuICBjb2xvcjogIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQ6ICMxY2U3ZmY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMzEsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogIzAzZTRmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMjI4LCAyNTUsIDAuNik7XG59XG5cbi5iZy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuLmJnLWluZm8gLmNhcmQtaGVhZGVyLFxuLmJnLWluZm8gLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi5hbGVydC1pbmZvIC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAyMDcsIDIzMiwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1pbmZvIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cbi5hbGVydC1pbmZvIC5jbG9zZSB7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC1pbmZvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1pbmZvLmZjLWgtZXZlbnQsIC5iZy1saWdodC1pbmZvLmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMSk7XG59XG4uYmctbGlnaHQtaW5mbyAuZmMtbGlzdC1ldmVudC1kb3QsXG4uYmctbGlnaHQtaW5mbyAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1pbmZvLmZjLWxpc3QtZXZlbnQ6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtaW5mby5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtaW5mbyB7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mbyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGNmZTggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mbyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBjZmU4O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGNmZTg7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBjZmU4O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBjZmU4O1xufVxuXG4uYmctaW5mby5iYWRnZS1nbG93LFxuLmJvcmRlci1pbmZvLmJhZGdlLWdsb3csXG4uYmFkZ2UtaW5mby5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMGNmZTg7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMik7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC42KTtcbn1cblxuLmJ0bi1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4taW5mbzpmb2N1cywgLmJ0bi1pbmZvOmFjdGl2ZSwgLmJ0bi1pbmZvLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWluZm86aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggIzAwY2ZlODtcbn1cbi5idG4taW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWZsYXQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tZmxhdC1pbmZvOmhvdmVyIHtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLWZsYXQtaW5mbzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LWluZm86YWN0aXZlLCAuYnRuLWZsYXQtaW5mby5hY3RpdmUsIC5idG4tZmxhdC1pbmZvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4yKTtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLWZsYXQtaW5mby5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMwMGNmZTgnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzZTRmZjtcbn1cbi5idG4tcmVsaWVmLWluZm86YWN0aXZlLCAuYnRuLXJlbGllZi1pbmZvLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtaW5mbzpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI4Y2Y7XG59XG4uYnRuLXJlbGllZi1pbmZvOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1pbmZvOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtaW5mby5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tb3V0bGluZS1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4wNCk7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMik7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMDBjZmU4JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtaW5mby5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjIpO1xuICBjb2xvcjogIzAwY2ZlODtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm8ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtaW5mby53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDIwNywgMjMyLCAwLjIpIDAsIHJnYmEoMCwgMjA3LCAyMzIsIDAuMykgNDAlLCByZ2JhKDAsIDIwNywgMjMyLCAwLjQpIDUwJSwgcmdiYSgwLCAyMDcsIDIzMiwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTg7XG59XG5cbi5tb2RhbC5tb2RhbC1pbmZvIC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4ubW9kYWwubW9kYWwtaW5mbyAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMGNmZTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMDBjZmU4JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzAwY2ZlOCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLWluZm8gLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMGNmZTg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKDAsIDIwNywgMjMyLCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLWluZm8gLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWluZm8gc3ZnIHtcbiAgc3Ryb2tlOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWluZm8udGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLWluZm8gLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItaW5mbyAuZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLWluZm8ge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICMwMGNmZTggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWluZm8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlODtcbn1cbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWluZm8uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWluZm8uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtaW5mby5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWluZm8uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAyMDcsIDIzMiwgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWluZm8gLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWluZm8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtaW5mbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLWluZm8gLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbmZvLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzAwYjhjZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzAwYjhjZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTg0LCAyMDcsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjMDBhMWI1ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjMDBhMWI1OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNjEsIDE4MSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICMwMDhiOWMgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICMwMDhiOWM7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEzOSwgMTU2LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzAwNzQ4MiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzAwNzQ4MjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE2LCAxMzAsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZmVmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZmVmZmZmOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogI2NiZjVmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2NiZjVmZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjAzLCAyNDUsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICM5OGVjZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICM5OGVjZmY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1MiwgMjM2LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjN2ZlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjN2ZlN2ZmOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMjcsIDIzMSwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtbGlnaHRlbi01IHtcbiAgY29sb3I6ICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1saWdodGVuLTUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1saWdodGVuLTUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1saWdodGVuLTUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kOiAjZmZlMGMzOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIyNCwgMTk1LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtbGlnaHRlbi00IHtcbiAgY29sb3I6ICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1saWdodGVuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1saWdodGVuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1saWdodGVuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kOiAjZmZkM2E5OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIxMSwgMTY5LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtbGlnaHRlbi0zIHtcbiAgY29sb3I6ICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1saWdodGVuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1saWdodGVuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1saWdodGVuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kOiAjZmZjNjkwOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5OCwgMTQ0LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjZmZiOTc2OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4NSwgMTE4LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1saWdodGVuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1saWdodGVuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kOiAjZmZhYzVkOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE3MiwgOTMsIDAuNik7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLmJnLXdhcm5pbmcgLmNhcmQtaGVhZGVyLFxuLmJnLXdhcm5pbmcgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtd2FybmluZyAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogI2ZmOTIyYSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXdhcm5pbmcgLmNsb3NlIHtcbiAgY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC13YXJuaW5nLmZjLWgtZXZlbnQsIC5iZy1saWdodC13YXJuaW5nLmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjEpO1xufVxuLmJnLWxpZ2h0LXdhcm5pbmcgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LXdhcm5pbmcgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtd2FybmluZy5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC13YXJuaW5nLmZjLWxpc3QtZXZlbnQgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogIzZlNmI3Yjtcbn1cblxuLmF2YXRhci5iZy1saWdodC13YXJuaW5nIHtcbiAgY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZjlmNDM7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmOWY0Mztcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZjlmNDM7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZjlmNDM7XG59XG5cbi5iZy13YXJuaW5nLmJhZGdlLWdsb3csXG4uYm9yZGVyLXdhcm5pbmcuYmFkZ2UtZ2xvdyxcbi5iYWRnZS13YXJuaW5nLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmOWY0Mztcbn1cblxuLmJhZGdlLmJhZGdlLWxpZ2h0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xMik7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjQzOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuNik7XG59XG5cbi5idG4td2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXdhcm5pbmc6Zm9jdXMsIC5idG4td2FybmluZzphY3RpdmUsIC5idG4td2FybmluZy5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTIyYSAhaW1wb3J0YW50O1xufVxuLmJ0bi13YXJuaW5nOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICNmZjlmNDM7XG59XG4uYnRuLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLWZsYXQtd2FybmluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmc6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xMik7XG59XG4uYnRuLWZsYXQtd2FybmluZzphY3RpdmUsIC5idG4tZmxhdC13YXJuaW5nLmFjdGl2ZSwgLmJ0bi1mbGF0LXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4yKTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLWZsYXQtd2FybmluZy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZjlmNDMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi13YXJuaW5nOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWM1ZDtcbn1cbi5idG4tcmVsaWVmLXdhcm5pbmc6YWN0aXZlLCAuYnRuLXJlbGllZi13YXJuaW5nLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtd2FybmluZzpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkyMmE7XG59XG4uYnRuLXJlbGllZi13YXJuaW5nOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi13YXJuaW5nOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtd2FybmluZy5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5idG4tb3V0bGluZS13YXJuaW5nOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMDQpO1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4yKTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZjlmNDMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uc2hvdyA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjIpO1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtd2FybmluZy53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMTU5LCA2NywgMC4yKSAwLCByZ2JhKDI1NSwgMTU5LCA2NywgMC4zKSA0MCUsIHJnYmEoMjU1LCAxNTksIDY3LCAwLjQpIDUwJSwgcmdiYSgyNTUsIDE1OSwgNjcsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuXG4ubW9kYWwubW9kYWwtd2FybmluZyAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLm1vZGFsLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjQzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmOWY0Mycgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZjlmNDMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC13YXJuaW5nIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgyNTUsIDE1OSwgNjcsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDM7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtd2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXdhcm5pbmcgc3ZnIHtcbiAgc3Ryb2tlOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXdhcm5pbmcudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci13YXJuaW5nIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLXdhcm5pbmcgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy13YXJuaW5nIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC13YXJuaW5nIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDM7XG59XG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC13YXJuaW5nLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC13YXJuaW5nLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC13YXJuaW5nLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMjU1LCAxNTksIDY3LCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtd2FybmluZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXdhcm5pbmcgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogI2ZmOTIyYSAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogI2ZmOTIyYTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDYsIDQyLCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogI2ZmODUxMCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWRhcmtlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZDogI2ZmODUxMDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMzMsIDE2LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogI2Y2NzgwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogI2Y2NzgwMDsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAxMjAsIDAsIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1kYXJrZW4tNCB7XG4gIGNvbG9yOiAjZGM2YzAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWRhcmtlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtZGFya2VuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1kYXJrZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWRhcmtlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjZGM2YzAwOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDEwOCwgMCwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWFjY2VudC0xIHtcbiAgY29sb3I6ICNmZmY1ZWYgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItYWNjZW50LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1hY2NlbnQtMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWFjY2VudC0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtYWNjZW50LTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQ6ICNmZmY1ZWY7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ1LCAyMzksIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1hY2NlbnQtMiB7XG4gIGNvbG9yOiAjZmZlNWQ4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWFjY2VudC0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtYWNjZW50LTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tYWNjZW50LTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1hY2NlbnQtMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWFjY2VudC0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kOiAjZmZlNWQ4OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIyOSwgMjE2LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtYWNjZW50LTMge1xuICBjb2xvcjogI2ZmZjZmMyAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1hY2NlbnQtMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWFjY2VudC0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWFjY2VudC0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtYWNjZW50LTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1hY2NlbnQtMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZDogI2ZmZjZmMzsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDYsIDI0MywgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWFjY2VudC00IHtcbiAgY29sb3I6ICNmZmUzZGEgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItYWNjZW50LTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1hY2NlbnQtNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1hY2NlbnQtNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWFjY2VudC00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtYWNjZW50LTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQ6ICNmZmUzZGE7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjI3LCAyMTgsIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjZjhjNmM2ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1saWdodGVuLTUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kOiAjZjhjNmM2OyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDE5OCwgMTk4LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogI2Y1YWZhZiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2Y1YWZhZjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNzUsIDE3NSwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtbGlnaHRlbi0zIHtcbiAgY29sb3I6ICNmMjk4OTkgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1saWdodGVuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNmMjk4OTk7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTUyLCAxNTMsIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjZjA4MTgyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItbGlnaHRlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjZjA4MTgyOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDEyOSwgMTMwLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogI2VkNmI2YyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogI2VkNmI2YzsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAxMDcsIDEwOCwgMC42KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi5iZy1kYW5nZXIgLmNhcmQtaGVhZGVyLFxuLmJnLWRhbmdlciAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1oZWFkaW5nIHtcbiAgYm94LXNoYWRvdzogcmdiYSgyMzQsIDg0LCA4NSwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LWRhbmdlciAuY2xvc2Uge1xuICBjb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1kYW5nZXIuZmMtaC1ldmVudCwgLmJnLWxpZ2h0LWRhbmdlci5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEpO1xufVxuLmJnLWxpZ2h0LWRhbmdlciAuZmMtbGlzdC1ldmVudC1kb3QsXG4uYmctbGlnaHQtZGFuZ2VyIC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LWRhbmdlci5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LWRhbmdlci5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWE1NDU1O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWE1NDU1O1xufVxuXG4uYmctZGFuZ2VyLmJhZGdlLWdsb3csXG4uYm9yZGVyLWRhbmdlci5iYWRnZS1nbG93LFxuLmJhZGdlLWRhbmdlci5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlYTU0NTU7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEyKTtcbiAgY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NTsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuNik7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tZGFuZ2VyOmZvY3VzLCAuYnRuLWRhbmdlcjphY3RpdmUsIC5idG4tZGFuZ2VyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG4uYnRuLWRhbmdlcjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjZWE1NDU1O1xufVxuLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tZmxhdC1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tZmxhdC1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEyKTtcbn1cbi5idG4tZmxhdC1kYW5nZXI6YWN0aXZlLCAuYnRuLWZsYXQtZGFuZ2VyLmFjdGl2ZSwgLmJ0bi1mbGF0LWRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCA4NCwgODUsIDAuMik7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLmJ0bi1mbGF0LWRhbmdlci5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNlYTU0NTUnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tcmVsaWVmLWRhbmdlcjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDZiNmM7XG59XG4uYnRuLXJlbGllZi1kYW5nZXI6YWN0aXZlLCAuYnRuLXJlbGllZi1kYW5nZXIuYWN0aXZlLCAuYnRuLXJlbGllZi1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczZDNlO1xufVxuLmJ0bi1yZWxpZWYtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1kYW5nZXI6YWN0aXZlLCAuYnRuLXJlbGllZi1kYW5nZXIuYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjA0KTtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjIpO1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tb3V0bGluZS1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZWE1NDU1JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCA4NCwgODUsIDAuMik7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LWRhbmdlci53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIzNCwgODQsIDg1LCAwLjIpIDAsIHJnYmEoMjM0LCA4NCwgODUsIDAuMykgNDAlLCByZ2JhKDIzNCwgODQsIDg1LCAwLjQpIDUwJSwgcmdiYSgyMzQsIDg0LCA4NSwgMC41KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLmJ1bGxldC5idWxsZXQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbn1cblxuLm1vZGFsLm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLm1vZGFsLm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlciwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWE1NDU1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTphZnRlciwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZWE1NDU1JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZWE1NDU1JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXBpbGwtZGFuZ2VyIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1O1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgyMzQsIDg0LCA4NSwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFuZ2VyIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlciBzdmcge1xuICBzdHJva2U6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFuZ2VyLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFuZ2VyLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLWRhbmdlciAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci1kYW5nZXIgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1kYW5nZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWRhbmdlciAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlciAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFuZ2VyLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1kYW5nZXIuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFuZ2VyLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFuZ2VyLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMjM0LCA4NCwgODUsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCA4NCwgODUsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWRhbmdlciAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXN3aXRjaC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi1kYW5nZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1kYXJrZW4tMSB7XG4gIGNvbG9yOiAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtZGFya2VuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICNlNzNkM2U7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNjEsIDYyLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICNlNDI3Mjg7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyOCwgMzksIDQwLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNkNzFhMWM7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNSwgMjYsIDI4LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1kYXJrZW4tNCB7XG4gIGNvbG9yOiAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtZGFya2VuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1kYXJrZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWRhcmtlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQ6ICNjMDE4MTk7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMjQsIDI1LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1hY2NlbnQtMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtYWNjZW50LTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQ6ICNmZmVlZjE7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM4LCAyNDEsIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWFjY2VudC0yIHtcbiAgY29sb3I6ICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWFjY2VudC0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1hY2NlbnQtMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1hY2NlbnQtMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtYWNjZW50LTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2ZmZDZkYjsgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTQsIDIxOSwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtYWNjZW50LTMge1xuICBjb2xvcjogI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWFjY2VudC0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tYWNjZW50LTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1hY2NlbnQtMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kOiAjZmZlY2VlOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzNiwgMjM4LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1hY2NlbnQtNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1hY2NlbnQtNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtYWNjZW50LTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQ6ICNmZmQzZDc7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjExLCAyMTUsIDAuNik7XG59XG5cbi5iZy1ncmFkaWVudC1kYXJrLFxuLmJ0bi1ncmFkaWVudC1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzRiNGI0YiwgIzFlMWUxZSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5kYXJrLWxheW91dCAuYmctZ3JhZGllbnQtZGFyayxcbi5kYXJrLWxheW91dCAuYnRuLWdyYWRpZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICMxZTFlMWUsICM0YjRiNGIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtZGFyazpob3ZlciwgLmJnLWdyYWRpZW50LWRhcms6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtZGFyazphY3RpdmUsXG4uYnRuLWdyYWRpZW50LWRhcms6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LWRhcms6YWN0aXZlLCAuYmctZ3JhZGllbnQtZGFyazpmb2N1cyxcbi5idG4tZ3JhZGllbnQtZGFyazphY3RpdmUsXG4uYnRuLWdyYWRpZW50LWRhcms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICMxZTFlMWUsICM0YjRiNGIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1wcmltYXJ5LFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzczNjdmMCwgIzllOTVmNSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC1wcmltYXJ5OmhvdmVyLCAuYmctZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6aG92ZXIsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsIC5iZy1ncmFkaWVudC1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzQ4MzllYiwgIzczNjdmMCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmJnLWdyYWRpZW50LXNlY29uZGFyeSxcbi5idG4tZ3JhZGllbnQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzgyODY4YiwgIzljYTBhNCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnk6aG92ZXIsIC5iZy1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LXNlY29uZGFyeTphY3RpdmUsIC5iZy1ncmFkaWVudC1zZWNvbmRhcnk6Zm9jdXMsXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzY5NmQ3MSwgIzgyODY4Yik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmJnLWdyYWRpZW50LXN1Y2Nlc3MsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMjhjNzZmLCAjNDhkYTg5KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLmJnLWdyYWRpZW50LXN1Y2Nlc3M6aG92ZXIsIC5iZy1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc3VjY2Vzczpob3Zlcixcbi5idG4tZ3JhZGllbnQtc3VjY2VzczphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJnLWdyYWRpZW50LXN1Y2Nlc3M6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSwgLmJnLWdyYWRpZW50LXN1Y2Nlc3M6Zm9jdXMsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3M6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMWY5ZDU3LCAjMjhjNzZmKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYmctZ3JhZGllbnQtaW5mbyxcbi5idG4tZ3JhZGllbnQtaW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICMwMGNmZTgsICMxY2U3ZmYpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtaW5mbzpob3ZlciwgLmJnLWdyYWRpZW50LWluZm86YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LWluZm86aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LWluZm86aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtaW5mbzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LWluZm86YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LWluZm86YWN0aXZlLCAuYmctZ3JhZGllbnQtaW5mbzpmb2N1cyxcbi5idG4tZ3JhZGllbnQtaW5mbzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICMwMGExYjUsICMwMGNmZTgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC13YXJuaW5nLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgI2ZmOWY0MywgI2ZmYjk3Nik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC13YXJuaW5nOmhvdmVyLCAuYmctZ3JhZGllbnQtd2FybmluZzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6aG92ZXIsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSxcbi5idG4tZ3JhZGllbnQtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC13YXJuaW5nOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtd2FybmluZzphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzphY3RpdmUsIC5iZy1ncmFkaWVudC13YXJuaW5nOmZvY3VzLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtd2FybmluZzpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgI2ZmODUxMCwgI2ZmOWY0Myk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmJnLWdyYWRpZW50LWRhbmdlcixcbi5idG4tZ3JhZGllbnQtZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgI2VhNTQ1NSwgI2YwODE4Mik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC1kYW5nZXI6aG92ZXIsIC5iZy1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6aG92ZXIsXG4uYnRuLWdyYWRpZW50LWRhbmdlcjphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LWRhbmdlcjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LWRhbmdlcjphY3RpdmUsIC5iZy1ncmFkaWVudC1kYW5nZXI6Zm9jdXMsXG4uYnRuLWdyYWRpZW50LWRhbmdlcjphY3RpdmUsXG4uYnRuLWdyYWRpZW50LWRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgI2U0MjcyOCwgI2VhNTQ1NSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwLmhlaWdodC03MC12aCB7XG4gIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmNztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlOWYxO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLnNvcnQtYnRuOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICBib3JkZXItY29sb3I6ICNlYmU5ZjE7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5LXJvdy5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbCAuY2VsbC1saW5lLWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICBjb2xvcjogIzYzNjM2MztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpob3ZlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmhvdmVyIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaSB7XG4gIG1hcmdpbjogMnB4IDBweCAxMXB4IDBweCAhaW1wb3J0YW50O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNjM2MzYzO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkuZGlzYWJsZWQgYSB7XG4gIGNvbG9yOiAjYjliOWMzO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmNztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyOHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICBjb2xvcjogI2I5YjljMztcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcC5oZWFkZXItaGVpZ2h0LTUwIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtY291bnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG59XG4uZGFyay1sYXlvdXQgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIsXG4uZGFyay1sYXlvdXQgLmRhdGF0YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzZDU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2I0MjUzICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzA0NiAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpLmRpc2FibGVkIGEge1xuICBjb2xvcjogIzYzNjM2Mztcbn1cbi5kYXJrLWxheW91dCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgY29sb3I6ICNiNGI3YmQ7XG59XG4uZGFyay1sYXlvdXQgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gIGJvcmRlci1jb2xvcjogIzNiNDI1MyAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzA0NiAhaW1wb3J0YW50O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5kYXRhdGFibGUtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDYgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAucGFnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyYjNkICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn0iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgRmlsZSBOYW1lOiBwYWxsZXR0ZS5zY3NzXG4vLyAgIERlc2NyaXB0aW9uOiBDdXN0b20gY29sb3Igc3lzdGVtIHN0eWxlcywgaW5jbHVkZXMgYmFja2dyb3VuZCwgYm9yZGVyIGFuZCB0ZXh0IGNvbG9yc1xuLy8gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxuLy8gICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWdWV4eSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy9jb2xvcnMvcGFsZXR0ZS5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbG9yIHZhcmlhYmxlcy5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gdXNhZ2U6IHRoZW1lLWNvbG9yKFwibmFtZV9vZl9jb2xvclwiLCBcInR5cGVfb2ZfY29sb3JcIilcbi8vIHRvIGF2b2lkIHRvIHJlcGVhdGluZyBtYXAtZ2V0KCRjb2xvcnMsIC4uLilcblxuQGZ1bmN0aW9uIGNvbG9yLWZ1bmN0aW9uKCRjb2xvciwgJHR5cGUpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xuICAgICRjdXJyX2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRjdXJyX2NvbG9yLCAkdHlwZSkge1xuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQHdhcm4gXCJVbmtub3duIGAje25hbWV9YCBpbiAkY29sb3JzLlwiO1xuICBAcmV0dXJuIG51bGw7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzXG5AaW1wb3J0ICdwYWxldHRlLXZhcmlhYmxlcyc7XG5cbi8vIENvbG9yIENsYXNzZXNcbi8vICAgVGV4dCBjb2xvcjogLmNvbG9yIC5saWdodGVuLSogLyAuZGFya2VuLSogLyAuYWNjZW50LSpcbi8vICAgQmFja2dyb3VuZDogLmJnLWNvbG9yIC5iZy1saWdodGVuLSogLyAuYmctZGFya2VuLSogLyAuYmctYWNjZW50LSpcbi8vICAgYm9yZGVyOiAuYm9yZGVyLWNvbG9yIC5ib3JkZXItbGlnaHRlbi0qIC8gLmJvcmRlci1kYXJrZW4tKiAvIC5ib3JkZXItYWNjZW50LSpcbi8vICAgYm9yZGVyLXRvcDogLmJvcmRlci10b3AtY29sb3IgLmJvcmRlci10b3AtbGlnaHRlbi0qIC8gLmJvcmRlci10b3AtZGFya2VuLSogLyAuYm9yZGVyLXRvcC1hY2NlbnQtKlxuLy8gICBib3JkZXItYm90dG9tOiAuYm9yZGVyLWJvdHRvbS1jb2xvciAuYm9yZGVyLWJvdHRvbS1saWdodGVuLSogLyAuYm9yZGVyLWJvdHRvbS1kYXJrZW4tKiAvIC5ib3JkZXItYm90dG9tLWFjY2VudC0qXG4vLyAgIGJvcmRlci1sZWZ0OiAuYm9yZGVyLWxlZnQtY29sb3IgLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tKiAvIC5ib3JkZXItbGVmdC1kYXJrZW4tKiAvIC5ib3JkZXItbGVmdC1hY2NlbnQtKlxuLy8gICBib3JkZXItcmlnaHQ6IC5ib3JkZXItcmlnaHQtY29sb3IgLmJvcmRlci1yaWdodC1saWdodGVuLSogLyAuYm9yZGVyLXJpZ2h0LWRhcmtlbi0qIC8gLmJvcmRlci1yaWdodC1hY2NlbnQtKlxuXG5AZWFjaCAkY29sb3JfbmFtZSwgJGNvbG9yIGluICRjb2xvcnMge1xuICBAZWFjaCAkY29sb3JfdHlwZSwgJGNvbG9yX3ZhbHVlIGluICRjb2xvciB7XG4gICAgQGlmICRjb2xvcl90eXBlPT0gJ2Jhc2UnIHtcbiAgICAgIC8vIGJhY2tncm91bmQgY29sb3JcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbGVydFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5hbGVydC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLmFsZXJ0LWhlYWRpbmcge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWxlcnQtaGVhZGluZy1icygkY29sb3JfdmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbGVydC1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yX3ZhbHVlLCA1JSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjbG9zYWJsZSBhbGVydFxuICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGJnIGNvbG9yIGxpZ2h0ZW4gZm9yIHJnYmEgLSBvcGFjaXR5IHNldFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLmJnLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAvLyBDYWxlbmRhciBiYWNrZ3JvdW5kLCBjb2xvciBhbmQgYm9yZGVyIGNvbG9yXG4gICAgICAgICAgJi5mYy1oLWV2ZW50LFxuICAgICAgICAgICYuZmMtdi1ldmVudCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYy1saXN0LWV2ZW50LWRvdCxcbiAgICAgICAgICAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmZjLWxpc3QtZXZlbnQge1xuICAgICAgICAgICAgJjpob3ZlciB0ZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhdmF0YXIgd2l0aCBsaWdodCBiZ1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLmF2YXRhci5iZy1saWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvcmRlciBjb2xvcnNcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci10b3AtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAuYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JfdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItbGVmdC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAuYm9yZGVyLXJpZ2h0LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvLyBiYWRnZSBnbG93IGNvbG9yc1xuICAgICAgLmJnLSN7JGNvbG9yX25hbWV9LFxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfSxcbiAgICAgIC5iYWRnZS0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICYuYmFkZ2UtZ2xvdyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCYWRnZSBCYWNrZ3JvdW5kIENvbG9yXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAvLyBCYWRnZSBMaWdodCBCYWNrZ3JvdW5kXG4gICAgICAgICAgJi5iYWRnZS1saWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMTIpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdmVybGF5IGNvbG9yc1xuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBiZy1vcGFjaXR5KCRjb2xvcl92YWx1ZSwgMC42KTtcbiAgICAgIH1cblxuICAgICAgLy8gQmFzaWMgYnV0dG9uc1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggcmdiYSgkY29sb3ItdmFsdWUsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvciBCdG4gRmxhdFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci12YWx1ZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci12YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXZhbHVlLCAwLjEyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1kb3duLCAnY3VycmVudENvbG9yJywgJGNvbG9yX3ZhbHVlKSwgJyMnLCAnJTIzJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgQnRuIFJlbGllZlxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tcmVsaWVmLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmFsdWU7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKCRibGFjaywgMC4yKTtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgQGlmICRjb2xvcl9uYW1lID09ICdkYXJrJyB7XG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnbGlnaHRlbi0xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0bGluZSBidXR0b25zXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJ0bi1vdXRsaW5lLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMDQpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3BsaXQgdG9nZ2xlIGhhdmUgc2hvdyBjbGFzc1xuICAgICAgICAgIC5zaG93ID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjIpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2F2ZSBlZmZlY3RcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYnRuLW91dGxpbmUtI3skY29sb3JfbmFtZX0sXG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgJi53YXZlcy1lZmZlY3Qge1xuICAgICAgICAgICAgLndhdmVzLXJpcHBsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC4yKSAwLFxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjMpIDQwJSxcbiAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC40KSA1MCUsXG4gICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuNSkgNjAlLFxuICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAwKSA3MCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnVsbGV0IGNvbG9ycyBmb3IgZW1haWwgYXBwXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJ1bGxldCB7XG4gICAgICAgICAgJi5idWxsZXQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgJi5tb2RhbC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvciBQYWdpbmF0aW9uXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xuICAgICAgICAucGFnaW5hdGlvbi0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLnBhZ2UtaXRlbSB7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci12YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucHJldi1pdGVtLFxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0ge1xuICAgICAgICAgICAgICAucGFnZS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0sXG4gICAgICAgICAgICAmLm5leHQge1xuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICcjJyxcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xuICAgICAgICAgICAgICAgICAgICApKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wcmV2LWl0ZW0sXG4gICAgICAgICAgICAmLnByZXYge1xuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRjaGV2cm9uLWxlZnQsICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICcjJyxcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xuICAgICAgICAgICAgICAgICAgICApKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgTmF2IFBpbGxzXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xuICAgICAgICAubmF2LXBpbGwtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgkY29sb3JfdmFsdWUsIDAuNjUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2dyZXNzIEJhcnNcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAucHJvZ3Jlc3MtYmFyLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMik7XG5cbiAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci12YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGltZWxpbmVcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAudGltZWxpbmUge1xuICAgICAgICAgIC50aW1lbGluZS1wb2ludC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEaXZpZGVyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmRpdmlkZXIuZGl2aWRlci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLmRpdmlkZXItdGV4dCB7XG4gICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci12YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3JtIElucHV0IEVsZW1lbnRzXG4gICAgICAvLyBDaGVja2JveCAmIFJhZGlvXG5cbiAgICAgIC8vIHRvZG86IHJlbW92ZSBpdCBvbmNlIGNvbmZpcm1cbiAgICAgIGlucHV0OmZvY3VzIH4gLmJnLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gJHdoaXRlLCAwIDAgMCAwLjIxcmVtICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAvLyBDdXN0b20gQ2hlY2tib3ggJiBSYWRpb1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5jdXN0b20tY29udHJvbC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuY3VzdG9tLWNoZWNrYm94LFxuICAgICAgICAgICYuY3VzdG9tLXJhZGlvIHtcbiAgICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfdmFsdWUsIDAuNjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvb3RzdHJhcCBDdXN0b20gU3dpdGNoZXNcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuY3VzdG9tLXN3aXRjaC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0MlxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5zZWxlY3QyLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQge1xuICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAudGV4dC0jeyRjb2xvcl9uYW1lfS50ZXh0LSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYmctI3skY29sb3JfbmFtZX0uYmctI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfS5ib3JkZXItI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci10b3AtI3skY29sb3JfbmFtZX0uYm9yZGVyLXRvcC0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1ib3R0b20tI3skY29sb3JfbmFtZX0uYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1sZWZ0LSN7JGNvbG9yX25hbWV9LmJvcmRlci1sZWZ0LSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItcmlnaHQtI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ub3ZlcmxheS0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIEBpbmNsdWRlIGJnLW9wYWNpdHkoJGNvbG9yX3ZhbHVlLCAwLjYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJnLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMSkge1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xufVxuIiwiLy8gT3ZlcnJpZGVzIHVzZXIgX3ZhcmlhYmxlcy1jb21wb25lbnRzXG5AaW1wb3J0ICcuLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7XG5cbi8vIEdvb2dsZSBDb2xvciBQYWxldHRlIGRlZmluZWQ6IGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXG5cbiR3aGl0ZS1jb2xvcjogKFxuICAnYmFzZSc6ICNmZmZmZmZcbik7XG4kYmxhY2stY29sb3I6IChcbiAgJ2Jhc2UnOiAjMDAwMDAwXG4pO1xuJGRhcmstY29sb3I6IChcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignZGFyaycpLFxuICAnZGFya2VuLTEnOiAjMzQzNDM0LFxuICAnZGFya2VuLTInOiAjMWUxZTFlLFxuICAnZGFya2VuLTMnOiAjNjI2MjYyXG4pO1xuJGxpZ2h0LWNvbG9yOiAoXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2xpZ2h0Jylcbik7XG5cbiRwcmltYXJ5LWNvbG9yOiAoXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpLFxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjYmRmZGZmLFxuICAnYWNjZW50LTInOiAjOGFmYmZmLFxuICAnYWNjZW50LTMnOiAjNTdmYWZmLFxuICAnYWNjZW50LTQnOiAjM2RmOWZmXG4pO1xuJHNlY29uZGFyeS1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAyMCUpXG4pO1xuJHN1Y2Nlc3MtY29sb3I6IChcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjUlKSxcbiAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTAlKSxcbiAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCA1JSksXG4gICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDIwJSksXG4gICdhY2NlbnQtMSc6ICNlMWZmZjEsXG4gICdhY2NlbnQtMic6ICNhZWZmZDksXG4gICdhY2NlbnQtMyc6ICM3YmZmYzEsXG4gICdhY2NlbnQtNCc6ICM2MmZmYjVcbik7XG4kaW5mby1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyMCUpLFxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCA1JSksXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2luZm8nKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDEwJSksXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignaW5mbycpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjAlKSxcbiAgJ2FjY2VudC0xJzogI2ZlZmZmZixcbiAgJ2FjY2VudC0yJzogI2NiZjVmZixcbiAgJ2FjY2VudC0zJzogIzk4ZWNmZixcbiAgJ2FjY2VudC00JzogIzdmZTdmZlxuKTtcbiR3YXJuaW5nLWNvbG9yOiAoXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignd2FybmluZycpLFxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjZmZmNWVmLFxuICAnYWNjZW50LTInOiAjZmZlNWQ4LFxuICAnYWNjZW50LTMnOiAjZmZmNmYzLFxuICAnYWNjZW50LTQnOiAjZmZlM2RhXG4pO1xuJGRhbmdlci1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdkYW5nZXInKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjZmZlZWYxLFxuICAnYWNjZW50LTInOiAjZmZkNmRiLFxuICAnYWNjZW50LTMnOiAjZmZlY2VlLFxuICAnYWNjZW50LTQnOiAjZmZkM2Q3XG4pO1xuXG4kY29sb3JzOiAoXG4gICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgJ2JsYWNrJzogJGJsYWNrLWNvbG9yLFxuICAnZGFyayc6ICRkYXJrLWNvbG9yLFxuICAnbGlnaHQnOiAkbGlnaHQtY29sb3IsXG4gICdwcmltYXJ5JzogJHByaW1hcnktY29sb3IsXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LWNvbG9yLFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLWNvbG9yLFxuICAnaW5mbyc6ICRpbmZvLWNvbG9yLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLWNvbG9yLFxuICAnZGFuZ2VyJzogJGRhbmdlci1jb2xvclxuKTtcbiIsIi8vIEZvciBhbGVydCdzIGhlYWRpbmcgYm94LXNoYWRvd1xuXG5AbWl4aW4gYWxlcnQtaGVhZGluZy1icygkY29sb3IpIHtcbiAgYm94LXNoYWRvdzogcmdiYSgkY29sb3IsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktNTA6ICNmNmY2ZjYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcbiRncmF5LTMwMDogI2RhZTFlNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogI2I4YzJjYyAhZGVmYXVsdDsgLy8gJGdyYXlcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xuJGdyYXktOTAwOiAjMmEyZTMwICFkZWZhdWx0O1xuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXG5cbiRwdXJwbGU6ICM3MzY3ZjAgIWRlZmF1bHQ7IC8vJHByaW1hcnlcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cbiRvcmFuZ2U6ICNmZjlmNDMgIWRlZmF1bHQ7IC8vJHdhcm5pbmdcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxuXG4kcHJpbWFyeTogJHB1cnBsZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICM4Mjg2OGIgIWRlZmF1bHQ7XG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XG4kd2FybmluZzogJG9yYW5nZSAhZGVmYXVsdDtcbiRsaWdodDogJGdyYXktNTAgIWRlZmF1bHQ7XG4kZGFyazogIzRiNGI0YiAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxuKSAhZGVmYXVsdDtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDI1OiAoXG4gICAgICAkc3BhY2VyICogMC4yNVxuICAgICksXG4gICAgNTA6IChcbiAgICAgICRzcGFjZXIgKiAwLjVcbiAgICApLFxuICAgIDc1OiAoXG4gICAgICAkc3BhY2VyICogMC43NVxuICAgICksXG4gICAgMTogKFxuICAgICAgJHNwYWNlclxuICAgICksXG4gICAgMjogKFxuICAgICAgJHNwYWNlciAqIDEuNVxuICAgICksXG4gICAgMzogKFxuICAgICAgJHNwYWNlciAqIDNcbiAgICApLFxuICAgIDQ6IChcbiAgICAgICRzcGFjZXIgKiAzLjVcbiAgICApLFxuICAgIDU6IChcbiAgICAgICRzcGFjZXIgKiA0XG4gICAgKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lICFkZWZhdWx0O1xuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAycmVtICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6IDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cbi8vIHNoYWRvd1xuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcbi8vIFR5cG9ncmFwaHlcblxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcblxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xNCAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAwLjcycmVtICFkZWZhdWx0O1xuXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAjZjZmNmY5ICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBCdXR0b25zICsgRm9ybXNcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40ODZyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyLWNvbG9yIDBzICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzRSUzQ2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XG4kemluZGV4LWRyb3Bkb3duOiAxMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kcGFnaW5hdGlvbi1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQ2FyZHNcbiRjYXJkLXNwYWNlci15OiAxLjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XG5cbi8vQWxlcnRzXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuNzFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IDcwMCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdiB0YWJzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuMzU4cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIG5hdmJhclxuXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1iZzogIzMyMzIzMiAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6IDIyMHB4ICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAxLjE0cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3NcblxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODU3ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC44cmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XG5cbi8vICAgIFNsaWRlIEluIE1vZGFsXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aDogMjhyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6IDQwMCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGtiZC1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogM3JlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vc3ZnIGNvbG9yXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xuXG4vLyBTVkcgaWNvbnNcbi8vIEZvciBCcmVhZGNydW1iXG4kZG91YmxlLWNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb25zLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTMgMTcgMTggMTIgMTMgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgMTcgMTEgMTIgNiA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbi8vIENoZXZyb24gSWNvbnNcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGVjazogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHdhcm5pbmdJY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuXG4kY2hhdC1iZy1saWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJekxqQXVNU3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJMFV4UlRCRk9UdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgRmlsZSBOYW1lOiBwYWxsZXR0ZS1ncmFkaWVudC5zY3NzXG4vLyAgIERlc2NyaXB0aW9uOiBncmFkaWVudCBjb2xvciBzeXN0ZW0gc3R5bGVzXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGZ1bmN0aW9uIGNvbG9yLWZ1bmN0aW9uKCRjb2xvciwgJHR5cGUpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xuICAgICRjdXJyX2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRjdXJyX2NvbG9yLCAkdHlwZSkge1xuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XG4gICAgfVxuICB9XG4gIC8vIEB3YXJuIFwiVW5rbm93biBgI3tuYW1lfWAgaW4gJGNvbG9ycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyBDb2xvciBwYWxldHRlc1xuQGltcG9ydCAncGFsZXR0ZS12YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyYWRpZW50cyc7XG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvZ3JhZGllbnRzJztcblxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcbiAgQGVhY2ggJGNvbG9yX3R5cGUsICRjb2xvcl92YWx1ZSBpbiAkY29sb3Ige1xuICAgIEBpZiAkY29sb3JfdHlwZSA9PSAnYmFzZScge1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5iZy1ncmFkaWVudC0jeyRjb2xvcl9uYW1lfSxcbiAgICAgICAgLmJ0bi1ncmFkaWVudC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIEBpZiAkY29sb3JfbmFtZSA9PSAnZGFyaycge1xuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Jhc2UnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIG1hcC1nZXQoKCRjb2xvciksICdkYXJrZW4tMicpLCA0N2RlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3IgZGFyayBsYXlvdXRcbiAgICAgICAgICAgIC5kYXJrLWxheW91dCAmIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Rhcmtlbi0yJyksIG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIDQ3ZGVnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaWYgKGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnYmFzZScpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2xpZ2h0ZW4tMicpLCA0N2RlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Rhcmtlbi0yJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgNDdkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5AbWl4aW4gZ3JhZGllbnQtYmcoJGNvbG9yKSB7XG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14O1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbkBtaXhpbiBncmFkaWVudC14KCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC15LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICRncmF5LTcwMCwgJG91dGVyLWNvbG9yOiAkZ3JheS04MDApIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vQm9keVxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XG5cbi8vVHlwb2dyYXBoeVxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG5cbi8vQ2FyZFxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XG5cbi8vSW5wdXRcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XG5cbi8vVGFibGVcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0ICdAY29yZS9zY3NzL2FuZ3VsYXIvbGlicy9kYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzJztcblxuLmRhdGF0YWJsZS1zY3JvbGwge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 9960:
/*!*************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesModule": () => (/* binding */ DatatablesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/datatables.component */ 12716);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [
    {
        path: 'datatables',
        component: app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent,
        resolve: {
            datatables: app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService
        },
        data: { animation: 'datatables' }
    }
];
class DatatablesModule {
}
DatatablesModule.ɵfac = function DatatablesModule_Factory(t) { return new (t || DatatablesModule)(); };
DatatablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DatatablesModule });
DatatablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DatatablesModule, { declarations: [app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] }); })();


/***/ }),

/***/ 7502:
/*!**************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesService": () => (/* binding */ DatatablesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DatatablesService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onDatatablessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getDataTableRows()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getDataTableRows() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/datatable-rows').subscribe((response) => {
                this.rows = response;
                this.onDatatablessChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
}
DatatablesService.ɵfac = function DatatablesService_Factory(t) { return new (t || DatatablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DatatablesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatatablesService, factory: DatatablesService.ɵfac });


/***/ }),

/***/ 29239:
/*!******************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.snippetcode.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snippetCodeCustomCheckbox": () => (/* binding */ snippetCodeCustomCheckbox),
/* harmony export */   "snippetCodeInlineEditing": () => (/* binding */ snippetCodeInlineEditing),
/* harmony export */   "snippetCodeKitchenSink": () => (/* binding */ snippetCodeKitchenSink),
/* harmony export */   "snippetCodeMultilangual": () => (/* binding */ snippetCodeMultilangual),
/* harmony export */   "snippetCodeResponsive": () => (/* binding */ snippetCodeResponsive),
/* harmony export */   "snippetCodeRowDetails": () => (/* binding */ snippetCodeRowDetails)
/* harmony export */ });
const snippetCodeKitchenSink = {
    html: `
<div class="row">
  <div class="col-12 mb-50">
    <button class="btn btn-primary ml-1" rippleEffect>
      <i data-feather="plus" class="mr-0 mr-sm-1"></i
      ><span class="d-none d-sm-inline-block">Add New Record</span>
    </button>

    <a csvLink [data]="exportCSVData" class="btn btn-outline-secondary float-right mr-1" rippleEffect
      >Export CSV</a
    >
  </div>
  <div class="col-md-6 col-12">
    <div class="d-flex justify-content-between align-items-center m-1">
      <label class="d-flex align-items-center"
        >Show
        <select class="form-control mx-25" [(ngModel)]="basicSelectedOption">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries</label
      >
    </div>
  </div>
  <div class="col-md-6 col-12 d-flex justify-content-md-end">
    <div class="d-flex align-items-center justify-content-end pr-1 pb-1 pl-1 pl-md-0 pb-md-0">
      <label class="d-flex align-items-center"
        >Search<input
          type="search"
          placeholder="Search"
          class="form-control ml-25"
          (keyup)="filterUpdate($event)"
          (search)="filterUpdate($event)"
      /></label>
    </div>
  </div>
</div>
<ngx-datatable
  [rows]="kitchenSinkRows"
  [rowHeight]="58"
  class="bootstrap core-bootstrap"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [footerHeight]="50"
  [scrollbarH]="true"
  [selectionType]="SelectionType.checkbox"
  [limit]="basicSelectedOption"
  (activate)="onActivate($event)"
  (select)="onSelect($event)"
>
  <ngx-datatable-column
    [width]="50"
    [sortable]="false"
    [canAutoResize]="false"
    [draggable]="false"
    [resizeable]="false"
  >
    <ng-template
      ngx-datatable-header-template
      let-value="value"
      let-allRowsSelected="allRowsSelected"
      let-selectFn="selectFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="allRowsSelected"
          (change)="selectFn(!allRowsSelected)"
          id="headerChkbxRef"
        />
        <label class="custom-control-label" for="headerChkbxRef"></label>
      </div>
    </ng-template>
    <ng-template
      ngx-datatable-cell-template
      let-rowIndex="rowIndex"
      let-value="value"
      let-isSelected="isSelected"
      let-onCheckboxChangeFn="onCheckboxChangeFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="isSelected"
          (change)="onCheckboxChangeFn($event)"
          id="rowChkbxRef{{ rowIndex }}"
        />
        <label class="custom-control-label" for="rowChkbxRef{{ rowIndex }}"></label>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Name" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 font-weight-bold line-height-1 mb-25">
            {{ name }}
          </p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
  <ngx-datatable-column name="Date" prop="start_date" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Status" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public SelectionType = SelectionType;

  /**
   * Method Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });
  }
  `
};
const snippetCodeInlineEditing = {
    html: `
<ngx-datatable
  class="bootstrap core-bootstrap"
  [headerHeight]="40"
  [rowHeight]="58"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [footerHeight]="50"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column [width]="280" name="Name" prop="full_name">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingName[rowIndex + '-full_name'] = true"
        *ngIf="!editingName[rowIndex + '-full_name']"
      >
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ value | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ value }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateName($event, 'full_name', rowIndex)"
        *ngIf="editingName[rowIndex + '-full_name']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="120" name="Status" prop="status">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
      <div
        title="Double click to edit"
        (dblclick)="editingStatus[rowIndex + '-status'] = true"
        *ngIf="!editingStatus[rowIndex + '-status']"
      >
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': value == '1',
            'badge-light-success': value == '2',
            'badge-light-danger': value == '3',
            'badge-light-warning': value == '4',
            'badge-light-info': value == '5'
          }"
        >
          {{
            value == 1
              ? 'Current'
              : value == 2
              ? 'Professional'
              : value == 3
              ? 'Rejected'
              : value == 4
              ? 'Resigned'
              : value == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </div>
      <select
        *ngIf="editingStatus[rowIndex + '-status']"
        (blur)="editingStatus[rowIndex + '-status'] = false"
        (change)="inlineEditingUpdateStatus($event, 'status', rowIndex)"
        [value]="value"
        class="form-control form-control-sm"
      >
        <option value="1">Current</option>
        <option value="2">Professional</option>
        <option value="3">Rejected</option>
        <option value="4">Resigned</option>
        <option value="5">Applied</option>
      </select>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="50" name="Age" prop="age">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingAge[rowIndex + '-age'] = true"
        *ngIf="!editingAge[rowIndex + '-age']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateAge($event, 'age', rowIndex)"
        *ngIf="editingAge[rowIndex + '-age']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="100" name="Salary" prop="salary" [width]="120">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingSalary[rowIndex + '-salary'] = true"
        *ngIf="!editingSalary[rowIndex + '-salary']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateSalary($event, 'salary', rowIndex)"
        *ngIf="editingSalary[rowIndex + '-salary']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `

  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeRowDetails = {
    html: `
  <!-- ngx-datatable-row-details -->
  <ngx-datatable
    #tableRowDetails
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [footerHeight]="50"
    [rowHeight]="58"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <!-- Row Detail Template -->
    <ngx-datatable-row-detail [rowHeight]="50">
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>
        <div class="ml-75 pl-5 pt-75">
          <div>
            <span><strong>City : </strong> {{ row.city }}</span
            ><span class="ml-1"><strong>Experience : </strong> {{ row.experience }}</span
            ><span class="ml-1"><strong>Start Date : </strong> {{ row.start_date }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-row-detail>
    <ngx-datatable-column
      [width]="50"
      [resizeable]="false"
      [sortable]="false"
      [draggable]="false"
      [canAutoResize]="false"
    >
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
        <a
          href="javascript:void(0)"
          [class.datatable-icon-right]="!expanded"
          [class.datatable-icon-down]="expanded"
          title="Expand/Collapse Row"
          (click)="rowDetailsToggleExpand(row)"
        >
        </a>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!-- ngx-datatable-row-details -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeCustomCheckbox = {
    html: `
<!-- ngx-datatable-custom-checkbox -->
  <div class="row">
    <div class="col-12">
      <ngx-datatable
        class="bootstrap core-bootstrap"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [footerHeight]="50"
        [rowHeight]="58"
        [limit]="10"
        [selected]="chkBoxSelected"
        [selectionType]="SelectionType.checkbox"
        (select)="customChkboxOnSelect($event)"
        [scrollbarH]="true"
        (activate)="onActivate($event)"
        (select)="onSelect($event)"
      >
        <ngx-datatable-column
          [width]="50"
          [sortable]="false"
          [canAutoResize]="false"
          [draggable]="false"
          [resizeable]="false"
        >
          <ng-template
            ngx-datatable-header-template
            let-value="value"
            let-allRowsSelected="allRowsSelected"
            let-selectFn="selectFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="allRowsSelected"
                (change)="selectFn(!allRowsSelected)"
                id="headerCustomChkbxRef"
              />
              <label class="custom-control-label" for="headerCustomChkbxRef"></label>
            </div>
          </ng-template>
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-isSelected="isSelected"
            let-onCheckboxChangeFn="onCheckboxChangeFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="isSelected"
                (change)="onCheckboxChangeFn($event)"
                id="rowCustomChkbxRef{{ rowIndex }}"
              />
              <label class="custom-control-label" for="rowCustomChkbxRef{{ rowIndex }}"></label>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="full_name" [width]="280">
          <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div *ngIf="row.avatar.length > 0; else customAvatar">
                <img
                  class="rounded-circle mr-1"
                  src="assets/images/portrait/small/{{ row.avatar }}"
                  height="32"
                  width="32"
                  alt="datatable-avatar"
                />
              </div>
              <ng-template #customAvatar>
                <div
                  class="avatar mr-1 ml-0"
                  [ngClass]="{
                    'bg-light-primary': row.status == '1',
                    'bg-light-success': row.status == '2',
                    'bg-light-danger': row.status == '3',
                    'bg-light-warning': row.status == '4',
                    'bg-light-info': row.status == '5'
                  }"
                >
                  <div class="avatar-content">{{ name | initials }}</div>
                </div>
              </ng-template>
              <div class="cell-line-height">
                <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
                <span class="text-muted font-small-2"> {{ row.post }}</span>
              </div>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
        <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
        <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
        <ngx-datatable-column name="Status" prop="status" [width]="120">
          <ng-template let-status="value" ngx-datatable-cell-template>
            <div
              class="badge badge-pill"
              [ngClass]="{
                'badge-light-primary': status == '1',
                'badge-light-success': status == '2',
                'badge-light-danger': status == '3',
                'badge-light-warning': status == '4',
                'badge-light-info': status == '5'
              }"
            >
              {{
                status == 1
                  ? 'Current'
                  : status == 2
                  ? 'Professional'
                  : status == 3
                  ? 'Rejected'
                  : status == 4
                  ? 'Resigned'
                  : status == 5
                  ? 'Applied'
                  : 'Applied'
              }}
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
          <ng-template ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div ngbDropdown container="body">
                <a
                  ngbDropdownToggle
                  href="javascript:void(0);"
                  class="hide-arrow"
                  id="dropdownBrowserState"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="file-text" class="mr-50"></i> Details</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="archive" class="mr-50"></i> Archive</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="trash-2" class="mr-50"></i> Delete</a
                  >
                </div>
              </div>

              <i data-feather="edit" class="text-primary cursor-pointer"></i>
            </div>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
    <div class="selected-column col-12 mt-1">
      <hr class="w-100" />
      <h5 class="mx-1">
        Selections <small>({{ chkBoxSelected?.length }})</small>
      </h5>
      <ul>
        <li *ngFor="let sel of chkBoxSelected">
          {{ sel.full_name }}
        </li>
        <li *ngIf="!chkBoxSelected?.length">No Selections</li>
      </ul>
    </div>
  </div>
  <!--/ ngx-datatable-custom-checkbox -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  public chkBoxSelected = [];

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }

  `
};
const snippetCodeResponsive = {
    html: `
  <!-- ngx-datatables responsive -->
  <ngx-datatable
    #table
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [rowHeight]="58"
    [footerHeight]="50"
    rowHeight="auto"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Action" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!--/ ngx-datatables responsive -->
  `,
    ts: `
  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeMultilangual = {
    html: `
  <ngx-datatable
  #table
  class="bootstrap core-bootstrap"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [rowHeight]="58"
  [footerHeight]="50"
  rowHeight="auto"
  [limit]="10"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column name="{{ 'HEADER.NAME' | translate }}" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column
    name="{{ 'HEADER.EMAIL' | translate }}"
    prop="email"
    [width]="250"
  ></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.AGE' | translate }}" prop="age" [width]="50"></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.STATUS' | translate }}" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.ACTIONS' | translate }}" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  constructor( private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(english, french, german, portuguese);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};


/***/ }),

/***/ 67084:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/de.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'de',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'ALTER',
            STATUS: 'STATUS',
            ACTIONS: 'AKTIONEN'
        }
    }
};


/***/ }),

/***/ 12228:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/en.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'en',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'AGE',
            STATUS: 'STATUS',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 18383:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/fr.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'fr',
    data: {
        HEADER: {
            NAME: 'NOM',
            EMAIL: 'EMAIL',
            AGE: 'ÂGE',
            STATUS: 'STATUT',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 49767:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/pt.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'pt',
    data: {
        HEADER: {
            NAME: 'NOME',
            EMAIL: 'O EMAIL',
            AGE: 'ERA',
            STATUS: 'STATUS',
            ACTIONS: 'AÇÕES'
        }
    }
};


/***/ }),

/***/ 13742:
/*!******************************************************!*\
  !*** ./src/app/main/tables/table/table.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);




class TableComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Bootstrap Tables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Table',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Bootstrap Tables',
                        isLink: false
                    }
                ]
            }
        };
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 2354, vars: 1, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "basic-table", 1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "table-responsive"], [1, "table"], ["src", "assets/images/icons/angular.svg", "height", "20", "width", "20", "alt", "Angular", 1, "mr-75"], [1, "font-weight-bold"], [1, "avatar-group"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Lilian Nenez", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Alberto Glotzbach", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "26", "width", "26"], [1, "badge", "badge-pill", "badge-light-primary", "mr-1"], [1, "overflow-hidden"], ["ngbDropdown", "", "container", "body"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "hide-arrow"], ["data-feather", "more-vertical"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "href", "javascript:void(0);"], ["data-feather", "edit-2", 1, "mr-50"], ["data-feather", "trash", 1, "mr-50"], ["src", "assets/images/icons/react.svg", "height", "20", "width", "20", "alt", "React", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-success", "mr-1"], ["src", "assets/images/icons/vuejs.svg", "height", "20", "width", "20", "alt", "Vuejs", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-info", "mr-1"], ["src", "assets/images/icons/bootstrap.svg", "height", "20", "width", "20", "alt", "Bootstrap", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-warning", "mr-1"], ["id", "dark-table", 1, "row"], [1, "table", "table-dark"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "text-white", "hide-arrow"], ["id", "table-head", 1, "row"], [1, "highlighter-rouge"], [1, "thead-dark"], [1, "card-body", "mt-2"], [1, "thead-light"], ["id", "table-striped", 1, "row"], [1, "table", "table-striped"], ["id", "table-striped-dark", 1, "row"], [1, "table", "table-striped", "table-dark"], ["id", "table-bordered", 1, "row"], [1, "table", "table-bordered"], ["id", "table-borderless", 1, "row"], [1, "table", "table-borderless"], ["id", "table-hover-row", 1, "row"], [1, "table", "table-hover"], ["id", "table-small", 1, "row"], [1, "table", "table-sm"], ["src", "assets/images/icons/angular.svg", "alt", "Angular", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/icons/react.svg", "alt", "React", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/vuejs.svg", "alt", "Vuejs", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/bootstrap.svg", "alt", "Bootstrap", "width", "18", "height", "18", 1, "mr-75"], ["id", "table-contextual", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/IDcontextual-classes", "target", "_blank"], [1, "table-default"], ["src", "assets/images/icons/figma.svg", "height", "20", "width", "20", "alt", "Figma", 1, "mr-75"], [1, "table-active"], [1, "table-primary"], [1, "table-secondary"], [1, "badge", "badge-pill", "badge-light-secondary", "mr-1"], [1, "table-success"], [1, "table-danger"], [1, "badge", "badge-pill", "badge-light-danger", "mr-1"], [1, "table-warning"], [1, "table-info"], [1, "table-light"], [1, "table-dark"], [1, "badge", "badge-pill", "badge-light-dark", "mr-1"], ["id", "table-without-card", 1, "row"], [1, "col-12", "my-2"], [1, "mb-1"], ["id", "table-responsive", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables", "target", "_blank"], [1, "alert", "alert-info"], [1, "alert-body"], [1, "text-warning"], [1, "table", "mb-0"], ["scope", "col", 1, "text-nowrap"], [1, "text-nowrap"], ["id", "table-hover-animation", 1, "row"], [1, "table", "table-hover-animation"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Table Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Using the most basic table Leanne Grahamup, here\u2019s how ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " -based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of bootstrap tables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody")(30, "tr")(31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "div", 14)(39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td")(46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td", 21)(49, "div", 22)(50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr")(62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td")(69, "div", 14)(70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td")(77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td", 21)(80, "div", 22)(81, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 25)(84, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tr")(93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td")(100, "div", 14)(101, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td")(108, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "td", 21)(111, "div", 22)(112, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 25)(115, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "tr")(124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td")(131, "div", 14)(132, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "td")(139, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td", 21)(142, "div", 22)(143, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 25)(146, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 35)(155, "div", 4)(156, "div", 5)(157, "div", 6)(158, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Dark Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 8)(161, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, " class. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 10)(170, "table", 36)(171, "thead")(172, "tr")(173, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tbody")(184, "tr")(185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td")(192, "div", 14)(193, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td")(200, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "td")(203, "div", 22)(204, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 25)(207, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "tr")(216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td")(223, "div", 14)(224, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "td")(231, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "td")(234, "div", 22)(235, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 25)(238, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "tr")(247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "td")(254, "div", 14)(255, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "td")(262, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "td")(265, "div", 22)(266, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 25)(269, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "tr")(278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "td")(285, "div", 14)(286, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](289, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](291, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "td")(293, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "td")(296, "div", 22)(297, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div", 25)(300, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](301, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](305, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "div", 38)(309, "div", 4)(310, "div", 5)(311, "div", 6)(312, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Table head options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 8)(315, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, " Similar to tables and dark tables, use the modifier classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, ".thead-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, " to make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "<thead>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, " s appear dark. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "div", 10)(324, "table", 11)(325, "thead", 40)(326, "tr")(327, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "tbody")(338, "tr")(339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](340, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "td")(346, "div", 14)(347, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](350, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](352, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "td")(354, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "td", 21)(357, "div", 22)(358, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 25)(361, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "tr")(370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "td")(377, "div", 14)(378, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](379, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "td")(385, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "td", 21)(388, "div", 22)(389, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](390, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "div", 25)(392, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](393, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](397, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "tr")(401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](402, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "td")(408, "div", 14)(409, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](410, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](412, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](414, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "td")(416, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "td", 21)(419, "div", 22)(420, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](421, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 25)(423, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](424, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](428, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "tr")(432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](433, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "td")(439, "div", 14)(440, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](441, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](443, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "td")(447, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "td", 21)(450, "div", 22)(451, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](452, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 25)(454, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](455, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](459, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "div", 41)(463, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](464, " Use the modifier class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](466, ".thead-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, " to make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](469, "<thead>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](470, " s appear light. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "div", 10)(472, "table", 11)(473, "thead", 42)(474, "tr")(475, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](484, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](485, "tbody")(486, "tr")(487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](488, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](490, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "td")(494, "div", 14)(495, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](496, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](498, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](500, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "td")(502, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "td", 21)(505, "div", 22)(506, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](507, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "div", 25)(509, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](510, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](512, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](514, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "tr")(518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](519, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](521, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "td")(525, "div", 14)(526, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](527, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](529, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](531, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](532, "td")(533, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](534, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "td", 21)(536, "div", 22)(537, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](538, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "div", 25)(540, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](541, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](542, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](543, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](544, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](545, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](547, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "tr")(549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](550, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](552, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](554, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "td")(556, "div", 14)(557, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](558, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](559, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](560, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](562, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "td")(564, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](565, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "td", 21)(567, "div", 22)(568, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](569, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 25)(571, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](572, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](574, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](575, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](576, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](577, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](578, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "tr")(580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](581, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](582, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](585, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](586, "td")(587, "div", 14)(588, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](589, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](590, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](591, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](592, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](593, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](594, "td")(595, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](596, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "td", 21)(598, "div", 22)(599, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](600, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "div", 25)(602, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](603, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](604, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](605, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](606, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](607, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](609, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](610, "div", 43)(611, "div", 4)(612, "div", 5)(613, "div", 6)(614, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](615, "Striped rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](616, "div", 8)(617, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](618, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](619, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](620, ".table-striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](621, " to add zebra-striping to any table row within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](622, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](623, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](624, " . This styling doesn't work in IE8 and below as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](625, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](626, ":nth-child");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](627, " CSS selector isn't supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](628, "div", 10)(629, "table", 44)(630, "thead")(631, "tr")(632, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](633, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](634, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](635, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](637, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](638, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](639, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](641, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](642, "tbody")(643, "tr")(644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](645, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](646, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](647, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](649, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](650, "td")(651, "div", 14)(652, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](653, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](655, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](656, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](657, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](658, "td")(659, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](660, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](661, "td", 21)(662, "div", 22)(663, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](664, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](665, "div", 25)(666, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](667, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](669, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](670, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](671, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](672, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](673, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](674, "tr")(675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](676, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](677, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](678, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](679, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](680, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](681, "td")(682, "div", 14)(683, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](684, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](685, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](686, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](687, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](688, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](689, "td")(690, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](691, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](692, "td", 21)(693, "div", 22)(694, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](695, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](696, "div", 25)(697, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](698, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](699, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](700, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](702, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](703, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](704, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](705, "tr")(706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](707, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](708, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](709, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](711, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](712, "td")(713, "div", 14)(714, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](715, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](716, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](717, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](718, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](719, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](720, "td")(721, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](722, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](723, "td", 21)(724, "div", 22)(725, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](726, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](727, "div", 25)(728, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](729, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](731, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](732, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](733, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](734, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](735, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](736, "tr")(737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](738, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](739, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](740, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](742, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](743, "td")(744, "div", 14)(745, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](746, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](747, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](748, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](749, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](750, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](751, "td")(752, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](753, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](754, "td", 21)(755, "div", 22)(756, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](757, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](758, "div", 25)(759, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](760, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](761, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](762, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](763, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](764, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](765, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](766, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](767, "div", 45)(768, "div", 4)(769, "div", 5)(770, "div", 6)(771, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](772, "Striped rows with inverse dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](773, "div", 8)(774, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](775, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](777, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](778, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](780, ".table-striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](781, " to add zebra-striping to any inverse table row within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](783, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](784, " . This styling doesn't work in IE8 and below as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](785, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](786, ":nth-child");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](787, " CSS selector isn't supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](788, "div", 10)(789, "table", 46)(790, "thead")(791, "tr")(792, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](793, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](794, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](795, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](796, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](797, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](798, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](799, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](800, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](801, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](802, "tbody")(803, "tr")(804, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](805, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](806, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](807, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](809, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](810, "td")(811, "div", 14)(812, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](813, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](814, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](815, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](816, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](817, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](818, "td")(819, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](820, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](821, "td")(822, "div", 22)(823, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](824, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](825, "div", 25)(826, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](827, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](828, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](829, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](830, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](831, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](832, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](833, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](834, "tr")(835, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](836, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](837, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](838, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](840, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](841, "td")(842, "div", 14)(843, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](844, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](845, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](846, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](847, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](848, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](849, "td")(850, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](851, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](852, "td")(853, "div", 22)(854, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](855, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](856, "div", 25)(857, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](858, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](859, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](860, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](861, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](862, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](863, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](864, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](865, "tr")(866, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](867, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](868, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](869, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](870, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](871, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](872, "td")(873, "div", 14)(874, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](875, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](876, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](877, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](878, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](879, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](880, "td")(881, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](882, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](883, "td")(884, "div", 22)(885, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](886, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](887, "div", 25)(888, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](889, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](890, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](891, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](892, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](893, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](894, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](895, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](896, "tr")(897, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](898, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](899, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](900, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](901, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](902, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](903, "td")(904, "div", 14)(905, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](906, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](907, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](908, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](909, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](910, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](911, "td")(912, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](913, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](914, "td")(915, "div", 22)(916, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](917, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](918, "div", 25)(919, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](920, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](921, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](922, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](923, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](924, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](925, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](926, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](927, "div", 47)(928, "div", 4)(929, "div", 5)(930, "div", 6)(931, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](932, "Bordered table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](933, "div", 8)(934, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](935, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](937, ".table-bordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](938, " for borders on all sides of the table and cells. For Inverse Dark Table, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](939, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](940, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](941, " along with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](942, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](943, " .table-bordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](944, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](945, "div", 10)(946, "table", 48)(947, "thead")(948, "tr")(949, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](950, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](951, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](952, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](953, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](954, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](955, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](956, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](957, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](958, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](959, "tbody")(960, "tr")(961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](962, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](963, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](964, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](966, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](967, "td")(968, "div", 14)(969, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](970, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](971, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](972, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](973, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](974, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](975, "td")(976, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](977, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](978, "td", 21)(979, "div", 22)(980, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](981, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](982, "div", 25)(983, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](984, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](985, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](986, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](987, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](988, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](989, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](990, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](991, "tr")(992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](993, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](994, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](995, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](997, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](998, "td")(999, "div", 14)(1000, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1001, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1002, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1003, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1004, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1005, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1006, "td")(1007, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1008, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1009, "td", 21)(1010, "div", 22)(1011, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1012, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1013, "div", 25)(1014, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1015, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1016, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1017, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1018, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1019, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1020, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1021, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1022, "tr")(1023, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1024, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1025, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1026, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1027, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1028, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1029, "td")(1030, "div", 14)(1031, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1032, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1033, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1034, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1035, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1036, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1037, "td")(1038, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1039, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1040, "td", 21)(1041, "div", 22)(1042, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1043, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1044, "div", 25)(1045, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1046, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1047, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1048, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1049, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1050, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1051, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1052, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1053, "tr")(1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1055, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1056, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1057, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1058, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1059, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1060, "td")(1061, "div", 14)(1062, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1063, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1064, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1065, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1066, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1067, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1068, "td")(1069, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1070, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1071, "td", 21)(1072, "div", 22)(1073, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1074, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1075, "div", 25)(1076, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1077, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1078, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1079, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1080, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1081, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1082, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1083, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1084, "div", 49)(1085, "div", 4)(1086, "div", 5)(1087, "div", 6)(1088, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1089, "Borderless Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1090, "div", 8)(1091, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1092, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1093, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1094, ".table-borderless");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1095, " for a table without borders. It can also be used on dark tables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1096, "div", 10)(1097, "table", 50)(1098, "thead")(1099, "tr")(1100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1101, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1103, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1105, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1107, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1109, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1110, "tbody")(1111, "tr")(1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1113, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1114, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1115, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1117, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1118, "td")(1119, "div", 14)(1120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1121, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1123, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1125, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1126, "td")(1127, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1128, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1129, "td", 21)(1130, "div", 22)(1131, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1132, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1133, "div", 25)(1134, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1135, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1137, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1138, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1139, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1141, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1142, "tr")(1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1144, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1145, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1146, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1148, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1149, "td")(1150, "div", 14)(1151, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1152, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1153, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1154, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1155, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1156, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1157, "td")(1158, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1159, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1160, "td", 21)(1161, "div", 22)(1162, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1163, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1164, "div", 25)(1165, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1166, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1168, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1169, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1170, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1172, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1173, "tr")(1174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1175, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1176, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1177, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1179, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1180, "td")(1181, "div", 14)(1182, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1183, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1184, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1185, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1186, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1187, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1188, "td")(1189, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1190, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1191, "td", 21)(1192, "div", 22)(1193, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1194, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1195, "div", 25)(1196, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1197, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1199, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1200, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1201, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1203, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1204, "tr")(1205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1206, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1207, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1208, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1210, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1211, "td")(1212, "div", 14)(1213, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1214, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1215, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1216, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1217, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1218, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1219, "td")(1220, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1221, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1222, "td", 21)(1223, "div", 22)(1224, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1225, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1226, "div", 25)(1227, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1228, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1230, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1231, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1232, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1234, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1235, "div", 51)(1236, "div", 4)(1237, "div", 5)(1238, "div", 6)(1239, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1240, "Hoverable rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1241, "div", 8)(1242, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1243, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1244, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1245, ".table-hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1246, " to enable a hover state on table rows within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1247, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1248, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1249, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1250, "div", 10)(1251, "table", 52)(1252, "thead")(1253, "tr")(1254, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1255, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1257, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1259, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1261, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1262, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1263, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1264, "tbody")(1265, "tr")(1266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1267, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1268, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1269, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1271, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1272, "td")(1273, "div", 14)(1274, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1275, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1276, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1277, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1278, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1279, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1280, "td")(1281, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1282, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1283, "td", 21)(1284, "div", 22)(1285, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1286, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1287, "div", 25)(1288, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1289, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1291, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1292, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1293, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1294, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1295, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1296, "tr")(1297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1298, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1299, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1300, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1302, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1303, "td")(1304, "div", 14)(1305, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1306, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1307, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1308, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1309, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1310, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1311, "td")(1312, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1313, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1314, "td", 21)(1315, "div", 22)(1316, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1317, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1318, "div", 25)(1319, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1320, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1322, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1323, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1324, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1325, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1326, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1327, "tr")(1328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1329, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1330, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1331, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1333, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1334, "td")(1335, "div", 14)(1336, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1337, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1338, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1339, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1340, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1341, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1342, "td")(1343, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1344, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1345, "td", 21)(1346, "div", 22)(1347, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1348, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1349, "div", 25)(1350, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1351, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1352, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1353, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1354, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1355, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1356, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1357, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1358, "tr")(1359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1360, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1361, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1362, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1364, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1365, "td")(1366, "div", 14)(1367, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1368, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1369, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1370, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1371, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1372, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1373, "td")(1374, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1375, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1376, "td", 21)(1377, "div", 22)(1378, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1379, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1380, "div", 25)(1381, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1382, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1383, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1384, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1385, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1386, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1387, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1388, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1389, "div", 53)(1390, "div", 4)(1391, "div", 5)(1392, "div", 6)(1393, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1394, "Small Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1395, "div", 8)(1396, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1397, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1398, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1399, ".table-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1400, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1401, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1402, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1403, " to display small size table. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1404, "div", 10)(1405, "table", 54)(1406, "thead")(1407, "tr")(1408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1409, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1411, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1413, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1415, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1416, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1417, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1418, "tbody")(1419, "tr")(1420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1421, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1422, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1423, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1425, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1426, "td")(1427, "div", 14)(1428, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1429, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1430, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1431, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1432, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1433, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1434, "td")(1435, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1436, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1437, "td", 21)(1438, "div", 22)(1439, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1440, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1441, "div", 25)(1442, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1443, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1444, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1445, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1446, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1447, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1448, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1449, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1450, "tr")(1451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1452, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1453, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1454, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1456, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1457, "td")(1458, "div", 14)(1459, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1460, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1461, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1462, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1463, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1464, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1465, "td")(1466, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1467, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1468, "td", 21)(1469, "div", 22)(1470, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1471, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1472, "div", 25)(1473, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1474, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1475, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1476, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1477, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1478, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1479, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1480, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1481, "tr")(1482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1483, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1484, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1485, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1487, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1488, "td")(1489, "div", 14)(1490, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1491, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1492, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1493, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1494, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1495, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1496, "td")(1497, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1498, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1499, "td", 21)(1500, "div", 22)(1501, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1502, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1503, "div", 25)(1504, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1505, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1506, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1507, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1508, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1509, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1510, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1511, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1512, "tr")(1513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1514, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1515, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1516, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1518, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1519, "td")(1520, "div", 14)(1521, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1522, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1523, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1524, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1525, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1526, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1527, "td")(1528, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1529, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1530, "td", 21)(1531, "div", 22)(1532, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1533, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1534, "div", 25)(1535, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1536, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1537, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1538, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1539, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1540, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1541, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1542, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1543, "div", 62)(1544, "div", 4)(1545, "div", 5)(1546, "div", 6)(1547, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1548, "Contextual classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1549, "div", 8)(1550, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1551, " Use contextual classes to color table rows or individual cells. Read full documnetation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1552, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1553, "here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1554, "div", 10)(1555, "table", 11)(1556, "thead")(1557, "tr")(1558, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1559, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1560, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1561, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1562, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1563, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1564, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1565, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1566, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1567, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1568, "tbody")(1569, "tr", 64)(1570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1571, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1572, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1573, "Figma Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1575, "Ronnie Shane");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1576, "td")(1577, "div", 14)(1578, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1579, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1580, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1581, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1582, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1583, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1584, "td")(1585, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1586, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1587, "td", 21)(1588, "div", 22)(1589, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1590, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1591, "div", 25)(1592, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1593, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1594, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1595, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1596, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1597, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1598, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1599, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1600, "tr", 66)(1601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1602, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1603, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1604, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1606, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1607, "td")(1608, "div", 14)(1609, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1610, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1611, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1612, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1613, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1614, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1615, "td")(1616, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1617, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1618, "td", 21)(1619, "div", 22)(1620, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1621, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1622, "div", 25)(1623, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1624, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1625, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1626, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1627, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1628, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1629, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1630, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1631, "tr", 67)(1632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1633, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1634, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1635, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1637, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1638, "td")(1639, "div", 14)(1640, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1641, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1642, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1643, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1644, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1645, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1646, "td")(1647, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1648, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1649, "td", 21)(1650, "div", 22)(1651, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1652, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1653, "div", 25)(1654, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1655, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1656, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1657, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1658, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1659, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1660, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1661, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1662, "tr", 68)(1663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1664, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1665, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1666, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1667, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1668, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1669, "td")(1670, "div", 14)(1671, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1672, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1673, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1674, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1675, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1676, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1677, "td")(1678, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1679, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1680, "td", 21)(1681, "div", 22)(1682, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1683, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1684, "div", 25)(1685, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1686, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1687, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1688, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1689, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1690, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1691, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1692, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1693, "tr", 70)(1694, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1695, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1696, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1697, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1699, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1700, "td")(1701, "div", 14)(1702, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1703, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1704, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1705, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1706, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1707, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1708, "td")(1709, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1710, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1711, "td", 21)(1712, "div", 22)(1713, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1714, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1715, "div", 25)(1716, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1717, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1718, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1719, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1720, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1721, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1722, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1723, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1724, "tr", 71)(1725, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1726, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1727, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1728, "Figma Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1730, "Janne Ale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1731, "td")(1732, "div", 14)(1733, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1734, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1735, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1736, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1737, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1738, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1739, "td")(1740, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1741, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1742, "td", 21)(1743, "div", 22)(1744, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1745, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1746, "div", 25)(1747, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1748, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1749, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1750, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1751, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1752, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1753, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1754, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1755, "tr", 73)(1756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1757, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1758, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1759, "React Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1761, "Ted Richer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1762, "td")(1763, "div", 14)(1764, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1765, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1766, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1767, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1768, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1769, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1770, "td")(1771, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1772, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1773, "td", 21)(1774, "div", 22)(1775, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1776, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1777, "div", 25)(1778, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1779, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1780, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1781, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1782, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1783, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1784, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1785, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1786, "tr", 74)(1787, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1788, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1789, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1790, "Latest Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1792, "Perry Parker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1793, "td")(1794, "div", 14)(1795, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1796, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1797, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1798, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1799, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1800, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1801, "td")(1802, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1803, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1804, "td", 21)(1805, "div", 22)(1806, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1807, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1808, "div", 25)(1809, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1810, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1811, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1812, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1813, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1814, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1815, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1816, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1817, "tr", 75)(1818, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1819, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1820, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1821, "Angular UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1823, "Ana Bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1824, "td")(1825, "div", 14)(1826, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1827, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1828, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1829, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1830, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1831, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1832, "td")(1833, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1834, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1835, "td", 21)(1836, "div", 22)(1837, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1838, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1839, "div", 25)(1840, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1841, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1842, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1843, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1844, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1845, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1846, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1847, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1848, "tr", 76)(1849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1850, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1851, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1852, "Bootstrap UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1854, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1855, "td")(1856, "div", 14)(1857, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1858, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1859, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1860, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1861, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1862, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1863, "td")(1864, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1865, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1866, "td", 21)(1867, "div", 22)(1868, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1869, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1870, "div", 25)(1871, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1872, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1873, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1874, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1875, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1876, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1877, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1878, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1879, "div", 78)(1880, "div", 79)(1881, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1882, "Table without card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1883, "div", 10)(1884, "table", 11)(1885, "thead")(1886, "tr")(1887, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1888, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1889, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1890, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1891, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1892, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1893, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1894, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1895, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1896, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1897, "tbody")(1898, "tr")(1899, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1900, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1901, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1902, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1903, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1904, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1905, "td")(1906, "div", 14)(1907, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1908, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1909, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1910, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1911, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1912, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1913, "td")(1914, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1915, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1916, "td", 21)(1917, "div", 22)(1918, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1919, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1920, "div", 25)(1921, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1922, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1923, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1924, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1925, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1926, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1927, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1928, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1929, "tr")(1930, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1931, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1932, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1933, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1934, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1935, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1936, "td")(1937, "div", 14)(1938, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1939, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1940, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1941, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1942, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1943, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1944, "td")(1945, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1946, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1947, "td", 21)(1948, "div", 22)(1949, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1950, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1951, "div", 25)(1952, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1953, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1954, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1955, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1956, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1957, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1958, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1959, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1960, "tr")(1961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1962, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1963, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1964, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1966, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1967, "td")(1968, "div", 14)(1969, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1970, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1971, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1972, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1973, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1974, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1975, "td")(1976, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1977, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1978, "td", 21)(1979, "div", 22)(1980, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1981, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1982, "div", 25)(1983, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1984, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1985, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1986, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1987, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1988, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1989, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1990, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1991, "tr")(1992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1993, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1994, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1995, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1997, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1998, "td")(1999, "div", 14)(2000, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2001, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2002, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2003, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2004, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2005, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2006, "td")(2007, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2008, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2009, "td", 21)(2010, "div", 22)(2011, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2012, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2013, "div", 25)(2014, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2015, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2016, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2017, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2018, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2019, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2020, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2021, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2022, "div", 81)(2023, "div", 4)(2024, "div", 5)(2025, "div", 6)(2026, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2027, "Responsive tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2028, "div", 8)(2029, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2030, " Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2031, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2032, ".table-responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2033, " class on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2034, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2035, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2036, " . Or, pick a maximum breakpoint with which to have a responsive table up to by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2037, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2038, ".table-responsive{-sm|-md|-lg|-xl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2039, " . Read full documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2040, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2041, "here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2042, "div", 83)(2043, "div", 84)(2044, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2045, "Vertical clipping/truncation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2046, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2047, " Responsive tables make use of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2048, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2049, "overflow-y:hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2050, ", which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2051, "div", 10)(2052, "table", 86)(2053, "thead")(2054, "tr")(2055, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2056, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2057, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2058, "Heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2059, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2060, "Heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2061, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2062, "Heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2063, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2064, "Heading 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2065, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2066, "Heading 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2067, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2068, "Heading 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2069, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2070, "Heading 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2071, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2072, "Heading 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2073, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2074, "Heading 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2075, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2076, "Heading 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2077, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2078, "Heading 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2079, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2080, "Heading 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2081, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2082, "Heading 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2083, "tbody")(2084, "tr")(2085, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2086, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2087, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2088, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2089, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2090, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2091, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2092, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2093, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2094, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2095, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2096, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2097, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2098, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2099, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2100, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2101, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2102, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2103, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2104, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2105, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2106, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2107, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2108, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2109, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2110, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2111, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2112, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2113, "tr")(2114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2115, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2117, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2119, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2121, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2123, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2125, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2127, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2129, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2131, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2133, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2135, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2137, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2139, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2141, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2142, "tr")(2143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2144, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2146, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2148, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2150, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2152, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2154, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2156, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2158, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2160, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2162, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2164, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2166, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2168, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2170, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2171, "tr")(2172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2173, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2175, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2177, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2179, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2181, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2183, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2185, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2187, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2189, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2191, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2193, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2195, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2197, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2199, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2200, "div", 89)(2201, "div", 4)(2202, "div", 5)(2203, "div", 6)(2204, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2205, "Table Hover Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2206, "div", 8)(2207, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2208, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2210, ".table-hover-animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2211, " to enable a hover stat with animation on table rows within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2212, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2213, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2214, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2215, "div", 10)(2216, "table", 90)(2217, "thead")(2218, "tr")(2219, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2220, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2221, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2222, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2224, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2225, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2226, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2227, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2228, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2229, "tbody")(2230, "tr")(2231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2232, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2233, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2234, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2236, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2237, "td")(2238, "div", 14)(2239, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2240, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2241, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2242, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2243, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2244, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2245, "td")(2246, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2247, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2248, "td", 21)(2249, "div", 22)(2250, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2251, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2252, "div", 25)(2253, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2254, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2255, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2256, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2257, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2258, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2260, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2261, "tr")(2262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2263, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2264, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2265, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2267, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2268, "td")(2269, "div", 14)(2270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2271, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2272, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2273, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2274, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2275, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2276, "td")(2277, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2278, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2279, "td", 21)(2280, "div", 22)(2281, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2282, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2283, "div", 25)(2284, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2285, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2287, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2288, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2289, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2291, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2292, "tr")(2293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2294, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2295, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2296, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2298, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2299, "td")(2300, "div", 14)(2301, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2302, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2303, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2304, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2305, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2306, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2307, "td")(2308, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2309, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2310, "td", 21)(2311, "div", 22)(2312, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2313, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2314, "div", 25)(2315, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2316, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2317, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2318, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2319, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2320, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2322, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2323, "tr")(2324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2325, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2326, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2327, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2329, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2330, "td")(2331, "div", 14)(2332, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2333, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2334, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2335, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2336, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2337, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2338, "td")(2339, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2340, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2341, "td", 21)(2342, "div", 22)(2343, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2344, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2345, "div", 25)(2346, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2347, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2348, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2349, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2350, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2351, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2352, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2353, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__.ContentHeaderComponent, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective], encapsulation: 2 });


/***/ }),

/***/ 6122:
/*!***************************************************!*\
  !*** ./src/app/main/tables/table/table.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableModule": () => (/* binding */ TableModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/table/table.component */ 13742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: 'table',
        component: app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent,
        data: { animation: 'table' }
    }
];
class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TableModule, { declarations: [app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule] }); })();


/***/ }),

/***/ 2341:
/*!**********************************************!*\
  !*** ./src/app/main/tables/tables.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/tables/table/table.module */ 6122);
/* harmony import */ var app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/tables/datatables/datatables.module */ 9960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TablesModule {
}
TablesModule.ɵfac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__.TableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TablesModule, { imports: [app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__.TableModule] }); })();


/***/ }),

/***/ 30839:
/*!**************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-csv/__ivy_ngcc__/fesm2015/ctrl-ngx-csv.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvDirective": () => (/* binding */ CsvDirective),
/* harmony export */   "CsvModule": () => (/* binding */ CsvModule),
/* harmony export */   "arrays2csv": () => (/* binding */ arrays2csv),
/* harmony export */   "blob": () => (/* binding */ blob),
/* harmony export */   "buildURI": () => (/* binding */ buildURI),
/* harmony export */   "elementOrEmpty": () => (/* binding */ elementOrEmpty),
/* harmony export */   "isArrays": () => (/* binding */ isArrays),
/* harmony export */   "isJsons": () => (/* binding */ isJsons),
/* harmony export */   "joiner": () => (/* binding */ joiner),
/* harmony export */   "jsons2arrays": () => (/* binding */ jsons2arrays),
/* harmony export */   "jsons2csv": () => (/* binding */ jsons2csv),
/* harmony export */   "jsonsHeaders": () => (/* binding */ jsonsHeaders),
/* harmony export */   "string2csv": () => (/* binding */ string2csv),
/* harmony export */   "toCSV": () => (/* binding */ toCSV)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);





const isJsons = array => Array.isArray(array) && array.every(row => typeof row === 'object' && !(row instanceof Array));

const isArrays = array => Array.isArray(array) && array.every(row => Array.isArray(row));

function jsonsHeaders(array) {
  return Array.from(new Set(array.map(item => Object.keys(item)).reduce((a, b) => [...a, ...b], [])));
}

function jsons2arrays(jsons, headers) {
  headers = headers || jsonsHeaders(jsons); // allow headers to have custom labels, defaulting to having the header data key be the label

  let headerLabels = headers;
  let headerKeys = headers;

  if (isJsons(headers)) {
    headerLabels = headers.map(header => header.label);
    headerKeys = headers.map(header => header.key);
  }

  const data = jsons.map(object => headerKeys.map(header => header in object ? object[header] : ''));
  return [headerLabels, ...data];
}

const elementOrEmpty = element => element || element === 0 ? element : '';

function joiner(data, delimiter = ',') {
  return data.map((row, index) => row.map(element => '"' + elementOrEmpty(element) + '"').join(delimiter)).join(`\n`);
}

function arrays2csv(data, headers, delimiter) {
  return joiner(headers ? [headers, ...data] : data, delimiter);
}

function jsons2csv(data, headers, delimiter) {
  return joiner(jsons2arrays(data, headers), delimiter);
}

function string2csv(data, headers, delimiter) {
  return headers ? `${headers.join(delimiter)}\n${data}` : data;
}

function toCSV(data, headers, delimiter) {
  if (isJsons(data)) {
    return jsons2csv(data, headers, delimiter);
  }

  if (isArrays(data)) {
    return arrays2csv(data, headers, delimiter);
  }

  if (typeof data === 'string') {
    return string2csv(data, headers, delimiter);
  }

  throw new TypeError(`Data should be a "String", "Array of arrays" OR "Array of objects" `);
}

function blob(data, uFEFF = true, headers, delimiter) {
  const csv = toCSV(data, headers, delimiter);
  return new Blob([uFEFF ? '\uFEFF' : '', csv], {
    type: 'text/csv'
  });
}

function buildURI(data, uFEFF = true, headers, delimiter) {
  return URL.createObjectURL(blob(data, uFEFF, headers, delimiter));
}

class CsvDirective {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    /** the body of the csv */

    this.data = [];
    /** Set the seperator between values */

    this.delimiter = ',';
    /** adds a Byte order mark to setup the csv as UTF-8  */

    this.uFEFF = true;
    /** filename */

    this.download = 'data.csv';
    this.target = this.isIEBrowser() ? '' : '_blank';
  }
  /** Set the filename of the csv. Default is `data.csv` */


  set filename(a) {
    this.download = a;
  }

  onClick() {
    // IE handling
    if (this.isIEBrowser()) {
      const file = blob(this.data, this.uFEFF, this.headers, this.delimiter);
      window.navigator.msSaveBlob(file, this.download);
    }
  }

  isIEBrowser() {
    return !!window.navigator.msSaveOrOpenBlob;
  }

  ngOnChanges() {
    this.href = this.sanitizer.bypassSecurityTrustResourceUrl(buildURI(this.data, this.uFEFF, this.headers, this.delimiter));
  }

}

CsvDirective.ɵfac = function CsvDirective_Factory(t) {
  return new (t || CsvDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
};

CsvDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CsvDirective,
  selectors: [["", "csvLink", ""]],
  hostVars: 3,
  hostBindings: function CsvDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CsvDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("download", ctx.download)("target", ctx.target)("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
    }
  },
  inputs: {
    data: "data",
    delimiter: "delimiter",
    uFEFF: "uFEFF",
    target: "target",
    filename: "filename",
    headers: "headers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

CsvDirective.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
}];

CsvDirective.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  headers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  delimiter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  filename: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  uFEFF: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  href: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  download: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  target: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[csvLink]'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delimiter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    uFEFF: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    download: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    filename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    href: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class CsvModule {}

CsvModule.ɵfac = function CsvModule_Factory(t) {
  return new (t || CsvModule)();
};

CsvModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CsvModule
});
CsvModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CsvDirective],
      exports: [CsvDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CsvModule, {
    declarations: [CsvDirective],
    exports: [CsvDirective]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_main_tables_tables_module_ts.js.map