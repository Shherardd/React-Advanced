import { keyframes, css } from 'styled-components'

const slideInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
        top: -100px;
    }

    to {
        filter: blur(0px);
        opacity: 100%;
        top: -20px
    }
`

const slideOutKeyframes = keyframes`
    from {
        top:-20px;
        opacity: 100%;
    }

    to {
       top: -100px;
       opacity: 0;
    }
`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${slideInKeyframes} ${type};`

export const slideOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${slideOutKeyframes} ${type};`

const blurInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0px);
        opacity: 100%;
    }
`
export const blurIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${blurInKeyframes} ${type};`
