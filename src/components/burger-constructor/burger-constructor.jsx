import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructor({onClick}) {
  return (
    <section className={`${styles.generate} mt-25  pr-2`}>
      <ul className={styles.generateList}>
        <li className='mr-4'>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>

        <div className={`${styles.generateScroll} pr-4`}>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
        </div>

        <li className='mr-4'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ))"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>
      </ul>

      <div className={`${styles.placeOrder} pt-10 `}>
        <div className={styles.priceBox}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
