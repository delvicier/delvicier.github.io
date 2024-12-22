import { CourseEntity } from 'src/course/course.entity';
import { DegreesEntity } from 'src/degrees/degrees.entity';
import { MatterEntity } from 'src/matter/matter.entity';
import { TeacherEntity } from 'src/teacher/teacher.entity';
export declare class InscripTeacherEntity {
    id: number;
    carrera: DegreesEntity;
    curso: CourseEntity;
    materia: MatterEntity;
    docente: TeacherEntity;
    rolEdit: boolean;
    fechaCreacion: Date;
}
