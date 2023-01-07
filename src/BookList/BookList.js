import BookItem from "./BookItem";

import classes from "./BookList.module.css";

const BOOKS = [
    {
        id: "b1",
        title: "Bioshock: Rapture",
        author: "John Shirley",
        description:
            "The prequel story to the award-winning and bestselling video game franchise. How the majesty of Rapture, the shining city below the sea, became an instant dystopia",
    },
    {
        id: "b2",
        title: "Jurassic Park: A Novel",
        author: "Michael Crichton",
        description:
            "#1 NEW YORK TIMES BESTSELLER From the author of Timeline, Sphere, and Congo, this is the classic thriller of science run amok that took the world by storm.",
    },

    {
        id: "b3",
        title: "Sphere",
        author: "Michael Crichton",
        description:
            "Sphere was made into a film directed by Barry Levinson, which starred Dustin Hoffman, Sharon Stone, and Samuel L. Jackson.",
    },
    {
        id: "b4",
        title: "Harry Potter And The Philosopher'S Stone.",
        author: "J.K. Rowling",
        description:
            "An irresistible new edition of Harry Potter and the Philosopher's Stone created with ultra-talented designers MinaLima, the design magicians behind the gorgeous visual graphic style of the Harry Potter and Fantastic Beasts films.",
    },
    {
        id: "b5",
        title: "HARRY POTTER & CHAMBER OF SECRETS",
        author: "J.K. Rowling",
        description:
            "A stunning new edition of J.K. Rowling's Harry Potter and the Chamber of Secrets, with beautiful full color illustrations and eight interactive paper craft elements featuring the Whomping Willow, the Weasleys' Burrow, and more.",
    },
];

const BookList = (props) => {
    const list = BOOKS.map((book) => (
        <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
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
