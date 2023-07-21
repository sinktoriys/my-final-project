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
import ContactPage from 'Pages/Contact/ContactPage'
import ProductPage from 'Pages/Product/ProductPage'

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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/breackfast" element={<BreackfastPage />} />
                    <Route path="/lunch" element={<LunchPage />} />
                    <Route path="/dinner" element={<DinnerPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}
export default App
