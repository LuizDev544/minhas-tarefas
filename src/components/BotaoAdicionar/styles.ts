import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variavies from '../../styles/variavies'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px; /* precisa para ser um círculo */
  background-color: ${variavies.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${variavies.verde2};
  }
`
