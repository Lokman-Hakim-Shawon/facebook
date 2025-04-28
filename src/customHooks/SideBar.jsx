import { Link } from "react-router-dom";
import useSideBar from "./useSideBar";

const SideBar = (data) => {
    const {routingData}=useSideBar(data)
    
    return (
        <div className="flex flex-col text-white lg:text-xl h-full">
            {
                routingData.map((item,index)=>(
                    <Link to={item.path} key={index} className=" border-b-2 pl-8 py-2 rounded-xl hover:bg-secondary">{item.name}</Link>
                ))
            }
        </div>
    );
};

export default SideBar;