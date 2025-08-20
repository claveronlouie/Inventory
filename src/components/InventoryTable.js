import React from "react";

const InventoryTable = ({ items }) => {
  const tableWrap = { overflowX: "auto" };
  const table = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    borderRadius: 12,
    overflow: "hidden",
  };
  const thtd = { padding: "12px 14px", borderBottom: "1px solid #eee", textAlign: "left" };
  const th = { ...thtd, background: "#f5f7fb", fontWeight: 700, fontSize: 14 };
  const rowHover = { transition: "background 0.2s" };

  return (
    <div style={tableWrap}>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Name</th>
            <th style={th}>Quantity</th>
            <th style={th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length ? (
            items.map((it) => (
              <tr key={it.id} style={rowHover} onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <td style={thtd}>{it.id}</td>
                <td style={thtd}>{it.name}</td>
                <td style={thtd}>{it.quantity}</td>
                <td style={thtd}>{it.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={thtd} colSpan="4">No items found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
