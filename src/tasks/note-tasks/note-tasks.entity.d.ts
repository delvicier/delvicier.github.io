import { StudentEntity } from '../../student/student.entity';
import { ResTasksEntity } from '../res-tasks/res-tasks.entity';
export declare class NoteTasksEntity {
    id: number;
    respActividad: ResTasksEntity;
    alumno: StudentEntity;
    calificacion?: number;
    observacion?: string;
    detalle?: string;
    fechaCreacion: Date;
}
