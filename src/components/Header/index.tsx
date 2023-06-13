import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "../../constants-definitions/Routes";

const Header = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;

  const [activeLink, setActiveLink] = useState<string>("");
  const [openMenu, setOpenMenu] = useState(false);
  const HandlerMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <div className={styles.container_header}>
      <div className={styles.group_logo}>
        <img src="/LogoIcon.svg" />
        <div className={styles.links_header}>
          <Link
            to={"/welcome"}
            className={`${styles.link} ${
              activeLink === "dashboard" ? styles.active : ""
            }`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </Link>
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
            to={PrivateRoutes.SHOP}
            className={`${styles.link} ${
              activeLink === "shop" ? styles.active : ""
            }`}
            onClick={() => handleClick("shop")}
          >
            Tienda
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
        </div>
      </div>
    </div>
  );
};

export default Header;
