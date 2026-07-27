import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../lib/product";
import LayoutTwo  from "../../components/Layout/LayoutTwo";
import BreadcrumbOne from "../../components/Breadcrumb/BreadcrumbOne";
import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";

const Wishlist = ({
  wishlistItems,
  cartItems,
  addToCart,
  deleteFromWishlist,
  deleteAllFromWishlist
}) => {
  const { addToast } = useToasts();

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="願望清單"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>願望清單</li>
        </ul>
      </BreadcrumbOne>

      {/* wishlist content */}
      <div className="wishlist-content space-mt--r130 space-mb--r130">
        <Container>
          {wishlistItems && wishlistItems.length >= 1 ? (
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
                      <th className="product-subtotal">&nbsp;</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      const cartItem = cartItems.filter(
                        (item) => item.id === product.id
                      )[0];

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

                          <td>
                            {product.affiliateLink ? (
                              <a
                                href={product.affiliateLink}
                                target="_blank"
                                className="lezada-button lezada-button--medium"
                              >
                                現在下單
                              </a>
                            ) : product.variation &&
                              product.variation.length >= 1 ? (
                              <Link
                                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                              >
                                <a className="lezada-button lezada-button--medium">
                                  選項
                                </a>
                              </Link>
                            ) : product.stock && product.stock > 0 ? (
                              <button
                                onClick={() => addToCart(product, addToast)}
                                className={` lezada-button lezada-button--medium ${
                                  cartItem !== undefined &&
                                  cartItem.quantity > 0
                                    ? "active"
                                    : ""
                                } `}
                                disabled={
                                  cartItem !== undefined &&
                                  cartItem.quantity > 0
                                }
                                title={
                                  product !== undefined
                                    ? "已放入購物車"
                                    : "放入購物車"
                                }
                              >
                                {cartItem !== undefined && cartItem.quantity > 0
                                  ? "已放入購物車"
                                  : "放入購物車"}
                              </button>
                            ) : (
                              <button
                                disabled
                                className="active lezada-button lezada-button--medium"
                              >
                                沒有庫存
                              </button>
                            )}
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() =>
                                deleteFromWishlist(product, addToast)
                              }
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
                    <Col lg={5} className="text-left text-lg-right ml-auto">
                      <button
                        className="lezada-button lezada-button--medium"
                        onClick={() => deleteAllFromWishlist(addToast)}
                      >
                        清空願望清單
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoIosHeartEmpty />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">願望清單裡面沒東西!</p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        現在就去逛逛!
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
    wishlistItems: state.wishlistData,
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
