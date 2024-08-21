import { Link, useLocation } from "react-router-dom";
import classNames from "../../utilities/classNames";

const NavMenu = ({ menu, isSidebarOpen }) => {
  const location = useLocation().pathname;

  return (
    <nav className="grid gap-1 px-2">
      {/* Inbox */}
      {menu.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className={classNames(
            location === item.to
              ? "bg-gray-900 text-white hover:opacity-90"
              : "hover:bg-gray-100",
            `relative group/item flex inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-2.5 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white`
          )}
          aria-current={location === item.to ? "page" : undefined}
        >
          <item.icon className="h-4 w-4 stroke-2" />
          {isSidebarOpen && (
            <>
              <span className="ml-2 dark:text-white">{item.name}</span>
              <span className="ml-auto dark:text-white">{item.count}</span>
            </>
          )}
          <div
            className={
              isSidebarOpen
                ? "hidden"
                : "absolute left-11 bg-gray-900 text-xs font-normal text-white p-1 px-2 rounded invisible z-50 group-hover/item:visible group-focus/item:invisible transition-opacity"
            }
          >
            {item.name}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
