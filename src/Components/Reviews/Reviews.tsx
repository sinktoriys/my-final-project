import { Typography } from '@mui/material'
import { useState } from 'react'
import {
    Card,
    CardContent,
    Button,
    TextField,
    TextareaAutosize,
} from '@mui/material'

type Props = {}
type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Марія',
            text: 'Готують відносно швидко. Сніданки дуже сподобалися, я коштувала майже всі- вони прекрасні.Тут я вперше побачила, що таке перлинний рис.Мені дуже сподобалося',
        },
        {
            name: 'Олександра',
            text: 'Смачна піца, десерти теж. Дуже недорого.Багате меню! Гарний, недорогий ресторанчик.',
        },
        {
            name: 'Олег',
            text: 'Часто буваю у цьому закладі. Завжди смачна паста та бургери, затишна атмосфера. Іноді доводиться довго чекати на замовлення, але в принципі це не можна назвати недоліком.',
        },
    ]
    const [review, setReview] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '||newReview.text===') {
            alert('All fields are required')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Reviews
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}:</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please,leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    SEND
                </Button>
            </form>
        </div>
    )
}
export default Reviews
