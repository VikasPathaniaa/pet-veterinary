import React from 'react';
import "../ProductSection/Product.css";
import Dog1 from "../../assets/Dog1.webp"

const ProductSection = () => {
    const arr = [1, 2, 3, 4, 5 ,6 , 7, 8]
    return (
        <div className='product_section'>
            <div className='product_heading'>
                <h3> Dog Nutrients & Food</h3>
                <div className='offer_section'>
                    <p><span> 25% OFF All </span> Products</p>
                    <button className='view_more_button'>View More</button>
                </div>
            </div>
            <div className='product_stack'>
                {arr.map((item) => {
                        return (
                            <>
                                <div key={item} className='product_card'>
                                    <img src={Dog1} alt="Product name" width={300}/>
                                    <div className='detail_section'>

                                    <h2>Dog 1</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <span className='buy_button'>Buy Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductSection;