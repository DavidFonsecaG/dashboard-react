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

const ItemsSection = () => {
  return (
    <>
      <div
        className="h-full"
        data-panel=""
        data-panel-id=":r16:"
        data-panel-size="40.0"
        id="data-panel-id-:r16:"
        style={{ flex: "40 1 0px", overflow: "hidden" }}
      >
        <div
          className="flex flex-col h-full"
          dir="ltr"
          data-orientation="horizontal"
        >
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Inbox</h1>
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground ml-auto"
              tabindex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:r17:-content-all"
                data-state="active"
                id="radix-:r17:-trigger-all"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-zinc-600 dark:text-zinc-200"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                All mail
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r17:-content-unread"
                data-state="inactive"
                id="radix-:r17:-trigger-unread"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-zinc-600 dark:text-zinc-200"
                tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Unread
              </button>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-gray-200 h-[1px] w-full"
          ></div>
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
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
                  className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r17:-trigger-all"
            id="radix-:r17:-content-all"
            tabindex="0"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 m-0 flex-1"
            style={{ animationDuration: "0s" }}
          >
            <div
              dir="ltr"
              className="relative h-full"
              style={{
                position: "relative",
                "--radix-scroll-area-corner-width": "0px",
                "--radix-scroll-area-corner-height": "0px",
              }}
            >
              {/* <style>[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}</style> */}
              <div
                data-radix-scroll-area-viewport=""
                className=" h-full w-full rounded-[inherit]"
              >
                <div
                  className="h-full"
                  style={{ minWidth: "100%", display: "table" }}
                >
                  <div className="flex flex-col gap-2 p-4 pt-0 h-full overflow-auto scrollbar-thin">
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">William Smith</div>
                          </div>
                          <div className="ml-auto text-xs text-foreground">
                            9 months ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Meeting Tomorrow
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Hi, let's have a meeting tomorrow to discuss the
                        project. I've been reviewing the project details and
                        have some ideas I'd like to share. It's crucial that we
                        align on our next steps to ensure the project's success.
                        Please come prepared with any questions or insights you
                        may have. Looking forward to
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          important
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Alice Smith</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            9 months ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Project Update
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Thank you for the project update. It looks great! I've
                        gone through the report, and the progress is impressive.
                        The team has done a fantastic job, and I appreciate the
                        hard work everyone has put in. I have a few minor
                        suggestions that I'll include in the attached document.
                        Let's discuss these duri
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          important
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Bob Johnson</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">Weekend Plans</div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Any plans for the weekend? I was thinking of going
                        hiking in the nearby mountains. It's been a while since
                        we had some outdoor fun. If you're interested, let me
                        know, and we can plan the details. It'll be a great way
                        to unwind and enjoy nature. Looking forward to your
                        response! Best, Bob
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                          personal
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Emily Davis</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Question about Budget
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I have a question about the budget for the upcoming
                        project. It seems like there's a discrepancy in the
                        allocation of resources. I've reviewed the budget report
                        and identified a few areas where we might be able to
                        optimize our spending without compromising the project's
                        quality. I've attached a de
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          budget
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Michael Wilson</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Important Announcement
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I have an important announcement to make during our team
                        meeting. It pertains to a strategic shift in our
                        approach to the upcoming product launch. We've received
                        valuable feedback from our beta testers, and I believe
                        it's time to make some adjustments to better meet our
                        customers' needs. This chang
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          important
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Sarah Brown</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Feedback on Proposal
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Thank you for your feedback on the proposal. It looks
                        great! I'm pleased to hear that you found it promising.
                        The team worked diligently to address all the key points
                        you raised, and I believe we now have a strong
                        foundation for the project. I've attached the revised
                        proposal for your review. Plea
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">David Lee</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          New Project Idea
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I have an exciting new project idea to discuss with you.
                        It involves expanding our services to target a niche
                        market that has shown considerable growth in recent
                        months. I've prepared a detailed proposal outlining the
                        potential benefits and the strategy for execution. This
                        project has the potentia
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          important
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Olivia Wilson</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Vacation Plans
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Let's plan our vacation for next month. What do you
                        think? I've been thinking of visiting a tropical
                        paradise, and I've put together some destination
                        options. I believe it's time for us to unwind and
                        recharge. Please take a look at the options and let me
                        know your preferences. We can start making{" "}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                          personal
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">James Martin</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Conference Registration
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I've completed the registration for the conference next
                        month. The event promises to be a great networking
                        opportunity, and I'm looking forward to attending the
                        various sessions and connecting with industry experts.
                        I've also attached the conference schedule for your
                        reference. If there are any sp
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          conference
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Sophia White</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">Team Dinner</div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Let's have a team dinner next week to celebrate our
                        success. We've achieved some significant milestones, and
                        it's time to acknowledge our hard work and dedication.
                        I've made reservations at a lovely restaurant, and I'm
                        sure it'll be an enjoyable evening. Please confirm your
                        availability and any di
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Daniel Johnson</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            over 1 year ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Feedback Request
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I'd like your feedback on the latest project
                        deliverables. We've made significant progress, and I
                        value your input to ensure we're on the right track.
                        I've attached the deliverables for your review, and I'm
                        particularly interested in any areas where you think we
                        can further enhance the quality or e
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Ava Taylor</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Meeting Agenda
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Here's the agenda for our meeting next week. I've
                        included all the topics we need to cover, as well as
                        time allocations for each. If you have any additional
                        items to discuss or any specific points to address,
                        please let me know, and we can integrate them into the
                        agenda. It's essential that our me
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              William Anderson
                            </div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Product Launch Update
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        The product launch is on track. I'll provide an update
                        during our call. We've made substantial progress in the
                        development and marketing of our new product. I'm
                        excited to share the latest updates with you during our
                        upcoming call. It's crucial that we coordinate our
                        efforts to ensure a successful{" "}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          important
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Mia Harris</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Travel Itinerary
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        I've received the travel itinerary. It looks great!
                        Thank you for your prompt assistance in arranging the
                        details. I've reviewed the schedule and the
                        accommodations, and everything seems to be in order. I'm
                        looking forward to the trip, and I'm confident it'll be
                        a smooth and enjoyable experience. I
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                          personal
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          travel
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Ethan Clark</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Team Building Event
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Let's plan a team-building event for our department.
                        Team cohesion and morale are vital to our success, and I
                        believe a well-organized team-building event can be
                        incredibly beneficial. I've done some research and have
                        a few ideas for fun and engaging activities. Please let
                        me know your thoughts and
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          meeting
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Chloe Hall</div>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          Re: Budget Approval
                        </div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        The budget has been approved. We can proceed with the
                        project. I'm delighted to inform you that our budget
                        proposal has received the green light from the finance
                        department. This is a significant milestone, and it
                        means we can move forward with the project as planned.
                        I've attached the finalized bu
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                          work
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          budget
                        </div>
                      </div>
                    </button>
                    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Samuel Turner</div>
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                          </div>
                          <div className="ml-auto text-xs text-muted-foreground">
                            almost 2 years ago
                          </div>
                        </div>
                        <div className="text-xs font-medium">Weekend Hike</div>
                      </div>
                      <div className="line-clamp-2 text-xs text-muted-foreground">
                        Who's up for a weekend hike in the mountains? I've been
                        craving some outdoor adventure, and a hike in the
                        mountains sounds like the perfect escape. If you're up
                        for the challenge, we can explore some scenic trails and
                        enjoy the beauty of nature. I've done some research and
                        have a few routes in mind
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                          personal
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r17:-trigger-unread"
            hidden=""
            id="radix-:r17:-content-unread"
            tabindex="0"
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 m-0"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ItemsSection;
