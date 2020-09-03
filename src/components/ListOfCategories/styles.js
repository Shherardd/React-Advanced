import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    left: 0;
    right: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    max-width: 400px;
    position: fixed;
    padding: 5px;
    z-index: 2;
    top: -20px;
    transform: scale(.5);
  }
  &::-webkit-scrollbar {
    display: none;
  }

`

export const Item = styled.li`
  padding: 4px 8px;
`
