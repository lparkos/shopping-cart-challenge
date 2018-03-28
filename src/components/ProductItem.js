import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { mediaSizes, device, colors } from '../styles/variables.js'

const ProductTileStyle = styled.div`
    background-color: white;
    border-radius: 5px;
    margin: 20px 0px;
`;

const ProductItem = ({ product, addToCart }) => (

  <ProductTileStyle>
    <Product
      title={product.productTitle}
      price={product.price.value}
      inventory={product.inventory}
      onAddToCartClicked={() => addToCart(product.id)}
     />
  </ProductTileStyle>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductItem)
