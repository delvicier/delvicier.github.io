import { MatterEntity } from '../matter/matter.entity';
export declare class PaginaEntity {
    id: number;
    materia: MatterEntity;
    nombre: string;
    descripcion?: string;
    cuerpo?: any;
    estado?: boolean;
    fechaCreacion: Date;
}
