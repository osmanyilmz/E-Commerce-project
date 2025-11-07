import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (fetchState === "FETCHING") return <p>Loading...</p>;
  if (fetchState === "FAILED") return <p>Failed to load categories.</p>;

  return (
    <div>
      <h2>Top 5 Categories</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {categories
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
          .map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.title
                .toLowerCase()
                .replace(" ", "-")}/${cat.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div style={{ width: "200px", textAlign: "center" }}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h4>{cat.title}</h4>
                <p>⭐ {cat.rating}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
