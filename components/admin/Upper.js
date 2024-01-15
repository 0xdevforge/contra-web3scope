import React from "react";
import Switcher4 from "./Switcher4";

import info from "/public/admin/info.svg";
import Image from "next/image";

const Upper = () => {
 return (
   <div className="border bg-[#f9fafb] rounded-xl p-4 pb-8">
     <div className="flex items-center justify-between ">
       <p className="text-xl font-medium">Accepting new clients</p>
       <Switcher4 />
     </div>
     <p className="text-sm mt-3 ">
       Turn this setting on to let potential clients know you&apos;re ready to
       work and to allow them to send you work inquiries. You have indicated
       you&apos;re{" "}
       <span className="font-semibold">no longer accepting new Clients</span>.
     </p>
     <button className="bg-[#f2f4f7] my-2 rounded-3xl text-xs py-2 px-4">
       {" "}
       Not Accepting New Clients
     </button>

     <div className="flex w-full justify-between">
       <p className="flex text-xl font-medium gap-2">
         Availability Reminders
         <Image alt="" src={info} />
       </p>

       <Switcher4 />
     </div>
   </div>
 );
};

export default Upper;