import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                    marginTop: '30px',
                }}
            >
                Menu
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, description, calories, price, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                calories={calories}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
