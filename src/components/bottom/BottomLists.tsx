import ListItem from './ListItem';

function BottomList(props: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {props.items.map((val, index) => (
        <ListItem isHeader={index == 0}>{val}</ListItem>
      ))}
    </ul>
  );
}

export default BottomList;
