import logo from 'assets/nutritionist-logo.svg'
type Props = {}
const Logo = (props: Props) => {
    return (
        <div className="logo">
            <a href="">
                <img src={logo} alt="Logo" width="280" height="93" />
            </a>
        </div>
    )
}
export default Logo
