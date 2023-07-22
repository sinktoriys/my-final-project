import Logo from 'Components/Logo/Logo'
import './Header.scss'
import Menu from 'Components/Menu/Menu'
import Purchases from 'Components/Purchaces/Purchases'
import { Container } from '@mui/material'
type Props = {}
const Header = (props: Props) => {
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
                            <Purchases />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
