import { useSelector } from "react-redux";

import ItemInProcess from "./ItemInProcess";
import Modal from "../UI/Modal";

const InProcess = (props) => {
    const inProcessList = useSelector((state) => state.inProcesslist.items);
    return (
        <Modal onClose={props.onCloseInProcess}>
            <section className='flex flex-col h-96  overflow-auto'>
                <ul className=''>
                    {inProcessList.map((item) => (
                        <ItemInProcess
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
                    onClick={props.onCloseInProcess}
                >
                    Close
                </button>
            </section>
        </Modal>
    );
};

export default InProcess;
