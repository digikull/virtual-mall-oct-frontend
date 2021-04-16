import React from 'react'
import { Route } from 'react-router-dom'

import ProductList from './Components/Products/ProductListView'
import ProductDetail from './Components/Products/ProductDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/:productID' component={ProductDetail} />
    </div>
);

export default BaseRouter;
