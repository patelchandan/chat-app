import React, { useState,useEffect} from 'react'
import './App.css';
import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';
function App() {
  const [ input, setInput ] = useState('');
  const [ message, setMessage ] = useState([]);

  const [ username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    })

  }, [])

  useEffect(() =>{
  setUsername(prompt("please enter your usename"))
  },[])
 

  const sendMessage = (event) =>{
    event.preventDefault();
   db.collection('messages').add({
     message:input,
     username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })


  setInput('')
  }

  return (
    <div className="App">
      <form className='app__form'>
   <FormControl className="app__formControl">
  <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
  <IconButton className="app__iconButton" disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessage}>
  <SendIcon />
  </IconButton>
  </FormControl>
      </form>

      <FlipMove>
     {
     message.map(({id,message }) => (
       <Message key={id} username={username} message={message} />
      
     ))
     }
     </FlipMove>
    </div>
  );
}

export default App;
