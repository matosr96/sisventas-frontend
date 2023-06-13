import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import styles from "./Login.module.css";
import Field from "../../components/Field";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../constants-definitions/Routes";
import { Signin } from "../../redux/states/auth/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      Signin({
        username,
        password,
      }) as any
    );
  };



  return (
    <div className={styles.container_login}>
      <div className={styles.section_left}>
        <div className={styles.itemsUDC}>
          <img src="/LogoCompleto.svg" />
        </div>
      </div>
      <div className={styles.section_right}>
        <div className={styles.container_form}>
          <div className={styles.header_form}>
            <div className={styles.container_image}>
              <img src="/LogoIcon.svg" alt="logo" />
            </div>
            <h2>Bienvenid@!</h2>
            <p>
              Inicia sesion en tu cuenta, para empezar a usar los servicios de
              Sisventas
            </p>
          </div>
          <div className={styles.form}>
            <form onSubmit={onSubmit}>
              <Field label="Usuario">
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Field>
              <Field label="Contraseña">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Field>
              <button className={styles.btn_login} type="submit">
                Iniciar Sesion
              </button>
            </form>
          </div>
          <div className={styles.footer_form}>
            <p>
              ¿No tienes cuenta?, no te preocupes,{" "}
              <Link
                className={styles.redirec_register}
                to={PublicRoutes.REGISTER}
              >
                Registrate aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
