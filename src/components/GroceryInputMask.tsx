const GroceryInputMask = () => {
  return (
    <>
      <h1>Neuer Artikel</h1>
      <div className="flex justify-center space-x-16">
        <div>
          <label htmlFor="amount" className="block">
            Menge
          </label>
          <input
            type="number"
            name="amount"
            className="rounded border shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="article" className="block">
            Artikel
          </label>
          <input
            type="text"
            name="article"
            className="rounded border shadow-sm"
          />
        </div>
      </div>
    </>
  );
};

export default GroceryInputMask;
