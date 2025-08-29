import React from "react";

const InventoryTable = ({ items = [] }) => {
  const styles = {
    tableWrap: { overflowX: "auto" },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
    th: {
      padding: "12px 14px",
      borderBottom: "2px solid #e5e7eb",
      background: "#f5f7fb",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "left",
    },
    td: {
      padding: "12px 14px",
      borderBottom: "1px solid #f0f0f0",
      fontSize: 14,
    },
    row: {
      transition: "background 0.2s ease",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr
                key={item.id}
                style={styles.row}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#fafafa")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={styles.td}>{item.id}</td>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.quantity}</td>
                <td style={styles.td}>{item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.td} colSpan="4" align="center">
                No items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
