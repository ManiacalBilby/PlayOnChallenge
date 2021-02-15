function Filters(props) {
  const handleSelect = (event) => {
    props.setStateKey(event.target.value);
  };
  const handleStart = (event) => {
    props.setStartDate(new Date(event.target.value).toISOString());
  };
  const handleEnd = (event) => {
    props.setEndDate(new Date(event.target.value).toISOString());
  };
  return (
    <div className="container">
      <div className="left">
        <label>
          State Association:
          <select id="state_select" onChange={handleSelect}>
            <option value="18bad24aaa">GHSA</option>
            <option value="542bc38f95">UIL</option>
          </select>
        </label>
      </div>
      <div className="middle">
        <label>
          Start Date:
          <input type="date" id="start_date" onChange={handleStart}></input>
        </label>
      </div>
      <div className="right">
        <label>
          End Date:
          <input type="date" id="end_date" onChange={handleEnd}></input>
        </label>
      </div>
    </div>
  );
}

export default Filters;
