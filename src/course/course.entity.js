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
exports.CourseEntity = void 0;
const typeorm_1 = require("typeorm");
const degrees_entity_1 = require("../degrees/degrees.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const matter_entity_1 = require("../matter/matter.entity");
const inscribe_teacher_entity_1 = require("../inscribe-teacher/inscribe-teacher.entity");
const inscribe_student_entity_1 = require("../inscribe-student/inscribe-student.entity");
let CourseEntity = class CourseEntity {
};
exports.CourseEntity = CourseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => degrees_entity_1.DegreesEntity, (carreras) => carreras.cursos, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_carrera' }),
    __metadata("design:type", degrees_entity_1.DegreesEntity)
], CourseEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    __metadata("design:type", String)
], CourseEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], CourseEntity.prototype, "anioLectivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], CourseEntity.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], CourseEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], CourseEntity.prototype, "portada", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], CourseEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, nullable: true }),
    __metadata("design:type", String)
], CourseEntity.prototype, "tipo_docente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.TeacherEntity, (docentes) => docentes.cursos),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", teacher_entity_1.TeacherEntity)
], CourseEntity.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matter_entity_1.MatterEntity, (materias) => materias.curso),
    __metadata("design:type", Array)
], CourseEntity.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_teacher_entity_1.InscripTeacherEntity, (inscripcion) => inscripcion.curso),
    __metadata("design:type", Array)
], CourseEntity.prototype, "inscripTeacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_student_entity_1.InscripStudentEntity, (inscripcion) => inscripcion.curso),
    __metadata("design:type", Array)
], CourseEntity.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CourseEntity.prototype, "fechaCreacion", void 0);
exports.CourseEntity = CourseEntity = __decorate([
    (0, typeorm_1.Entity)('Cursos')
], CourseEntity);
//# sourceMappingURL=course.entity.js.map