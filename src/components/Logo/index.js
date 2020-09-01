import * as React from 'react'
import { Svg } from './styles'
export const Logo = props => {
  return (
    <Svg
      width={155.108}
      height={121.405}
      viewBox='172.446 14.298 155.108 121.405'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <filter id='prefix__editing-vr'>
          <feFlood floodColor='#f7a2de' floodOpacity={0.7} result='c1' />
          <feFlood floodColor='#9ce5b4' floodOpacity={0.7} result='c3' />
          <feComposite
            operator='in'
            in='c1'
            in2='SourceAlpha'
            result='text-c1'
          />
          <feComposite
            operator='in'
            in='c3'
            in2='SourceAlpha'
            result='text-c3'
          />
          <feOffset in='text-c1' dx={5} dy={-1} result='text1' />
          <feOffset in='text-c3' dx={-5} dy={1} result='text3' />
          <feBlend
            in='SourceGraphic'
            in2='text1'
            mode='multiply'
            result='text4'
          />
          <feBlend in='text4' in2='text3' mode='multiply' />
        </filter>
      </defs>
      <g filter='url(#prefix__editing-vr)'>
        <path
          d='M201.263 96.76l8.06-41.92q7.55-.64 12.42-.64 4.86 0 8 .42 3.13.41 5.25 1.5 4.22 2.05 4.22 7.68 0 3.26-2.82 6.02-2.62 2.49-5.5 3.07 3.07.51 5.25 2.81 2.3 2.44 2.3 6.21 0 7.3-5.44 11.55-5.44 4.26-16.13 4.26-7.36 0-15.61-.96zm17.41-20.29l-3.2 16.58q.57.06.7.06h.58q5.24 0 7.48-3.45 1.67-2.69 1.67-7.62 0-2.62-1.7-4.03-1.69-1.41-5.53-1.54zm9.72-12.61q0-5.31-5.12-5.31h-.57q-.26 0-.64.07l-2.56 13.5h.64q8.25-.19 8.25-8.26zm40.2 22.4q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm22.21 11.39q0-1.73.89-6.08l3.4-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63z'
          fill='#444'
        />
      </g>
      <style />
    </Svg>
  )
}
