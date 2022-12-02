import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import Header from '../../components/header';
import './messenger.css';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState([null]);
  const [messages, setMessages] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    const getConversations = async () => {
      try {
        if (user && user._id) {
          const res = await axios.get(`/api/conversations/${user._id}`);
          setConversations(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (currentChat._id) {
          console.log(currentChat._id);
          const res = await axios.get('/api/messages/' + currentChat._id);
          setMessages(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  console.log(messages);

  return (
    <>
      <Header />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWraper'>
            <input placeholder='Search for friends' className='chatMenuInput' />
            {conversations.map((c) => (
              <div onClick={(c) => setCurrentChat}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWraper'>
            {currentChat ? (
              <>
                <div className='chatBoxTop'>
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                </div>
                <div className='chatBoxBottom'>
                  <textarea
                    className='chatMessageInput'
                    placeholder='write something.......'
                  ></textarea>
                  <button className='chatSubmitButton'>Send</button>
                </div>
              </>
            ) : (
              <span className='noConversationText'>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWraper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
