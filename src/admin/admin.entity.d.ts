export declare class AdminEntity {
    id: number;
    nombres: string;
    apellidos?: string;
    telefono?: string;
    email: string;
    contraseña: string;
    estado: boolean;
    fechaCreacion: Date;
    hashPassword(): Promise<void>;
}
