import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import CartPage from 'Pages/Cart/CartPage'
import BreackfastPage from 'Pages/Breackfast/BreackfastPage'
import LunchPage from 'Pages/Lunch/LunchPage'
import DinnerPage from 'Pages/Dinner/DinnerPage'
import ProductPage from 'Pages/Product/ProductPage'
import CheckoutPage from 'Pages/Checkout/CheckoutPage'
import DessertPage from 'Pages/Dessert/DessertPage'
import ReviewsPage from 'Pages/ReviewsPage/ReviewsPage'
import HeroSlider from 'Components/HeroSlider'
import './App.scss'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <HeroSlider />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/breackfast" element={<BreackfastPage />} />
                    <Route path="/lunch" element={<LunchPage />} />
                    <Route path="/dinner" element={<DinnerPage />} />
                    <Route path="/dessert" element={<DessertPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}
export default App
