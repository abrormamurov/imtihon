import React from "react";
import useCollection from "../hooks/useCollection";
import { Link } from "react-router-dom";
function BooksGrid() {
  let { data } = useCollection();

  return (
    <>
      {!data && (
        <h3 className="text-center mb-10 mt-5 font-bold">
          Loading ...{" "}
          <span className="loading loading-spinner loading-md "></span>
        </h3>
      )}
      <ul className="lg:grid-cols-3 grid grid-cols-1   md:grid-cols-2">
        {data &&
          data.map((dish, id) => {
            return (
              <li
                key={id}
                className="card w-96 border grow bg-base-100 shadow-xl m-10 md:w-96  "
              >
                <figure className="">
                  <img
                    className=" h-72 pt-2 object-fill size-80 rounded-md border-b-2 border-cyan-400"
                    src={dish.image}
                    alt="dish"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-between items-baseline ">
                    {dish.name}
                  </h2>
                  <p className="line-clamp-2 mb-2">{dish.description}</p>
                  <div className="flex gap-10 items-baseline ">
                    <span className=" text-accent"> Time: {dish.time}</span>
                  </div>
                  <div className="card-actions justify-start line-clamp-3">
                    <p className="bg-transparent">
                      Ingredients: {dish.Ingredients}
                    </p>
                  </div>

                  <Link
                    to={`/dish/${dish.name}`}
                    className="btn btn-primary bg-orange-600 mt-5"
                  >
                    More
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default BooksGrid;
