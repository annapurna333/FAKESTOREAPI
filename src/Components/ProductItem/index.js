import { Component } from 'react'

import './index.css'

class ProductItem extends Component {
  state = { product: {}}

  componentDidMount() {
    this.getSpecificProduct()
  }

  getSpecificProduct = async () => {
    console.log(this.props)
  }
  
  render() {
    const { product } = this.state
    const {title,image,description,price,category} = product
    console.log(product)
    return (
      <div className="product-container">
        <img src={image} alt={title} className='image'/>
        <div className='product-info'>
            <h1 className='title-of-product'>{title}</h1>
            <p className='description'>{description}</p>
            <p className='price'>{price}</p>
            <p className='description'>category: {category}</p>
        </div>
      </div>
    )
  }
}

export default ProductItem