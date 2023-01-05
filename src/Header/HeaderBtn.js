import { useSelector } from "react-redux";
import { useEffect } from "react";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    const alreadyReadQuantity = useSelector((state) => state.list.totalItems);
    const alreadyReadQuantityInStorage = useSelector(
        (state) => state.list.isInLocalstorage
    );

    let badge = alreadyReadQuantity;
    useEffect(() => {
        console.log(alreadyReadQuantityInStorage);
        if (!alreadyReadQuantityInStorage) {
            const value = JSON.parse(localStorage.getItem("itemsList"));
            badge = value.totalItems;
        } else {
            badge = alreadyReadQuantity;
        }
    }, []);

    return (
        <div className={classes.buttons}>
            <button className={classes.button}>
                <span>Pending to read</span>
                <span className={classes.spanAlready1}>0</span>
            </button>
            <button className={classes.button}>
                <span>Books in process</span>
                <span className={classes.spanAlready}>0</span>
            </button>
            <button className={classes.button} onClick={props.onClick}>
                <span>Already had read</span>
                <span className={classes.spanAlready}>{badge}</span>
            </button>
        </div>
    );
};

export default HeaderBtn;
