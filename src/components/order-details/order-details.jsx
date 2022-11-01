import { useSelector } from "react-redux";
import styles from "./order-details.module.css";
import done from "../../images/done.png";

export default function OrderDetails() {
  const orderId = useSelector((state) => state.orderDetails.id);

  return (
    <>
      <div className={`${styles.modalInfo} pl-25 pr-25`}>
        <p className="text text_type_digits-large mt-5 mb-8">{orderId}</p>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <img className={styles.imageDone} src={done} alt="заказ принят" />
        <p className="text text_type_main-default mt-15 mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
}
