import Home from "./page";

export default function HomeLayout() {
    return (
      <div className="flex flex-col items-center justify-center bg-[#080b11] border border-solid border-black p-4 md:p-8 lg:p-12">
      {/* // <div> */}
        <Home />
      </div>
    );
  }