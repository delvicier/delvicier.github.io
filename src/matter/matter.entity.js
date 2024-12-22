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
exports.MatterEntity = void 0;
const typeorm_1 = require("typeorm");
const degrees_entity_1 = require("../degrees/degrees.entity");
const course_entity_1 = require("../course/course.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const inscribe_teacher_entity_1 = require("../inscribe-teacher/inscribe-teacher.entity");
const inscribe_student_entity_1 = require("../inscribe-student/inscribe-student.entity");
const pages_entity_1 = require("../pages/pages.entity");
const create_forum_entity_1 = require("../forum/create-forum/create-forum.entity");
const create_tasks_entity_1 = require("../tasks/create-tasks/create-tasks.entity");
const create_exam_entity_1 = require("../exam/create-exam/create-exam.entity");
let MatterEntity = class MatterEntity {
};
exports.MatterEntity = MatterEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MatterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => degrees_entity_1.DegreesEntity, (carreras) => carreras.materias, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_carrera' }),
    __metadata("design:type", degrees_entity_1.DegreesEntity)
], MatterEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.CourseEntity, (cursos) => cursos.materias, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_curso' }),
    __metadata("design:type", course_entity_1.CourseEntity)
], MatterEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    __metadata("design:type", String)
], MatterEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], MatterEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], MatterEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], MatterEntity.prototype, "portada", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MatterEntity.prototype, "inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MatterEntity.prototype, "final", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], MatterEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.TeacherEntity, (docentes) => docentes.materias),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", teacher_entity_1.TeacherEntity)
], MatterEntity.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_teacher_entity_1.InscripTeacherEntity, (inscripcion) => inscripcion.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "inscripTeacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_student_entity_1.InscripStudentEntity, (inscripcion) => inscripcion.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pages_entity_1.PaginaEntity, (pagina) => pagina.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "paginas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => create_forum_entity_1.ForumEntity, (foros) => foros.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "foros", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => create_tasks_entity_1.createTasksEntity, (actividad) => actividad.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "actividades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => create_exam_entity_1.ExamEntity, (actividad) => actividad.materia),
    __metadata("design:type", Array)
], MatterEntity.prototype, "examen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], MatterEntity.prototype, "fechaCreacion", void 0);
exports.MatterEntity = MatterEntity = __decorate([
    (0, typeorm_1.Entity)('Materias')
], MatterEntity);
//# sourceMappingURL=matter.entity.js.map