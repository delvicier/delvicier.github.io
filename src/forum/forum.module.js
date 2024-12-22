"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumModule = void 0;
const common_1 = require("@nestjs/common");
const create_forum_module_1 = require("./create-forum/create-forum.module");
const note_res_forum_module_1 = require("./note-res-forum/note-res-forum.module");
const comment_forum_module_1 = require("./comment-forum/comment-forum.module");
const note_comment_forum_module_1 = require("./note-comment-forum/note-comment-forum.module");
const res_forum_module_1 = require("./res-forum/res-forum.module");
let ForumModule = class ForumModule {
};
exports.ForumModule = ForumModule;
exports.ForumModule = ForumModule = __decorate([
    (0, common_1.Module)({
        imports: [create_forum_module_1.CreateForumModule, note_res_forum_module_1.NoteResForumModule, comment_forum_module_1.CommentForumModule, note_comment_forum_module_1.NoteCommentForumModule, res_forum_module_1.ResForumModule]
    })
], ForumModule);
//# sourceMappingURL=forum.module.js.map