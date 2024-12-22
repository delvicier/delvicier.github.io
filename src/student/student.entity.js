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
exports.StudentEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const bcrypt = require("bcrypt");
const inscribe_student_entity_1 = require("../inscribe-student/inscribe-student.entity");
const res_forum_entity_1 = require("../forum/res-forum/res-forum.entity");
const note_res_forum_entity_1 = require("../forum/note-res-forum/note-res-forum.entity");
const comment_forum_entity_1 = require("../forum/comment-forum/comment-forum.entity");
const note_comment_forum_entity_1 = require("../forum/note-comment-forum/note-comment-forum.entity");
const note_tasks_entity_1 = require("../tasks/note-tasks/note-tasks.entity");
const res_tasks_entity_1 = require("../tasks/res-tasks/res-tasks.entity");
let StudentEntity = class StudentEntity {
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
};
exports.StudentEntity = StudentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 20 }),
    __metadata("design:type", String)
], StudentEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], StudentEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], StudentEntity.prototype, "nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 240, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], StudentEntity.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], StudentEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], StudentEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscribe_student_entity_1.InscripStudentEntity, (inscripcion) => inscripcion.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => res_forum_entity_1.RespForumEntity, (foros) => foros.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "resForos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_res_forum_entity_1.NoteRespForumEntity, (foros) => foros.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "noteResForos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_forum_entity_1.ComentForumEntity, (foros) => foros.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "commentForos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_comment_forum_entity_1.NoteComentForumEntity, (foros) => foros.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "noteCommentForos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => res_tasks_entity_1.ResTasksEntity, (actividad) => actividad.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "resActividades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_tasks_entity_1.NoteTasksEntity, (nota) => nota.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "notasActividades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_tasks_entity_1.NoteTasksEntity, (nota) => nota.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "resExamen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_tasks_entity_1.NoteTasksEntity, (nota) => nota.alumno),
    __metadata("design:type", Array)
], StudentEntity.prototype, "notasExamen", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentEntity.prototype, "hashPassword", null);
exports.StudentEntity = StudentEntity = __decorate([
    (0, typeorm_1.Entity)('Alumnos')
], StudentEntity);
//# sourceMappingURL=student.entity.js.map