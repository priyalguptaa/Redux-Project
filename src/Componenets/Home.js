import React from "react";

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="cart.png" />
            </div>
            <h1>Home Componenet</h1>
            <div className="Cart-Wrapper">

                <div className="text- Wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        price: $1000
                    </span>
                </div>

                <div className="btn-Wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className="img- Wrapper item">
                <img src="phonee.jpg" />
            </div>
        </div>
    )
}
export default Home