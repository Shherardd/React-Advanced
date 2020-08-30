import React from 'react'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = D }) => {
  return (
    <article>
      <a href={`/detal/${id}`}>
        <div>
          <img src={src} />
        </div>
      </a>

      <button>
        {likes} Likes!
      </button>
    </article>
  )
}
