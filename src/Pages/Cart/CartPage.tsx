// import basket from 'assets/basket.png'
// import user from 'assets/user.png'
import { Grid } from '@mui/material'
// import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'
import CartProductListItemExtended from 'Components/CartProductList/CartProductListItemExtended'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    // removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    // removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
