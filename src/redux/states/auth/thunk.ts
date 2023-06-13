import { sisventasApi } from "../../../api";
import { PrivateRoutes } from "../../../constants-definitions/Routes";

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
