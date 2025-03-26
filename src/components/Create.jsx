import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const initialData = {
    title: "",
    price: 0,
    stock: 0,
    status: true,
  };

  const [product, setProduct] = useState(initialData);
  const handelChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((pre) => ({ ...pre, [name]: value }));
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const sending = await axios.post(
        "http://localhost:3000/api/products/create",
        product
      );
      const response = sending.data;

      toast.success(response.msg);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong!");
    }
  };
  return (
    <div class="block w-11/12 mx-auto mt-16 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="grid  gap-6 mb-6 md:grid-cols-2 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create New Product
        </h5>
        <div className="text-end">
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </Link>
        </div>
      </div>
      <form onSubmit={submit}>
        <div class="mb-6">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="name"
            id="title"
            name="title"
            value={product.title}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Apple MacBook Pro"
            required
            onChange={handelChnage}
          />
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              name="price"
              type="number"
              id="price"
              value={product.price}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="40 $"
              required
              onChange={handelChnage}
            />
          </div>
          <div>
            <label
              for="stock"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handelChnage}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="99"
              required
            />
          </div>
          <div class="flex items-center">
            <input
              checked={product.status}
              id="status"
              type="checkbox"
              onChange={() =>
                setProduct((prev) => ({ ...prev, status: !prev.status }))
              }
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="status"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Status
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
