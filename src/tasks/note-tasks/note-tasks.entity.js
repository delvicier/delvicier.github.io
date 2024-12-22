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
exports.NoteTasksEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../student/student.entity");
const res_tasks_entity_1 = require("../res-tasks/res-tasks.entity");
let NoteTasksEntity = class NoteTasksEntity {
};
exports.NoteTasksEntity = NoteTasksEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoteTasksEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => res_tasks_entity_1.ResTasksEntity, (resActividad) => resActividad.notas, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_resActividades' }),
    __metadata("design:type", res_tasks_entity_1.ResTasksEntity)
], NoteTasksEntity.prototype, "respActividad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.notasActividades, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], NoteTasksEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], NoteTasksEntity.prototype, "calificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], NoteTasksEntity.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], NoteTasksEntity.prototype, "detalle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], NoteTasksEntity.prototype, "fechaCreacion", void 0);
exports.NoteTasksEntity = NoteTasksEntity = __decorate([
    (0, typeorm_1.Entity)('NotasActividades')
], NoteTasksEntity);
//# sourceMappingURL=note-tasks.entity.js.map