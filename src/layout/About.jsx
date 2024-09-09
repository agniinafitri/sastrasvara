import Logo from "/public/assets/images/logo_sastrasvara.png"

const About = (id) => {
  return (
    <div id={id} className="aboutus container mb-5">
      <h2 className="text-center mb-4">Tentang Kami</h2>
      <img src={Logo} alt="Sastra Svara" />
      <p>
        Sastra Svara adalah platform yang didedikasikan untuk pegiat bahasa dan
        sastra Indonesia agar semakin memudahkan menyimak pembelajaran yang
        dituangkan dalam media kreatif dan inovatif. Sastra Svara diharapkan
        dapat membantu guru, siswa, dan pegiat bahasa dan sastra Indonesia untuk
        memaksimalkan potensi dari cerita rakyat setempat. Sastra Svara
        memformulasikan platform ini sebagai media bagi cerita rakyat agar tetap
        lestari sehingga dimanfaatkan bagi seluruh khalayak yang mencintainya.
        Kali ini Sastra Svara diperuntukkan kepada masyarakat Malang Raya
        bekerja sama dengan MGMP Bahasa Indonesia SMP di Kota Malang.
      </p>
    </div>
  );
};

export default About;
