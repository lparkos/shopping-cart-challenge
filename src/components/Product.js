import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { device, colors } from '../styles/variables.js'

const Product = ({ price, inventory, title, onAddToCartClicked, product }) => (
  <ProductStyle>
    <Col1 src="http://via.placeholder.com/455x303" />
    <Col2>
      <Td>
        <Title>{title}</Title>
        <Inventory>{inventory ? `${inventory} Remaining` : null}</Inventory>
        <ButtonStyle
          onClick={onAddToCartClicked}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </ButtonStyle>
      </Td>
      <Td>
        <Price>{price}</Price>
      </Td>
    </Col2>
  </ProductStyle>
)

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default Product

const ProductStyle = styled.div`
  @media ${device.smallSz} {
    display: block;
  }

  @media ${device.mediumSz}, @media ${device.largeSz} {
    display: flex;
    align-content:flex-end;
  }
`;

const Col1 = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
`;

const Col2 = styled.div`
  @media ${device.smallSz} {
    padding: 0px 0px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    padding: 20px 40px;
    display: flex;
    justify-content:space-between;
    width: 100%;
  }
`;

const Td = styled.div`
  padding: 5vh 0px;
`;


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

const Inventory = styled.div`
@media ${device.smallSz} {
    display: block;
    font-size: 12px;
    padding-top: 1em;
    text-transform: uppercase;
    color: ${colors.darkGray};
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    display: block;
    font-size: 13px;
    padding-top: 1em;
    text-transform: uppercase;
    color: ${colors.darkGray};
  }
`;

const Price = styled.div`
  @media ${device.smallSz} {
    display: inline;
    font-size: 16px;
  }
  @media ${device.mediumSz}, @media ${device.largeSz} {
    display: inline;
    font-size: 21px;
  }
`;

const ButtonStyle = styled.button`
    @media ${device.smallSz} {
      background-color: ${colors.blue};
      border-radius: 25px;
      padding: 20px;
      margin: 5vh 0vh 0vh 0vh;
      color: white;
      width: 139px;
      display: block;
      text-transform: uppercase;

      &:focus {
        outline: 0;
      }
    }
    @media ${device.mediumSz}, @media ${device.largeSz} {
      background-color: ${colors.blue};
      border-radius: 25px;
      padding: 20px;
      margin: 10vh 0px 10px 0px;
      color: white;
      width: 139px;
      display: block;
      text-transform: uppercase;

      &:focus {
        outline: 0;
      }
    }
`;
