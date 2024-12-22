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
exports.RespForumEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../student/student.entity");
const create_forum_entity_1 = require("../create-forum/create-forum.entity");
const note_res_forum_entity_1 = require("../note-res-forum/note-res-forum.entity");
const comment_forum_entity_1 = require("../comment-forum/comment-forum.entity");
let RespForumEntity = class RespForumEntity {
};
exports.RespForumEntity = RespForumEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RespForumEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.resForos, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], RespForumEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => create_forum_entity_1.ForumEntity, (foro) => foro.respuestas, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_foro' }),
    __metadata("design:type", create_forum_entity_1.ForumEntity)
], RespForumEntity.prototype, "foro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RespForumEntity.prototype, "resAlumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RespForumEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_res_forum_entity_1.NoteRespForumEntity, (nota) => nota.respForo),
    __metadata("design:type", Array)
], RespForumEntity.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_forum_entity_1.ComentForumEntity, (comentario) => comentario.respForo),
    __metadata("design:type", Array)
], RespForumEntity.prototype, "comentarios", void 0);
exports.RespForumEntity = RespForumEntity = __decorate([
    (0, typeorm_1.Entity)('ResForos')
], RespForumEntity);
//# sourceMappingURL=res-forum.entity.js.map