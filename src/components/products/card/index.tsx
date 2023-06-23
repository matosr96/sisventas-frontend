import { Product } from "../../../types/products";
import styles from "./CardProduct.module.css";
import { DivisaFormater } from "../../../utilities/divisa-formater";

interface Props {
  setProductId: Function;
  data: Product;
}

const CardProduct = ({ data, setProductId }: Props) => {
  const handleProducts = (product: Product) => {
    setProductId(product);
    console.log(" Aquí obtienes el id del producto", product); //
  };

  return (
    <div className={styles.card_product}>
      <div className={styles.card_img}>
        <img src={data.image} />
      </div>
      <div className={styles.card_info}>
        <p className={styles.text_title}>{data.name}</p>
        <p className={styles.text_body}> Disponibles: {data.currentStock}</p>
      </div>
      <div className={styles.card_footer}>
        <span className={styles.text_title}>
          {DivisaFormater(data.salePrice)}
        </span>
        <div className={styles.card_button}>
          <button onClick={() => handleProducts(data)}>
            <i className="bx bxs-cart-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
