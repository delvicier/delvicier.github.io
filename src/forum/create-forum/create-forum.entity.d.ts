import { MatterEntity } from '../../matter/matter.entity';
import { RespForumEntity } from '../res-forum/res-forum.entity';
export declare class ForumEntity {
    id: number;
    materia: MatterEntity;
    nombre: string;
    tema?: string;
    descripcion?: string;
    incognita?: string;
    solucion?: string;
    cuerpo?: any;
    fechaIngreso?: Date;
    fechaCierre?: Date;
    tiempoLimite?: string;
    estado?: boolean;
    fechaCreacion: Date;
    respuestas: RespForumEntity[];
}
