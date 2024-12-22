import { StudentEntity } from '../../student/student.entity';
import { ForumEntity } from '../create-forum/create-forum.entity';
import { NoteRespForumEntity } from '../note-res-forum/note-res-forum.entity';
import { ComentForumEntity } from '../comment-forum/comment-forum.entity';
export declare class RespForumEntity {
    id: number;
    alumno: StudentEntity;
    foro: ForumEntity;
    resAlumno?: string;
    fechaCreacion: Date;
    notas: NoteRespForumEntity[];
    comentarios: ComentForumEntity[];
}
