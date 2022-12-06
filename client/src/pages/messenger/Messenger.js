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
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const userId = user._id;
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/api/conversations/${user._id}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/` + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post('/api/messages', message);
      setMessages([...messages, res.data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWraper'>
            {/* <input placeholder='Search for friends' className='chatMenuInput' /> */}
            {conversations.map((c, i) => (
              <div
                key={i}
                onClick={() => {
                  setCurrentChat(c);
                }}
              >
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
                  {messages.map((m, i) => (
                    <Message
                      key={i}
                      message={m}
                      own={m.sender === user?._id}
                      currentUser={user}
                    />
                  ))}
                </div>
                <div className='chatBoxBottom'>
                  <textarea
                    className='chatMessageInput'
                    placeholder='write something.......'
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}></textarea>
                  <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                </div>
              </>
            ) : (
              <span className='noConversationText'>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        {/* <div className='chatOnline'>
          <div className='chatOnlineWraper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div> */}
      </div>
    </>
  );
}
