import React, { useEffect, useState } from 'react'

function ProductCards() {

    let [isloading, setIsloading] = useState(false)
    let [products, setProducts] = useState([])


    async function getProducts() {
        setIsloading(true)
        let response = await fetch('https://fakestoreapiserver.reactbd.org/api/products')
        let d = await response.json()
        setProducts(d.data)
        setIsloading(false)


    }

    useEffect(() => {
        getProducts()
        console.log(products)
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div>
            <div className="container">
                <h2 className='my-5 text-center'>API Dynamic Card Rendering</h2>
                <div className="row my-4">
                    {isloading ? <div className="spinner-wrapper"><div class="loader"></div></div> :
                        products.map((p) =>
                        (<div className="col-md-3" key={p._id}>
                            <div className="card m-4">
                                <img src={p.image} alt="" />
                                <strong className="card-title p-1">
                                    {p.title}
                                </strong>
                                <p className="card-description p-1">
                                    {p.description}
                                </p>
                                 <p className="card-price p-1">
                                    {p.price}
                                </p>
                                
                            </div>
                        </div>)
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductCards