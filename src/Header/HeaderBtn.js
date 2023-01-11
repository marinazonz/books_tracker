import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    const alreadyReadQuantity = useSelector((state) => state.list.totalItems);
    const inPendingList = useSelector((state) => state.pendinglist.totalItems);
    const inProcessList = useSelector(
        (state) => state.inProcesslist.totalItems
    );

    const [badgeAlreadyRead, setBadgeAlreadyRead] = useState("0");
    const [badgePending, setBadgePending] = useState("0");
    const [badgeInProcess, setBadgeInProcess] = useState("0");

    useEffect(() => {
        const smth = JSON.parse(localStorage.getItem("itemsList"));
        const forPending = JSON.parse(localStorage.getItem("itemsPendingList"));
        const forInProcess = JSON.parse(
            localStorage.getItem("itemsInProcessList")
        );

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

        if (forInProcess) {
            const value = forInProcess.totalItems;
            setBadgeInProcess(value);
        } else {
            setBadgeInProcess(inProcessList);
        }
    }, [alreadyReadQuantity, inPendingList, inProcessList]);

    return (
        <div className='flex justify-between mt-4 '>
            <button
                className='md:h-24 md:w-40 text-xl font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-8 sm:h-24 sm:w-24'
                onClick={props.onClickPending}
            >
                <span>Pending to read</span>
                <span className=''>{badgePending}</span>
            </button>
            <button
                className='md:h-24 md:w-40 text-xl font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-8 sm:h-24 sm:w-24'
                onClick={props.onClickInProcess}
            >
                <span>Books in process</span>
                <span className=''>{badgeInProcess}</span>
            </button>
            <button
                className='md:h-24 md:w-40 text-xl font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-8 sm:h-24 sm:w-24'
                onClick={props.onClick}
            >
                <span>Already had read</span>
                <span className=''>{badgeAlreadyRead}</span>
            </button>
        </div>
    );
};

export default HeaderBtn;
