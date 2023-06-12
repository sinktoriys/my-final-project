import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'Container/Main/Main'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (count: number, price: number) => {}
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
