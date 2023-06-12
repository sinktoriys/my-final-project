import basket from 'assets/basket.png'
import user from 'assets/user.png'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Purchases = ({ productsInCart }: Props) => {
    console.log(Object.keys(productsInCart))
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />
            <div className="quantity">
                {/* <p className="number"> */}
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productId}:{productsInCart[parseInt(productId)]}
                    </div>
                ))}
                {/* </p> */}
            </div>
            <div className="price">${}</div>
            <img className="user" src={user} alt="User" />
            {/* {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}:{productsInCart[parseInt(productId)]}
                </div>
            ))} */}
        </div>
    )
}
export default Purchases
