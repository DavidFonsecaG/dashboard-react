import classNames from "../../utilities/classNames";

const NavigationMenu = ({navigation}) => {

    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline md:space-x-5 lg:space-x-8">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                    item.current ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900',
                    'text-sm font-medium',
                )}
                >
                {item.name}
                </a>
            ))}
            </div>
        </div>
    );
  }
  
  export default NavigationMenu;
  