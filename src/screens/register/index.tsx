import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import styles from "./Register.module.css";
import Field from "../../components/Field";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { CreateBossDto, PartialBoss } from "../../types";
import { PublicRoutes } from "../../constants-definitions/Routes";
import InputCloudinary from "../../components/InputCloudinary/InputCloudinary";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");

  const [boss, setBoss] = useState<CreateBossDto>({
    name: "",
    address: "",
    email: "",
    identification: 0,
    last_name: "",
    photo: "",
  });

  console.log(url);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setBoss((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
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
                      name="name"
                      value={boss.name}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Apellido">
                    <Input
                      name="last_name"
                      value={boss.last_name}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Identificacion (CC,TI,PS)">
                    <Input
                      name="identification"
                      value={boss.identification}
                      onChange={handleChange}
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
              <Field label="Direccion">
                <Input
                  name="address"
                  value={boss.address}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Correo electronico">
                <Input
                  name="email"
                  value={boss.email}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Contraseña">
                <Input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Field>
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
