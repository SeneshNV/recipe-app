export default function FoodList({foodData}) {
  return (
    <div>
      {foodData.map((foodList) => (
        <li>{foodList.title}</li>
      ))}
    </div>
  );
}
