import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Moontech</h1>
        <p>@All Rights Reserved</p>
        <p>Copyright 2023</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target={"_blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"_blank"}>
            Instagram
          </a>
          <a href="https://facebook.com" target={"_blank"}>
            Facebook
          </a>
          <a href="https://github.com" target={"_blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
