import CategoriesFetch from "./components/CategoriesFetch";
import BannersRender from "./components/BannersRender";

export default function Home() {
  return (
    <>
      <div className="text-center text-2xl">This is the title</div>
      <CategoriesFetch />
      <section className="inline-flex flex-col items-start gap-[48px] relative flex-[0_0_auto]">
        <BannersRender />
      </section>
    </>
  );
}
