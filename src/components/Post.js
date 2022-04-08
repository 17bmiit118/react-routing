import { useParams, useSearchParams } from "react-router-dom";

const Post = () => {

    let {category,id} = useParams();
    let [searchParam, setSearchParam] = useSearchParams();
  
    return (
      <>
        <div>Post Page Category = {category} | ID = {id}</div>
        <div>Search Query Parameter {searchParam.get('price')} {searchParam.get('sort')}</div>
      </>
    )
}
  
  export default Post;