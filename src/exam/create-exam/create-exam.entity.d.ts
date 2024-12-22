import { MatterEntity } from '../../matter/matter.entity';
import { ResExamEntity } from '../res-exam/res-exam.entity';
export declare class ExamEntity {
    id: number;
    materia: MatterEntity;
    titulo: string;
    anioLectivo?: string;
    descripcion?: string;
    cuerpo?: any;
    simulador?: any;
    fechaIngreso?: Date;
    fechaCierre?: Date;
    tiempoLimite?: number;
    estado?: boolean;
    fechaCreacion: Date;
    respuestas: ResExamEntity[];
}
