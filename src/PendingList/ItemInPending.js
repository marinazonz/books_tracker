import { useDispatch } from "react-redux";
import { optionsActions } from "../storeRedux/options-slice";
import { pendingActions } from "../storeRedux/options-slice-pending";
import { inProcessActions } from "../storeRedux/options-slice-inprocess";

const ItemInPending = (props) => {
    const dispatch = useDispatch();

    const { id, title, author, description } = props.item;

    const moveInProcessHandler = () => {
        dispatch(
            inProcessActions.addItemToInProcessList({
                id,
                title,
                author,
                description,
            })
        );
        dispatch(pendingActions.removeItemFromPendingList(id));
    };

    const moveToHadReadHandler = () => {
        dispatch(
            optionsActions.addItemToList({ id, title, author, description })
        );
        dispatch(pendingActions.removeItemFromPendingList(id));
    };

    return (
        <li className='flex flex-row mb-8 rounded-md bg-orange-100 md:justify-center md:text-center'>
            <div className='flex flex-col justify-between my-3  w-11/12'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <div className='text-base italic'>{author}</div>
                <div className='hidden md:inline-block'>{description}</div>
            </div>
            <div className='flex flex-col justify-around  text-base ml-6'>
                <button
                    className='rounded-md bg-orange-400 my-1'
                    onClick={moveInProcessHandler}
                >
                    In process
                </button>
                <button
                    className='rounded-md bg-orange-400 my-1'
                    onClick={moveToHadReadHandler}
                >
                    Already had read
                </button>
            </div>
        </li>
    );
};

export default ItemInPending;
