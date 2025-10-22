import { toast } from "react-toastify";

export default function DeleteProductButton({ productId }) {
  // Handle deleting the product
  const handleClick = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products?id=${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      const result = await res.json();

      // If there's an issue then display a toast with the problem. Otherwise go to products to refresh the page.
      if (res.status === 400 || res.status === 403) {
        toast(result.message);
      } else {
        window.location.href = "/products";
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return <button className="btn mt-3 bg-black text-white" onClick={handleClick}>Delete</button>;
}
