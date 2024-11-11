import React, { useState } from "react";
import { MdDeleteSweep, MdOutlineEdit } from "react-icons/md";
import userData from "../utils/data";

const User2 = () => {
  const [data, setData] = useState(userData);
  console.log(data);
  return (
    <div className="">
      <div className="p-5 lg:w-[90%] md:w-[90%] sm:w-[450px] m-auto mt-10 lg:text-[18px] md:text-[16px] sm:text-[12px] rounded-lg bg-[#A3AFC9] text-white font-semibold">
        <div className="flex">
          <p className="lg:w-[20%] md:w-[18%] sm:w-[80px]">User Name</p>
          <p className="lg:w-[25%] md:w-[33%] sm:w-[130px]">Email</p>
          <p className="lg:w-[20%] md:w-[23%] sm:w-[80px]">Occupation</p>
          <p className="lg:w-[20%] md:w-[20%] sm:w-[100px]">City</p>
        </div>
      </div>

      <div className="lg:w-[90%] md:w-[90%] sm:w-[450px] m-auto p-2">
        {data.map((data) => {
          return (
            <div key={data.id} className="flex border-2 p-3 mb-2 rounded-lg">
              <p className="lg:text-[16px] md:text-[14px] lg:w-[20%] md:w-[20%] sm:w-[120px] sm:text-[10px]">
                {data.name}
              </p>
              <p className="lg:text-[16px] md:text-[14px] md:w-[35%] lg:w-[25%] sm:w-[250px] sm:text-[10px]">
                {data.email}
              </p>
              <p className="lg:text-[16px] md:text-[14px] lg:w-[20%] md:w-[25%] sm:w-[150px] sm:text-[10px]">
                {data.occupation}
              </p>
              <p className="lg:text-[16px] md:text-[14px] w-[20%] sm:w-[150px] sm:text-[10px]">
                {data.city}
              </p>
              <div className="flex lg:gap-8 sm:gap-2 lg:ml-10">
                <p className="lg:text-xl md:text-[16px] sm:text-[10px] cursor-pointer">
                  <MdOutlineEdit />
                </p>
                <p className="lg:text-xl md:text-[16px] sm:text-[10px] cursor-pointer">
                  <MdDeleteSweep />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User2;
