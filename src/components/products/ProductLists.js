import React, { useState, useEffect } from "react"

export const ProductList = () => {


    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [category, updateProductType] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then((productArray) => {
                    setProducts(productArray)



                })

            fetch("http://localhost:8088/productTypes")
                .then(res => res.json())
                .then((productTypesArray) => {
                    setProductTypes(productTypesArray)


                })


        },

        []
    )

    useEffect(
        () => {

            const categoryList = productTypes.map(productType => productType)



            updateProductType(categoryList)



        }, [])


    return (
        <>


            {

                products.map(
                    (productObject) => {

                        let productCategory

                        for (const productType of productTypes) {
                            if (productObject.productTypeId === productType.id) {
                                productCategory = productType.category


                            }
                        }
                        return <p key={`product--${productObject.id}`}>product name: {productObject.name}<br></br>
                            price: {productObject.price}<br></br>  category:{productCategory} </p>
                    })
            }
        </>
    )
}
