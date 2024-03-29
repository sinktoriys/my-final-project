import { useParams } from 'react-router-dom'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsObject?: {
        // [id: number]: Product
        [fullDescription: string]: Product
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    // const { id } = useParams()
    const { fullDescription } = useParams()

    return (
        <div>
            {/* <div> {productsObject[parseInt(id!)].title}</div> */}
            <div>
                {productsObject[parseInt(fullDescription!)].fullDescription}
            </div>
        </div>
    )
}
export default ProductPage
