import { Trade } from "@prisma/client";
import { NextPage } from "next";
import { useEffect } from "react";
import { api } from "src/utils/api";

const CollectionTable: NextPage = () => {
  const data = api.trades.getAll.useQuery();

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              ID
            </th>
            <th className="w-2/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Timestamp
            </th>
            <th className="w-2/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Exchange
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Base
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Quote
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Action
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Amount
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Price
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Fee
            </th>
            <th className="w-1/12 border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left font-medium">
              Fee Asset
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((trade: Trade) => (
            <tr key={trade.id} className="hover:bg-gray-100">
              <td className="border-b border-gray-200 px-4 py-2">{trade.id}</td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.timestamp.toLocaleDateString()}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.exchange}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.baseAsset}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.quoteAsset}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.action}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.amount}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.price}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.fee ?? "-"}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {trade.feeAsset ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CollectionTable;
