import Filters from "../components/Filters";
import Results from "../components/Results";
import axios from "axios";
import { useState, useEffect } from "react";

function Events() {
  const [stateKey, setStateKey] = useState("18bad24aaa");
  const [results, setResults] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://challenge.nfhsnetwork.com/v2/search/events/upcoming?size=50",
        {
          params: {
            state_association_key: stateKey,
            from: startDate,
            to: endDate,
          },
        }
      )
      .then(function (response) {
        setResults(response.data);
      })
      .catch(function (error) {
        console.log("Axios error:", error);
      });
  }, [startDate, endDate, stateKey]);

  return (
    <div>
      <Filters
        setStateKey={setStateKey}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Results data={results} />
    </div>
  );
}

export default Events;
