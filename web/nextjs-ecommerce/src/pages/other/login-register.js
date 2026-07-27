import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";

const LoginRegister = () => {
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="客戶登入頁"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>客戶登入</li>
        </ul>
      </BreadcrumbOne>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">登入</h2>
                        <p>歡迎您再度光臨!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="text"
                        placeholder="帳戶名稱"
                        required
                      />
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input type="password" placeholder="密碼" required />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <button className="lezada-button lezada-button--medium">
                        登入
                      </button>
                    </Col>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">記住我</span>
                      <a href="#" className="reset-pass-link">
                        忘記密碼了嗎?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">創建新帳號</h2>
                        <p>如果你沒有帳號，新建一個吧!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        電子郵件信箱 <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        密碼 <span className="required">*</span>{" "}
                      </label>
                      <input type="password" id="regPassword" required />
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium">
                        創建帳號
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
