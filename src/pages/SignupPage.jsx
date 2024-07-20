import { Link } from "react-router-dom";
import Logo from "../components/navbar/Logo";

const SignupPage = () => {
    return (
        <div className="container relative h-screen items-center justify-center grid max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 h-10 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
                to={"/login"}
            >
                Login
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900"></div>
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Logo color={'white'}/>
                    <span>Apps Inc</span>
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                        “This applications manager system has saved me countless hours of work and helped me process applications faster than ever before.”
                        </p>
                        <footer className="text-sm">Elon Musk</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                        <p className="text-sm text-gray-500">Enter your information below to create your account</p>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-4">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <label 
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="first-name">
                                        First name
                                    </label>
                                    <input 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-gray-400
                                        focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                        id="first-name" 
                                        placeholder="Max" 
                                        required=""
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label 
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="last-name">
                                        Last name
                                    </label>
                                    <input 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-gray-400
                                        focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                        id="last-name" 
                                        placeholder="Robinson" 
                                        required=""
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label 
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-gray-400
                                    focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                    id="email" 
                                    placeholder="m@example.com" 
                                    required=""
                                />
                            </div>


                            <div className="grid gap-2">
                                <label 
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                    Password
                                </label>
                                <input 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-gray-400
                                    focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                    id="password"
                                />
                            </div>

                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ringdisabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white shadow hover:bg-gray-800 h-10 px-4 py-2"
                                >
                                Create an account
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-gray-100  h-10 px-4 py-2"
                            type="button"
                            >
                                Sign up with GitHub
                        </button>
                    </div>
                    <p className="px-6 text-center text-sm text-gray-500">
                        By clicking continue, you agree to our
                        <a className="underline underline-offset-4 hover:text-gray-900" href="/terms"> Terms of Service </a>
                        and
                        <a className="underline underline-offset-4 hover:text-gray-900" href="/privacy"> Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage
