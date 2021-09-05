import { useParams, Link } from "react-router-dom";
const Details = (props) => {
  const { id, detail } = useParams();
  console.log("id: ", id);
  console.log(props);

  return (
    <>
      <p>{detail}</p>
      <p>{props.details}</p>
      <Link to={`/items/${id}`}>Back</Link>
    </>
  );
};

export default Details;
