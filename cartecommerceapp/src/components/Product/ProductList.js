import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../store/ProductContextProvider";
import { SearchbarContext } from "../../store/SearchbarContextProvider";
import ProductItem from "./ProductItem";
import Loader from "react-loader-spinner";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { classes } from "../../utilits/StyleComponent";

const ProductList = () => {
  const { data, addBucket, cart } = useContext(ProductContext);
  const { searchTerm } = useContext(SearchbarContext);
  const [ loading, setloading ] = useState(false);

  localStorage.setItem('cart',JSON.stringify(cart))

  useEffect(() => {
    setloading(false);

    setTimeout(() => {
      setloading(true);
    }, 2000);

  }, []);

  const filtered = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  return (
    <React.Fragment>
      <div className="row mt-4">
        {
        !loading ? (
          <div style={classes.spinnerLoader}>
              <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  timeout={2000}
              />
          </div>
        ) : 
        filtered?.length ? (
          filtered?.map((item) => {
            return (
              <div className="col-lg-4 mb-4" key={item.id}>
                <ProductItem product={item} addBucket={addBucket} />
              </div>
            );
          })
        ) : (
          <div className="alert alert-warning text-center">No Data Found</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
