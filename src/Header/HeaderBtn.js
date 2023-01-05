import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    const alreadyReadQuantity = useSelector((state) => state.list.totalItems);

    const [badge, setBadge] = useState("0");

    useEffect(() => {
        const smth = JSON.parse(localStorage.getItem("itemsList"));

        if (smth) {
            const value = smth.totalItems;
            setBadge(value);
        } else {
            setBadge(alreadyReadQuantity);
        }
    }, [alreadyReadQuantity]);

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
