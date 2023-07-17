import { WebSiteLogo } from "@/assets";
import Search from "@/components/Search";

const Header = () => {
  return (
    <header className="fixed w-full h-14">
      <div className="w-full h-full px-4">
        <div className="w-full h-full flex flex-row items-center justify-between">
          <WebSiteLogo width="48px" height="48px" className="cursor-pointer" />
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
