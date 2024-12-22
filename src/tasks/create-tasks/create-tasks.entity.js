"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTasksEntity = void 0;
const typeorm_1 = require("typeorm");
const matter_entity_1 = require("../../matter/matter.entity");
const res_tasks_entity_1 = require("../res-tasks/res-tasks.entity");
let createTasksEntity = class createTasksEntity {
};
exports.createTasksEntity = createTasksEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], createTasksEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.actividades, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], createTasksEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], createTasksEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], createTasksEntity.prototype, "tema", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], createTasksEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], createTasksEntity.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], createTasksEntity.prototype, "cuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], createTasksEntity.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], createTasksEntity.prototype, "fechaCierre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], createTasksEntity.prototype, "tiempoLimite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], createTasksEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], createTasksEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => res_tasks_entity_1.ResTasksEntity, (respActividad) => respActividad.actividad),
    __metadata("design:type", Array)
], createTasksEntity.prototype, "respuestas", void 0);
exports.createTasksEntity = createTasksEntity = __decorate([
    (0, typeorm_1.Entity)('Actividades')
], createTasksEntity);
//# sourceMappingURL=create-tasks.entity.js.map