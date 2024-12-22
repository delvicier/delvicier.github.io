import { StudentEntity } from '../../student/student.entity';
import { createTasksEntity } from '../create-tasks/create-tasks.entity';
import { NoteTasksEntity } from '../note-tasks/note-tasks.entity';
export declare class ResTasksEntity {
    id: number;
    actividad: createTasksEntity;
    alumno: StudentEntity;
    cuerpo?: any;
    fechaCreacion: Date;
    notas: NoteTasksEntity[];
}
