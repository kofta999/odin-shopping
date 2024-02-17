import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="m-20 rounded-2xl bg-card p-20 shadow-xl">
      <h1 className="mb-10 text-5xl">
        Welcome to <b>Logo</b>
      </h1>
      <div className="mb-20 flex justify-between gap-10">
        <p className="w-1/2 text-3xl">
          Welcome to our online shop, your go-to source for top-quality products
          across various categories. We blend style, comfort, and innovation to
          bring you items that make a difference. Enjoy competitive prices and
          exceptional customer service. Start your seamless shopping experience
          with us today!
        </p>
        <img src={logo} alt="logo" className="size-1/3" />
      </div>
      <Link
        className="rounded-2xl bg-green-500 px-10 py-5 text-2xl text-white hover:bg-green-700 active:bg-green-900"
        to="/items"
      >
        Get Started!
      </Link>
    </div>
  );
}
