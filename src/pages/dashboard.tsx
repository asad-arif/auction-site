import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [createAuction, setCreateAuction] = useState(false);

  const navigate = useNavigate();

  const auctionData = [
    {
      name: "exampledomain.com",
      price: 1500,
      minBid: 1000,
      description: "A premium domain perfect for any business.",
    },
    {
      name: "techguru.net",
      price: 3000,
      minBid: 2500,
      description: "Ideal for tech enthusiasts and bloggers.",
    },
    {
      name: "healthyliving.org",
      price: 2000,
      minBid: 1500,
      description: "Great domain for health and wellness websites.",
    },
    {
      name: "myportfolio.me",
      price: 800,
      minBid: 600,
      description: "Perfect for personal portfolios and resumes.",
    },
    {
      name: "shoponline.store",
      price: 5000,
      minBid: 4500,
      description: "A highly sought-after domain for eCommerce platforms.",
    },
    {
      name: "travelbuddy.co",
      price: 3500,
      minBid: 3000,
      description: "Ideal for travel blogs and agencies.",
    },
  ];

  return (
    <div className="px-5">
      <div className=" flex mt-3 w-full justify-between">
        <h1 className=" text-lg font-bold">My Auctions</h1>

        <button
          onClick={() => setCreateAuction(true)}
          className="bg-green-500 p-2 rounded-md"
        >
          Create Auction
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex ">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2  ">
              {auctionData.map((auction: any, index) => (
                <div
                  onClick={() => {
                    navigate(`/auction-details/${index}`);
                  }}
                  className="flex flex-col w-80 bg-green-200 rounded-lg p-2 justify-between cursor-pointer"
                >
                  <div className="flex justify-between">
                    <h3>{auction.name}</h3>
                    <span>Price: {auction.price}$</span>
                  </div>
                  <span>Minimum Bid: {auction.minBid}$</span>
                  <span>{auction.description}</span>
                  <div className="flex gap-2 justify-end">
                    <button className="bg-yellow-200 p-1 rounded">Edit</button>
                    <button className="bg-red-200 p-1 rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {createAuction ? (
          <div className="bg-slate-300 flex flex-1 flex-col rounded-lg gap-2">
            <span className="font-bold p-2">Create Auction</span>
            <input
              type="text"
              placeholder="Enter domain name"
              className="border-2 p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Enter price"
              className="border-2 p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Minimum bid price"
              className="border-2  p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Auction duration"
              className="border-2  p-2 rounded-md"
            />
            <div className="flex justify-between">
              <button
                className="p-3 bg-green-500 rounded-lg font-bold"
                type="submit"
              >
                Create Auction
              </button>
              <button
                className="p-3 bg-red-300 rounded-lg font-bold"
                onClick={() => setCreateAuction(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-300 flex flex-1 flex-col rounded-lg gap-2">
            <span className="font-bold p-2">My Profile Info</span>
            <input
              type="text"
              value={"Asad"}
              className="border-2 p-2 rounded-md"
            />
            <input
              type="text"
              value={"test@gmal.com"}
              className="border-2 p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Update password"
              className="border-2  p-2 rounded-md"
            />
            <button
              className="p-3 bg-green-500 rounded-lg font-bold"
              type="submit"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
