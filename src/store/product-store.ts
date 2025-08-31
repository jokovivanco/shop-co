import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image: string
  category: string
  size: string[]
  color: string[]
  inStock: boolean
  createdAt: Date
  updatedAt: Date
}

interface ProductStore {
  products: Product[]
  loading: boolean
  error: string | null
  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))