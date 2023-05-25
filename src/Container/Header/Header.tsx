import './Header.scss'
import logo from 'LogoBids.png'
import arrow from 'arrow-down-black.png'
import basket from 'basket.png'
import user from 'user.png'

type Props = {}
const Header = () => {
    const links = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/page2' },
        { text: 'Breackfast', link: '/page3' },
        { text: 'Lunch', link: '/page4' },
        { text: 'Dinner', link: '/page5' },
        { text: 'Contact', link: '/page6' },
    ]
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="logo">
                            <a href="">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    width="184"
                                    height="93"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-7">
                        <nav>
                            <ul className="menu">
                                <li>
                                    <a href="">
                                        Home
                                        <img
                                            className="arrow"
                                            src={arrow}
                                            alt="Arrow"
                                        />
                                    </a>
                                    <ul>
                                        <li className="header-drop-menu">
                                            <a className="drop-menu" href="#">
                                                Home-Alternate
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Breackfast</a>
                                </li>
                                <li>
                                    <a href="#">Lunch</a>
                                </li>
                                <li>
                                    <a href="#">Dinner</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2">
                        <img className="bascket" src={basket} alt="Bascket" />
                        <div className="circle">
                            <p className="number" id="products-count">
                                0
                            </p>
                        </div>
                        <img className="user" src={user} alt="User" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
