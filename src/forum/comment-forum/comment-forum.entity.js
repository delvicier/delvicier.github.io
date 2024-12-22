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
exports.ComentForumEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../student/student.entity");
const res_forum_entity_1 = require("../res-forum/res-forum.entity");
const note_comment_forum_entity_1 = require("../note-comment-forum/note-comment-forum.entity");
let ComentForumEntity = class ComentForumEntity {
};
exports.ComentForumEntity = ComentForumEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ComentForumEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (alumno) => alumno.commentForos, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", student_entity_1.StudentEntity)
], ComentForumEntity.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => res_forum_entity_1.RespForumEntity, (respForo) => respForo.comentarios, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_RespForo' }),
    __metadata("design:type", res_forum_entity_1.RespForumEntity)
], ComentForumEntity.prototype, "respForo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComentForumEntity.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComentForumEntity.prototype, "respIA", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ComentForumEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_comment_forum_entity_1.NoteComentForumEntity, (nota) => nota.comentario),
    __metadata("design:type", Array)
], ComentForumEntity.prototype, "notas", void 0);
exports.ComentForumEntity = ComentForumEntity = __decorate([
    (0, typeorm_1.Entity)('ComentForos')
], ComentForumEntity);
//# sourceMappingURL=comment-forum.entity.js.map