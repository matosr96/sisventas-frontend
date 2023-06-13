import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { PrivateRoutes } from "../../constants-definitions/Routes";
import styles from "./MenuStore.module.css";

const MenuStore = () => {
  return (
    <Layout>
      <div className={styles.container_menu}>
        <div className={styles.container_form}>
          <div className={styles.header_form}>
            <img src="/LogoCompleto.svg" alt="logo" />
            <h1>Bienvenido</h1>
          </div>
          <div className={styles.body_menu}>
            <span>Registra una categoria para empezar</span>
            <Link
              to={PrivateRoutes.CATEGORIES}
              className={styles.btn_categories}
            >
              Crear nuevo Categoria
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenuStore;
