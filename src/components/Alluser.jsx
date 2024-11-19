import { useState } from "react";
import userData from "../utils/data";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiExport } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

import * as XLSX from "xlsx";

const Alluser = () => {
  const [data, setData] = useState(userData);
  const [inputData, setInputData] = useState("");

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
    <div className="min-h-screen">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-7 mt-5">
          All Users
        </h2>
      </div>
      <div className="lg:px-7 md:px-10 sm:px-10 mt-5 flex sm:gap-10 justify-between">
        <div className="flex justify-center items-center gap-10">
          <input
            type="text"
            value={inputData}
            onChange={handleSearch}
            placeholder="Search for users"
            className="p-2 border-2 bg-gray-100 border-lightGray-400 outline-none lg:w-[400px] md:w-[300px] sm:w-[250px] rounded-lg"
          />

          <div className="flex gap-4 text-2xl text-gray-700">
            <IoSettingsOutline className=" cursor-pointer" />
            <RiDeleteBin6Line className=" cursor-pointer" />
            <RiErrorWarningLine className=" cursor-pointer" />
            <BsThreeDotsVertical className=" cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-5">
          <button
            onClick={exportToExcel}
            className=" bg-blue-500 hover:bg-blue-600 text-white-400 w-[120px] rounded-lg flex items-center gap-2 justify-center"
          >
            <IoMdAdd className="font-extrabold text-xl" />
            Add User
          </button>

          <button
            onClick={exportToExcel}
            className="border-2 border-lightGray-400 w-[100px] rounded-lg flex items-center gap-2 justify-center"
          >
            <CiExport />
            Export
          </button>
        </div>
      </div>
      <div className="rounded-lg p-6">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-800 font-bold">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">NAME</th>
              <th className="p-4 text-left">POSITION</th>
              <th className="p-4 text-left">CITY</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => {
              return (
                <tr key={data.id} className="border-b border-gray-300">
                  <td className="p-4 text-gray-700">{data.id}</td>
                  <td className="p-4 text-gray-700 font-medium flex items-center gap-7">
                    <img
                      src={data.profile}
                      alt=""
                      className="w-[40px] rounded-full"
                    />
                    <div>
                      <p>{data.name}</p>
                      <p className="text-gray-400">{data.email}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{data.occupation}</td>
                  <td className="p-4 text-gray-700">{data.city}</td>
                  <td
                    className={`${
                      data.status === "Active"
                        ? "text-green-400 p-4"
                        : "text-red-500 p-4"
                    }`}
                  >
                    {data.status}
                  </td>
                  <td className="p-4 flex gap-4">
                    <button className="px-4 py-2 bg-blue-500 text-white-400 rounded-lg shadow hover:bg-blue-600 transition flex items-center gap-2">
                      <FiEdit /> Edit User
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white-400 rounded-lg shadow hover:bg-red-600 transition flex items-center gap-2">
                      <RiDeleteBin6Line />
                      Delete User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
