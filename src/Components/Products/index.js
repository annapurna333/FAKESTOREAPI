import {Link} from 'react-router-dom'
import './index.css'

const Products = props => {
    const {productDetails} = props
    const {id,title,image} = productDetails
    return (
        <Link to={`/products/${id}`} className='product-link'>
            <li className='product-item'>
                <img src={image} alt={title} className='image'/>
                <p className='title'>{title}</p>
            </li>
        </Link>
    )
}

export default Products



