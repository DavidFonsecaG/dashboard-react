import { useState } from "react";
import {
  EnvelopeIcon,
  ChevronDownIcon,
  InboxIcon,
  DocumentIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon,
  ArchiveBoxIcon,
  PaperAirplaneIcon,
  UsersIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
  ReceiptPercentIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import NavMenu from "./NavMenu";
import classNames from "../../utilities/classNames";

const EmailMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    { name: "Inbox", count: "128", icon: InboxIcon, to: "/email" },
    { name: "Sent", count: "", icon: PaperAirplaneIcon, to: "/email/sent" },
    { name: "Drafts", count: "9", icon: DocumentIcon, to: "/email/drafts" },
    { name: "Junk", count: "23", icon: ArchiveBoxXMarkIcon, to: "/email/junk" },
    { name: "Trash", count: "", icon: TrashIcon, to: "/email/trash" },
    { name: "Archive", count: "", icon: ArchiveBoxIcon, to: "/email/archive" },
  ];
  const menuFilters = [
    {
      name: "Social",
      count: "972",
      icon: UsersIcon,
      to: "/email/inbox?status=social",
      status: "social",
    },
    {
      name: "Updates",
      count: "342",
      icon: ExclamationCircleIcon,
      to: "/email/inbox?status=updates",
      status: "updates",
    },
    {
      name: "Forums",
      count: "128",
      icon: ChatBubbleLeftRightIcon,
      to: "/email/inbox?status=forums",
      status: "forums",
    },
    {
      name: "Shopping",
      count: "8",
      icon: ShoppingCartIcon,
      to: "/email/inbox?status=shopping",
      status: "shopping",
    },
    {
      name: "Promotions",
      count: "21",
      icon: ReceiptPercentIcon,
      to: "/email/inbox?status=promotions",
      status: "promotions",
    },
  ];

  const handleSidebarOpen = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Menu */}
      <div className={isSidebarOpen && "md:w-48 lg:w-72"}>
        {/* Account Button */}
        <div className="flex h-[52px] items-center justify-center px-2">
          <button
            type="button"
            role="combobox"
            className={classNames(
              isSidebarOpen ? "justify-between " : "justify-center",
              "h-9 w-full whitespace-nowrap rounded-md border border-input bg-transparent px-2.5 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-2"
            )}
            aria-label="Select account"
          >
            <span className="pointer-events-none flex">
              <EnvelopeIcon className="h-4 w-4 stroke-2" />
              {isSidebarOpen && <span className="ml-2">Alicia Koch</span>}
            </span>
            {isSidebarOpen && <ChevronDownIcon className="h-2 w-2" />}
          </button>
        </div>

        {/* Border */}
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-200 h-[1px] w-full"
        ></div>

        {/* Menu */}
        <div data-collapsed="false" className="group flex flex-col gap-4 py-2">
          <NavMenu menu={menuItems} isSidebarOpen={isSidebarOpen} />
        </div>

        {/* Border */}
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-200 h-[1px] w-full"
        ></div>

        {/* Filter Menu */}
        <div
          data-collapsed="false"
          className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
          <NavMenu menu={menuFilters} isSidebarOpen={isSidebarOpen} />
        </div>
      </div>

      {/* Handle Resizable */}
      <div className="relative flex w-px items-center justify-center bg-gray-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]>div]:rotate-90">
        <div
          className="hidden md:flex z-10 h-4 w-3 items-center rounded-sm border bg-gray-200"
          onClick={handleSidebarOpen}
        >
          {isSidebarOpen ? (
            <ChevronLeftIcon className="h-2.5 w-2.5" />
          ) : (
            <ChevronRightIcon className="h-2.5 w-2.5" />
          )}
        </div>
      </div>
    </>
  );
};

export default EmailMenu;
