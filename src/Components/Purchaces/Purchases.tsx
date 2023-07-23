import basket from 'assets/basket.png'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'
import { useAppSelector } from 'redux/hooks'
type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const Purchases = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />

            <div className="quantity">
                <CartProductList productsInCart={productsInCart} />
            </div>
            <div className="price">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default Purchases
