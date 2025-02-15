import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex mt-22">
      <div className="container flex flex-col md:flex-row mt-16 md:mt-auto md:py-22">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex justify-center md:justify-start gap-4 md:gap-12">
            <img src={logo} alt="Logo" className="h-8 md:h-11 lg:h-14 w-auto " />
            <Link to="https://patronite.pl/ksaweryknotz" className="text-primary border border-black px-3 md:px-5 py-2 md:py-4 rounded-full">Wesprzyj nas</Link>
          </div>
          <div>
            <p className="text-secondary md:block hidden">
              Copyright © 2024 Nauczyciele Metod
              <br /> Rozpoznawania Płodności
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-12 lg:gap-22 justify-center md:justify-end">
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4 text-secondary">
              <li>
                <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
              <li>
                <Link to="https://headless.smdweb.pl/wp-content/uploads/2025/02/zasady_portalu.pdf">Zasady portalu</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4 text-secondary">
              <li>
                <Link to="/metody-nauczania">Metody nauczania</Link>
              </li>
              <li>
                <Link to="/o-nas">O nas</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>

          
          </div>
          
        </div>
        <p className="text-secondary pb-4 text-xs text-center mt-12 md:hidden block">
              Copyright © 2024 Nauczyciele Metod Rozpoznawania Płodności
            </p>
      </div>
    </footer>
  );
};

export default Footer;
