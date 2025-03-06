import React from "react";
import SignUp from "./SignUp";

const FOOTER_LINKS = [
  { title: "FAQ", link: "/" },
  { title: "Help Centre", link: "/" },
  { title: "Account", link: "/" },
  { title: "Media Centre", link: "/" },
  { title: "Investor Relations", link: "/" },
  { title: "Jobs", link: "/" },
  { title: "Ways to Watch", link: "/" },
  { title: "Terms of Use", link: "/" },
  { title: "Privacy", link: "/" },
  { title: "Cookie Preferences", link: "/" },
  { title: "Corporate Information", link: "/" },
  { title: "Contact Us", link: "/" },
  { title: "Speed Test", link: "/" },
  { title: "Legal Notices", link: "/" },
  { title: "Only on Netflix", link: "/" },
];

const Footer = () => {
  return (
    <footer className="container section">
      <SignUp />
      <p className="text-sm text-[rgb(198,198,198)]">
        Questions? Call {"  "}
        <a href="tel:000-800-919-1743" className="underline">
          000-800-919-1743
        </a>
      </p>
      <ul className="grid grid-cols-4 gap-y-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {FOOTER_LINKS.map((item, index) => {
          return (
            <li cl>
              <a
                href={item.link}
                className="underline text-sm text-[rgb(198,198,198)]"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        <p>Netflix India</p>
        <h4>
          Cloned by{" "}
          <a
            href="https://www.linkedin.com/in/harishsanjay/"
            target="_blank"
            className="underline"
          >
            Harish Sanjay
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
