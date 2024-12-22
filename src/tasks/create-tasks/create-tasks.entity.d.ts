import { MatterEntity } from '../../matter/matter.entity';
import { ResTasksEntity } from '../res-tasks/res-tasks.entity';
export declare class createTasksEntity {
    id: number;
    materia: MatterEntity;
    nombre: string;
    tema?: string;
    descripcion?: string;
    orden?: string;
    cuerpo?: any;
    fechaIngreso?: Date;
    fechaCierre?: Date;
    tiempoLimite?: number;
    estado?: boolean;
    fechaCreacion: Date;
    respuestas: ResTasksEntity[];
}
