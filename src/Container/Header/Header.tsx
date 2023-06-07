import Logo from 'Components/Logo/Logo'
import './Header.scss'
import Menu from 'Components/Menu/Menu'
import Purchases from 'Components/Purchaces/Purchases'
import { Container } from '@mui/material'
type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}
const Header = ({ cartData }: Props) => {
    // const links = [
    //     { text: 'Home', link: '/' },
    //     { text: 'Breackfast', link: '/page2' },
    //     { text: 'Lunch', link: '/page3' },
    //     { text: 'Dinner', link: '/page4' },
    //     { text: 'Contact', link: '/page5' },
    // ]
    return (
        <header className="header">
            <Container>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Logo />
                        </div>
                        <div className="col-7">
                            <Menu />
                        </div>
                        <div className="col-2">
                            <Purchases cartData={cartData} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
