import { StudentEntity } from '../../student/student.entity';
import { ExamEntity } from '../create-exam/create-exam.entity';
import { NoteExamEntity } from '../note-exam/note-exam.entity';
export declare class ResExamEntity {
    id: number;
    alumno: StudentEntity;
    examen: ExamEntity;
    cuerpo?: any;
    fechaCreacion: Date;
    notas: NoteExamEntity[];
}
