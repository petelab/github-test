import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ItemDetail = (props) => {
  const params = useParams();
  const { onShowDetail } = props;
  const [item, setItem] = useState(onShowDetail(params.id));
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <p>{params.id}</p>
      <p>{item.item}</p>
      <p>{item.desc}</p>
      <Link to="/items">Back</Link>
    </>
  );
};

export default ItemDetail;
