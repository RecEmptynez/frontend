interface ListItemProp {
  name: string;
}

export const ListItem = (props: ListItemProp) => {
  const { name } = props;

  return (
    <div className="m-2 flex flex-col h-1/3 w-[30%] bg-gray-100 rounded-2xl">
      <div className="h-1/2 bg-gray-400 rounded-md"></div>
      <h1>{name}</h1>
    </div>
  );
};
