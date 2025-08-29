import React from "react";
import InventoryTable from "../components/InventoryTable";
import { inventoryData } from "../data/inventoryData";

const DashboardPage = () => {
  return (
    <div className="full-height">
      <aside className="sidebar">Inventory Management System</aside>
      <main className="main-content">
        <h2 style={{ marginBottom: "20px" }}>Inventory Table</h2>
        <InventoryTable items={inventoryData} />
      </main>
    </div>
  );
};

export default DashboardPage;
