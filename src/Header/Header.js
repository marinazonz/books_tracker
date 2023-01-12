import HeaderBtn from "./HeaderBtn";

import logo from "../pics/logo.png";

const Header = (props) => {
    return (
        <>
            <header className='flex fixed h-60 justify-start w-full border-b-2 border-slate-300 top-0 z-10 '>
                <div>
                    <img
                        className='rounded-full h-20 w-20 md:h-auto md:w-48 mx-auto'
                        src={logo}
                        alt='doggie'
                    />
                </div>
                <div>
                    <h1 className='mx-4 mb-8 w-2/5 text-left text-4xl font-bold'>
                        Welcome, You
                    </h1>
                    <HeaderBtn
                        onClick={props.onShowHadRead}
                        onClickPending={props.onShowPendingList}
                        onClickInProcess={props.onShowInProcessList}
                    />
                </div>
            </header>
        </>
    );
};

export default Header;
