const links = [
  {
    href: "https://es-la.facebook.com/",
    element: <span className="bi bi-facebook custom-icon"></span>,
  },
  {
    href: "https://www.instagram.com/",
    element: <span className="bi bi-instagram custom-icon"></span>,
  },
  {
    href: "https://x.com/?lang=es",
    element: <span className="bi bi-twitter-x custom-icon"></span>,
  },
  {
    href: "https://github.com/",
    element: <span className="bi bi-github custom-icon"></span>,
  },
  {
    href: "https://ar.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F",
    element: <span className="bi bi-linkedin custom-icon"></span>,
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <h3 className="bg-primary">
          Podes comunicarte con nosotros a traves de los siguientes links:
        </h3>
        {links.map((link, i) => (
          <a key={i} target="_blank" href={link.href}>
            <button>{link.element}</button>
          </a>
        ))}
        <hr />
        <p className="bg-primary">
          <small>Todos Los Derechos Reservados © 2024</small>
        </p>
      </footer>
    </>
  );
};

export default Footer;
