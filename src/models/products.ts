export interface Product {
  author: IAuthor
  categories: String[]
  items: IItem[]
}

interface IAuthor {
  name: string
  lastname: string
}

export interface IItem {
  id: string
  title: string
  price: IPrice
  picture: string
  condition: string
  free_shipping: boolean
  location: string
}

interface IPrice {
  currency: string
  amount: number
  decimals: number
}
