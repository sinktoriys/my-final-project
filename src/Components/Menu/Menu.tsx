import arrow from 'assets/arrow-down-black.png'
type Props = {}
const Menu = (props: Props) => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu-children">
                    <a href="">
                        Home
                        <img className="arrow" src={arrow} alt="Arrow" />
                    </a>
                    <ul>
                        <li className="children">
                            <a href="#">Home-Alternate</a>
                        </li>
                    </ul>
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
    )
}
export default Menu
