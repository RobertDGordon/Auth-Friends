import React from 'react'
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData, postData, deleteData, putData } from '../actions';

import AddFriend from './AddFriend';
import Smurfs from './Smurfs';

import styled from 'styled-components';

const MainDiv = styled.div`
  background-image: url('../img/smurfbg.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  #logo{
    width: 600px;
    margin-top: 10px;
  }
  form{
    margin: 15px;
  }
`
const SmurfDiv = styled.div`
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    /* position: absolute; */
    margin-top: 350px;
    justify-content: center;
`

function Account(props) {
  const dispatch = useDispatch();

  const { isLoading, error, data, dataLoaded } = useSelector(
    state => ({
      isLoading: state.isLoading,
      error: state.error,
      data: state.data,
      dataLoaded: state.dataLoaded
    }),
    shallowEqual
  );

  const postFriend = (newFriend) =>{
    console.log('to add', newFriend)
    dispatch(postData(newFriend))
  }

  const deleteFriend = (friendId) =>{
    // console.log(smurfId)
    dispatch(deleteData(friendId))
  }

  const putFriend = (newFriend) =>{
    // console.log(smurfId)
    dispatch(putData(newFriend))
  }

    return(
    <MainDiv>
      <img id='logo' src='../img/smurflogo.png' alt='Smurfs Logo' />
      <AddFriend postFriend={postFriend} />
      <button onClick={() => dispatch(getData())}>Smurf it up!</button>
      <SmurfDiv>
      {dataLoaded ? (
            <>
            {data.map(smurf => <Smurfs key={smurf.id} {...smurf} deleteSmurf={deleteFriend} putSmurf={putFriend}/>)}
            </>
      ) : (
            <>
            {error}
            </>
      ) }
      </SmurfDiv>
    </MainDiv>
    )
}

export default Account