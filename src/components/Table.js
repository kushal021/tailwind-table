const Table = ({ catData, onDelete }) => {
  return (
    <>
      <table className="min-w-full leading-normal">
        <thead className="bg-gray-200 text-xs text-gray-700 uppercase text-left tracking-wider">
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200">Cat facts</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Type</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Created at</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Status</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {catData?.map((item, index) => (
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item?.text}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item?.type}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {new Date(item?.createdAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    className={`absolute inset-0 ${
                      item?.status?.verified ? "bg-green-200" : "bg-red-200"
                    } bg-green-200 opacity-50 rounded-full`}
                  ></span>
                  <span className="relative">
                    {item?.status?.verified ? "Verified" : "Unverified"}
                  </span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                  type="button"
                  className="inline-block px-6 h-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  onClick={() => onDelete(item?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
