import { listData } from "../../lib/tempData";
import Card from "../card/Card";
import "./list.scss";

export default function List() {
  console.log(listData);
  return (
    <div className="list">
      {listData.map((list) => (
        <Card key={list.id} item={list} />
      ))}
    </div>
  );
}
