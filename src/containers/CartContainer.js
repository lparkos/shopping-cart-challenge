import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts, getQuantity } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, getTotal, getQuantity }) => (
  <Cart
    products={products}
    total={getTotal}
    quantityById={getQuantity}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantityById: getQuantity(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
