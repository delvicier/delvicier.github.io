import { TeacherEntity } from '../teacher/teacher.entity';
import { CourseEntity } from 'src/course/course.entity';
import { MatterEntity } from 'src/matter/matter.entity';
import { InscripTeacherEntity } from 'src/inscribe-teacher/inscribe-teacher.entity';
import { InscripStudentEntity } from 'src/inscribe-student/inscribe-student.entity';
export declare class DegreesEntity {
    id: number;
    nombre: string;
    descripcion?: string;
    modalidad?: string;
    categoria?: string;
    portada?: string;
    tipo_docente?: string;
    docente?: TeacherEntity;
    cursos: CourseEntity[];
    materias: MatterEntity[];
    inscripTeacher: InscripTeacherEntity[];
    inscripciones: InscripStudentEntity[];
    fechaCreacion: Date;
}
