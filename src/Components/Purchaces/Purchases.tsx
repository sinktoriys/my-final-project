import basket from 'assets/basket.png'
import user from 'assets/user.png'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const Purchases = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(Object.keys(productsInCart))
    return (
        <div className="purchases">
            <img className="bascket" src={basket} alt="Bascket" />
            <div className="quantity">
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{''}
                        {productId}:{productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div className="price">Total:${}</div>
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
