import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from "../hooks/useForm";
import Logo from "../components/navbar/Logo";
import { loginUser } from '../reducers/authSlice';


const LoginPage = () => {
    const [formValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = formValues;
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ email, password }));
    };

    return (
        <div className="container relative h-screen items-center justify-center grid max-w-none lg:grid-cols-2 lg:px-0">

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
            
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <p className="text-sm text-gray-500">Enter your email below to login to your account</p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label 
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input 
                                id="email"
                                name="email" 
                                type="email"
                                value={email}
                                onChange={handleInputChange} 
                                placeholder="m@example.com"
                                required=""
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <label 
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Link 
                                    className="ml-auto inline-block text-sm text-gray-500 underline underline-offset-4 hover:text-gray-900" 
                                    to={"/forgot-password"}
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <input 
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleInputChange}
                                required=""
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-gray-400 focus:ring-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                            />
                        </div>
                        <button 
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ringdisabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white shadow hover:bg-gray-800 h-10 px-4 py-2" 
                            type="submit"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button 
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-gray-100 h-10 px-4 py-2"
                        >
                            Login with Google
                        </button>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-500">
                        Don't have an account? <Link className="underline underline-offset-4 hover:text-gray-900" to={"/signup"}>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage
