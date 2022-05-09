import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-bootstrap";
import ProductGridWrapper  from "../ProductThumb/ProductGridWrapper";

const ProductTab = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <div className="product-tab space-mb--r100">
      <Container>
        <Tab.Container defaultActiveKey="popular">
          <Nav
            variant="pills"
            className="product-tab__navigation text-center justify-content-center space-mb--r60"
          >
            <Nav.Item>
              <Nav.Link eventKey="new">新品</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="popular">熱門產品</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sale">促銷品</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="new">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={newProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="popular">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={popularProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="sale">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={saleProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTab;
