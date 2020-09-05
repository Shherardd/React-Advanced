import { useEffect, useState, useRef } from 'react'
export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)
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
          // console.log('si')
          setShow(isIntersecting)
          observer.disconnect()
        } else {
          // console.log('false')
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
