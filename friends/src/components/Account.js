import React from 'react'
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData, postData, deleteData, putData } from '../actions';

import AddFriend from './AddFriend';
import Smurfs from './Smurfs';
import Loading from './Loading';

import styled from 'styled-components';

const AccountDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  width: 99%;
  height: 99%;
  form{
    margin: 15px;
  }
`
const FormDiv = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
  #getsmurfed{
      width: 100px;
  }
`

const SmurfDiv = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    /* position: absolute; */
    /* margin-top: 350px; */
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
    <AccountDiv>
      <FormDiv>
        <AddFriend postFriend={postFriend} />
        {isLoading ? <Loading /> : <>
        {!dataLoaded && 
        <button id='getsmurfed' onClick={() => dispatch(getData())}>Smurf it up!</button>}</> }
      </FormDiv>
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
    </AccountDiv>
    )
}

export default Account