import { useDispatch } from "react-redux";

import { optionsActions } from "../storeRedux/options-slice";
import { pendingActions } from "../storeRedux/options-slice-pending";

import classes from "./BookItem.module.css";

const BookItem = (props) => {
    const dispatch = useDispatch();

    const { id, title, author, description } = props;

    const addToAlreadyReadHandler = () => {
        dispatch(
            optionsActions.addItemToList({ id, title, author, description })
        );
    };

    const addToPendingList = () => {
        dispatch(
            pendingActions.addItemToPendingList({
                id,
                title,
                author,
                description,
            })
        );
    };

    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{props.title}</h3>
                <div className={classes.bookAuthor}>{props.author}</div>
                <div className={classes.bookDescription}>
                    {props.description}
                </div>
            </div>
            <button className={classes.btnList} onClick={addToPendingList}>
                Add to pending list
            </button>
            <button
                className={classes.btnList}
                onClick={addToAlreadyReadHandler}
            >
                Already had read
            </button>
        </li>
    );
};

export default BookItem;
