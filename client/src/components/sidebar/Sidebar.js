import React from "react";
import "./Sidebar.module.css";
import {SidebarData} from "./SidebarData";
import { FileDownload } from "@mui/icons-material";

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
                {SidebarData.map((val,key)=>{
                  return (
                    <li key={key} onClick={()=>{window.location.pathname = val.link}}
                    startIcon={<FileDownload />}>
                        {" "}
                        <div>{val.icon}</div>
                        <div>
                            {val.title }
                        </div>
                        </li>
                  );
                })}
            </ul>
        </div>
    );
}
export default Sidebar;