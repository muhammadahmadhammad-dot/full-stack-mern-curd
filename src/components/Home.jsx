import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);
  const deleteProduct = async (id) => {
    await axios.delete(
      "http://localhost:3000/api/products/delete/"+id
    );
    toast.success("Product deleted successfully!");
    setProducts((pre)=>pre.filter((product) => product._id != id))
  };
  const fetchData = async function () {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/products/all-products"
      );

      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative overflow-x-auto my-16 w-11/12 mx-auto shadow-md sm:rounded-lg">
      <div className="grid  gap-6 mb-6 md:grid-cols-2  border-b px-6 py-3   text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-white">
        <h2 className="text-3xl   leading-none tracking-tight md:text-4xl">
          Product management
        </h2>
        <div className="text-end">
          <Link
            to="/create"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create New
          </Link>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item._id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.title}
              </th>
              <td className="px-6 py-4">
                {item.status ? (
                  <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                    True
                  </span>
                ) : (
                  <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
                    False
                  </span>
                )}
              </td>
              <td className="px-6 py-4"> {item.stock}</td>
              <td className="px-6 py-4">$ {item.price}</td>
              <td className="px-6 py-4">
                <Link
                  to={'edit/'+item._id}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(item._id)}
                  className="font-medium ms-2 text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
