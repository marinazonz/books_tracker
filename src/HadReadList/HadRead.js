import { useSelector } from "react-redux";

import Modal from "../UI/Modal";
import ItemInStore from "./ItemInStore";

import classes from "./HadRead.module.css";

const HadRead = (props) => {
    const hadReadItems = useSelector((state) => state.list.items);

    return (
        <Modal onClose={props.onClose}>
            <section className='w-full'>
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
                <button className='' onClick={props.onClose}>
                    Close
                </button>
            </section>
        </Modal>
    );
};

export default HadRead;
