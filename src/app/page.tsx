import { prisma } from '@/lib/prisma'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">SHOP.CO</h1>
          <p className="text-lg text-gray-600">Discover our latest collection of premium clothing</p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
