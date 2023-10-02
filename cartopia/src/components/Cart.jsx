import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Cart(){
    const totalItems = useSelector((state) => state.cartItems);
    return(
        <Link to={"/cart"}>
            <div>
            
                <button className="cartbutton">
                    <i class="carticon fa-solid fa-cart-shopping fa-sm" style={{color:"rgb(232, 132, 0)"}}></i>
                    Cart({totalItems})
                </button>
            </div>
        </Link>
        
    );
}

export default Cart;

