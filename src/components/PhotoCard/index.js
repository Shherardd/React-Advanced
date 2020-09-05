import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(element.current) --> Shows the DOM elemtn <Article></Article>
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries) Show if the element is visible or not
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting }) shows if the element is visible with false and true
        if (isIntersecting) {
          console.log('si')
          setShow(isIntersecting)
          observer.disconnect()
        } else {
          console.log('false')
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} Likes!
          </Button>
        </>}

    </Article>
  )
}
