import axios from "axios";
import { useEffect, useState } from "react";
import { getSpecies } from "./api-client";
import Table from "./components/Table";
import { fetchSpecies } from "./services/fetchAllSpecies";
import "./styles.css";

export default function App() {
  const [data, setData] = useState();

  // Fetching Cat Facts
  const fetchSpecies = async () => {
    try {
      const response = await getSpecies();
      const deletedItem = JSON.parse(
        localStorage.getItem("deletedItem") || "[]"
      );

      if (response)
        setData(
          response?.data?.filter((ele) => !deletedItem.includes(ele?._id))
        );
    } catch (error) {
      setData();
    }
  };

  // Deleting Cat Facts
  const deleteItem = (e) => {
    const deletedItem = JSON.parse(localStorage.getItem("deletedItem") || "[]");
    let newArray = [...deletedItem, e];
    localStorage.setItem("deletedItem", JSON.stringify(newArray));
    fetchSpecies();
  };

  useEffect(() => {
    fetchSpecies();
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Cat facts</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <Table catData={data} onDelete={deleteItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
