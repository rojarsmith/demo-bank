import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
  cartItemStock
} from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../lib/product";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";
import { IoIosClose, IoMdCart } from "react-icons/io";

const Cart = ({
  cartItems,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart
}) => {
  const [quantityCount] = useState(1);
  const { addToast } = useToasts();
  let cartTotalPrice = 0;

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="購物車"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>購物車</li>
        </ul>
      </BreadcrumbOne>

      {/* cart content */}
      <div className="cart-content space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                {/* cart table */}
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th className="product-name" colSpan="2">
                        產品
                      </th>
                      <th className="product-price">價格</th>
                      <th className="product-quantity">數量</th>
                      <th className="product-subtotal">總價</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      cartTotalPrice += discountedPrice * product.quantity;
                      return (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                              as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                            >
                              <a>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    product.thumbImage[0]
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                              as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                            >
                              <a>{product.name}</a>
                            </Link>
                            {product.selectedProductColor &&
                            product.selectedProductSize ? (
                              <div className="product-variation">
                                <span>
                                  顏色: {product.selectedProductColor}
                                </span>
                                <span>尺寸: {product.selectedProductSize}</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>

                          <td className="product-price">
                            <span className="price">${discountedPrice}</span>
                          </td>

                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <button
                                className="dec qtybutton"
                                onClick={() =>
                                  decreaseQuantity(product, addToast)
                                }
                              >
                                -
                              </button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                className="inc qtybutton"
                                onClick={() =>
                                  addToCart(product, addToast, quantityCount)
                                }
                                disabled={
                                  product !== undefined &&
                                  product.quantity &&
                                  product.quantity >=
                                    cartItemStock(
                                      product,
                                      product.selectedProductColor,
                                      product.selectedProductSize
                                    )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="total-price">
                            <span className="price">
                              ${(discountedPrice * product.quantity).toFixed(2)}
                            </span>
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() => deleteFromCart(product, addToast)}
                            >
                              <IoIosClose />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
              <Col lg={12} className="space-mb--r100">
                <div className="cart-coupon-area space-pt--30 space-pb--30">
                  <Row className="align-items-center">
                    <Col lg={7} className="space-mb-mobile-only--30">
                      <div className="lezada-form coupon-form">
                        <form>
                          <Row>
                            
                          </Row>
                        </form>
                      </div>
                    </Col>
                    <Col lg={5} className="text-left text-lg-right">
                      <button
                        className="lezada-button lezada-button--medium"
                        onClick={() => deleteAllFromCart(addToast)}
                      >
                        清空購物車
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} className="ml-auto">
                <div className="cart-calculation-area">
                  <h2 className="space-mb--40">結帳總金額</h2>
                  <table className="cart-calculation-table space-mb--40">
                    <tbody>
                      <tr>
                        <th>小計</th>
                        <td className="subtotal">
                          ${cartTotalPrice.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <th>含稅總價</th>
                        <td className="total">${cartTotalPrice.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-calculation-button text-center">
                    <Link
                      href="/other/checkout"
                      as={process.env.PUBLIC_URL + "/other/checkout"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        開始結帳
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCart />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">購物車裡面沒東西</p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        現在去逛逛!!
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
