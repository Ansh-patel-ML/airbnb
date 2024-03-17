"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] rounded-full py-2 w-full md:w-auto shadow-sm hover:shadow-md transition cursor-pointer">
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
      "
      >
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="flex flex-row gap-3 items-center pl-6 pr-2 text-gray-600">
          <div className="hidden sm:block">Add Guest</div>
          <div className="p-2 bg-rose-500 rounded-full text-white hover:bg-rose-600">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
