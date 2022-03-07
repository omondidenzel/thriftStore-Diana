import React from "react";
import logo from '../components/images/quick.jpeg'
import './Body.css'

const Body = () => {
    return(       
        <div>
            <h1 className="center">We have the right dresses for you everyday</h1>

            <div className= "ImageGrid">
                <img src={logo} alt="Diana Image"></img>
                <img src={logo} alt="Diana Image"></img>
            </div>

            <h1 className="center">Featured products</h1>

        <div className="ImageGridPrice">
            <div className= "card">
                <img src={logo} alt="" width={10}></img>
                <h1>Jeans</h1>
                <p className="price">$19.99</p>
                <p>Very affordable to everyone</p>
                <p><button>Add to Cart</button></p>
            </div>

            <div className= "card ">
                <img src={logo} alt="" width={10}></img>
                <h1>Jeans</h1>
                <p className="price">$19.99</p>
                <p>Very affordable to everyone</p>
                <p><button>Add to Cart</button></p>
            </div>

            <div className= "card ">
                <img src={logo} alt="" width={10}></img>
                <h1>Jeans</h1>
                <p className="price">$19.99</p>
                <p>Very affordable to everyone</p>
                <p><button>Add to Cart</button></p>
            </div>

            <div className= "card ">
                <img src={logo} alt="" width={10}></img>
                <h1>Jeans</h1>
                <p className="price">$19.99</p>
                <p>Very affordable to everyone</p>
                <p><button>Add to Cart</button></p>
            </div>
        </div>

        </div>
        
    )
}

export default Body;