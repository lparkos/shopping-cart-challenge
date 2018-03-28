import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <Product {...props} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
  }
}

describe('Product component', () => {
  it('should render title and price', () => {
    const { component } = setup({ title: 'Test Product', price: 9.99 })
    expect(component.text()).toBe('Test Product - $9.99')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })
      expect(component.text()).toBe('Test Product - $9.99 x 6')
    })
  })

  it('should render Add To Cart message', () => {
    const { button } = setup(productProps)
    expect(button.text()).toMatch(/^Add to cart/)
  })

  it('should not disable button', () => {
    const { button } = setup(productProps)
    expect(button.prop('disabled')).toEqual('')
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { button } = setup(productProps)
      expect(button.text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { button } = setup(productProps)
      expect(button.prop('disabled')).toEqual('disabled')
    })
  })
})
