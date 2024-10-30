import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nombres?: string;
      apellidos?: string;
      email: string;
      tipoId?: string;
      identificacion?: string;
      avatar?: string;
      direccion?: string;
      categoriaAfiliacion?: string;
    } & DefaultSession["user"];
  }
}
