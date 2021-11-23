export interface Product {
  author: IAuthor
  categories: String[]
  items: IItems[]
}

interface IAuthor {
  name: string
  lastname: string
}

export interface IItems {
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

export const products: Product[] = [
  {
    author: {
      name: 'pepe',
      lastname: 'grillo',
    },
    categories: ['zapatillas', 'running'],
    items: [
      {
        id: '1',
        title: 'Zapa Nike',
        price: {
          currency: 'ARS',
          amount: 1000,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        location: 'Capital Federal',
      },
    ],
  },
]
