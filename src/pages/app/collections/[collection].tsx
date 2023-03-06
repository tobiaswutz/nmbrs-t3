import { Trade } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "src/components/Modal";
import { api } from "src/utils/api";

const CollectionTable: NextPage = () => {
  const router = useRouter();
  const [id, setId] = useState<number | null>(null);
  const { data, refetch  } = api.trades.getAllFromCollection.useQuery(
    { collectionId: id ?? 0 },
    { enabled: id !== null }
  );

  const [formValues, setFormValues] = useState<any>({
    id: 0,
    timestamp: new Date(),
    exchange: 'binance',
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    action: 'buy',
    amount: 1221,
    price: 1221,
    fee: 1221,
    feeAsset: 'USDT',
    notes: 'test',
    userId: 1,
  })

  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    if (router.query.collection) { setId(parseInt(router.query.collection as string)); }
    console.log(router.query);
    
    refetch();
  }, [router.query]);

  return (
    <>
      <button onClick={() => setOpen(true)}>Hallo</button>
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
          {data?.trades.map((trade: Trade) => (
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
      <Modal open={open} setOpen={setOpen} >
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        LELLEK
      </label>
      <div className="mt-2">
        <input
          type="kek"
          name="kek"
          id="kek"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="BTC"
        />
      </div>
    </div>

      </Modal>
    </>
  );
};

export default CollectionTable;
