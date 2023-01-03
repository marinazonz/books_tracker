import classes from "./BookItem.module.css";

const BookItem = (props) => {
    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{props.name}</h3>
                <div className={classes.bookAuthor}>{props.author}</div>
                <div className={classes.bookDescription}>
                    {props.description}
                </div>
            </div>
            <button className={classes.btnList}>Add to pending list</button>
        </li>
    );
};

export default BookItem;
