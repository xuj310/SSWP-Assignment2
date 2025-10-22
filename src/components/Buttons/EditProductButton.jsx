import { useNavigate } from "react-router-dom";

export default function EditProductButton({ productId }) {
  const navigate = useNavigate();

  const goToEditProductPage = () => {
    navigate(`/products/edit/${productId}`);
  };

  return <button className="btn mt-3 bg-black text-white" onClick={goToEditProductPage}>Edit</button>;
}
