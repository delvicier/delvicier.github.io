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
exports.AdminEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const bcrypt = require("bcrypt");
let AdminEntity = class AdminEntity {
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
};
exports.AdminEntity = AdminEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], AdminEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120, nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 200 }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], AdminEntity.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], AdminEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AdminEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminEntity.prototype, "hashPassword", null);
exports.AdminEntity = AdminEntity = __decorate([
    (0, typeorm_1.Entity)('admin')
], AdminEntity);
//# sourceMappingURL=admin.entity.js.map