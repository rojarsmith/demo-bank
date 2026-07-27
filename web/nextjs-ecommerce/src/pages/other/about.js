import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import ModalVideo from "react-modal-video";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";
import  TestimonialOne  from "../../components/Testimonial/TestimonialOne";
import BrandLogoOne  from "../../components/BrandLogo/BrandLogoOne";
import testimonialData from "../../data/testimonials/testimonial-one.json";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

const About = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="關於我"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>我是誰</li>
        </ul>
      </BreadcrumbOne>
      {/* about content */}
      <div className="about-content space-mt--r130 space-mb--r130">
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                {/* section title */}
                <div className="about-title-container text-center">
                  <h1>JumboFun</h1>
                  <h2 className="title space-mb--15">
                    科技 &amp; 樂趣 的完美結合
                  </h2>
                  <p className="title-text">
                    Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                    ndisse suscipit sagittis leo sit met condimentum estibulum
                    is Suspe ndisse suscipit sagittis leo sit met condimentum
                    estibulorem ipsum dolor sit amet, consectetur cing elit.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* about video content */}
        <div className="about-video-content space-mb--r100">
          <Container>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                {/*=======  about video area  =======*/}
                <div
                  className="about-video-bg space-mb--60"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-video-bg.png"
                    })`
                  }}
                >
                  

                  <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                    <div className="play-icon text-center space-mb--40">
                      <ModalVideo
                        channel="youtube"
                        isOpen={modalStatus}
                        videoId="feOScd2HdiU"
                        onClose={() => isOpen(false)}
                      />
                      <button onClick={() => isOpen(true)}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-play-100x100.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    
                  </div>
                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                <Row>
                  <Col md={6}>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">地址</h2>
                      <p className="widget-content">
                        台北市信義區基隆路一段888號8樓
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">電話</h2>
                      <p className="widget-content">(+00) 123 567990</p>
                    </div>
                    <div className="about-widget">
                      <h2 className="widget-title space-mb--25">電郵</h2>
                      <p className="widget-content">askme@jumbofun.fun</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="about-page-text">
                      <p className="space-mb--35">
                        Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                        ndisse suscipit sagittis leo sit estibulum issim Lorem
                        ipsum dolor sit amet, consectetur cing elit. ipsum dolor
                        sit amet, consectetur cing elit. Suspe ndisse suscipit
                        sagittis leo sit es
                      </p>
                      <Link
                        href="/"
                        as={process.env.PUBLIC_URL + "/"}
                      >
                        <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                          <IoMdAdd /> 購物去
                        </a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* testimonial */}
        <TestimonialOne
          testimonialData={testimonialData}
          backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
        />
        <div className="space-mb--r100"></div>
        {/* brand logo */}
        <BrandLogoOne brandLogoData={brandLogoData} />
      </div>
    </LayoutTwo>
  );
};

export default About;
