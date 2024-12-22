import { DegreesEntity } from '../degrees/degrees.entity';
import { CourseEntity } from 'src/course/course.entity';
import { MatterEntity } from 'src/matter/matter.entity';
import { InscripTeacherEntity } from 'src/inscribe-teacher/inscribe-teacher.entity';
export declare class TeacherEntity {
    id: number;
    cedula: string;
    nombres: string;
    apellidos?: string;
    telefono?: string;
    nacimiento?: Date;
    img?: string;
    pais?: string;
    ciudad?: string;
    titulo?: string;
    email: string;
    contraseña: string;
    estado: boolean;
    fechaCreacion: Date;
    carreras: DegreesEntity[];
    cursos: CourseEntity[];
    materias: MatterEntity[];
    inscripciones: InscripTeacherEntity[];
    hashPassword(): Promise<void>;
}
