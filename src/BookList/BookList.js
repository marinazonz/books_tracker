import BookItem from "./BookItem";

import classes from "./BookList.module.css";

const BOOKS = [
    {
        id: "b1",
        name: "Bioshock: Rapture",
        author: "John Shirley",
        description:
            "The prequel story to the award-winning and bestselling video game franchise. How the majesty of Rapture, the shining city below the sea, became an instant dystopia",
    },
    {
        id: "b2",
        name: "Jurassic Park: A Novel",
        author: "Michael Crichton",
        description:
            "#1 NEW YORK TIMES BESTSELLER From the author of Timeline, Sphere, and Congo, this is the classic thriller of science run amok that took the world by storm.",
    },

    {
        id: "b3",
        name: "Sphere",
        author: "Michael Crichton",
        description:
            "Sphere was made into a film directed by Barry Levinson, which starred Dustin Hoffman, Sharon Stone, and Samuel L. Jackson.",
    },
];

const BookList = (props) => {
    const list = BOOKS.map((book) => (
        <BookItem
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
            description={book.description}
        />
    ));

    return (
        <>
            <section className={classes.list}>
                <div>
                    <h2>Choose your book</h2>
                </div>
                <ul>{list}</ul>
            </section>
        </>
    );
};

export default BookList;
