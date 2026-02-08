import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    axios.get("http://localhost:8080/api/hello")
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage("Error fetching data"));
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Spring Boot</h1>
      <p>{message}</p>
    </div>
); }
export default App;