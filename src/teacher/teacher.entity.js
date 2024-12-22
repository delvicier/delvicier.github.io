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
exports.TeacherEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const bcrypt = require("bcrypt");
const degrees_entity_1 = require("../degrees/degrees.entity");
const course_entity_1 = require("../course/course.entity");
const matter_entity_1 = require("../matter/matter.entity");
const inscribe_teacher_entity_1 = require("../inscribe-teacher/inscribe-teacher.entity");
let TeacherEntity = class TeacherEntity {
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
};
exports.TeacherEntity = TeacherEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeacherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 20 }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TeacherEntity.prototype, "nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], TeacherEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TeacherEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => degrees_entity_1.DegreesEntity, (carreras) => carreras.docente),
    __metadata("design:type", Array)
], TeacherEntity.prototype, "carreras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.CourseEntity, (cursos) => cursos.docente),
    __metadata("design:type", Array)
], TeacherEntity.prototype, "cursos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matter_entity_1.MatterEntity, (materias) => materias.docente),
    __metadata("design:type", Array)
], TeacherEntity.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_teacher_entity_1.InscripTeacherEntity, (inscripcion) => inscripcion.docente),
    __metadata("design:type", Array)
], TeacherEntity.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeacherEntity.prototype, "hashPassword", null);
exports.TeacherEntity = TeacherEntity = __decorate([
    (0, typeorm_1.Entity)('Docentes')
], TeacherEntity);
//# sourceMappingURL=teacher.entity.js.map