import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="結帳"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>結帳</li>
        </ul>
      </BreadcrumbOne>
      <div className="checkout-area space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col>
                <div className="lezada-form">
                  <form className="checkout-form">
                    <div className="row row-40">
                      <div className="col-lg-7 space-mb--20">
                        {/* Billing Address */}
                        <div id="billing-form" className="space-mb--40">
                          <h4 className="checkout-title">遞送地址</h4>
                          <div className="row">
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>姓</label>
                              <input type="text" placeholder="姓" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>名</label>
                              <input type="text" placeholder="名" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>電子郵件</label>
                              <input type="email" placeholder="電子郵件" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>電話號碼</label>
                              <input type="text" placeholder="電話號碼" />
                            </div>
                            <div className="col-12 space-mb--20">
                              <label>公司名稱</label>
                              <input type="text" placeholder="公司名稱" />
                            </div>
                            <div className="col-12 space-mb--20">
                              <label>地址</label>
                              <input type="text" placeholder="地址" />
                              <input type="text" placeholder="" />
                            </div>
                            
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>郵遞區號</label>
                              <input type="text" placeholder="郵遞區號" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="row">
                          {/* Cart Total */}
                          <div className="col-12 space-mb--50">
                            <h4 className="checkout-title">結帳總金額</h4>
                            <div className="checkout-cart-total">
                              <h4>
                                產品 <span>金額</span>
                              </h4>
                              <ul>
                                {cartItems.map((product, i) => {
                                  const discountedPrice = getDiscountPrice(
                                    product.price,
                                    product.discount
                                  ).toFixed(2);

                                  cartTotalPrice +=
                                    discountedPrice * product.quantity;
                                  return (
                                    <li key={i}>
                                      {product.name} X {product.quantity}{" "}
                                      <span>${discountedPrice}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>
                                小計{" "}
                                <span>${cartTotalPrice.toFixed(2)}</span>
                              </p>
                              <p>
                                運費 <span>$00.00</span>
                              </p>
                              <h4>
                                總計{" "}
                                <span>${cartTotalPrice.toFixed(2)}</span>
                              </h4>
                            </div>
                          </div>
                          {/* Payment Method */}
                          <div className="col-12">
                            <h4 className="checkout-title">付款方式</h4>
                            <div className="checkout-payment-method">
                              
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_bank"
                                  name="payment-method"
                                  defaultValue="bank"
                                />
                                <label htmlFor="payment_bank">
                                  銀行轉帳
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_cash"
                                  name="payment-method"
                                  defaultValue="cash"
                                />
                                <label htmlFor="payment_cash">
                                  信用卡
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_paypal"
                                  name="payment-method"
                                  defaultValue="paypal"
                                />
                                <label htmlFor="payment_paypal">Line Pay</label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_payoneer"
                                  name="payment-method"
                                  defaultValue="payoneer"
                                />
                                <label htmlFor="payment_payoneer">
                                  Apple Pay
                                </label>
                              </div>
                              
                            </div>
                            <button className="lezada-button lezada-button--medium space-mt--20">
                              送出訂單
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      購物車裡面沒東西啊!!
                    </p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        馬上再去看看!!
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

export default connect(mapStateToProps)(Checkout);
