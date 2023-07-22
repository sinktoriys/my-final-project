export type Product = {
    id:number
    title: string
    description: string
    fullDescription:string
    calories: string    
    price: number
    image:string
    category:string
}

const productsArray: Product[] = [
    {
        id:1,
        title: 'Breakfast',
        description: 'Healthy breakfast brunch', 
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',
        calories: '247',
        price: 10,
        image:"/images/breakfast1.jpg",
        category:'breakfast',
    },
    {
        id:2,
        title: 'Breakfast ',
        description: 'Non-beef burger with potatoe ', 
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',              
        calories: '278',
        price: 12,
        image:"/images/breakfast2.jpg",
        category:'breakfast',
    },
    {
        id:3,
        title: 'Lunch ',
        description: 'Creamy miso sprout fettucine', 
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',              
        calories: '352',
        price: 15,
        image:"/images/lunch.jpg",
        category:'lunch',
    },
    {
        id:4,
        title: 'Dinner ',
        description: 'Spicy fries with vegetables salsa ',
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',              
        calories: '247',
        price: 15,
        image:"/images/dinner.jpg",
        category:'dinner',
    },
    {
        id:5,
        title: 'Dessert ',
        description: 'Old fashioned strawberry pie ',
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',
               
        calories: '652',
        price: 16,
        image:"/images/dessert1.jpg",
        category:'dessert',
    },
    {
        id:6,
        title: 'Dessert  ',
        description: 'Cherries and vanilla cream cake', 
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',       
        calories: '247',
        price: 15,
        image:"/images/dessert2.jpg",
        category:'dessert',
    },
      { 
         id:7,
        title: 'Breackfast  ',
        description: 'Thin crust spinach pizza',
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',        
        calories: '174',
        price: 11,
        image:"/images/pizza.jpg",
        category:'breakfast',
    },
      { 
         id:8,
        title: 'Lunch  ',
        description: 'Pumpkin soup with almonds',
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',        
        calories: '327',
        price: 12,
        image:"/images/soup.jpg",
        category:'lunch',
    },
      { 
         id:9,
        title: 'Pizza  ',
        description: 'Pizza with sausages', 
        fullDescription:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit.',       
        calories: '327',
        price: 12,
        image:"/images/pizza2.jpg",
        category:'dinner',
    },
]


export const getProductsObject= (array:Product[])=>array.reduce((object,product)=>
({
    ...object,
    [product.id]:product,
}),
{}
)
export default productsArray