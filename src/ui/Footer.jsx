const links = [
  {
    href: "https://es-la.facebook.com/",
    element: <span className="bi bi-facebook custom-icon"></span>,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="">
        {links.map((link, i) => (
          <button key={i}>
            <a href={link.href}>{link.element}</a>
          </button>
        ))}
      </footer>
    </>
  );
};

export default Footer;
