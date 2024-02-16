import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Big Text for Shop</h1>
      <p>Small Description for the shop</p>
      <Link to="/items">Get Started!</Link>
    </div>
  )
}