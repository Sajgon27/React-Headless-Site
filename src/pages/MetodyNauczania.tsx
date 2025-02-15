
import DynamicSection from "../components/DynamicSection";
import anna from "../assets/anna.png";
import { GET_METODY_CONTENT } from "../graphql/GetQueries";
import { useQuery } from "@apollo/client";
import spinner from "../assets/spinner.gif";

function MetodyNauczania() {
  const {
    loading: contentLoading,
    error: contentError,
    data: contentData,
  } = useQuery(GET_METODY_CONTENT);

  if (contentLoading) return <img className="mx-auto" src={spinner} />;
  if (contentError) return <p>Błąd: {contentError.message}</p>;
  const {
    pageBy: {
      metodyNauczania: {
        iSekcja: { naglowek: Naglowek1, tekst: Tekst1 },
        iiSekcja: { naglowek: Naglowek2, tekst: Tekst2 },
        iiiSekcja: { naglowek: Naglowek3, tekst: Tekst3 },
        ivSekcja: { naglowek: Naglowek4, tekst: Tekst4 },
      },
    },
  } = contentData;

  const sections = [
    { naglowek: Naglowek2, tekst: Tekst2 },
    { naglowek: Naglowek3, tekst: Tekst3 },
    { naglowek: Naglowek4, tekst: Tekst4 },
  ];

  return (
    <>
      <section className="bg-yellow">
        <div className="container">
          <DynamicSection title={Naglowek1} text={Tekst1} image={anna} />
        </div>
      </section>
      <section className="mt-20">
        <div className="container">
          {sections.map((section, index) => (
            <div key={index} className="mt-18">
              <h3 className="text-2xl font-bold mb-2">{section.naglowek}</h3>
              <div dangerouslySetInnerHTML={{ __html: section.tekst }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MetodyNauczania;
