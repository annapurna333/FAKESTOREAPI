import { Component } from 'react'
import Products from '../Products'
import './index.css'

class Home extends Component {

    state = {productsData: []}
    
    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        const options = {
            method: 'GET'
        }
        const response = await fetch('https://fakestoreapi.com/products',options);
        const data = await response.json()
        console.log(data);
        this.setState({productsData: data})
    }

    render() {
        const {productsData} = this.state
        return (
             <div className='home-container'>
                <ul className='products-list'>
                    {productsData.map(each => (
                        <Products productDetails={each} key={each.id}/>
                    ))}
                </ul>
             </div>
        )
    }
}

export default Home