import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { mediaSizes, device } from '../styles/variables.js'

const Header = () => (
  <div>
    <h3>Acme Store</h3>
    <div>Your cart is empty</div>
    <img src="http://via.placeholder.com/50x30"/>
  </div>
)

export default Header
