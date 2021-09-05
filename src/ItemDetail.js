import {
  useParams,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetail = (props) => {
  const { path, url } = useRouteMatch();
  console.log(path);
  const params = useParams();
  console.log(params);
  const { onShowDetail } = props;
  const [item, setItem] = useState(onShowDetail(params.id));
  const [toggle,setToggle] = useState(false)
  const handleToggleClick = ()=>{
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }
  const { details } = item;
  //   console.log(details);
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <p>{params.id}</p>
      <p>{item.item}</p>
      <p>{item.desc}</p>
      <button onClick={handleToggleClick} >{toggle ? "hide":"show"}</button>
  {toggle && <p>{item.details}</p>}
      

      <Link to="/items">Back</Link>
    </>
  );
};

export default ItemDetail;
