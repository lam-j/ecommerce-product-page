export default function Header() {
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
                    <img className="checkout" src="./images/icon-cart.svg" alt="checkout-cart" />
                </button>
                <button>
                    <img className="user" src="./images/image-avatar.png" alt="" />
                </button>
            </div>
        </div>
    );
}
