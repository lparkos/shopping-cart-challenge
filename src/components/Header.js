import React from 'react'
import PropTypes from 'prop-types'
import CartContainer from '../containers/CartContainer'

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal:false
    }
  }

  propTypes = {
    products: PropTypes.array
  }

  onClick(e){
    e.preventDefault();
    this.setState({showModal: !this.state.showModal})
  }

  render(){
    return(
      <div>
        <h3>Acme Store</h3>
        <a onClick={this.onClick.bind(this)}>
          <img src="http://via.placeholder.com/50x30" alt="cart"/>
        </a>
        {this.state.showModal && <CartContainer />}
      </div>
    )
  }
}
