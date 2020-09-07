
import React from 'react'
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_PHOTOS_BY_CATEGORY = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data = {} }) => {
  // console.log(loading)
  if (loading) { return <p>Loading ...</p> }
  if (error) {
    console.log(error.message)
    return <p>{error.message}</p>
  }
  const { photos = {} } = data
  console.log(data)
  return <ListOfPhotoCardsComponent data={data} />
}

// export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
export const ListOfPhotoCards = ({ categoryId }) => (
  <Query query={GET_PHOTOS_BY_CATEGORY} variables={{ categoryId }}>
    {renderProp}
  </Query>
)
