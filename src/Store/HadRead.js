import Modal from "../UI/Modal";
import ItemInStore from "./ItemInStore";

import classes from "./HadRead.module.css";

const HadRead = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <ul className={classes.listHadRead}>
                <ItemInStore />
            </ul>
            <button className={classes.btnHadRead} onClick={props.onClose}>
                Close
            </button>
        </Modal>
    );
};

export default HadRead;
