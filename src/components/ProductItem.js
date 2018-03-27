import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styled from 'styled-components';
import { mediaSizes, device, colors } from '../styles/variables.js'

const ProductTileStyle = styled.div`
    background-color: white;
    border-radius: 5px;
    margin: 20px 0px;
`;

const ProductItem = ({ product, onAddToCartClicked }) => (

  <ProductTileStyle>
    <Product
      title={product.title}
      price={product.price.value}
      inventory={product.inventory}
     />
  </ProductTileStyle>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
