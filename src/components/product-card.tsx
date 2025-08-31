'use client'

import Image from 'next/image'
import { Product } from '@/store/product-store'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <div className="mb-3">
          <span className="text-sm text-gray-500">Category: </span>
          <span className="text-sm font-medium text-gray-700">{product.category}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {product.color.map((color) => (
            <span
              key={color}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {color}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {product.size.map((size) => (
            <span
              key={size}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}