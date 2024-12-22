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
exports.InscripTeacherEntity = void 0;
const course_entity_1 = require("../course/course.entity");
const degrees_entity_1 = require("../degrees/degrees.entity");
const matter_entity_1 = require("../matter/matter.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const typeorm_1 = require("typeorm");
let InscripTeacherEntity = class InscripTeacherEntity {
};
exports.InscripTeacherEntity = InscripTeacherEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InscripTeacherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => degrees_entity_1.DegreesEntity, (carrera) => carrera.inscripTeacher, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_carrera' }),
    __metadata("design:type", degrees_entity_1.DegreesEntity)
], InscripTeacherEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.CourseEntity, (curso) => curso.inscripTeacher, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_curso' }),
    __metadata("design:type", course_entity_1.CourseEntity)
], InscripTeacherEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.inscripTeacher, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materias' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], InscripTeacherEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.TeacherEntity, (docente) => docente.inscripciones, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", teacher_entity_1.TeacherEntity)
], InscripTeacherEntity.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], InscripTeacherEntity.prototype, "rolEdit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], InscripTeacherEntity.prototype, "fechaCreacion", void 0);
exports.InscripTeacherEntity = InscripTeacherEntity = __decorate([
    (0, typeorm_1.Entity)('InscribeDocente')
], InscripTeacherEntity);
//# sourceMappingURL=inscribe-teacher.entity.js.map