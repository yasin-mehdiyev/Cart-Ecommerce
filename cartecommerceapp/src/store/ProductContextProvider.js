import React, { createContext, useEffect, useState } from "react";
import * as ProductService from "../services/ProductService";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [data, setDataState] = useState([]);

  const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  const [cart, setcart] = useState(storage);
  

  useEffect(() => {
    (async function init() {
      await getProduct();
    })();
  }, []);

  const getProduct = async () => {
    try {
        const resp = await ProductService.getProducts();
        setDataState(resp);
    } catch (err) {
      console.log(err);
    }
  };

  const addBucket = (productId) => {
    if (data.length > 0) {
      const isAddedBucket = cart.every((item) => {
        return item.id !== productId;
      });
      if (isAddedBucket) {
        const elem = data.filter((prc) => prc.id === productId);
        setcart([...cart, ...elem]);
      } else {
        alert("This product is exist in bucket");
      }

    }
  };

  const removeElemFromBucket = (productId) => {
    const elemAfterRemove = cart.filter((item) => item.id !== productId);
    setcart([...elemAfterRemove]);
  };

  const increase = (id) => {
    const updatedCart = cart.map((c) => {
      if (c.id === id) {
        ++c.count;
        return c;
      }
      return c;
    });
    setcart(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart.map((c) => {
      if (c.id === id && c.count > 1) {
        --c.count;
        return c;
      }
      return c;
    });
    setcart(updatedCart);
  };

  return (
    <ProductContext.Provider
      value={{
        data,
        addBucket,
        removeElemFromBucket,
        cart,
        increase,
        decrease,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
