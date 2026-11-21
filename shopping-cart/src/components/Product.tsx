import { type ProductType } from "../context/ProductsProvider"
import { type ReducerActionType, type ReducerAction } from "../context/CartProvider"
import type { ReactElement } from "react"

type ProductPropsType = {
    product: ProductType
    REDUCER_ACTIONS: ReducerActionType
    inCart: boolean
    dispatch: React.ActionDispatch<[action: ReducerAction]>

}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductPropsType): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? '→ Item in Cart: ✔️' : null

    const content = <article className="product">
        <h3>{product.name}</h3>
        <img src={img} alt={product.name} />
        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
    </article>

    return content
}

export default Product