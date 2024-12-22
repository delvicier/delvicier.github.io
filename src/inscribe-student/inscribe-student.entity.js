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
exports.InscripStudentEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../student/student.entity");
const degrees_entity_1 = require("../degrees/degrees.entity");
const course_entity_1 = require("../course/course.entity");
const matter_entity_1 = require("../matter/matter.entity");
let InscripStudentEntity = class InscripStudentEntity {
};
exports.InscripStudentEntity = InscripStudentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InscripStudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => degrees_entity_1.DegreesEntity, (carrera) => carrera.inscripciones, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_carrera' }),
    __metadata("design:type", degrees_entity_1.DegreesEntity)
], InscripStudentEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.CourseEntity, (curso) => curso.inscripciones, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_curso' }),
    __metadata("design:type", course_entity_1.CourseEntity)
], InscripStudentEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.inscripciones, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materias' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], InscripStudentEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.inscripciones, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumnos' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], InscripStudentEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], InscripStudentEntity.prototype, "fechaCreacion", void 0);
exports.InscripStudentEntity = InscripStudentEntity = __decorate([
    (0, typeorm_1.Entity)('InscribeAlumno')
], InscripStudentEntity);
//# sourceMappingURL=inscribe-student.entity.js.map