import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'najeeb',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'muizz',
            email:'user@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },


    ],
    products: [
        {
            
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 15,
            description: 'High quality product',
        },
        {
            
            name:'Nike Pants',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 110,
            countInStock: 15,
            brand:'Nike',
            rating: 4.5,
            numReviews: 12,
            description: 'High quality product',
        },
        {
            
            name:'Lewis',
            category: 'Shirts',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 20,
            brand:'lewis',
            rating: 4.7,
            numReviews: 30,
            description: 'High quality product',
        },
        {
            
            name:'Jeans',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 30,
            brand:'adidas',
            rating: 4.4,
            numReviews: 250,
            description: 'High quality product',
        },
        {
            
            name:'Boss',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 200,
            countInStock: 35,
            brand:'Nike',
            rating: 4.2,
            numReviews: 10,
            description: 'High quality product',
        },
        {
            
            name:'Pants',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 160,
            countInStock: 0,
            brand:'Nike',
            rating: 4.8,
            numReviews: 10,
            description: 'High quality product',
        },
    ],
}
export default data;