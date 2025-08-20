import React, { useMemo } from "react";
import InventoryTable from "../components/InventoryTable";
import { inventoryData } from "../data/inventoryData";

const DashboardPage = () => {
  const items = useMemo(() => inventoryData, []);

  const wrapper = { display: "grid", gap: 16 };
  const card = {
    background: "white",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
  };

  const title = { fontSize: 22, marginBottom: 8 };
  const sub = { color: "#666", marginBottom: 12 };

  return (
    <div style={wrapper}>
      <div style={card}>
        <h2 style={title}>Dashboard</h2>
        <p style={sub}>Your current inventory items.</p>
        <InventoryTable items={items} />
      </div>
    </div>
  );
};

export default DashboardPage;
