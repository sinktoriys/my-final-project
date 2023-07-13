import basket from 'assets/basket.png'
import user from 'assets/user.png'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Purchases = ({ productsInCart }: Props) => {
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />

            <div className="quantity">
                <CartProductList productsInCart={productsInCart} />
            </div>
            <div className="price">
                <CartTotal productsInCart={productsInCart} />
            </div>
            <img className="user" src={user} alt="User" />
        </div>
    )
}
export default Purchases
