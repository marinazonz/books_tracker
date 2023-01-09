import { useDispatch } from "react-redux";
import { optionsActions } from "../storeRedux/options-slice";
import { pendingActions } from "../storeRedux/options-slice-pending";
import classes from "./ItemInPending.module.css";

const ItemInPending = (props) => {
    const dispatch = useDispatch();

    const { id, title, author, description } = props.item;

    const moveInProcessHandler = () => {
        dispatch(pendingActions.removeItemFromPendingList(id));
    };

    const moveToHadReadHandler = () => {
        dispatch(
            optionsActions.addItemToList({ id, title, author, description })
        );
        dispatch(pendingActions.removeItemFromPendingList(id));
    };

    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{title}</h3>
                <div className={classes.bookAuthor}>{author}</div>
                <div className={classes.bookDescription}>{description}</div>
                <div className={classes.buttonsPendingList}>
                    <button onClick={moveInProcessHandler}>In process</button>
                    <button onClick={moveToHadReadHandler}>
                        Already had read
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ItemInPending;
