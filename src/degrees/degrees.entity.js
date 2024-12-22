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
exports.DegreesEntity = void 0;
const typeorm_1 = require("typeorm");
const teacher_entity_1 = require("../teacher/teacher.entity");
const course_entity_1 = require("../course/course.entity");
const matter_entity_1 = require("../matter/matter.entity");
const inscribe_teacher_entity_1 = require("../inscribe-teacher/inscribe-teacher.entity");
const inscribe_student_entity_1 = require("../inscribe-student/inscribe-student.entity");
let DegreesEntity = class DegreesEntity {
};
exports.DegreesEntity = DegreesEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DegreesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "portada", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, nullable: true }),
    __metadata("design:type", String)
], DegreesEntity.prototype, "tipo_docente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.TeacherEntity, (docentes) => docentes.carreras),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", teacher_entity_1.TeacherEntity)
], DegreesEntity.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.CourseEntity, (cursos) => cursos.carrera),
    __metadata("design:type", Array)
], DegreesEntity.prototype, "cursos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matter_entity_1.MatterEntity, (materias) => materias.carrera),
    __metadata("design:type", Array)
], DegreesEntity.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_teacher_entity_1.InscripTeacherEntity, (inscripcion) => inscripcion.carrera),
    __metadata("design:type", Array)
], DegreesEntity.prototype, "inscripTeacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_student_entity_1.InscripStudentEntity, (inscripcion) => inscripcion.carrera),
    __metadata("design:type", Array)
], DegreesEntity.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DegreesEntity.prototype, "fechaCreacion", void 0);
exports.DegreesEntity = DegreesEntity = __decorate([
    (0, typeorm_1.Entity)('Carreras')
], DegreesEntity);
//# sourceMappingURL=degrees.entity.js.map