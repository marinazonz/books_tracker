import { useDispatch } from "react-redux";
import { optionsActions } from "../storeRedux/options-slice";
import { inProcessActions } from "../storeRedux/options-slice-inprocess";

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
        <li className='flex flex-row mb-8 rounded-md bg-orange-100 md:justify-center md:text-center'>
            <div className='flex flex-col justify-between my-3  w-11/12 '>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <div className='text-base italic'>{author}</div>
                <div className='hidden md:inline-block'>{description}</div>
                <div className='flex flex-col justify-around md:self-center text-base ml-6 md:w-40'>
                    <button
                        className='rounded-md bg-orange-400 my-1'
                        onClick={deleteItemFromInProcessHandler}
                    >
                        Delete from this list
                    </button>
                    <button
                        className='rounded-md bg-orange-400 my-1'
                        onClick={moveToHadReadHandler}
                    >
                        Finished reading
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ItemInProcess;
