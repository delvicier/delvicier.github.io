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
exports.ExamEntity = void 0;
const typeorm_1 = require("typeorm");
const matter_entity_1 = require("../../matter/matter.entity");
const res_exam_entity_1 = require("../res-exam/res-exam.entity");
let ExamEntity = class ExamEntity {
};
exports.ExamEntity = ExamEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.examen, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], ExamEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], ExamEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], ExamEntity.prototype, "anioLectivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], ExamEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], ExamEntity.prototype, "cuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], ExamEntity.prototype, "simulador", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], ExamEntity.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], ExamEntity.prototype, "fechaCierre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], ExamEntity.prototype, "tiempoLimite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ExamEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ExamEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => res_exam_entity_1.ResExamEntity, (resExamen) => resExamen.examen),
    __metadata("design:type", Array)
], ExamEntity.prototype, "respuestas", void 0);
exports.ExamEntity = ExamEntity = __decorate([
    (0, typeorm_1.Entity)('Examenes')
], ExamEntity);
//# sourceMappingURL=create-exam.entity.js.map