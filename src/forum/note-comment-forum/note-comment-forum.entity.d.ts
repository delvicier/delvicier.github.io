import { StudentEntity } from '../../student/student.entity';
import { ComentForumEntity } from '../comment-forum/comment-forum.entity';
export declare class NoteComentForumEntity {
    id: number;
    comentario: ComentForumEntity;
    alumno: StudentEntity;
    calificacion?: number;
    observacion?: string;
    fechaCreacion: Date;
}
