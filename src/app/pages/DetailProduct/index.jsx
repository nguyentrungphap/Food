import React, { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { selectProducts } from "./../../redux/product/selector";
import { selectCategories } from "./../../redux/category/selector";
function DetailProduct() {
  const [quatity, setQuatity] = useState(1);
  const idParams = useParams();
  const productItem = useSelector(selectProducts);
  const CategorytItem = useSelector(selectCategories);
  console.log(productItem);
  const renderProductDetail = () => {
    return productItem.map((item) => {
      if (item.ProductID.toString() === idParams.id) {
        return (
          <form className={style.wrapper}>
            <div key={item.ProductID} className={style.detailProduct}>
              <div className={style.left}>
                <img src={item.ProductImage} alt={item.ProductImage} />
              </div>
              <div className={style.right}>
                <h3>{item.ProductName}</h3>
                {CategorytItem.map((items) =>
                  item.CategoryID === items.CategoryID ? (
                    <span>{items.CategoryName}</span>
                  ) : (
                    ""
                  )
                )}
                <div className={style.Size}>
                  {item.Size.map((size) => {
                    return <span>{size.SizeName}</span>;
                  })}
                </div>

                <div className={style.Color}>
                  {item.Color.map((color) => {
                    return <span className={style[color.ColerName]}></span>;
                  })}
                </div>

                {item.Sale > 0 ? (
                  <div className={style.sale}>
                    <p>${item.Price}</p>
                    <p className={style.price}>${item.Sale}</p>
                  </div>
                ) : (
                  <p>{item.Price}</p>
                )}
                <div className={style.quatity}>
                  <button
                    type="button"
                    onClick={() => {
                      quatity == 1 ? setQuatity(1) : setQuatity(quatity - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{quatity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuatity(quatity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className={style.descript}>
              <h3>Mô Tả</h3>
              <p>{item.Description}</p>
            </div>
          </form>
        );
      }
    });
  };
  return <>{renderProductDetail()}</>;
}

export default DetailProduct;
