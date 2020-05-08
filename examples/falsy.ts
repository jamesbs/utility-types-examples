import { Falsy, isFalsy } from 'utility-types'

type Entity = { 
  id: string
  name?: string
  tags?: any[]
}

const selected = 'selected'
const entity = { id: 'id' } as Entity

const value0 = entity.id && `my id is ${entity.id}`
const value1 = entity.name && `my name is ${entity.name}`
const value2 = entity.id === selected && `${entity.id} is selected`
const value3 = entity.tags?.join(', ')


const generateDescription = (properties: (Falsy | string)[]) => 
  properties.filter(property => !isFalsy(property)).join('. ')

console.log(generateDescription([ value0, value1, value2, value3 ]))