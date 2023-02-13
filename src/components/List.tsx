import { ListItem } from "./ListItem";

export const List = () => {
  const n = 15;
  const listItems = [...Array(n)].map((e, i) => (
    <ListItem name="Pasta bolognese" />
  ));

  return (
    <div className="flex flex-wrap overflow-scroll justify-center scrollbar-hide h-full w-full rounded-2xl">
      {listItems.map((item) => item)}
    </div>
  );
};
