import { useState } from "react";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../constants-definitions/Routes";
import styles from "./header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const { name: nameRol } = user.roles[0];
  console.log("en el user", nameRol);

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <div className={styles.container_header}>
      <div className={styles.group_logo}>
        <img src="/LogoIcon.svg" />
        <div className={styles.links_header}>
          {nameRol === "ADMIN" ? (
            <>
              {" "}
              <Link
                to={PrivateRoutes.CATEGORIES}
                className={`${styles.link} ${
                  activeLink === "categories" ? styles.active : ""
                }`}
                onClick={() => handleClick("categories")}
              >
                Categorias
              </Link>
              <Link
                to={PrivateRoutes.PRODUCTS}
                className={`${styles.link} ${
                  activeLink === "Productos" ? styles.active : ""
                }`}
                onClick={() => handleClick("Productos")}
              >
                Productos
              </Link>
              <Link
                to={PrivateRoutes.REPORT_SALE}
                className={`${styles.link} ${
                  activeLink === "report" ? styles.active : ""
                }`}
                onClick={() => handleClick("report")}
              >
                Reportes
              </Link>
            </>
          ) : (
            ""
          )}
          <Link
            to={PrivateRoutes.MENU_STORE}
            className={`${styles.link} ${
              activeLink === "dashboard" ? styles.active : ""
            }`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </Link>

          <Link
            to={PrivateRoutes.SHOP}
            className={`${styles.link} ${
              activeLink === "shop" ? styles.active : ""
            }`}
            onClick={() => handleClick("shop")}
          >
            Tienda
          </Link>
        </div>
      </div>
      <div className={styles.info_user}>
        <div className={styles.data_user}>
          <span>
            {user.nombre} {user.apellido}
          </span>
          <p>{user.username}</p>
        </div>
        <div className={styles.photo_user}>
          <img src={!user.foto ? "/userDefault.svg" : user.foto} />
        </div>
      </div>
    </div>
  );
};

export default Header;
