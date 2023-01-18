import { useSelector } from "react-redux";

import ItemInPending from "../PendingList/ItemInPending";
import Modal from "../UI/Modal";

const Pending = (props) => {
    const pendingList = useSelector((state) => state.pendinglist.items);
    return (
        <Modal onClose={props.onClose}>
            <section className='flex flex-col h-96  overflow-auto'>
                <ul className=''>
                    {pendingList.map((item) => (
                        <ItemInPending
                            key={item.id}
                            item={{
                                id: item.id,
                                title: item.title,
                                author: item.author,
                                description: item.description,
                            }}
                        />
                    ))}
                </ul>
                <button
                    className='text-xl rounded-md bg-orange-400 w-1/3 font-semibold fixed top-full left-2/3 right-0'
                    onClick={props.onClosePending}
                >
                    Close
                </button>
            </section>
        </Modal>
    );
};

export default Pending;
