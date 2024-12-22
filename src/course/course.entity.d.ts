import { DegreesEntity } from '../degrees/degrees.entity';
import { TeacherEntity } from '../teacher/teacher.entity';
import { MatterEntity } from 'src/matter/matter.entity';
import { InscripTeacherEntity } from 'src/inscribe-teacher/inscribe-teacher.entity';
import { InscripStudentEntity } from 'src/inscribe-student/inscribe-student.entity';
export declare class CourseEntity {
    id: number;
    carrera: DegreesEntity;
    nombre: string;
    anioLectivo?: string;
    modalidad?: string;
    categoria?: string;
    portada?: string;
    estado?: boolean;
    tipo_docente?: string;
    docente?: TeacherEntity;
    materias: MatterEntity[];
    inscripTeacher: InscripTeacherEntity[];
    inscripciones: InscripStudentEntity[];
    fechaCreacion: Date;
}
