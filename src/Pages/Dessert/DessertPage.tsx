import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from 'Components/Products/ProductListItem'

type Props = {}
const DessertPage = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                    marginTop: '30px',
                }}
            >
                Desserts
            </Typography>
            <Grid container spacing={4}>
                {productsArray
                    .filter((item) => item.category === 'dessert')
                    .map(
                        ({
                            id,
                            title,
                            description,
                            calories,
                            price,
                            image,
                        }) => (
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
export default DessertPage
