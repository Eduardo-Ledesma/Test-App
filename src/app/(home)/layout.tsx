import { ComponentProps } from "@/types";
import BannersRender from "./components/Banners";
import CardRender from "./components/CardRender";

export default function HomeLayout() {
    return (
      <div className="inline-flex flex-col items-center gap-[72px]">
        {/* <CardRender cards={} /> */}
        <BannersRender />
      </div>
    );
  }