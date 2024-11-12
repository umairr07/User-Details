import { useState } from "react";
import { MdDeleteSweep, MdOutlineEdit } from "react-icons/md";
import userData from "../utils/data";
import * as XLSX from "xlsx";

const User2 = () => {
  const [data, setData] = useState(userData);
  const [inputData, setInputData] = useState("");
  // console.log(data);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setInputData(searchValue);
    console.log(inputData);

    const searchData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(searchData);
  };

  const exportToExcel = () => {
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workBook, workSheet, "MySheet1");

    XLSX.writeFile(workBook, "MyExcel.xlsx");
  };

  return (
    <div className="">
      <div className="lg:px-20 md:px-10 sm:px-10 mt-5 mb-5 flex sm:gap-10 justify-between">
        <input
          type="text"
          value={inputData}
          onChange={handleSearch}
          placeholder="Search by name"
          className="p-2 border-2 border-lightGray-400 outline-none lg:w-[400px] md:w-[300px] sm:w-[250px] rounded-lg"
        />

        <button
          onClick={exportToExcel}
          className="border-2 border-lightGray-400 w-[100px] rounded-lg"
        >
          Export
        </button>
      </div>

      <div className="p-5 lg:w-[90%] md:w-[90%] sm:w-[450px] m-auto lg:text-[18px] md:text-[16px] sm:text-[12px] rounded-lg bg-[#A3AFC9] text-white-400 font-semibold">
        <div className="flex">
          <p className="lg:w-[20%] md:w-[18%] sm:w-[80px]">User Name</p>
          <p className="lg:w-[25%] md:w-[33%] sm:w-[130px]">Email</p>
          <p className="lg:w-[20%] md:w-[23%] sm:w-[80px]">Occupation</p>
          <p className="lg:w-[20%] md:w-[20%] sm:w-[100px]">City</p>
        </div>
      </div>

      <div className="lg:w-[90%] md:w-[90%] sm:w-[450px] m-auto p-2">
        {data.length === 0 ? (
          <p className="text-red-500">No user found</p>
        ) : (
          data.map((data) => {
            return (
              <div
                key={data.id}
                className="flex border-2 border-lightGray-400 p-3 mb-2 rounded-lg"
              >
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
          })
        )}
      </div>
    </div>
  );
};

export default User2;
