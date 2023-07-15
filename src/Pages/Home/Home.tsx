import ProductList from 'Components/Products/ProductList'
import Reviews from 'Components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductList addProductToCart={addProductToCart} />
            <Reviews />
        </>
    )
}
export default Home
