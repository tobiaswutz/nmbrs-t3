import { NextPage } from "next";
import { useEffect } from "react";
import { api } from "src/utils/api";

const CollectionTable: NextPage = () => {
  const data = api.collections.getAll.useQuery();

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  return (
    <>
      {data.data?.map((collection) => (
        <div className="mt-5 transform cursor-pointer overflow-hidden rounded-lg border-4 border-transparent bg-white shadow-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-50 hover:shadow-2xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{collection.name}</div>
            <p className="text-base text-gray-700">{collection.description}</p>
          </div>
          <div className="flex justify-between px-6 py-4">
            <div className="text-sm text-gray-600">
              <span className="mr-2">created:</span>
              {collection.createdAt.toLocaleDateString()}
            </div>
            <div className="text-sm text-gray-600">
              <span className="mr-2">last updated:</span>
              {collection.updatedAt.toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CollectionTable;
