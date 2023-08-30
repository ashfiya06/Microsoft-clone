import Link from "next/link";
import { AiFillWindows } from "react-icons/ai";
import { MdLaptopChromebook } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {IoIosArrowRoundUp} from 'react-icons/io';


export default function Main() {


    return (
        <>
            {/* slider*/}

            <div className="relative mb-6">

                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600" />
                <div className="absolute right-[100px] top-[100px] max-w-sm text-2xl space-y-4">
                    <p className="font-extrabold">Surface Pro 9</p>
                    <p className="text-lg">Tablet versatility and laptop power — all in one ultra-portable device</p>
                    <Link href="#" className="rounded-sm bg-sky-700 px-[20px] py-[5px]  inline-block text-sm font-bold text-white">Learn More</Link>
                </div>
            </div>
            {/*grid*/}
            <div className="grid grid-cols-4 m-10">
                <div className="flex flex-col text-[10px] items-center underline border-black">
                    <AiFillWindows className=" w-10 h-10" />
                    <p className="text-sky-600 ">Choose your Microsoft 365</p>
                </div>
                <div className="flex flex-col text-[10px] items-center  underline border-black">
                    <MdLaptopChromebook className="w-10 h-10" />
                    <p className="text-sky-600 ">Explore Surface devices</p>
                </div>
                <div className="flex flex-col text-[10px] items-center  underline border-black">
                    <RiGlobalFill className="w-10 h-10" />
                    <p className="text-sky-600 ">Buy Xbox games and consoles</p>
                </div>
                <div className="flex flex-col text-[10px] items-center  underline border-black">
                    <AiFillWindows className="w-10 h-10" />
                    <p className="text-sky-600 ">Get Windows 11</p>
                </div>
            </div>
            <div className=" mx-10 my-12 space-y-5">
                <div className="grid grid-cols-4 w-full gap-4 mb-14">
                    <div className="flex flex-col  border-black">
                        <img src=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=380&hei=213&fit=crop" />
                        <p className="font-extrabold text-left">Surface Laptop 5</p>
                        <p className="text-sm">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11. </p>
                        <div className="flex items-center font-semibold text-sky-600">
                            <Link href="#" className=" hover:pr-1 duration-300 ease-in-out hover:underline  ">Learn more    
                            </Link>
                            <IoIosArrowForward /> 
                        </div>
                    </div>
                    <div className="flex flex-col border-black">

                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop" />
                        <p className=" font-extrabold text-left">Surface Laptop Studio</p>
                        <p className="text-sm">Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11. </p>
                        <div className="flex items-center font-semibold text-sky-600">
                        <Link href="#" className=" hover:pr-1 duration-300 ease-in-out hover:underline  ">Learn more   
                        </Link>
                        <IoIosArrowForward />
                        </div>
                    </div>
                    <div className="flex flex-col items-center border-black">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop" />
                        <p className=" font-extrabold text-left">Xbox Series S</p>
                        <p className="text-sm">Next-gen performance in the smallest Xbox ever. </p>
                        <div className="flex items-center font-semibold text-sky-600">
                        <Link href="#" className=" hover:pr-1 duration-300 ease-in-out hover:underline  ">Shop Xbox series S   
                        </Link>
                        <IoIosArrowForward /> 
                        </div>
                    </div>
                    <div className="flex flex-col items-center border-black">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-Open-Preview?wid=380&hei=213&fit=crop" />
                        <p className="font-extrabold text-left">Announcing the next wave of AI innovation</p>
                        <p className="text-sm">The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
                        <div className="flex items-center font-semibold text-sky-600">
                        <Link href="#" className=" hover:pr-1 duration-300 ease-in-out hover:underline  ">Learn more about it   
                        </Link>
                        <IoIosArrowForward /> 
                        </div>
                    </div>

                </div>

                <div className="relative">

                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Highlight-Ultimate-1PP-Evergreen-Keyart-FY22:VP5-1596x600" />
                    <div className="absolute left-[50px] top-[100px] max-w-sm text-2xl space-y-4">
                        <p className="font-extrabold text-white">Xbox Game Pass Ultimate</p>
                        <p className="text-sm text-white">Xbox Live Gold and hundreds of high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
                        <Link href="#" className="rounded-sm bg-sky-700 px-[20px] py-[5px]  inline-block text-sm font-bold text-white">Join now</Link>

                    </div>
                </div>
                <h1 className="font-extrabold">For Business</h1>
                <div className="mx-15 my-15 ">
                    <div className="grid grid-cols-4 w-full gap-4">
                        <div className="flex flex-col">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop" />
                            <p className="text-black font-extrabold text-left ">Surface for Business</p>
                            <p className="text-sm">No matter what you do, there’s a Surface to help you do it.</p>
                            <div className="flex items-center font-semibold text-sky-600">
                                <Link href="#" className="hover:pr-1 duration-300 ease-in-out hover:underline  ">Shop now
                                </Link>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop" />
                            <p className=" text-black font-extrabold text-left">Get Microsoft Teams for free</p>
                            <p className="text-sm">Online meetings, chat and shared cloud storage – all in one place.</p>
                            <div className="flex items-center font-semibold text-sky-600">
                                <Link href="#" className="hover:pr-1 duration-300 ease-in-out hover:underline  ">Sign up for free
                                </Link>
                                <IoIosArrowForward />

                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Brand-Hybrid-Work?wid=380&hei=213&fit=crop" />
                            <h2 className=" font-extrabold text-left">Thrive in a hybrid world</h2>
                            <p className="text-sm">Discover tools, resources and strategies to help your employees succeed in the new world of flexible work.</p>
                            <div className="flex items-center font-semibold text-sky-600">
                                <Link href="#" className="  hover:pr-1 duration-300 ease-in-out hover:underline ">Learn more
                                </Link>
                                <IoIosArrowForward />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=380&hei=213&fit=crop" />
                            <p className="  font-extrabold text-left">Join the era of AI</p>
                            <p className=" text-left">Create, communicate, and code with the latest Microsoft AI solutions.</p>
                            <div className=" flex items-center font-semibold text-sky-600 ">
                                <Link href="#" className="hover:pr-1 duration-300 ease-in-out hover:underline">Explore AI solutions
                                </Link>
                                <IoIosArrowForward />
                            </div>
                            
                        </div>
                            
                    </div>
                    <div className="flex items-center gap-2">Follow Microsoft
                    <AiFillFacebook className="w-6 h-6"/>
                    <AiOutlineTwitter className="w-6 h-6"/>
                    <AiFillYoutube className="w-6 h-6"/>
                    </div>
                    
                            <div className="absolute bg-slate-200 text-black inline-block right-0 hover:bg-white"> <IoIosArrowRoundUp className="inline-block"/> Back to top   </div>
                           




                </div>


            </div>
        </>
    )
}
