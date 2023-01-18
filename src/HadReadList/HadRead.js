import { useSelector } from "react-redux";

import Modal from "../UI/Modal";
import ItemInStore from "./ItemInStore";

const HadRead = (props) => {
    const hadReadItems = useSelector((state) => state.list.items);

    return (
        <Modal onClose={props.onClose}>
            <section className='flex flex-col h-96  overflow-auto'>
                <ul className='grid'>
                    {hadReadItems.map((item) => (
                        <ItemInStore
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
                    onClick={props.onClose}
                >
                    Close
                </button>
            </section>
        </Modal>
    );
};

export default HadRead;
