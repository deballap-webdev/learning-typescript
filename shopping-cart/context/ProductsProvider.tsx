import { createContext, ReactElement, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number
}

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)
    return (
        <ProductsContext value={{ products }}>
            {children}
        </ProductsContext>
    )
}