import { useSelector } from "react-redux";

import classes from "./HadRead.module.css";

import ItemInPending from "../PendingList/ItemInPending";
import Modal from "../UI/Modal";

const Pending = (props) => {
    const pendingList = useSelector((state) => state.pendinglist.items);
    return (
        <Modal onClose={props.onClosePending}>
            <ul className={classes.listHadRead}>
                {pendingList.map((item) => (
                    <ItemInPending
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            author: item.author,
                            description: item.description,
                        }}
                    />
                ))}
            </ul>
            <button
                className={classes.btnHadRead}
                onClick={props.onClosePending}
            >
                Close
            </button>
        </Modal>
    );
};

export default Pending;
