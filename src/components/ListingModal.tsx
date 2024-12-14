import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { customContext } from "@/app/cars/page";

const ListingDialog = (props: customContext) => {
  const { selectedCar, setSelectedCar } = props;
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (selectedCar) {
      setIsOpen(true);
    }
  }, [selectedCar]);

  return (
    <Dialog open={isOpen} onClose={() => setSelectedCar(null)}>
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <Description>This will permanently deactivate your account</Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </DialogPanel>
    </Dialog>
  );
};
export default ListingDialog;
