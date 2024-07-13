import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../CategoryProducts/Global/CircularProgress/CircularIndeterminate";
import Header from "../CategoryProducts/Global/Header/Header";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";

import product2 from "../../assets/images/product-listings/image 6.svg";
import product3 from "../../assets/images/product-listings/image 12.svg";
import product4 from "../../assets/images/product-listings/image 9.svg";
import product5 from "../../assets/images/product-listings/image 10.svg";
import product10 from "../../assets/images/Exfoliators/1.png";
import product11 from "../../assets/images/Exfoliators/2.png";
import product12 from "../../assets/images/Exfoliators/3.png";
import product13 from "../../assets/images/Exfoliators/4.png";
import product14 from "../../assets/images/Exfoliators/5.png";
import product20 from "../../assets/images/Moisturizers/1.png";
import product21 from "../../assets/images/Moisturizers/2.png";
import product22 from "../../assets/images/Toners/1.png";
import product23 from "../../assets/images/Toners/2.png";
import product24 from "../../assets/images/Toners/3.png";
import product25 from "../../assets/images/Treatments/1.png";
import product26 from "../../assets/images/Treatments/2.png";
import product27 from "../../assets/images/Treatments/3.png";
import product28 from "../../assets/images/Treatments/4.png";
import toggleFilter from "../../assets/icons/filter-mail-square.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../assets/icons/heart-filled-icon.svg";
import filterSM from "../../assets/icons/filter-sm.svg";
import "./Home.css";

//Arrange file structure later with api keys and vercel.json

function useSelectedCartProducts() {
  const [selectedCartProducts, set] = useState([]);
  const get = () => {
    return selectedCartProducts;
  };

  return { get, set };
}

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "/api/products?organization_id=0a36d850c31a45d39133b32a2fd057a7&reverse_sort=false&Appid=SR2T6ZLOZN05508&Apikey=a8215cad7cfc4b2e93d320a64b03587d20240712233833515464"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        const initialProduct = result.items;
        console.log(initialProduct);

        const enhancedProducts = initialProduct.map((product) => ({
          ...product,
          quantity: 1,
          like: false,
          cart: false,
        }));

        setProducts(enhancedProducts);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Products:", products);

  const [cartVisibility, setCartVisibility] = useState(false);
  const selectedCartProductState = useSelectedCartProducts();

  // const initialProducts = [
  //   {
  //     id: 2,
  //     image: product2,
  //     description: "Supergoop Unseen Sunscreen SPF 40",
  //     sold: "3,000",
  //     price: 25,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     image: product3,
  //     description: "Trader Joe’s Daily Facial Sunscreen SPF 40",
  //     sold: "70,000",
  //     price: 75,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     image: product4,
  //     description: "Cerave Ultra Absorbent Facial Sunscreen SPF 40",
  //     sold: "100,000",
  //     price: 12,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 5,
  //     image: product5,
  //     description: "Dr. Jart+ Mineral Sunscreen SPF 50+",
  //     sold: "10,000",
  //     price: 15,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },

  //   {
  //     id: 11,
  //     image: product11,
  //     description: "Origins Ginzing Refreshing Scrub",
  //     sold: "45,000",
  //     price: 39,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 12,
  //     image: product12,
  //     description: "Zo Skin Health Exfoliating Polish",
  //     sold: "17,950",
  //     price: 33,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 13,
  //     image: product13,
  //     description: "Fresh Sugar Face Polish",
  //     sold: "12,988",
  //     price: 7,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 14,
  //     image: product14,
  //     description: "SkinMedica Exfoliating Cleanser",
  //     sold: "54,100",
  //     price: 50,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },

  //   {
  //     id: 20,
  //     image: product20,
  //     description: "The Ordinary Natural Moisturizing Factors ",
  //     sold: "2,000",
  //     price: 17,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 21,
  //     image: product21,
  //     description: "L'Oréal Paris Collagen Moisture Filler",
  //     sold: "70,000",
  //     price: 75,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 22,
  //     image: product22,
  //     description: "Renée Rouleau facial toner",
  //     sold: "578",
  //     price: 79,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },

  //   {
  //     id: 23,
  //     image: product23,
  //     description: "The Rose & Hyaluronic Acid Deep Toner ",
  //     sold: "7890",
  //     price: 32,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },

  //   {
  //     id: 25,
  //     image: product25,
  //     description: "Biossance Squalane + Probiotic Gel",
  //     sold: "700",
  //     price: 18,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 26,
  //     image: product26,
  //     description: "Cleanse & Polish Hot Cloth Cleanser",
  //     sold: "495",
  //     price: 5,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 24,
  //     image: product24,
  //     description: "This Freck Beauty face ",
  //     sold: "200",
  //     price: 84,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     id: 10,
  //     image: product10,
  //     description: "Acure Brightening Facial Scrub",
  //     sold: "31,000",
  //     price: 15,
  //     like: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  // ];

  const toggleLike = (id) => {
    setProducts(
      products.map((product, index1) => {
        return index1 === id ? { ...product, like: !product.like } : product;
      })
    );
  };

  const toggleCart = (id) => {
    const newProducts = products.map((product, index1) => {
      if (index1 === id) {
        const updatedProduct = { ...product, cart: !product.cart };
        if (updatedProduct.cart) {
          selectedCartProductState.set((prevCartProducts) => [
            ...prevCartProducts,
            updatedProduct,
          ]);
        } else {
          selectedCartProductState.set((prevCartProducts) =>
            prevCartProducts.filter((item) => item.id !== id)
          );
        }
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  return !loading ? (
    <div className="productlistings-home-main">
      <Header
        setCartVisibility={setCartVisibility}
        selectedCartProductState={selectedCartProductState}
      />

      <div className="productlisting-content">
        {cartVisibility && (
          <>
            <Overlay />
            <Cart
              setCartVisibility={setCartVisibility}
              selectedCartProductState={selectedCartProductState}
            />
          </>
        )}

        <div className="productlistings-header">
          <p className="productlistings-title">All Products</p>
          <Link to="/sunscreens">
            <div className="toggle-filter" id="toggle-filter-lg">
              <span>Filter by Category</span>
              <img src={toggleFilter} alt="Filter" />
            </div>
          </Link>
        </div>

        {products.map((product, index) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
              />
              <img
                src={product.like ? heartFilledIcon : heartIcon}
                className="heart-icon"
                onClick={() => toggleLike(index)}
                alt="Like button"
              />
              <img
                src={product.cart ? cartFilledIcon : cartIcon}
                className="cart-icon"
                onClick={() => toggleCart(index)}
                alt="Cart button"
              />
            </div>
            {/* {console.log(product.photos[0].url)} */}
            <p className="prodDesc">{product.name}</p>
            <p className="prodSold">{10000} sold</p>
            {/* <p className="prodPrice">${product.current_price[0].XAF[0]}</p> */}
            <p className="prodPrice">$100</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <CircularIndeterminate />
  );
};

export default Home;
