import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUP = () => {
    navigate("/signup");
  };

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="border-b-2 border-b-[#91999E] py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl max-sm:text-xl font-bold tracking-tight text-black hover:text-[#91999E] max-md:ml-[3rem]"
        >
          Jobs.com
        </Link>
        <div className="">
          <Button
            variant="ghost"
            className="font-bold hover:text-[#91999E] hover:bg-white"
            onClick={handleSignUP}
          >
            {user ? user.name : "SignUp"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
