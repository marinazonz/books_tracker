import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "./storeRedux/ui-slice";

import Header from "./Header/Header";
import BookList from "./BookList/BookList";
import HadRead from "./HadReadList/HadRead";
import Pending from "./PendingList/Pending";

function App(props) {
    const dispatch = useDispatch();

    //Had Read
    const showModalHandler = () => {
        dispatch(uiActions.toggle());
    };
    const hideModalHandler = () => {
        dispatch(uiActions.toggle());
    };

    //Pending List
    const showPendingModalHandler = () => {
        dispatch(uiActions.toggleForPendingList());
    };
    const hideModalForPendingList = () => {
        dispatch(uiActions.toggleForPendingList());
    };

    const ModalIsShown = useSelector((state) => state.ui.pageIsVisible);
    const ModalForPendingIsShown = useSelector(
        (state) => state.ui.pagePendingIsVisible
    );

    return (
        <>
            {ModalIsShown && <HadRead onClose={hideModalHandler} />}
            {ModalForPendingIsShown && (
                <Pending onClosePending={hideModalForPendingList} />
            )}
            <Header
                onShowHadRead={showModalHandler}
                onShowPendingList={showPendingModalHandler}
            />
            <main>
                <BookList />
            </main>
        </>
    );
}

export default App;
