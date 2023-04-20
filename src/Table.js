import styles from "./styles.css";
const Table = (props) => {
  // [{date, temperature, conditions}, {date, temperature, conditions} ...]
  const weatherData = props.weatherData;

  return (
    <table width="100%" border="1px">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature</th>
          <th>Conditions</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((row) => {
          const date = row.date;
          const temperature = row.temperature;
          const conditions = row.conditions;
          return (
            <tr className='table column'>
              <td >{date}</td>
              <td >{temperature}</td>
              <td >{conditions}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

