import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ productTitle, children }) => (
  <div>
    <h3>{productTitle}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  productTitle: PropTypes.string.isRequired
}

export default ProductsList
