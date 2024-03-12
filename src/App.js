import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import ProductItem from "./Components/ProductItem";

const App = () => (
  <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/products/:id' element={<ProductItem/>}/>
       </Routes>
  </BrowserRouter>
)

export default App