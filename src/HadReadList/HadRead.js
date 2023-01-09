import { useSelector } from "react-redux";

import Modal from "../UI/Modal";
import ItemInStore from "./ItemInStore";

import classes from "./HadRead.module.css";

const HadRead = (props) => {
    const hadReadItems = useSelector((state) => state.list.items);

    return (
        <Modal onClose={props.onClosePending}>
            <ul className={classes.listHadRead}>
                {hadReadItems.map((item) => (
                    <ItemInStore
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

export default HadRead;
