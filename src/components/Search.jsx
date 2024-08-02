import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "170f1507af514bcb84eab66b0092a949";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
