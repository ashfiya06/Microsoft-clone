import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import New from "./sidebar";


export default function Navbar() {
  return (
    <div className="flex text-black text-xs item-center pl-16 h-14 gap-5 justify-between">
      <div className="flex space-x-4">
        <img className="p-5" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />

        <button className='group'>Microsoft 365
          <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
        </button>
        <button className='group'>Windows
          <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
        </button>
        <button className='group'>Surface
          <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
        </button>
        <button className='group'>Xbox
          <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
        </button>
        <button className='group'>Support
          <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
        </button>
       
      </div>
      <div className="flex items-center  pr-16 space-x-4">
        <button className='flex items-center hover:underline'>All microsoft
          <IoIosArrowDown className='text-lg' /></button>

        <button className='flex items-center hover:underline'>Search
          <AiOutlineSearch className='text-base' /></button>
        <button className='flex items-center hover:underline'>cart
          <AiOutlineShoppingCart className='text-lg' /></button>
        <button className='flex items-center hover:underline gap-1'>Sign in
          < AiOutlineUserAdd className='text-2xl' /></button>
      </div>



    </div>


  )
}

