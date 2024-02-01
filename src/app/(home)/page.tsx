import CategoriesFetch from "./components/CategoriesFetch";
import BannersRender from "./components/Banners";

export default function Home() {
  return (
    <>
      <div className="text-center text-2xl">This is the title</div>
      <CategoriesFetch />
      <BannersRender />
    </>
  );
}
