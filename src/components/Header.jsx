export default function Header() {
    return (
        <div className="header">
            <img className="logo" src="./images/logo.svg" alt="sneakers-logo" />
            <div className="navigation">
                <ul>
                    <li>
                        <a href="">Collections</a>
                    </li>
                    <li>
                        <a href="">Men</a>
                    </li>
                    <li>
                        <a href="">Women</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="action-buttons">
                <img className="checkout" src="./images/icon-cart.svg" alt="checkout-cart" />
                <img className="user" src="./images/image-avatar.png" alt="" />
            </div>
        </div>
    );
}
