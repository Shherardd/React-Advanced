import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://static3.depositphotos.com/1000958/117/i/450/depositphotos_1178129-stock-photo-kitten.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
