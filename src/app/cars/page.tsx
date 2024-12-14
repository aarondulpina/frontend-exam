import ListingCard from "@/components/ListingCard";
import ListingDialog from "@/components/ListingModal";
import { listingData } from "@/types/cars";
import { useState } from "react";

export interface customContext {
  selectedCar: listingData | null;
  setSelectedCar: (input: listingData | null) => void;
}

const Page = async () => {
  const [selectedCar, setSelectedCar] = useState<listingData | null>(null);

  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/cars", {
    cache: "force-cache",
  });
  const data = await res.json();
  if (!data.carListings || data?.carListings?.length === 0) {
    //render no listing found page
    return <>No listings found</>;
  }

  return (
    <div className="grid grid-cols-3 gap-1 max-w-[1200px] w-full h-full mx-auto mt-5">
      {data.carListings.slice(0, 9).map((listing: listingData) => (
        <ListingCard
          {...listing}
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
        />
      ))}
      <ListingDialog
        setSelectedCar={setSelectedCar}
        selectedCar={selectedCar}
      />
    </div>
  );
};
export default Page;
