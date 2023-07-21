import ProductList from 'Components/Products/ProductList'
import Reviews from 'Components/Reviews/Reviews'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <ProductList />
            <Reviews />
        </>
    )
}
export default Home
