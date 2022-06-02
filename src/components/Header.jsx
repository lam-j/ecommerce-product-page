import React, { useEffect, useRef } from "react";

export default function Header(props) {
    const isCartEmpty = useRef(false);
    useEffect(() => {
        if (props.itemCart.length === 0) {
            isCartEmpty.current = true;
        }
        isCartEmpty.current = false;
    }, [props.itemCart]);

    function createCartItem(item) {
        return (
            <div className="itemInCart" key={item.name}>
                <img src={item.image} alt="item" />
                <p>
                    {item.name}
                    <br /> ${item.currentPrice} x {item.quantity}
                    <span> = ${item.currentPrice * item.quantity}.00</span>
                </p>
                <img
                    className="delete-icon"
                    src="./images/icon-delete.svg"
                    alt="delete"
                    onClick={() => props.deleteFromCart(item.name)}
                />
            </div>
        );
    }

    return (
        <div className="header">
            <img className="logo" src="./images/logo.svg" alt="sneakers-logo" />
            <div className="navigation">
                <ul>
                    <li>
                        <a href="/collections">Collections</a>
                    </li>
                    <li>
                        <a href="/men">Men</a>
                    </li>
                    <li>
                        <a href="/women">Women</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="action-buttons">
                <button>
                    <img
                        className="checkout"
                        src="./images/icon-cart.svg"
                        alt="checkout-cart"
                        onClick={() => {
                            if (
                                document.querySelector(".popup-cart").classList.contains("active")
                            ) {
                                document.querySelector(".popup-cart").classList.toggle("active");
                            } else {
                                document.querySelector(".popup-cart").classList.add("active");
                            }
                        }}
                    />
                </button>
                <button>
                    <img className="user" src="./images/image-avatar.png" alt="" />
                </button>
            </div>
            <div className="popup-cart active">
                <h4>Cart</h4>
                <hr />
                <div className="items-in-cart">
                    {/* {isCartEmpty && <p className="empty-cart">Your cart is empty.</p>} */}
                    {props.itemCart.map(createCartItem)}
                </div>
                <button className="popup-checkout">Checkout</button>
            </div>
        </div>
    );
}
