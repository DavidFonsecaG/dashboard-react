import React from "react";
import EmailMenu from "../components/email/EmailMenu";
import ItemsSection from "../components/email/ItemsSection";

const EmailPage = () => {
  return (
    <>
      <div className="flex-col overflow-hidden h-full">
        <div className="flex w-full h-full max-h-[800px] items-stretch flex-row">
          {/* Side menu */}
          <EmailMenu />

          {/* items section */}
          <ItemsSection />

          {/* Resize handler */}
          <div
            className="relative flex w-px items-center justify-center bg-gray-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]>div]:rotate-90"
            data-panel-group-direction="horizontal"
            data-panel-group-id=":r12:"
            data-panel-resize-handle-enabled="true"
            data-panel-resize-handle-id=":r1a:"
            role="separator"
            tabindex="0"
            aria-valuemax="75"
            aria-valuemin="80"
            aria-valuenow="40"
            aria-controls="data-panel-id-:r16:"
            style={{
              cursor: "ew-resize",
              touchAction: "none",
              userSelect: "none",
            }}
          >
            <div className="hidden md:flex z-10 h-4 w-3 items-center justify-center rounded-sm border bg-gray-200">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5"
              >
                <path
                  d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {/* show section */}
          <div
            className="hidden md:flex"
            data-panel=""
            data-panel-id=":r1b:"
            data-panel-size="40.0"
            id="data-panel-id-:r1b:"
            style={{ flex: "40 1 0px", overflow: "hidden" }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center p-2">
                <div className="flex items-center gap-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-archive h-4 w-4"
                    >
                      <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                      <path d="M10 12h4"></path>
                    </svg>
                    <span className="sr-only">Archive</span>
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-archive-x h-4 w-4"
                    >
                      <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                      <path d="m9.5 17 5-5"></path>
                      <path d="m9.5 12 5 5"></path>
                    </svg>
                    <span className="sr-only">Move to junk</span>
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-trash2 h-4 w-4"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                    <span className="sr-only">Move to trash</span>
                  </button>
                  <div
                    data-orientation="vertical"
                    role="none"
                    className="shrink-0 bg-gray-200 w-[1px] mx-1 h-6"
                  ></div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r1g:"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-clock h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="sr-only">Snooze</span>
                  </button>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-reply h-4 w-4"
                    >
                      <polyline points="9 17 4 12 9 7"></polyline>
                      <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    <span className="sr-only">Reply</span>
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-reply-all h-4 w-4"
                    >
                      <polyline points="7 17 2 12 7 7"></polyline>
                      <polyline points="12 17 7 12 12 7"></polyline>
                      <path d="M22 18v-2a4 4 0 0 0-4-4H7"></path>
                    </svg>
                    <span className="sr-only">Reply all</span>
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-forward h-4 w-4"
                    >
                      <polyline points="15 17 20 12 15 7"></polyline>
                      <path d="M4 18v-2a4 4 0 0 1 4-4h12"></path>
                    </svg>
                    <span className="sr-only">Forward</span>
                  </button>
                </div>
                <div
                  data-orientation="vertical"
                  role="none"
                  className="shrink-0 bg-gray-200 w-[1px] mx-2 h-6"
                ></div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  type="button"
                  id="radix-:r1k:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-ellipsis-vertical h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                  <span className="sr-only">More</span>
                </button>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-gray-200 h-[1px] w-full"
              ></div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start p-4">
                  <div className="flex items-start gap-4 text-sm">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        WS
                      </span>
                    </span>
                    <div className="grid gap-1">
                      <div className="font-semibold">William Smith</div>
                      <div className="line-clamp-1 text-xs">
                        Meeting Tomorrow
                      </div>
                      <div className="line-clamp-1 text-xs">
                        <span className="font-medium">Reply-To:</span>{" "}
                        williamsmith@example.com
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    Oct 22, 2023, 9:00:00 AM
                  </div>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-gray-200 h-[1px] w-full"
                ></div>
                <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                  Hi, let's have a meeting tomorrow to discuss the project. I've
                  been reviewing the project details and have some ideas I'd
                  like to share. It's crucial that we align on our next steps to
                  ensure the project's success. Please come prepared with any
                  questions or insights you may have. Looking forward to our
                  meeting! Best regards, William
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-gray-200 h-[1px] w-full mt-auto"
                ></div>
                <div className="p-4">
                  <form>
                    <div className="grid gap-4">
                      <textarea
                        className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 p-4"
                        placeholder="Reply William Smith..."
                      ></textarea>
                      <div className="flex items-center">
                        <label
                          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-xs font-normal"
                          for="mute"
                        >
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                            id="mute"
                            aria-label="Mute thread"
                          >
                            <span
                              data-state="unchecked"
                              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                            ></span>
                          </button>
                          <input
                            aria-hidden="true"
                            tabindex="-1"
                            type="checkbox"
                            value="on"
                            style={{
                              transform: "translateX(-100%)",
                              position: "absolute",
                              pointerEvents: "none",
                              opacity: 0,
                              margin: "0px",
                              width: "36px",
                              height: "20px",
                            }}
                          />{" "}
                          Mute this thread
                        </label>
                        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs ml-auto">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPage;
