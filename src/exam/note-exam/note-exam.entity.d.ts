import { StudentEntity } from '../../student/student.entity';
import { ResExamEntity } from '../res-exam/res-exam.entity';
export declare class NoteExamEntity {
    id: number;
    resExamen: ResExamEntity;
    alumno: StudentEntity;
    calificacion?: number;
    observacion?: string;
    detalle?: string;
    fechaCreacion: Date;
}
