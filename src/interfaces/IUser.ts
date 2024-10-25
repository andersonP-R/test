export interface IUser {
  id: string;
  nombres?: string | null;
  apellidos?: string | null;
  email: string;
  password: string;
  tipoId?: string | null;
  identificacion?: string | null;
  avatar: string;
  direccion?: string | null;
}
