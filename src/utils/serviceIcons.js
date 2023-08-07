
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer, FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";

export const serviceIcons = (service) => {
    const serviceID = service.toLowerCase();
    switch (serviceID) {
        case 'web development and design':
            return <BiShoppingBag />;
        case 'mobile app development':
            return <BiPencil />;
        case 'database management':
            return <AiOutlineMail />;
        case 'api development':
            return <FaInternetExplorer />;
        case 'server configuration and deployment':
            return <FaChalkboardTeacher />;
        case 'version control':
            return <BsCodeSlash />;
        case 'testing and debugging':
            return <FaCameraRetro />;
        case 'continuous integration and deployment':
            return <FaPinterest />;
        case 'performance optimization':
            return <FaVideo />;
        case 'code development and review':
            return <BsClipboardData />;
        case 'project planning and management':
            return <FaTabletAlt />;
        case 'technical leadership':
            return <AiFillAudio />;
        // case 'blog posting':
        //     return <FaRegNewspaper />;

        // case 'web development and design':
        //     return <BsCodeSlash />;
        // case 'mobile app development':
        //     return <FaTabletAlt />;
        // case 'database management':
        //     return <FaDatabase />;
        // case 'api development':
        //     return <FaInternetExplorer />;
        // case 'server configuration and deployment':
        //     return <FaServer />;
        // case 'version control':
        //     return <BsCodeSlash />;
        // case 'testing and debugging':
        //     return <FaBug />;
        // case 'continuous integration and deployment':
        //     return <FaCodeBranch />;
        // case 'performance optimization':
        //     return <FaBox />;
        // case 'code development and review':
        //     return <FaRegFileCode />;
        // case 'project planning and management':
        //     return <FaProjectDiagram />;
        // case 'technical leadership':
        //     return <FaChalkboardTeacher />;
    }
}