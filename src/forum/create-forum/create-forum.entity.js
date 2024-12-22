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
exports.ForumEntity = void 0;
const typeorm_1 = require("typeorm");
const matter_entity_1 = require("../../matter/matter.entity");
const res_forum_entity_1 = require("../res-forum/res-forum.entity");
let ForumEntity = class ForumEntity {
};
exports.ForumEntity = ForumEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ForumEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.foros, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], ForumEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], ForumEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], ForumEntity.prototype, "tema", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ForumEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ForumEntity.prototype, "incognita", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ForumEntity.prototype, "solucion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], ForumEntity.prototype, "cuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], ForumEntity.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], ForumEntity.prototype, "fechaCierre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'interval', nullable: true }),
    __metadata("design:type", String)
], ForumEntity.prototype, "tiempoLimite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ForumEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ForumEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => res_forum_entity_1.RespForumEntity, (respForo) => respForo.foro),
    __metadata("design:type", Array)
], ForumEntity.prototype, "respuestas", void 0);
exports.ForumEntity = ForumEntity = __decorate([
    (0, typeorm_1.Entity)('Foros')
], ForumEntity);
//# sourceMappingURL=create-forum.entity.js.map