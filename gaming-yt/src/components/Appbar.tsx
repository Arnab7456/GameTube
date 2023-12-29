import { SearchBar } from "./Searchbar";

export function AppBar() {
  return (
    <div className="flex justify-between m-50 p-5">
         <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
    alt="YouTube Logo"
    className="sm:w-20 h-5"
  />
        <div><SearchBar /></div>
        <div>Sign In</div>
    </div>
  )
}


