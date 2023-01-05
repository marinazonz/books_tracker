import { useDispatch, useSelector } from "react-redux";

import { optionsActions } from "../storeRedux/options-slice";

import classes from "./BookItem.module.css";

const BookItem = (props) => {
    const dispatch = useDispatch();
    const alreadyReadQuantityInStorage = useSelector(
        (state) => state.list.isInLocalstorage
    );

    const { id, title, author, description } = props;

    const addToAlreadyReadHandler = () => {
        dispatch(
            optionsActions.addItemToList({ id, title, author, description })
        );
        console.log(alreadyReadQuantityInStorage);
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
            <button className={classes.btnList}>Add to pending list</button>
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
