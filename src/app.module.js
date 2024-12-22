"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const teacher_module_1 = require("./teacher/teacher.module");
const student_module_1 = require("./student/student.module");
const database_module_1 = require("./database/database.module");
const course_module_1 = require("./course/course.module");
const forum_module_1 = require("./forum/forum.module");
const tasks_module_1 = require("./tasks/tasks.module");
const degrees_module_1 = require("./degrees/degrees.module");
const pages_module_1 = require("./pages/pages.module");
const matter_module_1 = require("./matter/matter.module");
const admin_module_1 = require("./admin/admin.module");
const inscribe_teacher_module_1 = require("./inscribe-teacher/inscribe-teacher.module");
const inscribe_student_module_1 = require("./inscribe-student/inscribe-student.module");
const category_module_1 = require("./category/category.module");
const modality_module_1 = require("./modality/modality.module");
const exam_module_1 = require("./exam/exam.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [teacher_module_1.TeacherModule, student_module_1.StudentModule, database_module_1.DatabaseModule, course_module_1.CourseModule, forum_module_1.ForumModule, tasks_module_1.TasksModule, degrees_module_1.DegreesModule, pages_module_1.PagesModule, matter_module_1.MatterModule, admin_module_1.AdminModule, inscribe_teacher_module_1.InscribeTeacherModule, inscribe_student_module_1.InscribeStudentModule, category_module_1.CategoryModule, modality_module_1.ModalityModule, exam_module_1.ExamModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map