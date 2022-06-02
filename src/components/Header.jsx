import React, { useEffect, useState, useRef } from "react";

export default function Header(props) {
    const isCartEmpty = useRef(false);
    const [subtotal, setSubtotal] = useState(0);
    const [totalItemCount, setTotalItemCount] = useState(0);

    useEffect(() => {
        if (props.itemCart.length === 0) {
            isCartEmpty.current = true;
        }
        isCartEmpty.current = false;

        let newSubtotal = 0;
        props.itemCart.forEach((item) => {
            newSubtotal += item.currentPrice * item.quantity;
        });
        setSubtotal(newSubtotal);

        let newItemCount = 0;
        props.itemCart.forEach((item) => {
            newItemCount += item.quantity;
        });
        setTotalItemCount(newItemCount);
    }, [props.itemCart]);

    function createCartItem(item) {
        return (
            <div className="itemInCart" key={item.name}>
                <img src={item.image} alt="item" />
                <p>
                    {item.name}
                    <br /> ${item.currentPrice} x {item.quantity}
                    <span> &nbsp;=&nbsp; ${item.currentPrice * item.quantity}.00</span>
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
                {props.itemCart.length !== 0 && (
                    <div className="cart-size-notification">{totalItemCount}</div>
                )}
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
                    <img className="user" src="./images/bag-on-head.png" alt="user" />
                </button>
            </div>
            <div className="popup-cart active">
                <h4>Cart</h4>
                <hr />
                <div className="items-in-cart">
                    {props.itemCart.length === 0 && (
                        <p className="empty-cart">Your cart is empty.</p>
                    )}
                    {props.itemCart.length !== 0 && props.itemCart.map(createCartItem)}
                </div>
                {props.itemCart.length !== 0 && (
                    <div className="popup-subtotal">
                        <h4>
                            Subtotal&nbsp;&nbsp;
                            <span>
                                &#40;{totalItemCount}&nbsp;
                                {totalItemCount > 1 ? "items" : "item"}&#41;
                            </span>{" "}
                        </h4>
                        <h4 className="subtotal-amount">${subtotal.toFixed(2)}</h4>
                    </div>
                )}
                {props.itemCart.length !== 0 && (
                    <button className="popup-checkout">Checkout</button>
                )}
            </div>
        </div>
    );
}
