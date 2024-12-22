import { StudentEntity } from '../../student/student.entity';
import { RespForumEntity } from '../res-forum/res-forum.entity';
import { NoteComentForumEntity } from '../note-comment-forum/note-comment-forum.entity';
export declare class ComentForumEntity {
    id: number;
    alumno: StudentEntity;
    respForo: RespForumEntity;
    comentario?: string;
    respIA?: string;
    fechaCreacion: Date;
    notas: NoteComentForumEntity[];
}
