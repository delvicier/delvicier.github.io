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
exports.PaginaEntity = void 0;
const typeorm_1 = require("typeorm");
const matter_entity_1 = require("../matter/matter.entity");
let PaginaEntity = class PaginaEntity {
};
exports.PaginaEntity = PaginaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaginaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matter_entity_1.MatterEntity, (materia) => materia.paginas, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", matter_entity_1.MatterEntity)
], PaginaEntity.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], PaginaEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], PaginaEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], PaginaEntity.prototype, "cuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], PaginaEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PaginaEntity.prototype, "fechaCreacion", void 0);
exports.PaginaEntity = PaginaEntity = __decorate([
    (0, typeorm_1.Entity)('paginas')
], PaginaEntity);
//# sourceMappingURL=pages.entity.js.map