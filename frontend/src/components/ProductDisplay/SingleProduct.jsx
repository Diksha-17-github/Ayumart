// // SingleProduct.js
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useShopContext } from "../../context/ShopContext";
// import productData from "../Assets/productdata";

// const SingleProduct = () => {
//   const { getSingleProduct, isSingleLoading, singleProduct } = useShopContext();
//   const { id } = useParams();

//   useEffect(() => {
//     getSingleProduct(`${productData}?id=${id}`);
//   }, [getSingleProduct, id]);

//   if (isSingleLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!singleProduct || singleProduct.isError) {
//     return <p>Error loading product</p>;
//   }

//   const { name, company, price, description, category, stock, stars, reviews } = singleProduct;

//   return (
//     <div>
//       <h1>{name}</h1>
//       {/* Display other product details here */}
//     </div>
//   );
// };

// export default SingleProduct;
