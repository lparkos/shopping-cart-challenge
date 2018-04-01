import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { quantityById } from '../reducers/'
import { device, colors } from '../styles/variables.js'

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      closeModal:true
    };
  }

  getTotal = () => {
    this.props.dispatch({ type: 'GET_TOTAL' })
  }

  closeModal(e){
    e.preventDefault();
    this.setState({closeModal: !this.state.closeModal})
  }

  // increaseQuant(e){
  //   this.setState({ increase: this.state.quantity + 1 })
  // }
  //
  // decreaseQuant(e){
  //   this.setState({ decrease: this.state.quantity - 1 })
  // }

  render(){
    const hasProducts = this.props.products.length > 0
    const nodes = hasProducts ? (
      this.props.products.map(product =>
        <Product
          title={product.productTitle}
          price={product.price.value.value}
          quantity={product.quantity}
          key={product.id}
        />
      )
    ) : (
      <em>Please add some products to cart.</em>
    )
    return(
      <div>
        {this.state.closeModal &&
          <CartStyleBackground>
            <CartModalStyle>
              <Title>Your Cart</Title>
              <hr/>
              <div>{nodes}</div>
              <p>Total: &#36;{this.getTotal}</p>
              <button onClick={this.closeModal.bind(this)}>X</button>
              <button onClick={this.increaseQuant.bind(this)}>+</button>
              <button onClick={this.decreaseQuant.bind(this)}></button>
            </CartModalStyle>
          </CartStyleBackground>
        }
      </div>
    )
  }
}

// Cart.propTypes = {
//   products: PropTypes.array,
//   total: PropTypes.string,
//   onCheckoutClicked: PropTypes.func
// }

Product.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default connect()(Cart)

const Title = styled.div`
  @media ${device.smallSz} {
    display: inline;
    font-size: 21px;
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    display: inline;
    font-size: 38px;
  }
`;

const CartModalStyle = styled.div`
  @media ${device.smallSz} {
    background-color: white;
    padding: 1.5em;
    position: fixed;
    width: 88%;
    height: 100vh;
    top: 0px;
    left: 0px;
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    position: fixed;
    width: 60%;
    height: 60%;
    background-color: white;
    border-radius: 10px;
    left: 16%;
    top: 14vh;
    box-shadow: 0px 2px 2px 1px #d0d0d0;
    padding: 2.5em;
  }
`;

const CartStyleBackground = styled.div`
  @media ${device.smallSz} {
    background-color: white;
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${colors.medGray};
    opacity: 0.99;
    left: 0px;
    top: 0px;
  }
`;
