/*import Pais from "./Pais"

export default function Paises({paises}){
    return(
        <div>
            {paises&&paises.map(e=>
            <Pais key={e.ID} ID={e.ID} name={e.name} region={e.region} flag={e.flag} capital={e.capital} area={e.area}/>
            )}
        </div>
    )
}*/
import React from "react";
import Pais from "./Pais";
import "./Paises.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="countryCards">
      {posts.map((post) => (
        <div key={post.ID}>
          <Pais
            ID={post.ID}
            name={post.name}
            region={post.region}
            flag={post.flag}
            capital={post.capital}
            area={post.area}
          />
        </div>
      ))}
    </ul>
  );
};

export default Posts;
