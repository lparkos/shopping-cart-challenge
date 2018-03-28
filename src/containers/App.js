import React from 'react'
import Header from '../components/Header'
import ProductsContainer from './ProductsContainer'
import styled from 'styled-components';
import { mediaSizes, device, colors } from '../styles/variables.js'

const AppStyle = styled.div`
  @media ${device.smallSz} {
    background-color: ${colors.gray};
    padding: 15px;
  }

  @media ${device.mediumSz} {
    background-color: ${colors.gray};
    padding: 40px;
  }

  @media ${device.largeSz} {
    background-color: ${colors.gray};
    padding: 50px;
  }
`;

const App = () => (
  <AppStyle>
    <Header />
    <hr/>
    <ProductsContainer />
  </AppStyle>
)

export default App
