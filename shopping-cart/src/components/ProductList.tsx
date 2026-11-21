import useProducts from "../Hooks/useProducts"
import useCart from "../Hooks/useCart"
import Product from "./Product"
import { type ReactElement } from "react"

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProducts()

    let pageContetnt: ReactElement | ReactElement[] = <p>Loading...</p>
    if (products?.length) {
        pageContetnt = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)
            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart} />
            )
        })
    }

    const content = (
        <main className="main main--products">
            {pageContetnt}
        </main>
    )

    return content
}

export default ProductList