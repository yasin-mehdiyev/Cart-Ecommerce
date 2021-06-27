import React from "react";
import "../../../src/App.css";

const ProductItem = ({ product, addBucket }) => {
  return (
    <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {product.name} -{" "}
              <span className="badge-custom badge-secondary-custom">
                {product.price} AZN
              </span>{" "}
            </h5>
            <p className="card-text">{product.desc}</p>
          </div>
          <div className="card-footer">
            <a
              className="btn btn-primary d-block"
              onClick={() => addBucket(product.id)}
            >
              Add Bucket
            </a>
          </div>
        </div>
    </React.Fragment>
  );
};

export default ProductItem;
