import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductLists"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>
        </>
    )
}
