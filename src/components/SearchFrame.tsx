import SearchBar from "./SearchBar";

export default function SearchFrame() {
  return (
    <div
      className={`inline-flex flex-col items-center text-left gap-[29px] w-[30%]`}
      >
      <p className="m-0 text-[28px] leading-[0.86] font-bold font-poppins text-beige-1200">Sök ingrediens</p>
      <SearchBar />
    </div>
  );
}