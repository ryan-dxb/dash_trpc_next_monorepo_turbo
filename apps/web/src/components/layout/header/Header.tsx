import { Avatar, AvatarFallback, Button, Input, Separator } from "@repo/ui";
import { Search, Mail, Bell, Settings, ChevronDown } from "lucide-react";
import { FC } from "react";

interface HeaderProps {
  // Add your page props here
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex-shrink-0 w-full border-b-[0.5px] shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex h-10 border w-80">
          <Input
            placeholder="Search"
            className="bg-transparent border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary"
          />
          <Button className="w-10 h-10 px-3 rounded-l-none bg-primary/70">
            <Search size={20} />
          </Button>
        </div>
        {/* Icons */}
        <div className="flex flex-row gap-x-2">
          <Button variant="ghost" className="w-10 h-10 p-0 ">
            <Mail className="w-5 h-5 " />
          </Button>
          <Button variant="ghost" className="w-10 h-10 p-0 ">
            <Bell className="w-5 h-5 " />
          </Button>
          <Button variant="ghost" className="w-10 h-10 p-0 ">
            <Settings className="w-5 h-5 " />
          </Button>

          <Separator className="h-8 mx-4 my-auto" orientation="vertical" />

          <div className="flex flex-row items-center space-x-2 cursor-pointer">
            <Avatar>
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>

            <div className="flex flex-col ">
              <span className="text-sm font-semibold">Adeola Adeyemo</span>
              <span className="text-xs ">Admin</span>
            </div>

            <Button
              variant="ghost"
              className="w-10 h-10 p-0 rounded-full hover:bg-transparent "
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
