import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-gray">
        <div className="footer-custom">
          <div className="footer-lists">
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Nos offres à l'internationales</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="#" rel="nofollow">
                    France
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    United Kingdom
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Services client</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="#" rel="nofollow">
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    Mes annonces
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    Historique
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">A propos de nous</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="#" rel="nofollow">
                    Notre entreprise
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" rel="nofollow">
                    Nos partenaires
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Mon compte</h6>
              <ul className="ftr-links-sub">
                <li className="ftr-Login">
                  <span className="link login-trigger">
                    Accéder à mon compte
                  </span>
                </li>
                <li>
                  <span className="link" onClick="link('#')">
                    mes annonces
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-email">
            <h6 className="ftr-hdr">
              Soyez notifié des dernières offres d'emplois !
            </h6>
            <div id="ftr-email" className="ftr-email-form">
              <form id="ftrEmailForm" method="post" action="#">
                <div className="error">Entreez un email valide</div>
                <input
                  type="text"
                  name="email_address_"
                  id="ftrEmailInput"
                  className="input"
                  placeholder="Enter votre Email"
                />
                <input type="submit" className="button" value="Envoyer" />
              </form>
            </div>
            <div className="ftr-email-privacy-policy"></div>
          </div>
          <div className="footer-legal">
            <p>
              &copy; M&L.com Inc. Tout droits réservés. |{" "}
              <a href="#" rel="nofollow">
                Politique de confidentialité
              </a>{" "}
              |{" "}
              <a href="#" rel="nofollow">
                Conditions d'utilisation
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
