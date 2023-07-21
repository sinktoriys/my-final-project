// import basket from 'assets/basket.png'
// import user from 'assets/user.png'
import { Grid } from '@mui/material'
import CartTotal from 'Components/CartTotal/CartTotal'
import CartProductList from 'Components/CartProductList/CartProductList'
import CartProductListItemExtended from 'Components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from 'redux/hooks'
type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
