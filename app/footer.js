import { bbleads } from "./new.jsgit init";
import {BsGlobeAmericas } from "react-icons/bs";
import {BsToggleOff} from "react-icons/bs";



export default function Footer() {
    return (
        <>

            <div className="bg-gray-100 pl-10 py-10 space-y-10">
                <div className="grid grid-cols-6 w-full ">
                    {bbleads.map((data) => (
                        <div className="flex flex-col space-y-4">
                            <div className=" font-semibold">
                                {data.fhead}
                            </div>
                            {data.fbody.map((data1) => (
                                <div className=" text-xs border-red-600">{data1}

                                </div>
                            ))}

                        </div>
                    ))}


                </div>
                <div className="flex  text-black text-xs item-center pl-16 h-14 gap-5 justify-between">
                    <div className="flex space-x-4">

                        <button className='group item-center'> <BsGlobeAmericas className="inline-block gap-6"/>English (India)
                            <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
                        </button>
                        <button className='group item-center'> <BsToggleOff className="inline-block gap-6"/> Your Privacy Choices
                            <p className='bg-black opacity-0 group-hover:opacity-100 h-[1px]'></p>
                        </button>
                        

                    </div>
                    <div className="flex items-center  pr-16 space-x-4">
                        <button className='flex items-center hover:underline'>Contact Microsoft
                           </button>

                        <button className='flex items-center hover:underline'>Privacy
                            </button>
                        <button className='flex items-center hover:underline'> Terms of use
                           </button>
                        <button className='flex items-center hover:underline gap-1'> Trademarks
                       </button>
                       <button className='flex items-center hover:underline gap-1'>  About our ads
                       </button>
                       <button className='flex items-center hover:underline gap-1'>  © Microsoft 2023
                       </button>

                    </div>



                </div>
            </div>
        </>
    )
}
