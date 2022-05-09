import { IoIosSearch } from "react-icons/io";

const MobileMenuSearch = () => {
  return (
    <div className="offcanvas-mobile-menu__search">
      <form>
        <input type="search" placeholder="搜尋" />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default MobileMenuSearch;
