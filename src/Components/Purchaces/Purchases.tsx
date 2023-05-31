import basket from 'assets/basket.png'
import user from 'assets/user.png'
type Props = {}
const Purchases = (props: Props) => {
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />
            <div className="circle">
                <p className="number" id="products-count">
                    0
                </p>
            </div>
            <img className="user" src={user} alt="User" />
        </div>
    )
}
export default Purchases
