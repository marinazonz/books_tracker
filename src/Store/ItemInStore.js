import classes from "./ItemInStore.module.css";

const ItemInStore = (props) => {
    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{props.name}</h3>
                <div className={classes.bookAuthor}>{props.author}</div>
                <div className={classes.bookDescription}>
                    {props.description}
                </div>
            </div>
        </li>
    );
};

export default ItemInStore;
