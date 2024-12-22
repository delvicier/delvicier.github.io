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
exports.ResExamEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../student/student.entity");
const create_exam_entity_1 = require("../create-exam/create-exam.entity");
const note_exam_entity_1 = require("../note-exam/note-exam.entity");
let ResExamEntity = class ResExamEntity {
};
exports.ResExamEntity = ResExamEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResExamEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.resExamen, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], ResExamEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => create_exam_entity_1.ExamEntity, (examen) => examen.respuestas, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_examen' }),
    __metadata("design:type", create_exam_entity_1.ExamEntity)
], ResExamEntity.prototype, "examen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], ResExamEntity.prototype, "cuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ResExamEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_exam_entity_1.NoteExamEntity, (nota) => nota.resExamen),
    __metadata("design:type", Array)
], ResExamEntity.prototype, "notas", void 0);
exports.ResExamEntity = ResExamEntity = __decorate([
    (0, typeorm_1.Entity)('ResExamenes')
], ResExamEntity);
//# sourceMappingURL=res-exam.entity.js.map