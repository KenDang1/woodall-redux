import{useSelector} from 'react-redux';

function MushroomList () {
    // Grab the list of mushrooms from the redux store 
    const mushrooms = useSelector(store => store.mushrooms);

    return (
        <>
            <h3>Mushroom List</h3>

            {mushrooms.map(mushy => (
                <li key={mushy}> {mushy} </li>
            ))}
        </>
    )
}

export default MushroomList;