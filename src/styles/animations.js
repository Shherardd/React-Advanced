import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
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

const fadeOutKeyframes = keyframes`
    from {
        top:-20px;
        opacity: 100%;
    }

    to {
       top: -100px;
       opacity: 0;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeOutKeyframes} ${type};`
