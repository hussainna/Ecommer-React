import cate1 from '../image/icons/clothes.png'
import cate2 from '../image/icons/anotherIcons/running-shoe.png'
import cate3 from '../image/icons/anotherIcons/bracelet.png'
import cate4 from '../image/icons/anotherIcons/perfume.png'
import cate5 from '../image/icons/anotherIcons/lotion.png'
import cate6 from '../image/icons/anotherIcons/sun-glass.png'
import cate7 from '../image/icons/anotherIcons/handbag.png'


// Products Images 
import Prod1 from '../image/products/clothes-1.jpg'
import Prod2 from '../image/products/jacket-1.jpg'
import Prod3 from '../image/products/clothes-3.jpg'
import Prod4 from '../image/products/shirt-2.jpg'
import Prod5 from '../image/products/shirt-1.jpg'
import Prod6 from '../image/products/clothes-2.jpg'
import Prod7 from '../image/products/shoe-1.jpg'
import Prod8 from '../image/products/jewellery-3.jpg'
import Prod9 from '../image/products/jacket-2.jpg'
import Prod10 from '../image/products/party-wear-2.jpg'
import Prod11 from '../image/products/shoe-3.jpg'
import Prod12 from '../image/products/jacket-5.jpg'


// best sellers Items

import {AiFillStar} from 'react-icons/ai'
import BestImg1 from '../image/products/1.jpg'
import BestImg2 from '../image/products/2.jpg'
import BestImg3 from '../image/products/3.jpg'
import BestImg4 from '../image/products/4.jpg'

import {FiPlus} from 'react-icons/fi'


//SERVES ITEMS 
import {RiShipLine} from 'react-icons/ri'
import {AiOutlineRocket} from 'react-icons/ai'
import {IoIosCall} from 'react-icons/io'
import {GiTicket} from 'react-icons/gi'
import {FaShare} from 'react-icons/fa'


// Author Images 
import AuthImg1 from './img/blog-1.jpg'
import AuthImg2 from './img/blog-2.jpg'
import AuthImg3 from './img/blog-3.jpg'
import AuthImg4 from './img/blog-4.jpg'

//Footer Icons 

import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'

export const Nav=[
    {
        path:'/',
        link:'HOME',
    },
    {
        path:'/categories',
        link:'CATEGORIES',
    },
    {
        path:'/men',
        link:'MEN',
    },
    {
        path:'/women',
        link:'WOMEN',
    },
    {
        path:'/jewelry',
        link:'JEWELRY',
    },
    {
        path:'/perfume',
        link:'PERFUME',
    },
    {
        path:'/blog',
        link:'BLOG',
    },
    {
        path:'/hot-offers',
        link:'HOT OFFERS',
    },
]
export const CategoriesData=[
    {
        name:'Clothes',
        img:cate1,
        icons:<i><FiPlus/></i>
    },
    {
        name:'FootsWear',
        img:cate2,
        icons:<i><FiPlus/></i>
    },
    {
        name:'Jewelry',
        img:cate3,
        icons:<i><FiPlus/></i>
    },
    {
        name:'Perfume',
        img:cate4,
        icons:<i><FiPlus/></i>
    },
    {
        name:'Cosmetic',
        img:cate5,
        icons:<i><FiPlus/></i>
    },
    {
        name:'Glasses',
        img:cate6,
        icons:<i><FiPlus/></i>
    },
    {
        name:'Bags',
        img:cate7,
        icons:<i><FiPlus/></i>
    },
]
export const ProductsData=[
    {
        name:'Relaxed Short',
        type:'Clothes',
        img:Prod1,
        price:45.55,
        oldPrice:52,
    },
    {
        name:'Turki Jacket',
        type:'Jacket',
        img:Prod2,
        price:25.85,
        oldPrice:40,
    },
    {
        name:'best Jewelry',
        type:'jewelry',
        img:Prod3,
        price:10.05,
        oldPrice:22,
    },
    {
        name:'man Shirt',
        type:'Shirt',
        img:Prod4,
        price:30.00,
        oldPrice:60,
    },
    {
        name:'Sport Shoes',
        type:'shoes',
        img:Prod5,
        price:45.55,
        oldPrice:52,
    },
    {
        name:'RShirt Pink',
        type:'Jewelry',
        img:Prod6,
        price:93.55,
        oldPrice:52,
    },
    {
        name:'Black Shoes',
        type:'Shoes',
        img:Prod7,
        price:20.55,
        oldPrice:82,
    },
    {
        name:'Jewelry White',
        type:'Clothes',
        img:Prod8,
        price:43.55,
        oldPrice:82,
    },
    {
        name:'Man Shirt',
        type:'Clothes',
        img:Prod9,
        price:45.55,
        oldPrice:52,
    },
    {
        name:'Women Shoes',
        type:'Shoes',
        img:Prod10,
        price:71.43,
        oldPrice:92,
    },
    {
        name:'Dark Shoes',
        type:'Shoes',
        img:Prod11,
        price:63.55,
        oldPrice:52,
    },
    {
        name:'Coat Man',
        type:'Clothes',
        img:Prod12,
        price:99.55,
        oldPrice:52,
    },
]

export const BestSellersData=[
    {
        name:'Baby Farbic Shoes',
        price:4.31,
        icons:[<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>],
        img:BestImg1,
        oldPrice:5.21
    },
    {
        name:'Men T-shirts',
        price:6.21,
        icons:[<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>],
        img:BestImg2,
        oldPrice:7.54
    },
    {
        name:'Girls T-Shirt',
        price:8.03,
        icons:[<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>],
        img:BestImg3,
        oldPrice:10.76
    },
    {
        name:'Hat For Men',
        price:4.98,
        icons:[<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>,<i><AiFillStar/></i>],
        img:BestImg4,
        oldPrice:5.09
    },
]




export const services=[
    {
        name:'Worldwide',
        desc:'For Order Over $100',
        icon:<i><RiShipLine/></i>,
    },
    {
        name:'Next Day delivery ',
        desc:'UK Orders Only',
        icon:<i><AiOutlineRocket/></i>,
    },
    {
        name:'Best Online Support',
        desc:'Hours: 8AM - 11PM',
        icon:<i><IoIosCall/></i>,
    },
    {
        name:'Return Policy',
        desc:'Hours: 8AM - 11PM',
        icon:<i><GiTicket/></i>,
    },
    {
        name:'Worldwide Delivery',
        desc:'For Order Over $100',
        icon:<i><FaShare/></i>,
    },
]
export const AuthorData=[
    {
        name:'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
        desc:'By Mr Admin / Apr 06, 2022',
        job:'Fashion',
        img:AuthImg1,
    },
    {
        name:'Curbside fashion Trends: How to Win the Pickup Battle.',
        desc:'By Mr Robin / Jan 18, 2022',
        job:'Clothes',
        img:AuthImg2,
    },
    {
        name:'EBT vendors: Claim Your Share of SNAP Online Revenue.',
        desc:'By Mr Selsa / Feb 10, 2022',
        job:'Shoes',
        img:AuthImg3,
    },
    {
        name:'Curbside fashion Trends: How to Win the Pickup Battle.',
        desc:'By Mr Pawar / Mar 15, 2022',
        job:'Electronics',
        img:AuthImg4,
    },
]
export const popular=[
        {
            link:'Fashion',
        },
        {
            link:'Electronic',
        },
        {
            link:'Cosmetic',
        },
        {
            link:'Health',
        },
        {
            link:'Watches',
        },
]
export const ProductLinksData=[
        {
            link:'Prices Drop'
        },
        {
            link:'New Products'
        },
        {
            link:'Best Sales'
        },
        {
            link:'Contact Us'
        },
        {
            link:'Sitemap'
        },

]
   export const  Company=[
        {
            link:'Delivery',
        },
        {
            link:'Legal Notice',
        },
        {
            link:'Terms And Conditions',
        },
        {
            link:'About Us',
        },
        {
            link:'Payment',
        },
]
   export const  ServicesLink=[
        {
            link:'Prices Drop',
        },
        {
            link:'New Products',
        },
        {
            link:'Best Sales',
        },
        {
            link:'Contact Us',
        },
        {
            link:'Sitemap',
        },
]
export const ContactLink=[
        {
            link:'419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
            icon:<i><GoLocation/></i>
        },
        {
            link:'(607) 936-8058',
            icon:<i><IoIosCall/></i>
        },
        {
            link:'Example@Gmail.Com',
            icon:<i><AiOutlineMail/></i>
        },
]


















