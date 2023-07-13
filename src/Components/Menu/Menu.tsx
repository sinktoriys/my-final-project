import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <nav>
            <ul className="menu">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/breackfast">Breackfast</MenuItem>
                <MenuItem to="/lunch">Lunch</MenuItem>
                <MenuItem to="/dinner">Dinner</MenuItem>
                <MenuItem to="/contact">Contact</MenuItem>
                <MenuItem to="/cart">Cart</MenuItem>
            </ul>
        </nav>
    )
}
export default Menu
