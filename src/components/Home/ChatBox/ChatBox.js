import React, { useEffect, useRef, useState } from 'react'
import Chat from './Chat/Chat'
import style from "./ChatBox.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { getMessageFromStorage, setMessageToStorage } from '../../Custom/Custom'
import { Col, Container, Row } from 'react-bootstrap'

const ChatBox = () => {
    const [message, setMessage] = useState([]);
    const userMessageRef = useRef();
    const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
    const handleSendMessage = (event)=>{
        event.preventDefault();
        const userSendMessage = userMessageRef.current.value;
        setMessage(prevMessage => {
            const updatedMessage = [...prevMessage, {
                id:prevMessage.length,
                userMessage: userSendMessage,
                chatbotMessage: userSendMessage
            }];
            setMessageToStorage(updatedMessage);
            return updatedMessage;
        });
        userMessageRef.current.value = "";
    }
    useEffect(()=>{
        const gottenMessage = getMessageFromStorage();
        if(gottenMessage){
            setMessage(gottenMessage);
        }
    },[])
  return (
   <>
   <Container className="mt-4">
    <Row className="row justify-content-center align-items-center">
        <Col md={6} sm={12} className={style.chatBox}>
            <div>
            <div>
                <h2 className='text-center mb-4'>Chat application</h2>
                <div className={style.chatShowBox}>
                   {
                       !message.length ? <p className='p-2 text-center'>There has not any conversation to show!</p> :
                       
                        message.map(msg => <Chat key={msg.id} msg={msg}/>)
                    
                   }
                </div>
            </div>
           <form onSubmit={handleSendMessage}>
               <div className='d-flex'>
                    <input type="text" style={{width:"75%"}} ref={userMessageRef}  className='form-control' />
                    <button style={{width:"25%"}} className='btn btn-success' type="submit">Send {sendIcon}</button>
               </div>
           </form>
            </div>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default ChatBox