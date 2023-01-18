const ItemInStore = (props) => {
    const { title, author, description } = props.item;

    return (
        <li className='flex flex-row mb-8 rounded-md bg-orange-100 md:justify-center  md:text-center'>
            <div className='flex flex-col justify-between my-3  w-11/12'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <div className='text-base italic'>{author}</div>
                <div className='hidden md:inline-block'>{description}</div>
            </div>
        </li>
    );
};

export default ItemInStore;
