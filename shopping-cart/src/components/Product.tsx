import { type ProductType } from "../context/ProductsProvider";
import {
  type ReducerActionType,
  type ReducerAction,
} from "../context/CartProvider";
import { type ReactElement, memo } from "react";
import useCart from "../Hooks/useCart";

type ProductPropsType = {
  product: ProductType;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
  dispatch: React.ActionDispatch<[action: ReducerAction]>;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: ProductPropsType): ReactElement => {
  const img: string = new URL(`../img/${product.sku}.jpg`, import.meta.url)
    .href;

  const { cart } = useCart();

  const productInCart = cart.find((prod) => product.sku === prod.sku);

  const qty = productInCart ? productInCart.qty : 0;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty } });

  const itemInCart = inCart ? "→ Item in Cart: ✔️" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        &nbsp;
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add To Cart</button>
    </article>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: ProductPropsType,
  { product: nextProduct, inCart: nexInCart }: ProductPropsType,
) {
  return (
    Object.keys(prevProduct).every(
      (key) =>
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType],
    ) && prevInCart === nexInCart
  );
}

const memoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default memoizedProduct;
