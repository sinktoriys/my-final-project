type Product = {
    id:number
    title: string
    description: string
    calories: string    
    price: number
    image:string
}

const productsArray: Product[] = [
    {
        id:1,
        title: 'Breakfast',
        description: 'Healthy breakfast brunch',        
        calories: '247',
        price: 10,
        image:"/images/breakfast1.jpg",
    },
    {
        id:2,
        title: 'Breakfast ',
        description: 'Non-beef burger with potatoe ',        
        calories: '278',
        price: 12,
        image:"/images/breakfast2.jpg",
    },
    {
        id:3,
        title: 'Lunch ',
        description: 'Creamy miso sprout fettucine',        
        calories: '352',
        price: 15,
        image:"/images/lunch.jpg",
    },
    {
        id:4,
        title: 'Diner ',
        description: 'Spicy fries with vegetables salsa ',        
        calories: '247',
        price: 15,
        image:"/images/dinner.jpg",
    },
    {
        id:5,
        title: 'Dessert ',
        description: 'Old fashioned strawberry pie ',        
        calories: '652',
        price: 16,
        image:"/images/dessert1.jpg",
    },
    {
        id:6,
        title: 'Dessert  ',
        description: 'Cherries and vanilla cream cake',        
        calories: '247',
        price: 15,
        image:"/images/dessert2.jpg",
    },
      { 
         id:7,
        title: 'Breackfast  ',
        description: 'Thin crust spinach pizza',        
        calories: '174',
        price: 11,
        image:"/images/pizza.jpg",
    },
      { 
         id:8,
        title: 'Lunch  ',
        description: 'Pumpkin soup with almonds',        
        calories: '327',
        price: 12,
        image:"/images/soup.jpg",
    },
      { 
         id:9,
        title: 'Pizza  ',
        description: 'Pizza with sausages',        
        calories: '327',
        price: 12,
        image:"/images/pizza2.jpg",
    },
]

export default productsArray