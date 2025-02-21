import "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="w-screen p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="logo" className="h-10" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
