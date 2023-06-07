import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
// import { useState } from 'react'
type Props = {
    title: string
    description: string
    calories: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    calories,
    price,
    image,
}: Props) => {
    // const [count, setCount] = useState<number>(2)

    // const onIncrementClick = () => {
    //     setCount((prevState) => prevState + 1)
    // }
    // const onDecrementClick = () => {
    //     setCount((prevState) => prevState - 1)
    // }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="/" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{calories}Cals</div>
                <div className="product-price">Price: $ {price}</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        // onClick={() => onDecrementClick()}
                    >
                        -
                    </Button>
                    <TextField value="1" size="small" />

                    <Button
                        variant="outlined"
                        // onClick={() => onIncrementClick()}
                    >
                        +
                    </Button>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
