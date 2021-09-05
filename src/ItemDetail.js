import {
  useParams,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Details from "./Details";
const ItemDetail = (props) => {
  const { path, url } = useRouteMatch();
  //   console.log(path);
  const params = useParams();
  console.log(params);
  const { onShowDetail } = props;
  const [item, setItem] = useState(onShowDetail(params.id));
  const { details } = item;
  console.log(details);
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <p>{params.id}</p>
          <p>{item.item}</p>
          <p>{item.desc}</p>
          <Link to={`${url}/details`}>A link</Link>
          <Link to={`${url}/extra`}>A second link</Link>
          <p>A match</p>
          <Link to="/items">Back</Link>
        </Route>
        <Route exact path={`${path}/:detail`}>
          <Details id={item.id} details={details} />
        </Route>
      </Switch>
    </>
  );
};

export default ItemDetail;
