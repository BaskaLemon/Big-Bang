import Categories from "./components/Categories";
import FrontMap from "./components/FrontMap";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        <Categories />
      </div>
      <div>
        <FrontMap />
      </div>
    </div>
  );
}
