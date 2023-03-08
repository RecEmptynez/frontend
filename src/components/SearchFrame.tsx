import SearchBar from "./SearchBar";

export default function SearchFrame() {
  return (
    <div
      className={`inline-flex flex-col items-center text-left font-bold gap-[29px] text-[rgba(67,64,54,1)] w-[30%]`}
      >
      <p className="m-0 text-[28px] leading-[0.86] font-bold font-sans">Sök ingrediens</p>
      <SearchBar />
    </div>
  );
}