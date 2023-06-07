import basket from 'assets/basket.png'
import user from 'assets/user.png'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Purchases = ({ cartData }: Props) => {
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />
            <div className="circle">
                <p className="number" id="products-count">
                    {cartData.totalCount}
                </p>
            </div>
            <div className="circle-price">${cartData.totalPrice}</div>
            <img className="user" src={user} alt="User" />
        </div>
    )
}
export default Purchases
