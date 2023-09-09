import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Productos from '../Pages/Products/Products'
import About from '../Pages/About/AboutUs'

const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/aboutus" element={<About />} />

            <Route path="*" element={<Home />} />
        </ReactDomRoutes>

    )
}

export default Routes