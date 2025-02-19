import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboardComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.17:3001/get/getreg"); // Replace with your actual API URL
      setData(response.data); // Assuming response.data is an array of objects
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && !error && (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>SNO</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={styles.tr}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#252525"; // Darker hover background
                    e.currentTarget.style.boxShadow =
                      "0px 4px 20px rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"; // Reset to transparent
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>{item.mail}</td>
                  <td style={styles.td}>{item.phone}</td>
                  <td style={styles.td}>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Internal CSS
const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    margin: "20px",
    color: "#ffffff", // Text color
    backgroundColor: "#181818", // Netflix dark background
    padding: "20px",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: "28px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  loading: {
    textAlign: "center",
    color: "#777",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  tableWrapper: {
    overflowX: "auto", // Make table scrollable on smaller screens
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#1f1f1f", // Table background
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", // Outer shadow
  },
  th: {
    padding: "15px",
    backgroundColor: "#e50914", // Netflix red header
    color: "#ffffff",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase",
    borderBottom: "2px solid #333", // Subtle border
  },
  tr: {
    transition: "all 0.3s ease", // Smooth transitions for hover effects
  },
  td: {
    padding: "12px 15px",
    color: "#ffffff",
    fontSize: "14px",
    borderBottom: "1px solid #333", // Subtle row separator
    transition: "color 0.3s ease", // Smooth text color change
  },
  // Hover effects for rows
  "tr:hover td": {
    color: "#e50914", // Netflix red for text on hover
  },
};

export default AdminDashboardComponent;
