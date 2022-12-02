import "./conversation.css";
import axios from "axios";
import { useEffect, useReducer, useState } from 'react';
import { profileReducer } from '../../functions/reducers';

export default function Conversation({conversation ,currentUser}){
    const [user, setUser] = useState(null);
    const [{ profile }] = useReducer(profileReducer, {
        loading: false,
        profile: {},
        error: '',
      });
    useEffect(()=>{
       const friendId = conversation.members.find(m=>m !== currentUser._id);

       const getUser = async ()=>{
        try{
        const res = await axios("/users?:userId"+ friendId);
        setUser(res.data)
        }catch(err){
            console.log(err);
        }
       };
       getUser()
    },[currentUser, conversation]);

    return (
        <div className="conversation">
            <img 
                className="conversationImg" 
                src= {profile.picture}
                alt=""/>
            <span className="conversationName">{user.username}</span>
        </div>
    )
}