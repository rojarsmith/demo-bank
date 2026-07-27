import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosPin, IoIosCall, IoIosMail, IoIosClock } from "react-icons/io";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";
import  SectionTitleOne from "../../components/SectionTitle/SectionTitleOne";
import  SectionTitleTwo from "../../components/SectionTitle/SectionTitleTwo";

const Contact = () => {
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="聯絡我"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>聯絡方式</li>
        </ul>
      </BreadcrumbOne>
      <div className="contact-page-content-wrapper space-mt--r130 space-mb--r130">
        <div className="contact-page-top-info space-mb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleTwo
                  title="聯絡方式"
                  subtitle=""
                />
              </Col>
            </Row>
            <Row className="space-mb-mobile-only--m50">
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosPin />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">地址</h3>
                    <p className="content">
                    台北市信義區基隆路一段888號8樓
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosCall />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">電話</h3>
                    <p className="content">
                      
                      <span>(+00) 123 567990</span>
                    </p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosMail />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">電郵</h3>
                    <p className="content"> askme@jumbofun.fun </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosClock />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">營業時間</h3>
                    <p className="content">
                      一 – 五 : 09:00 – 20:00
                      <span>日 &amp; 六 : 10:30 – 22:00</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-page-map space-mb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0283960938687!2d121.55752521500624!3d25.033110383972716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc9fd9c1aeb%3A0xdf45878319a2ade1!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5Z-66ZqG6Lev5LiA5q61ODg46Jmf!5e0!3m2!1szh-TW!2stw!4v1644293079865!5m2!1szh-TW!2stw"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-page-form">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleOne title="聯絡我!" />
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                <div className="lezada-form contact-form">
                  <form>
                    <Row>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="姓名 *"
                          name="customerName"
                          id="customerName"
                          required
                        />
                      </Col>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="email"
                          placeholder="電郵*"
                          name="customerEmail"
                          id="customerEmail"
                          required
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="主題"
                          name="contactSubject"
                          id="contactSubject"
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <textarea
                          cols={30}
                          rows={10}
                          placeholder="訊息"
                          name="contactMessage"
                          id="contactMessage"
                          defaultValue={""}
                        />
                      </Col>
                      <Col md={12} className="text-center">
                        <button
                          type="submit"
                          value="submit"
                          id="submit"
                          className="lezada-button lezada-button--medium"
                        >
                          送出
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

export default Contact;
