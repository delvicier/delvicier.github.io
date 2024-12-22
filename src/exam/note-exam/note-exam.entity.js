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
exports.NoteExamEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../student/student.entity");
const res_exam_entity_1 = require("../res-exam/res-exam.entity");
let NoteExamEntity = class NoteExamEntity {
};
exports.NoteExamEntity = NoteExamEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoteExamEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => res_exam_entity_1.ResExamEntity, (resExamen) => resExamen.notas, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_resExamen' }),
    __metadata("design:type", res_exam_entity_1.ResExamEntity)
], NoteExamEntity.prototype, "resExamen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.notasExamen, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], NoteExamEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], NoteExamEntity.prototype, "calificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], NoteExamEntity.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], NoteExamEntity.prototype, "detalle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], NoteExamEntity.prototype, "fechaCreacion", void 0);
exports.NoteExamEntity = NoteExamEntity = __decorate([
    (0, typeorm_1.Entity)('NotasExamenes')
], NoteExamEntity);
//# sourceMappingURL=note-exam.entity.js.map