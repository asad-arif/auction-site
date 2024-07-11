const AuctionDetails = () => {
  return (
    <div className="flex gap-5 mx-10 mt-6">
      <div className="flex flex-1">
        <div className="flex flex-col w-80 bg-green-200 rounded-lg p-2 justify-between cursor-pointer">
          <div className="flex justify-between">
            <h3>Domain Name: example.com</h3>
            <span>Price: 0$</span>
          </div>
          <span>Minimum Bid: 0$</span>
          <span>Description: Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="px-5 flex flex-col gap-2">
          <h1>Bidders</h1>
          <div className="flex flex-col w-40 rounded-lg p-2 justify-between bg-red-400">
            <h1>Name : John</h1>
            <span>Price : 12$</span>
          </div>
          <div className="flex flex-col w-40 rounded-lg p-2 justify-between bg-red-400">
            <h1>Name : Doe</h1>
            <span>Price : 12$</span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col rounded-lg gap-2">
        <span className="font-bold p-2">Place Your Bid</span>

        <input
          type="number"
          placeholder="Enter bid price"
          className="border-2 p-2 rounded-md"
        />
        <div className="flex justify-between">
          <button
            className="p-3 bg-green-500 rounded-lg font-bold"
            type="submit"
          >
            Bid
          </button>
          <button className="p-3 bg-red-300 rounded-lg font-bold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
