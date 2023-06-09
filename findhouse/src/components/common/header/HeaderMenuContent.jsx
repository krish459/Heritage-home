import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  // const home = [
  // {
  //   id: 1,
  //   name: "Home 1",
  //   routerPath: "/",
  // },
  // { id: 2, name: "Home 2", routerPath: "/home-2" },
  // {
  //   id: 3,
  //   name: "Home 3",
  //   routerPath: "/home-3",
  // },
  // { id: 4, name: "Home 4", routerPath: "/home-4" },
  // { id: 5, name: "Home 5", routerPath: "/home-5" },
  // { id: 6, name: "Home 6", routerPath: "/home-6" },
  // { id: 7, name: "Home 7", routerPath: "/home-7" },
  // { id: 8, name: "Home 8", routerPath: "/home-8" },
  // { id: 9, name: "Home 9", routerPath: "/home-9" },
  // { id: 10, name: "Home 10", routerPath: "/home-10" },
  // ];

  // const listing = [
  //   {
  //     id: 1,
  //     title: "Listing Grid",
  //     items: [
  //       {
  //         name: "Grid v1",
  //         routerPath: "/listing-grid-v1",
  //       },
  //       {
  //         name: "Grid v2",
  //         routerPath: "/listing-grid-v2",
  //       },
  //       {
  //         name: "Grid v3",
  //         routerPath: "/listing-grid-v3",
  //       },
  //       {
  //         name: "Grid v4",
  //         routerPath: "/listing-grid-v4",
  //       },
  //       {
  //         name: "Grid v5",
  //         routerPath: "/listing-grid-v5",
  //       },
  //       {
  //         name: "Grid v6",
  //         routerPath: "/listing-grid-v6",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Listing List",
  //     items: [
  //       {
  //         name: "List V1",
  //         routerPath: "/listing-list-v1",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Listing Style",
  //     items: [
  //       {
  //         name: "Parallax Style",
  //         routerPath: "/parallax-style",
  //       },
  //       {
  //         name: "Slider Style",
  //         routerPath: "/slider-style",
  //       },
  //       {
  //         name: "Map Header",
  //         routerPath: "/map-header",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Listing Half",
  //     items: [
  //       {
  //         name: "Map V1",
  //         routerPath: "/listing-map-v1",
  //       },
  //       {
  //         name: "Map V2",
  //         routerPath: "/listing-map-v2",
  //       },
  //       {
  //         name: "Map V3",
  //         routerPath: "/listing-map-v3",
  //       },
  //       {
  //         name: "Map V4",
  //         routerPath: "/listing-map-v4",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Agent View",
  //     items: [
  //       {
  //         name: "Agent V1",
  //         routerPath: "/agent-v1",
  //       },
  //       {
  //         name: "Agent V2",
  //         routerPath: "/agent-v2",
  //       },
  //       {
  //         name: "Agent Details",
  //         routerPath: "/agent-details",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Agencies View",
  //     items: [
  //       {
  //         name: "Agencies V1",
  //         routerPath: "/agency-v1",
  //       },
  //       {
  //         name: "Agencies V2",
  //         routerPath: "/agency-v2",
  //       },
  //       {
  //         name: "Agencies Details",
  //         routerPath: "/agency-details",
  //       },
  //     ],
  //   },
  // ];

  

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      const contactButton = document.querySelector(".btn.flaticon-user");
      if (contactButton) {
        contactButton.click();
      }
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      {/* <li className="dropitem">
        <a
          href="#"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
          <span className="arrow"></span>
        </a>
        <!-- Level Two-->

        <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listing</span>
          <span className="arrow"></span>
        </a>
        <!-- Level Two-->
        <ul className="sub-menu ">
          {listing.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              <!-- Level Three-->
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath === route.pathname ||
                  page.routerPath + "/[id]" === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Property</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath === route.pathname ||
                      page.routerPath + "/[id]" === route.pathname
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              <!-- Level Three-->
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath ||
                          val.routerPath + "/[id]" === route.pathname
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ||
                    item.routerPath + "/[id]" === route.pathname
                      ? "ui-active"
                      : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      <li className="last">
        <Link href="/">
          <a
            className={route.pathname === "/" ? "ui-active" : undefined}
            style={{
              color: "black",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
            }}
          >
            Home
          </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/gallery">
          <a
            className={route.pathname === "/gallery" ? "ui-active" : undefined}
            style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}
          >
            Property Plans
          </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/compare">
          <a
            className={route.pathname === "/compare" ? "ui-active" : undefined}
            style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}
          >
            Features
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
          style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}
        >
          <span className="dn-lg">Contact Us</span>
        </a>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> Create Listing</span>
          </a>
        </Link>
      </li> */}
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
