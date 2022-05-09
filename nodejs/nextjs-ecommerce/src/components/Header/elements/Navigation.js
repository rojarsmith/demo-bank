import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>首頁</a>
          </Link>
          
        </li>
        <li>
          <Link
            href="/shop/fullwidth-no-sidebar"
            as={process.env.PUBLIC_URL + "/shop/fullwidth-no-sidebar"}
          >
            <a>產品展示頁</a>
          </Link>
          
        </li>
        <li>
          <Link 
             href="/shop/product-basic/lorem-ipsum-decor-one" 
             as={process.env.PUBLIC_URL + "/shop/product-basic/lorem-ipsum-decor-one"}>
            <a>單一產品介紹頁</a>
          </Link>
        </li>

        <li>
          <Link 
             href="/other/checkout" 
             as={process.env.PUBLIC_URL + "/other/checkout"}>
            <a>結帳頁面</a>
          </Link>
        </li>

        <li>
          <Link 
             href="/other/about" 
             as={process.env.PUBLIC_URL + "/other/about"}>
            <a>關於我</a>
          </Link>
        </li>

        <li>
          <Link 
             href="/other/contact" 
             as={process.env.PUBLIC_URL + "/other/contact"}>
            <a>聯絡我</a>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
