import { useNavigate } from "react-router-dom";

const Home = () => {
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
    {
      name: "gaminghub.io",
      price: 4000,
      minBid: 3500,
      description: "Perfect for gaming communities and eSports.",
    },
    {
      name: "financeexpert.pro",
      price: 2500,
      minBid: 2000,
      description: "Great for financial advisors and consultants.",
    },
    {
      name: "artshowcase.art",
      price: 1500,
      minBid: 1000,
      description: "Ideal for artists and online galleries.",
    },
    {
      name: "bestrecipes.xyz",
      price: 1200,
      minBid: 900,
      description: "Perfect for food blogs and recipe websites.",
    },
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
    {
      name: "gaminghub.io",
      price: 4000,
      minBid: 3500,
      description: "Perfect for gaming communities and eSports.",
    },
    {
      name: "financeexpert.pro",
      price: 2500,
      minBid: 2000,
      description: "Great for financial advisors and consultants.",
    },
    {
      name: "artshowcase.art",
      price: 1500,
      minBid: 1000,
      description: "Ideal for artists and online galleries.",
    },
    {
      name: "bestrecipes.xyz",
      price: 1200,
      minBid: 900,
      description: "Perfect for food blogs and recipe websites.",
    },
  ];

  return (
    <div className="px-5">
      <div className="flex gap-5">
        <div className="flex ">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-3">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
