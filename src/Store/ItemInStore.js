import classes from "./ItemInStore.module.css";

const ItemInStore = (props) => {
    const { title, author, description } = props.item;

    return (
        <li>
            <div className={classes.bookItem}>
                <h3>{title}</h3>
                <div className={classes.bookAuthor}>{author}</div>
                <div className={classes.bookDescription}>{description}</div>
            </div>
        </li>
    );
};

export default ItemInStore;
