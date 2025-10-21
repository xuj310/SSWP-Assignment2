import { toast } from "react-toastify";
import * as styles from "./styles.css.ts";

export default function DeleteProductButton({ eventId }) {
  // Handle deleting the event
  const handleClick = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/events?id=${eventId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      const result = await res.json();

      // If there's an issue then display a toast with the problem. Otherwise go to events to refresh the events.
      if (res.status === 400 || res.status === 403) {
        toast(result.message);
      } else {
        window.location.href = "/events";
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return <button className="btn mt-3 bg-black text-white" onClick={handleClick}>Delete</button>;
}
