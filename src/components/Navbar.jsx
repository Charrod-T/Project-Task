import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Website</Link>
        <ul>
            <li>
            <Link to= "/Task">Task</Link>
            </li>

            <li>
            <Link to= "/Complete">Complete</Link>
            </li>

            <li>
            <Link to= "/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
      
    
  );
};

export default Navbar;

