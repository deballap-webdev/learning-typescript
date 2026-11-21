import useCart from "../Hooks/useCart"

type FooterPropsType = {
    viewCart: boolean
}

const Footer = ({ viewCart }: FooterPropsType) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContetnt = (
        <>
            {!viewCart &&
                <>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                </>}
            <p>Shopping Cart &copy; {year}</p>
        </>
    )

    return <footer className="footer">{pageContetnt}</footer>
}

export default Footer