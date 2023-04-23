import styles from "./styles.css";

const Table = (props) => {
  // [{date, temperature, conditions}, {date, temperature, conditions} ...]
  const weatherData = props.weatherData;
  if( window.innerWidth >= 540 ){
    //выполнять
  return (
    <div >
    <table width="100%" border="1px">
      <thead>
        <tr className='th-column-responsive'>
          <th className='th-responsive'>Date</th>
          <th className='th-responsive'>Temperature</th>
          <th className='th-responsive'>Conditions</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((row) => {
          const date = row.date;
          const temperature = row.temperature;
          const conditions = row.conditions;
          return (
            <tr className='td-column-responsive' key={date}>
              <td className='td-responsive'>{date}</td>
              <td className='td-responsive'>{temperature}</td>
              <td className='td-responsive'>{conditions}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
} else {
  <table style="width:100%">
  <tr >
    <th>Date</th>
    {weatherData.map((row) => {
          const date = row.date;
          return (

              <td key={date} className='td-responsive'>{date}</td>
           );
        })}
  </tr>
  <tr>
    <th>Temperature</th>
    {weatherData.map((row) => {
          const temperature = row.temperature;
          return (

              <td className='td-responsive'>{temperature}</td>
           );
        })}
  </tr>
  <tr>
    <th>Conditions</th>
    {weatherData.map((row) => {
          const conditions = row.conditions;
          return (

              <td className='td-responsive'>{conditions}</td>
           );
        })}
  </tr>
</table>

} 
};

export default Table;

