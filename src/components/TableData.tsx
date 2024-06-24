const TableData = ({ children }) => {
  return (
    <>
      <td className="rounded border border-slate-700 bg-slate-500 p-4">
        {children}
      </td>
    </>
  );
};

export default TableData;
