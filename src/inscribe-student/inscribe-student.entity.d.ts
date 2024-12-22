import { StudentEntity } from '../student/student.entity';
import { DegreesEntity } from '../degrees/degrees.entity';
import { CourseEntity } from '../course/course.entity';
import { MatterEntity } from '../matter/matter.entity';
export declare class InscripStudentEntity {
    id: number;
    carrera: DegreesEntity;
    curso: CourseEntity;
    materia: MatterEntity;
    alumno: StudentEntity;
    fechaCreacion: Date;
}
