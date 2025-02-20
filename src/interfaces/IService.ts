export interface IService {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  tipo: string;
  categorias: string[];
  precios: number[];
  objetivo: string;
  requisitos: string[];
  recomendaciones: string[];
  fechaCreacion: string;
  imagenes: string[];
}
