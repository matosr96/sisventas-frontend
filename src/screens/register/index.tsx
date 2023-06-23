import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import styles from "./Register.module.css";
import Field from "../../components/Field";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { CreateBossDto, PartialBoss } from "../../types";
import { PrivateRoutes, PublicRoutes } from "../../constants-definitions/Routes";
import InputCloudinary from "../../components/InputCloudinary/InputCloudinary";
import { CreateUserDto } from "../../types/user";
import { CreateUser } from "../../redux/states";
import swal from "sweetalert";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState<CreateUserDto>({
    username: "",
    password: "",
    nombre: "",
    apellido: "",
    foto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(CreateUser({ ...userData, foto: url }) as any)
      .then(() => {
        swal("Registro de usuario exitoso", {
          icon: "success",
        }).then(() => {
          window.location.replace(PrivateRoutes.MENU_STORE);
        });
      })
      .catch((error: Error) => {
        console.error(`Error al crear el usuario: ${error.message}`, error);
  
        swal("Error al crear el usuario", {
          icon: "error",
        });
      });
  };

  useEffect(() => {}, [dispatch]);

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
            <h2>Registro SISVENTAS</h2>
            <p>
              Crea una cuenta, para empezar a usar los servicios de Sisventas
            </p>
          </div>
          <div className={styles.form}>
            <form onSubmit={onSubmit}>
              <div className={styles.sec_form}>
                <div className={styles.inputs}>
                  <Field label="Nombre">
                    <Input
                      name="nombre"
                      value={userData.nombre}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Apellido">
                    <Input
                      name="apellido"
                      value={userData.apellido}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Nombre de usuario">
                    <Input
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Contraseña">
                    <Input
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      type="password"
                    />
                  </Field>
                </div>
                <div className={styles.profile}>
                  {url != "" ? (
                    <img src={url} alt="profile-picture" />
                  ) : (
                    <InputCloudinary
                      idInput="file-register"
                      setImageUrl={setUrl}
                    />
                  )}
                </div>
              </div>

              <button className={styles.btn_login} type="submit">
                Registrarse
              </button>
            </form>
          </div>
          <div className={styles.footer_form}>
            <p>
              ¿Ya tienes cuenta?, no te preocupes,{" "}
              <Link className={styles.redirec_register} to={PublicRoutes.LOGIN}>
                inicia sesion aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
