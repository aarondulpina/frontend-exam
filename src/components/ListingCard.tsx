import { customContext } from "@/app/cars/page";
import { listingData } from "@/types/cars";
import Image from "next/image";

const ListingCard = (listing: listingData & customContext) => {
  const { car, seller, sellingPrice, images, mileage, setSelectedCar } =
    listing;

  return (
    <div
      className="shadow-md focus:ring-2 cursor-pointer rounded bg-white"
      onClick={() => setSelectedCar(listing)}
    >
      <Image
        src={images[0]}
        alt="car"
        style={{ width: "100%", height: "56.25%", display: "block" }}
        height={500}
        width={500}
      />
      <div className="p-2 pt-3">
        <div className="text-lg font-bold">
          {car?.year} - {car?.make}
          <br />
          {car.model}
        </div>
        <div className="flex text-sm items-center gap-1 mb-1">
          <div>{mileage} km</div>
          <div>-</div>
          <div className="flex">
            <Image
              src={"/location-pin.svg"}
              height={10}
              width={10}
              alt="location-icon"
            />
            {seller.address}
          </div>
        </div>
        <div className="text-lg text-red-700">
          $<span className="font-semibold">{sellingPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
