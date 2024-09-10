
const Header = (href) => {
  return (
    <div className="header d-flex align-items-center justify-content-evenly mb-5">
      <div className="header-text">
        <h1>
          Menghidupkan <span>Sastra</span> <br /> Melalui <span>Svara</span>
        </h1>
        <h6 className="mt-3">
          Cerita Rakyat dalam Audio untuk Pecinta Bahasa dan Sastra Indonesia
        </h6>
        <button className="mt-2">
          <a href={`#${href}`}>Selengkapnya</a>
        </button>
      </div>
      <img src="/assets/images/logo_sastrasvara.png" class="figure-img img-fluid rounded" alt="..." />
    </div>
  );
};

export default Header;
