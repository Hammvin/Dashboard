import { FaTh, FaUserAlt} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {AiFillSignal, AiOutlineCalculator, AiOutlineClose, AiOutlineFileDone} from 'react-icons/ai';
import {GrPieChart} from 'react-icons/gr';


export const SidebarList = [
    {
      path: "/",
      name:"Dashbord",
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      path: "/reports",
      name:"Reports",
      icon: <AiFillSignal/>,
      cName: 'nav-text'
    },
    {
      path: "/analytics",
      name:"Analytics",
      icon: <GrPieChart />,
      cName: 'nav-text'
    },
    {
      path: "/users",
      name:"Users",
      icon: <FaUserAlt />,
      cName: 'nav-text'
    },
    {
      path: "/accounts",
      name:"Accounts",
      icon: <AiOutlineCalculator />,
      cName: 'nav-text'
    },
    {
      path: "/settings",
      name:"Settings",
      icon: <FiSettings />,
      cName: 'nav-text'
    }
  ]