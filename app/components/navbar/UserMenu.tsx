"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          className="flex flex-row gap-3 items-center border-[1px] rounded-full p-4 md:py-1 md:px-2 shadow-sm hover:shadow-md cursor-pointer"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-[40vw] shadow-md md:w-3/4 bg-white rounded-xl right-0 top-12 border-[1px] text-sm overflow-hidden">
          <div className="flex flex-col cursor-pointer">
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
