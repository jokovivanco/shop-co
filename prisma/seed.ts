import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    name: 'Classic White T-Shirt',
    description: 'A comfortable, breathable cotton t-shirt perfect for everyday wear.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'T-Shirts',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    inStock: true,
  },
  {
    name: 'Denim Jacket',
    description: 'Vintage-style denim jacket with a modern fit.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500',
    category: 'Jackets',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Blue', 'Black'],
    inStock: true,
  },
  {
    name: 'Summer Floral Dress',
    description: 'Light and airy floral dress perfect for summer occasions.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    category: 'Dresses',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Pink', 'Blue', 'Yellow'],
    inStock: true,
  },
  {
    name: 'Slim Fit Jeans',
    description: 'Comfortable slim fit jeans with stretch fabric.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Jeans',
    size: ['28', '30', '32', '34', '36'],
    color: ['Blue', 'Black', 'Gray'],
    inStock: true,
  },
  {
    name: 'Wool Sweater',
    description: 'Cozy wool sweater for chilly weather.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
    category: 'Sweaters',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Beige', 'Navy', 'Burgundy'],
    inStock: true,
  },
  {
    name: 'Leather Boots',
    description: 'Durable leather boots with excellent craftsmanship.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    category: 'Shoes',
    size: ['7', '8', '9', '10', '11'],
    color: ['Brown', 'Black'],
    inStock: true,
  },
  {
    name: 'Silk Scarf',
    description: 'Elegant silk scarf with beautiful patterns.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500',
    category: 'Accessories',
    size: ['One Size'],
    color: ['Red', 'Blue', 'Gold'],
    inStock: true,
  },
  {
    name: 'Cotton Polo Shirt',
    description: 'Classic polo shirt made from premium cotton.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500',
    category: 'Polo',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Navy', 'Green'],
    inStock: true,
  },
]

async function main() {
  console.log('Start seeding...')
  
  for (const product of products) {
    const result = await prisma.product.create({
      data: product,
    })
    console.log(`Created product with id: ${result.id}`)
  }
  
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })