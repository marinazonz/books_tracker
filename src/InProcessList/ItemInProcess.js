import { useDispatch } from "react-redux";
import { optionsActions } from "../storeRedux/options-slice";
import { inProcessActions } from "../storeRedux/options-slice-inprocess";
import classes from "./ItemInProcess.module.css";

const ItemInProcess = (props) => {
    const dispatch = useDispatch();

    const { id, title, author, description } = props.item;

    const deleteItemFromInProcessHandler = () => {
        dispatch(inProcessActions.removeItemFromInProcessList(id));
    };

    const moveToHadReadHandler = () => {
        dispatch(
            optionsActions.addItemToList({ id, title, author, description })
        );
        dispatch(inProcessActions.removeItemFromInProcessList(id));
    };

    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{title}</h3>
                <div className={classes.bookAuthor}>{author}</div>
                <div className={classes.bookDescription}>{description}</div>
                <div className={classes.buttonsPendingList}>
                    <button onClick={deleteItemFromInProcessHandler}>
                        Delete from this list
                    </button>
                    <button onClick={moveToHadReadHandler}>
                        Finished reading
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ItemInProcess;
