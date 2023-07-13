import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import CartPage from 'Pages/Cart/CartPage'
import BreackfastPage from 'Pages/Breackfast/BreackfastPage'
import LunchPage from 'Pages/Lunch/LunchPage'
import DinnerPage from 'Pages/Dinner/DinnerPage'
import ContactPage from 'Pages/Contact/ContactPage'
import { createContext } from 'react'
import { Omit, omit } from 'lodash'
type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
export const AppContext = createContext<Context | null>(null)
const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({ ...prevState, [id]: count }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <AppContext.Provider
                value={{
                    removeProductFromCart: removeProductFromCart,
                    changeProductQuantity: changeProductQuantity,
                }}
            >
                <CssBaseline />
                <Header productsInCart={productsInCart} />

                <Container
                    sx={{
                        padding: '40px 0',
                    }}
                >
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/breackfast"
                            element={<BreackfastPage />}
                        />
                        <Route path="/lunch" element={<LunchPage />} />
                        <Route path="/dinner" element={<DinnerPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route
                            path="/cart"
                            element={
                                <CartPage productsInCart={productsInCart} />
                            }
                        />
                    </Routes>
                </Container>
            </AppContext.Provider>
        </StyledEngineProvider>
    )
}
export default App
