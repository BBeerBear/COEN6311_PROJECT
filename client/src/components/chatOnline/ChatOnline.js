import "./chatOnline.css"

export default function ChatOnline(){
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                        className="chatOnlineImg"
                        src="https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg" 
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}