import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'Components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    description: string
    calories: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    calories,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button onClick={() => dispatch(toggleLike(id))}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-img">
                    <img src={image} alt="/" />
                </div>
                <h4 className="product-title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{calories}Cals</div>
                <div className="product-price">Price: $ {price}</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    minCount={1}
                />
                <CardActions className="btn-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
