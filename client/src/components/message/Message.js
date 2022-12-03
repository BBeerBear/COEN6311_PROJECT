import "./message.css";
import { format } from "timeago.js";

export default function Message({message, own}){
    return(
        <div className={own ? "message own": "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg"
                    alt=""
                />
                <p className="messageText">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}