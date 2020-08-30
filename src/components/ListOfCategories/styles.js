import styled from 'styled-components'

export const Lista = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

`

export const Item = styled.li`
  padding: 4px 8px;
`
