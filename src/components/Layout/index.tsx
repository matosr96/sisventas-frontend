import Header from "../Header";
import styles from "./Layout.module.css"

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className={styles.container_ly}>
      {children}
      </div>
     
    </>
  );
};

export default Layout;
