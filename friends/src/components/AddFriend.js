import React, {useState} from 'react';


const AddFriend = (props) => {

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChanges = e => {
        setNewFriend({...newFriend,[e.target.name]: e.target.value })
        // console.log(newSmurf)
    }

    const addFriend = e => {
        e.preventDefault();
        // console.log('add smurf!', newSmurf)
        props.postFriend(newFriend)
        setNewFriend({name: '',
        age: '',
        email: '',
        })
    }

    return(
        <form onSubmit={addFriend}>
            <input name='name' value={newFriend.name} placeholder='Name' onChange={handleChanges}/>
            <input name='age' value={newFriend.age} placeholder='Age' onChange={handleChanges}/>
            <input name='email' value={newFriend.email} placeholder='Email' onChange={handleChanges}/>
            <button type='submit'>Get Smurfed!</button>
        </form>
    )
}

export default AddFriend