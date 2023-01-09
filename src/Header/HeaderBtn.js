import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    const alreadyReadQuantity = useSelector((state) => state.list.totalItems);
    const inPendingList = useSelector((state) => state.pendinglist.totalItems);

    const [badgeAlreadyRead, setBadgeAlreadyRead] = useState("0");
    const [badgePending, setBadgePending] = useState("0");

    useEffect(() => {
        const smth = JSON.parse(localStorage.getItem("itemsList"));
        const forPending = JSON.parse(localStorage.getItem("itemsPendingList"));

        if (smth) {
            const value = smth.totalItems;
            setBadgeAlreadyRead(value);
        } else {
            setBadgeAlreadyRead(alreadyReadQuantity);
        }

        if (forPending) {
            const value = forPending.totalItems;
            setBadgePending(value);
        } else {
            setBadgePending(inPendingList);
        }
    }, [alreadyReadQuantity, inPendingList]);

    return (
        <div className={classes.buttons}>
            <button className={classes.button} onClick={props.onClickPending}>
                <span>Pending to read</span>
                <span className={classes.spanAlready1}>{badgePending}</span>
            </button>
            <button className={classes.button}>
                <span>Books in process</span>
                <span className={classes.spanAlready}>0</span>
            </button>
            <button className={classes.button} onClick={props.onClick}>
                <span>Already had read</span>
                <span className={classes.spanAlready}>{badgeAlreadyRead}</span>
            </button>
        </div>
    );
};

export default HeaderBtn;
