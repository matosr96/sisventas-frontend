export interface User {
  idUsuario: any;
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  foto: string;
}

export interface CreateUserDto extends Omit<User, "idUsuario"> {}

export type PartialUser = Partial<User>;
