import { NextPage } from "next";
import CollectionTable from "src/components/CollectionTable";
import DashboardLayout from "src/components/Layout";

const Collections: NextPage = () => {
  return (
    <DashboardLayout>
      <CollectionTable />
    </DashboardLayout>
  );
};

export default Collections;
