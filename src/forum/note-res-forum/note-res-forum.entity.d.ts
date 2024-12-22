import { StudentEntity } from '../../student/student.entity';
import { RespForumEntity } from '../res-forum/res-forum.entity';
export declare class NoteRespForumEntity {
    id: number;
    respForo: RespForumEntity;
    alumno: StudentEntity;
    calificacion?: number;
    observacion?: string;
    fechaCreacion: Date;
}
