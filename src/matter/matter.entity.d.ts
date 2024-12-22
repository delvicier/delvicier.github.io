import { DegreesEntity } from '../degrees/degrees.entity';
import { CourseEntity } from '../course/course.entity';
import { TeacherEntity } from '../teacher/teacher.entity';
import { InscripTeacherEntity } from 'src/inscribe-teacher/inscribe-teacher.entity';
import { InscripStudentEntity } from 'src/inscribe-student/inscribe-student.entity';
import { PaginaEntity } from 'src/pages/pages.entity';
import { ForumEntity } from 'src/forum/create-forum/create-forum.entity';
import { createTasksEntity } from 'src/tasks/create-tasks/create-tasks.entity';
import { ExamEntity } from 'src/exam/create-exam/create-exam.entity';
export declare class MatterEntity {
    id: number;
    carrera: DegreesEntity;
    curso: CourseEntity;
    nombre: string;
    descripcion?: string;
    categoria?: string;
    portada?: string;
    inicio?: Date;
    final?: Date;
    estado?: boolean;
    docente?: TeacherEntity;
    inscripTeacher: InscripTeacherEntity[];
    inscripciones: InscripStudentEntity[];
    paginas: PaginaEntity[];
    foros: ForumEntity[];
    actividades: createTasksEntity[];
    examen: ExamEntity[];
    fechaCreacion: Date;
}
