const TablePlaceholder = () => {
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
        <tr className='table column'>
          <td colSpan="3">No data found for your city</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePlaceholder;

