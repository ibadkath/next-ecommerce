import { type SchemaTypeDefinition } from 'sanity'
import { products } from '../product'
import { category } from '../category'
import { heroImages } from '../heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category,heroImages],
}
