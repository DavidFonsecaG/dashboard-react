import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchInput = () => {

    return (
        <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <MagnifyingGlassIcon aria-hidden="true" className="h-4 w-4" />
            </span>
            <input 
            placeholder="Search" 
            type="text" 
            name="search"
            className="placeholder:text-gray-400 block bg-white w-full border rounded-md py-2.5 pl-9 md:pr-9 focus:outline-none focus:ring-gray-400 focus:ring-1 text-sm md:shadow-sm" 
            />
        </label>
    );
  }
  
  export default SearchInput;
  