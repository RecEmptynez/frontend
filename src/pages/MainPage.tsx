import { List } from "../components/List";
import SearchFrame from "../components/SearchFrame";

export const MainPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="font-semibold text-7xl">Vad ska jag laga för mat?</h1>
      <div className="w-full h-full">
        <div className="w-full h-1/3 flex flex-col items-center justify-center">
          <input
            type="text"
            className="rounded-2xl bg-slate-200 w-1/3 text-2xl p-2"
            placeholder="Sök efter din ingrediens här!"
          />
        </div>
        <div className="h-2/3 flex flex-col items-center justify-center">
          <List />
        </div>
      </div>
    </div>
  );
};
