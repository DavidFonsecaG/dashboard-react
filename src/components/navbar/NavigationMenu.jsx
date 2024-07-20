import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import classNames from "../../utilities/classNames";

const NavigationMenu = ({navigation}) => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="hidden md:block">
            <div className="ml-6 flex items-baseline md:space-x-5 lg:space-x-8">
            {navigation.map((item) => ( 
                item.public ? 
                    <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900',
                            'text-sm font-medium',
                        )}
                    >
                        {item.name}
                    </Link>
                : user.role === "Admin" &&
                    <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900',
                            'text-sm font-medium',
                        )}
                    >
                        {item.name}
                    </Link>
            ))}
            </div>
        </div>
    );
  }
  
  export default NavigationMenu;
  