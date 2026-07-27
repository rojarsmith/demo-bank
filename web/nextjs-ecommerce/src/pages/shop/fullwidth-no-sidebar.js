import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import  LayoutTwo  from "../../components/Layout/LayoutTwo";
import  BreadcrumbOne  from "../../components/Breadcrumb/BreadcrumbOne";
import { getSortedProducts } from "../../lib/product";
import ShopHeader from "../../components/Shop/ShopHeader";
import ShopFilter from "../../components/Shop/ShopFilter";
import ShopProducts from "../../components/Shop/ShopProducts";

const FullwidthNoSidebar = ({ products }) => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 20;
  
  //頁面的排版方式
  const getLayout = (layout) => {
    setLayout(layout);
  };

  //這是要調控價錢高到低或是低到高的那個function
  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };
  
  //把篩選的條件從子component傳回來
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutTwo>

      {/* 商品展示頁首的那一塊 */}
      <BreadcrumbOne
        pageTitle="商品展示頁"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>首頁</a>
            </Link>
          </li>

          <li>展示頁</li>
        </ul>
      </BreadcrumbOne>

      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          getFilterSortParams={getFilterSortParams}
          productCount={products.length}
          sortedProductCount={currentData.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
          layoutClass="wide"
        />

        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown>

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container className="wide">
            <Row>
              <Col>
                {/* shop products */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData
  };
};

export default connect(mapStateToProps)(FullwidthNoSidebar);
