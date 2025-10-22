import { toast } from "react-toastify";

export default function BuyProductButton({}) {
  // Handle buying a product
  const handleClick = async () => {
    toast("Product ordered!");
  };

  return (
    <button className="btn mt-3 bg-black text-white" onClick={handleClick}>
      Buy
    </button>
  );
}
