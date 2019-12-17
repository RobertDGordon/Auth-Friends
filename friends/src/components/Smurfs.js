import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounceIn, tada} from 'react-animations'
import smurfimg from '../images'
// import props from ''

const bounceAnim = keyframes `${bounceIn}`
const tadaAnim = keyframes `${tada}`

const test = () =>{
    let random = Math.floor(Math.random() * (6000 - 800)) + 800;
    console.log(random)
    return random
}

const Card = styled.div`
    animation: ${()=> test()}ms ${bounceAnim};
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 80px;
    /* background-color: white; */
    border-radius: 5px;
    margin: 15px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    justify-content: center;
    align-items: center;
    div{
        text-align: center;
    }
    .edit{
        text-align: right;
        width: 90%;
        margin: 5px;
        &:hover{
            cursor: pointer;
        }
    }
    .info{
        /* border: 1px solid red; */
        margin-top: 150px;
        color: white;
        span{
            font-weight: bold;
        }
    }
    input{
        width: 120px;
        border: none;
        border-bottom: 1px solid black;
        background-color: rgba(0,0,0,.2);
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000;
    }
    img {
        margin-bottom: -150px;
        height: 150px;
        transition: all 300ms ease-in-out;
        &:hover{
            animation: 1s ${tadaAnim};
            /* transform: scale(1.2); */
        }
    }
`

const Smurfs = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: props.name,
        age: props.age,
        height: props.height,
        id: props.id
    })

    // console.log(smurfimg[props.id])

    const [ isEditing, setIsEditing ] = useState(false);

    const startEditing = (e) =>{
        e.preventDefault()
        setIsEditing(true)
        console.log('editing', isEditing)
    }

    const stopEditing = (e) =>{
        e.preventDefault()
        console.log('stop', isEditing)
        setIsEditing(false)
    }

    const handleChanges = e => {
        setNewSmurf({...newSmurf,[e.target.name]: e.target.value })
        // console.log(newSmurf)
    }

    const editSmurf = (e) =>{
        e.preventDefault();
        props.putSmurf(newSmurf)
        setIsEditing(false);
    }

    return(
        <Card>
            <div className='main'>
            <img src={smurfimg[props.id]} alt='Smurf' onClick={startEditing} />
            {!isEditing ? ( <>
                            <div className='info'>
                            <div><span>{props.name}</span></div>
                            <div><span>{props.age}</span>yrs old</div>
                            <div><span> {props.height}</span></div>
                            </div>
                            </>
            ) : (
                            <>
                            <div className='buttons'><div className='edit' onClick={stopEditing}>X</div></div>
                            <form onSubmit={editSmurf}>
                                <input name='name' value={newSmurf.name} onChange={handleChanges}/>
                                <input name='age' value={newSmurf.age} onChange={handleChanges}/>
                                <input name='height' value={newSmurf.height} onChange={handleChanges}/>
                                <button type='submit'>Get Smurfed!</button>
                                <button className='delete' onClick={(e) => props.deleteSmurf(props.id)}>Delete</button>
                            </form>
                            </>
            ) }
            </div>
        </Card>
    )
}

export default Smurfs