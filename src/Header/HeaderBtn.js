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
                className='h-20 w-20  font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-4 md:h-20 md:w-40 grid place-items-center'
                onClick={props.onClickPending}
            >
                <span className='text-orange-700 mt-2 text-lg'>
                    Pending to read
                </span>
                <span className='opacity-30 text-6xl place-self-center -mt-14 -ml-2'>
                    {badgePending}
                </span>
            </button>
            <button
                className='h-20 w-20  font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-4 md:h-20 md:w-40 grid place-items-center'
                onClick={props.onClickInProcess}
            >
                <span className='text-orange-700 mt-2 text-lg'>
                    Books in process
                </span>
                <span className='opacity-30 text-6xl place-self-center -mt-14 -ml-2'>
                    {badgeInProcess}
                </span>
            </button>
            <button
                className='h-20 w-20  font-bold shadow-md cursor-pointer border-none rounded-lg mt-1 mx-4 md:h-20 md:w-40 grid place-items-center'
                onClick={props.onClick}
            >
                <span className='text-orange-700 mt-2 text-lg'>
                    Already had read
                </span>
                <span className='opacity-30 text-6xl place-self-center -mt-14 -ml-2'>
                    {badgeAlreadyRead}
                </span>
            </button>
        </div>
    );
};

export default HeaderBtn;
