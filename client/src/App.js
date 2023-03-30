import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { QUERY_DTC } from "./utils/queries";

function App() {
  const [code, setCode] = useState("");
  const { loading, error, data } = useQuery(QUERY_DTC, {
    variables: { code },
    skip: !code
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setCode(formData.get("code"));
  };

  return (
    <Router>
      <div>
        <SearchForm onSubmit={handleSubmit} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <SearchResults dtc={data?.dtc} />
      </div>
    </Router>
  );
}

export default App;
