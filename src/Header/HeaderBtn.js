import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    return (
        <div className={classes.buttons}>
            <button className={classes.button}>Pending to read</button>
            <button className={classes.button}>Books in process</button>
            <button className={classes.button}>Already had read</button>
        </div>
    );
};

export default HeaderBtn;
