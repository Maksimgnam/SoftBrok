import "./Header.css"
import Logo from "../Logo/Logo"
import account from './account.png'

import wallet from './wallet.png'
import cart from './cart.png'


const Header = (props) => {








    return (

        <div className="Header">
            <Logo />

            <input type="text" className="headerInput" />



            <div className="headerConatiner">
                <button className="headerBtn">
                    <img src={account} alt="" className="header__icon" />
                </button>
                <button className="headerBtn " onClick={props.showBalanceDisplay}>
                    <img src={wallet} alt="" className="header__icon" />
                </button>
                <button onClick={props.handleCardDisplay} className="headerBtn">
                    <img src={cart} alt="" className="header__icon" />

                </button>
            </div>



        </div>
    )
}
export default Header