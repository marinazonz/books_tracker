import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "./storeRedux/ui-slice";

import Header from "./Header/Header";
import BookList from "./BookList/BookList";
import HadRead from "./Store/HadRead";

function App(props) {
    const dispatch = useDispatch();

    const hideModalHandler = () => {
        dispatch(uiActions.toggle());
    };

    const showModalHandler = () => {
        dispatch(uiActions.toggle());
    };

    const ModalIsShown = useSelector((state) => state.ui.pageIsVisible);

    return (
        <>
            {ModalIsShown && <HadRead onClose={hideModalHandler} />}
            <Header onShowHadRead={showModalHandler} />
            <main>
                <BookList />
            </main>
        </>
    );
}

export default App;
