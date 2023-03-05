import { NextPage } from "next";
import { useEffect } from "react";
import DashboardLayout from "src/components/Layout";
import { api } from "src/utils/api";

const Index: NextPage = () => {
  const data = api.example.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  return (
    <DashboardLayout>
      <div>
        <span>{data?.data?.greeting}</span>
      </div>
    </DashboardLayout>
  );
};

export default Index;
