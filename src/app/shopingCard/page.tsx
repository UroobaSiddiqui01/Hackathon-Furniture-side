import Image from "next/image";
import React from "react";

const ShoppingCart: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 ">
        <div className="container mx-auto px-40 py-10">
          <h1 className="text-3xl font-bold text-gray-800">Shoping Curt</h1>
          <p className="text-gray-600">Home / Page / <samp className='text-pink-600'>Shoping Curt</samp></p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-40 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Table */}
          <div className="lg:col-span-2">
            <table className="w-full bg-white overflow-hidden">
              <thead className="bg-white font-bold">
                <tr>
                  <th className="text-left p-4 text-gray-700">Product</th>
                  <th className="text-center p-4 text-gray-700">Price</th>
                  <th className="text-center p-4 text-gray-700">Quantity</th>
                  <th className="text-right p-4 text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Example product rows */}
                <tr className="border-t">
                  <td className="p-4 flex items-center">
                    <Image src="/shopingC1.png" alt="Product" className="w-16 h-16 rounded mr-4" width={16} height={16} />
                    <span className="text-gray-800">Product Name</span>
                  </td>
                  <td className="p-4 text-center text-gray-800">$20.00</td>
                  <td className="p-4 text-center text-gray-800">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4 text-right text-gray-800">$20.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center">
                    <img src="/shopingC2.png" alt="Product" className="w-16 h-16 rounded mr-4" />
                    <span className="text-gray-800">Product Name</span>
                  </td>
                  <td className="p-4 text-center text-gray-800">$20.00</td>
                  <td className="p-4 text-center text-gray-800">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4 text-right text-gray-800">$20.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center">
                    <img src="/shopingC3.png" alt="Product" className="w-16 h-16 rounded mr-4" />
                    <span className="text-gray-800">Product Name</span>
                  </td>
                  <td className="p-4 text-center text-gray-800">$20.00</td>
                  <td className="p-4 text-center text-gray-800">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4 text-right text-gray-800">$20.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center">
                    <img src="/shopingC4.png" alt="Product" className="w-16 h-16 rounded mr-4" />
                    <span className="text-gray-800">Product Name</span>
                  </td>
                  <td className="p-4 text-center text-gray-800">$20.00</td>
                  <td className="p-4 text-center text-gray-800">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4 text-right text-gray-800">$20.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center">
                    <img src="/shopingC5.png" alt="Product" className="w-16 h-16 rounded mr-4" />
                    <span className="text-gray-800">Product Name</span>
                  </td>
                  <td className="p-4 text-center text-gray-800">$20.00</td>
                  <td className="p-4 text-center text-gray-800">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4 text-right text-gray-800">$20.00</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button className="bg-pink-600 text-white px-4 py-2 rounded shadow">Update Curt</button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded shadow">Clear Curt</button>
            </div>
          </div>

          {/* Cart Totals Section */}
          <div className="bg-gray-100 px-8">
            <h2 className="text-lg font-bold text-gray-800 px-16 mb-4">Curt Totals</h2>
            <div className="flex justify-between bg-gyar-100 mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-800">$100.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="text-gray-800">Free</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="text-gray-800 font-bold">Total:</span>
              <span className="text-gray-800 font-bold">$100.00</span>
            </div>
            <button className="bg-green-500 text-white w-full py-2 mt-4 rounded">Proceed to Checkout</button>
          </div>

          {/* Calculate Shipping Section */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Calculate Shipping</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Country</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter Country"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter City"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Postal Code</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter Postal Code"
                />
              </div>
              <button className="bg-blue-500 text-white w-full py-2 rounded shadow">Calculate</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;

