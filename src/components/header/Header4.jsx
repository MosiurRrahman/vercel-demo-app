import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  scrollY: 0,
  sidebar: false,
  modalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu: "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "SET_SCROLL_Y":
      return {
        ...state,
        scrollY: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case "TOGGLE_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}

function Header4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "SET_SCROLL_Y", payload: scrollY });
  };

  const handleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="topbar-area top-style-two">
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-xl-6 align-items-center d-xl-flex d-none">
              <div className="topbar-contact-left">
                <ul className="contact-list d-flex">
                  <li>
                    <i className="bi bi-geo-alt" />{" "}
                    <a href="mailto:info@domainname.com">
                      71 Pilgrim Avenue, Chevy Chase
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-telephone-plus" />{" "}
                    <a href="tel:+17632275032">+1 763-227-5032</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope" />{" "}
                    <a href="mailto:info@domainname.com">info@domainname.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 d-md-flex  d-none align-items-center justify-content-center">
              <ul className="topbar-social-links d-flex">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/<+17632275032>">
                    <i className="bx bxl-whatsapp-square" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com">
                    <i className="bx bxl-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 d-flex justify-content-end">
              <div className="topbar-ad">
                <Link legacyBehavior href="/auction"><a>Live Auction</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={state.scrollY > 120 ? "sticky-header" : ""}>
        <div className="header-area header-style-four">
          <div className="container">
            <div className="row">
              <div className="col-xl-2  align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/icon/logo-red.png" alt="logo" />
                    </a>
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <ul className="nav-actions nav-inner-actions d-flex d-xl-none">
                      {/* <li><i class="bi bi-currency-dollar"></i></li> */}
                      <li className="header-account me-0 position-relative">
                        <Link
                          legacyBehavior
                          href="/login"
                          id="dropdownMenu3"
                          data-bs-toggle="dropdown"
                        >
                          <a>
                            <i className="bi bi-person-fill" />
                          </a>
                        </Link>
                        <ul
                          className="dropdown-menu account-list-mobile"
                          aria-labelledby="dropdownMenu3"
                        >
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>My account</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/register">
                              <a>Settings</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>
                          </li>
                          <li className="dropdown-item">
                            <Link legacyBehavior href="/register">
                              <a>Register</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="mobile-menu d-flex ">
                      <div
                        onClick={handleSidebar}
                        className={
                          state.sidebar
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <nav
                  className={state.sidebar ? "main-nav slidenav" : "main-nav"}
                >
                  <div className="inner-logo d-xl-none text-center mt-4">
                    <a href="#">
                      <img src="assets/images/logo-dark.png" alt="" />
                    </a>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <a href="#">Home</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("home-one")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "home-one"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/">
                            <a>Home Accessories</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-car">
                            <a>Home Car</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-land">
                            <a>Home Land</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-art-light">
                            <a>Home Light-art</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/index-art-dark">
                            <a>Home Dark-art</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Auction</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("auction")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "auction"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/auction">
                            auction
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/auction-details">
                            auction details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Pages</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("pages")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "pages"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/about">
                            <a>about</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/winner">
                            <a>winner</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/login">
                            <a>login</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/register">
                            <a>register</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/faq">
                            <a>faq</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/privacy">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/404">
                            <a>Error</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Blog</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("blog")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "blog"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Blog Standard</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>Blog Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact">
                        <a>contact </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="contact-mail inner-contact-mail mt-5 d-block d-xl-none">
                    <span>Message Us</span>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 d-none d-xl-flex align-items-center justify-content-end">
                <div className="nav-right d-flex align-items-center">
                  <ul className="nav-actions d-flex align-items-center">
                    <li className="header-account me-4 position-relative">
                      <Link
                        legacyBehavior
                        href="/login"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                      >
                        <a>
                          <i className="bi bi-person-fill" />
                        </a>
                      </Link>
                      <ul
                        className="dropdown-menu account-list"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li className="dropdown-item">
                          <Link legacyBehavior href="/login">
                            <a>My account</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link legacyBehavior href="/register">
                            <a>Settings</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link legacyBehavior href="/login">
                            <a>Login</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link legacyBehavior href="/register">
                            <a>Register</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-sidebar-btn">
                      <i className="bi bi-list" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header4;
