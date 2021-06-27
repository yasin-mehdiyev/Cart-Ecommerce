import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../store/ProductContextProvider";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { classes } from "../../utilits/StyleComponent";

const Cart = () => {
  const { cart, removeElemFromBucket, increase, decrease } = useContext(ProductContext);
  const [sum, setSumState] = useState(0);

  const calcSumOfProducts = () => {
    let sumOfElem = 0;
    if (cart.length > 0) {
      cart.map((item) => {
        sumOfElem = sumOfElem + Number(item.price * item.count);
        setSumState(sumOfElem);
      });
    }
  };

  useEffect(() => {
    calcSumOfProducts();
    localStorage.setItem('cart',JSON.stringify(cart))
  });

  return (
    <React.Fragment>
      <div className="row mt-4">
        {cart.length > 0 ? (
          <div>
            {cart.map((elem, index) => (
              <div
                className="col-lg-12 d-flex justify-content-center mt-4 mb-4"
                key={index}
              >
                <div className="card">
                  <div className="card-header d-flex justify-content-end">
                    <a
                      className="btn btn-primary"
                      onClick={() => removeElemFromBucket(elem.id)}
                    >
                      X
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {elem.name} -{" "}
                      <span className="badge-custom badge-secondary-custom">
                        {elem.price} AZN
                      </span>{" "}
                    </h5>
                    <p className="card-text">{elem.desc}</p>
                  </div>
                  <div className="card-footer text-center">
                    <AiOutlineMinus
                      onClick={() => decrease(elem.id)}
                      style={classes.cursorStyle}
                    />
                    <span style={classes.marginStyles}>{elem.count}</span>
                    <AiOutlinePlus
                      onClick={() => {
                        console.log('Increase: ', elem.id);
                        increase(elem.id);
                      }}
                      style={classes.cursorStyle}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <p style={classes.totalPriceStyles}>Total Price: {sum} AZN</p>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning text-center">
            Your Cart is Empty
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
