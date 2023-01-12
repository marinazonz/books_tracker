import { useDispatch } from "react-redux";

import { optionsActions } from "../storeRedux/options-slice";
import { pendingActions } from "../storeRedux/options-slice-pending";

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
        <li className='grid gap-4 justify-items-end place-content-center mb-10 mt-5 ml-5 bg-emerald-200 rounded-lg'>
            <div className='flex flex-col text-left ml-2'>
                <h3 className='font-semibold text-lg'>{props.title}</h3>
                <div className='italic'>{props.author}</div>
                <div>{props.description}</div>
            </div>
            <button
                className='font-semibold rounded bg-orange-500 w-50 px-2'
                onClick={addToPendingList}
            >
                Add to pending list
            </button>
            <button
                className='font-semibold rounded bg-orange-500 w-50 px-2'
                onClick={addToAlreadyReadHandler}
            >
                Already had read
            </button>
        </li>
    );
};

export default BookItem;
