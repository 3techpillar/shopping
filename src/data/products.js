import {slide1, slide2, slide3, slide4} from "./assets"

import { thaal, thaal1, thaal2, slab, slab1, oil, oil1, camphorTab, camphorTab1, camphorTab2, camphorTab3, campBall, campBall1, campBall2, till, till1, ball, ball1,ball2, ball3, stick, stick1, stick2, stick3, mosquito, mosquito1, mosquito2, mosquito3,  pooja, pooja1, arti, arti1, arti3, arti4, incense, incense1, incense2, incense3, incense4, incense5, incense6, incense7, kapure, kapure1, kapure2, kapure3, kapure4, kapure5, kapure6, kapure7, hair, hair1, hair2, hair3, swastik, swastik1, insenceStick, insenceStick1, insenceStick2, insenceStick3 } from "./assets";

import {airFreshner, bestSeller, sprayBottle, spritual, top} from "./assets"

export const slides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 }
];

export const categories = [
  {
    id: 1,
    title: "All Products",
    image: top, 
  },
  {
    id: 2,
    title: "Best Seller",
    image: bestSeller,
  },
  {
    id: 3,
    title: "Air freshener",
    image: airFreshner,
  },
  {
    id: 4,
    title: "Surface cleaner",
    image: sprayBottle,
  },
  {
    id: 5,
    title: "Pooja needs",
    image: spritual,
  },
];


export const products = [
  {
    "id": 1,
    "name": "Pure Camphor Oil",
    "description": "100% natural camphor oil, known for its therapeutic and aromatic benefits. Ideal for use in aromatherapy, massages, and as a pain relief remedy.",
    "price": 999,
    "category": "Health & Wellness",
    "images": [oil, oil1],
    "featured": true,
    "arrival": false,
    "bestSeller": false,
    "rating": 4,
    "originalPrice": 1499,
    "recentView": false
  },
   {
    "id": 2,
    "name": "Camphor Tablets",
    "description": "High-quality camphor tablets for religious ceremonies, pest control, and air purification.",
    "price": 549,
    "category": "Spiritual & Household",
    "images": [camphorTab, camphorTab1, camphorTab2, camphorTab3],
    "featured": false,
    "arrival": true,
    "bestSeller": false,
    "rating": 5,
    "originalPrice": 799,
    "recentView": false
  },
    {
    "id": 3,
    "name": "Camphor Air Purifier Blocks",
    "description": "Camphor blocks for air purification and pest control. Ideal for home, office, and other closed spaces.",
    "price": 699,
    "category": "Home Essentials",
    "images": [campBall, campBall1, campBall2],
    "featured": true,
    "arrival": false,
    "bestSeller": false,
    "rating": 4,
    "originalPrice": 999,
    "recentView": false
  },
  {
    "id": 4,
    "name": "Swastik Camphor",
    "description": "Natural Swastik Camphor for a refreshing and calming aroma while driving. Lasts for up to 30 days.",
    "price": 649,
    "category": "Automotive",
    "images": [swastik, swastik1],
    "featured": false,
    "arrival": true,
    "bestSeller": true,
    "rating": 4,
    "originalPrice": 899,
    "recentView": false
  },
  
  {
    "id": 5,
    "name": "Camphor Wood Blocks",
    "description": "Eco-friendly camphor wood blocks for naturally repelling moths and insects. Ideal for wardrobes and storage areas.",
    "price": 1299,
    "category": "Home Essentials",
    "images": [ball, ball1, ball2, ball3,],
    "featured": false,
    "arrival": true,
    "bestSeller": false,
    "rating": 5,
    "originalPrice": 1599,
    "recentView": true
  },
  {
    "id": 6,
    "name": "Camphor Essential Oil Stick",
    "description": "Portable camphor essential oil stick for easy breathing and decongestion. Ideal for travel and daily use.",
    "price": 499,
    "category": "Health & Wellness",
    "images": [stick, stick1, stick2, stick3,],
    "featured": false,
    "arrival": false,
    "bestSeller": false,
    "rating": 3,
    "originalPrice": 649,
    "recentView": true
  },
  {
    id: 7,
    name: "Bihari ji Slab",
    description: "Adorn your space with the beautifully crafted Ganesh idol, an exquisite piece perfect for spiritual decoration and worship. Made with intricate detail, this idol represents the revered deity Ganesh, known for removing obstacles and bringing good fortune. Its elegant design and high-quality materials make it a cherished addition to any home. Ideal for devotional purposes or as a thoughtful gift, this idol enhances the ambiance with its serene presence and artistic craftsmanship.",
    price: 3499,
    category: "Decor",
    images: [slab, slab1],
    featured: false,
    arrival: false,
    "bestSeller": false,
    rating: 5,
    originalPrice: 6999
  },
  {
    id: 8,
    name: "Thaal Wala Camphor",
    description: "This Thaal Wala Camphor meticulously crafted with attention to detail, is ideal for devotional use and spiritual decoration. The idol portrays the divine figure Krishna, revered for his wisdom and compassion. Made from high-quality materials, it features intricate carvings and a vibrant finish. Perfect for adding a touch of spirituality to your space, it also makes a thoughtful gift for loved ones. This idol enhances any setting with its elegance and serene presence.",
    price: 399,
    category: "Decor",
    images: [thaal, thaal1, thaal2],
    featured: false,
    arrival: false,
    "bestSeller": false,
    rating: 5,
    originalPrice: 599
  },
  {
    "id": 9,
    "name": "Camphor Mosquito Repellent",
    "description": "Camphor-based mosquito repellent, effective and natural solution for keeping mosquitoes away.",
    "price": 799,
    "category": "Pest Control",
    "images": [mosquito, mosquito1, mosquito2, mosquito3],
    "featured": true,
    "arrival": false,
    "bestSeller": false,
    "rating": 4,
    "originalPrice": 1099,
    "recentView": false
  },
  {
    "id": 10,
    "name": "Pooje Wala Camphor",
    "description": "Pooja Wala Camphor with camphor for refreshing and smooth skin. Suitable for all skin types.",
    "price": 849,
    "category": "Beauty & Personal Care",
    "images": [ pooja, pooja1,],
    "featured": false,
    "arrival": true,
    "bestSeller": false,
    "rating": 5,
    "originalPrice": 1199,
    "recentView": true
  },
  {
    "id": 11,
    "name": "Chotiwale Aarti Camphor",
    "description": "Chotiwale Aarti Camphor for pain relief, muscle relaxation, and improved circulation.",
    "price": 999,
    "category": "Health & Wellness",
    "images": [arti, arti1, arti3, arti4,],
    "featured": false,
    "arrival": false,
    "bestSeller": true,
    "rating": 4,
    "originalPrice": 1299,
    "recentView": false
  },
  {
    id: 12,
    name: "Sandalwood Incense",
    description: "Indulge in the calming aroma of Sandalwood Incense, crafted from high-quality natural ingredients to create a soothing atmosphere. This incense is perfect for meditation, yoga, or simply unwinding after a long day. The rich, earthy fragrance of sandalwood promotes relaxation and mental clarity, making it an essential addition to your spiritual practices. Each stick is hand-rolled to ensure a slow, steady burn, allowing you to enjoy the tranquil ambiance it creates in your home.",
    price: 599,
    category: "Spiritual items",
    images: [incense, incense1, incense2, incense3],
    featured: false,
    arrival: false,
    "bestSeller": false,
    rating: 4,
    originalPrice: 999 
  },
  {
    id: 13,
    name: "Lavender Incense",
    description: "Experience the calming scent of Lavender Incense, designed to bring peace and tranquility to any space. Crafted with natural lavender extracts, this incense is perfect for creating a serene environment ideal for relaxation or meditation. The gentle aroma of lavender soothes the mind and body, helping to reduce stress and anxiety. Hand-rolled for a consistent burn, these incense sticks are perfect for enhancing your spiritual practices or simply adding a touch of calm to your day.",
    price: 499,
    category: "Spiritual items",
    images: [incense4,incense5, incense6, incense7],
    featured: false,
    arrival: false,
    "bestSeller": false,
    rating: 3,
    originalPrice: 899 
  },
  {
    id: 14,
    name: "Camphor Tablets",
    description: "Purify your environment with these high-quality Camphor Tablets, known for their spiritual and medicinal properties. Made from natural camphor, these tablets can be used during religious rituals or as an air purifier to cleanse your space. The soothing aroma of camphor is believed to dispel negative energies and promote a peaceful ambiance. These tablets are easy to use and dissolve quickly, releasing a refreshing fragrance that rejuvenates both your mind and surroundings.",
    price: 799,
    category: "Spiritual items",
    images: [kapure,kapure1, kapure2, kapure3],
    featured: true,
    arrival: false,
    "bestSeller": false,
    rating: 5,
    originalPrice: 1299
  },
  {
    id: 15,
    name: "Camphor Cone",
    description: "Enhance your home’s ambiance with this Camphor Cone, a natural air freshener that offers both spiritual and practical benefits. The camphor cone is designed to slowly release a soothing fragrance, purifying the air and creating a serene environment. It is ideal for use during meditation, prayer, or simply to freshen up your living space. The cone’s sleek design also makes it a stylish addition to any room, combining functionality with aesthetic appeal.",
    price: 649,
    category: "Spiritual items",
    images: [kapure4, kapure5, kapure6, kapure7],
    featured: false,
    arrival: false,
    "bestSeller": false,
    rating: 3,
    originalPrice: 1049
  },
  {
    "id": 16,
    "name": "Camphor Hair Oil",
    "description": "Camphor-infused hair oil to nourish scalp, reduce dandruff, and promote healthy hair growth.",
    "price": 599,
    "category": "Beauty & Personal Care",
    "images": [hair, hair1, hair2, hair3],
    "featured": false,
    "arrival": false,
    "bestSeller": true,
    "rating": 4,
    "originalPrice": 799,
    "recentView": false
  },
  {
    "id": 4,
    "name": "Till Bhakti Oil",
    "description": "Till Bhakti Oil for relieving muscle aches, cough, and cold. Provides a soothing and cooling effect.",
    "price": 399,
    "category": "Health & Wellness",
    "images": [till, till1],
    "featured": false,
    "arrival": false,
    "bestSeller": true,
    "rating": 4,
    "originalPrice": 699,
    "recentView": false
  },
  {
    "id": 18,
    "name": "Camphor Incense Sticks",
    "description": "Camphor-scented incense sticks for meditation, prayer, and air purification.",
    "price": 299,
    "category": "Spiritual & Household",
    "images": [insenceStick, insenceStick1, insenceStick2, insenceStick3],
    "featured": false,
    "arrival": false,
    "bestSeller": false,
    "rating": 3,
    "originalPrice": 499,
    "recentView": true
  },

];

