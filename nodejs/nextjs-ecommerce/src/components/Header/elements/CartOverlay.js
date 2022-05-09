import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../lib/product";
import { deleteFromCart } from "../../../redux/actions/cartActions";

const CartOverlay = ({
  activeStatus,
  getActiveStatus,
  cartItems,
  deleteFromCart
}) => {
  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <div className={`cart-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">購物車</h3>
          {cartItems.length >= 1 ? (
            <div className="cart-product-wrapper">
              <div className="cart-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {cartItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);

                    cartTotalPrice += discountedPrice * product.quantity;

                    return (
                      <div className="single-cart-product" key={i}>
                        <span className="cart-close-icon">
                          <button
                            onClick={() => deleteFromCart(product, addToast)}
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Link
                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                            as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                          >
                            <a>
                              <img
                                src={
                                  process.env.PUBLIC_URL + product.thumbImage[0]
                                }
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="content">
                          <h5>
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                              as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                            >
                              <a>{product.name}</a>
                            </Link>
                          </h5>
                          {product.selectedProductColor &&
                          product.selectedProductSize ? (
                            <div className="cart-item-variation">
                              <span>顏色: {product.selectedProductColor}</span>
                              <span>尺寸: {product.selectedProductSize}</span>
                            </div>
                          ) : (
                            ""
                          )}
                          <p>
                            <span className="cart-count">
                              {product.quantity} x{" "}
                            </span>{" "}
                            <span className="discounted-price">
                              ${discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CustomScroll>
              </div>
              {/*=======  subtotal calculation  =======*/}
              <p className="cart-subtotal">
                <span className="subtotal-title">小計:</span>
                <span className="subtotal-amount">
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </p>
              {/*=======  cart buttons  =======*/}
              <div className="cart-buttons">
                <Link
                  href="/other/cart"
                  as={process.env.PUBLIC_URL + "/other/cart"}
                >
                  <a>前往購物車</a>
                </Link>
                <Link
                  href="/other/checkout"
                  as={process.env.PUBLIC_URL + "/other/checkout"}
                >
                  <a>結帳去!</a>
                </Link>
              </div>
              {/*=======  free shipping text  =======*/}
              <p className="free-shipping-text">
                訂單金額超過$999，免運!!
              </p>
            </div>
          ) : (
            "購物車裡面沒東西!!"
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
