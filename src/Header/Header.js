import HeaderBtn from "./HeaderBtn";
import classes from "./Header.module.css";
import logo from "../pics/logo.png";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <img src={logo} alt='doggie' />
                </div>
                <div className={classes.welcome}>
                    <h1>Welcome, You</h1>
                    <HeaderBtn
                        onClick={props.onShowHadRead}
                        onClickPending={props.onShowPendingList}
                    />
                </div>
            </header>
        </>
    );
};

export default Header;
