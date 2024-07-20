import { Link } from "react-router-dom";

const Logo = ({ color }) => {

  return (
    <div className="flex-shrink-0">
        {/* <img
        alt="Your Company"
        src={`https://tailwindui.com/img/logos/mark.svg?color=${color}`}
        className="h-8 w-8"
        /> */}
        <Link to={"/"}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={ color } 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2 h-6 w-6">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
        </Link>
    </div>
  );
}

export default Logo;
