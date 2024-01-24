import React from "react";

type TNavOptionsType = {
  route: string;
  path: string;
};


type NavbarProps = {
    navbarStyleAsInput: React.CSSProperties;
    navLinkStyleAsInput: React.CSSProperties;
  };

function Navbar({navbarStyleAsInput , navLinkStyleAsInput} : NavbarProps) {
  const navbarData: TNavOptionsType[] = [
    {
      route: "Services",
      path: "/services",
    },
    {
      route: "Products",
      path: "/products",
    },
    {
      route: "Courses",
      path: "/courses",
    },
    {
      route: "Blogs",
      path: "/blogs",
    },
  ];




  return (
    <div>
      <ul style={navbarStyleAsInput}>
        {navbarData.map((navOption, index) => (
          <li key={index} style={{ textDecoration: "none" }}>
            <a
              style={navLinkStyleAsInput}
              onMouseOver={(e) => (e.currentTarget.style.color = "#007bff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "blue")}
            >
              {navOption.route}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
