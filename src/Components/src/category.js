import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  return (
    <div>
      <h1>Category : {params.name}</h1>
    </div>
  );
};

export default Category;
