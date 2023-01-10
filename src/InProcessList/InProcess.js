import { useSelector } from "react-redux";

import ItemInProcess from "./ItemInProcess";
import Modal from "../UI/Modal";

import classes from "./InProcessList.module.css";

const InProcess = (props) => {
    const inProcessList = useSelector((state) => state.inProcesslist.items);
    return (
        <Modal onClose={props.onCloseInProcess}>
            <ul className={classes.listHadRead}>
                {inProcessList.map((item) => (
                    <ItemInProcess
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
                onClick={props.onCloseInProcess}
            >
                Close
            </button>
        </Modal>
    );
};

export default InProcess;
