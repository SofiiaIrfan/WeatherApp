const Table = (props) => {
  // [{date, temperature, conditions}, {date, temperature, conditions} ...]
  const weatherData = props.weatherData;
  return (
    <ul width="100%" border="1px" className='table'>
      <li className='weather_table_cell bold date_title'>Date</li>
      <li className='weather_table_cell bold temp_title'>Temperature</li>
      <li className='weather_table_cell bold conditions_title'>Conditions</li>
      {weatherData.map((row) => {
        const date = row.date;
        const temperature = row.temperature;
        const conditions = row.conditions;
        return (
          <>
            <li className='weather_table_cell date_val table_values_mob'>{date}</li>
            <li className='weather_table_cell temp_val table_values_mob'>{temperature}</li>
            <li className='weather_table_cell conditions_val table_values_mob'>{conditions}</li>
          </>
        );
      })}
    </ul>
  );
};

export default Table;

