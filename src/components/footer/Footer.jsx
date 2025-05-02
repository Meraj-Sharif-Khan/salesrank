import React from "react";
import Cta from "./Cta";
import FooterLinks from "./FooterLinks";
import Contact from "./Contact";
import Social from "./Social";

const footerLink = [
  {
    heading: "Navigation",
    links: [
      {
        name: "Service",
        link: "/",
      },
      {
        name: "Agency",
        link: "/",
      },
      {
        name: "Case",
        link: "/",
      },
      {
        name: "Study",
        link: "/",
      },
      {
        name: "Resource",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
    ],
  },
  {
    heading: "Licence",
    links: [
      {
        name: "Privacy",
        link: "/",
      },
      {
        name: "Policy",
        link: "/",
      },
      {
        name: "Copyright",
        link: "/",
      },
      {
        name: "Email",
        link: "/",
      },
      {
        name: "Address",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <Cta />
        <div className="mt-[112px] flex justify-between flex-wrap">
          <div className="order-2 lg:order-1">
            <Social />
          </div>
          <div className="flex lg:justify-between flex-wrap w-[100%] lg:max-w-[50%] gap-5 order-1 lg:order-2 py-10 lg:py-0">
            {footerLink.map((e, i) => (
              <FooterLinks key={i} heading={e.heading} links={e.links} />
            ))}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
