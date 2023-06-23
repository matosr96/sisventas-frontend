import { sisventasApi } from "../../../api";
import { PrivateRoutes } from "../../../constants-definitions/Routes";
import { CreateUserDto } from "../../../types";

interface Credentials {
  username: string;
  password: string;
}

export const Signin =
  ({ username, password }: Credentials) =>
  async (dispatch: any) => {
    try {
      const { data } = await sisventasApi.post(`/api/v1/auth/signin`, {
        username,
        password,
      });
      window.location.replace(PrivateRoutes.MENU_STORE);
      const token = data.accessToken;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error: any) {
      console.error(
        `Error al iniciar sesión como jefe: ${error.message}`,
        error
      );
      throw new Error(
        "No se pudo iniciar sesión como jefe. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

export const CreateUser =
  (userData: CreateUserDto) => async (dispatch: any) => {
    try {
      const { data } = await sisventasApi.post(`/api/v1/auth/signup`, userData);
      const token = data.accessToken;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error: any) {
      console.error(`Error al crear el usuario: ${error.message}`, error);
      throw new Error(
        "No se pudo crear el usuario. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };
