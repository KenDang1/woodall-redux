import {useState} from 'react'
import {useDispatch} from 'react-redux';

function MushroomForm () {
    const [mushroomName, setMushroomName] = useState('');
    const dispatch = useDispatch();

    const onAddMushroom = (evt) => {
        evt.preventDefault();

        console.log('Adding a mushroom', mushroomName);
        
        // announce my intentions
        // to add a mushroom
        dispatch ({
            type: 'ADD_MUSHROOM',
            // payload is any data
            // that I want to send with me action
            payload: mushroomName
        })
    }
    
    
    return (
        <>
            <h3>Add a mushroom 🍄</h3>
            <form onSubmit={onAddMushroom}>
            <input
                type="text"
                value={mushroomName}
                onChange={evt => setMushroomName(evt.target.value)}
            />
            <button>Add 🍄</button>
            </form>
        </>
    )
}

export default MushroomForm;