import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 16px;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`
