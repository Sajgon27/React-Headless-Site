import DynamicSection from "../components/DynamicSection";
import anna from "../assets/anna.png";
import { GET_ONAS_CONTENT } from "../graphql/GetQueries";
import { useQuery } from "@apollo/client";
import LoadingError from "../components/LoadingError";

function ONas() {
  const {
    loading: contentLoading,
    error: contentError,
    data: contentData,
  } = useQuery(GET_ONAS_CONTENT);

  if (contentLoading || contentError) {
    return <LoadingError loading={contentLoading} error={contentError} />;
  }
  const {
    pageBy: {
      oNas: {
        iSekcja: { naglowek: Naglowek1, tekst: Tekst1 },
        iiSekcja: { naglowek: Naglowek2, tekst: Tekst2 },
        iiiSekcja: { naglowek: Naglowek3, tekst: Tekst3 },
      },
    },
  } = contentData;

  return (
    <>
      <section className="bg-yellow py-12">
        <div className="container">
          <DynamicSection title={Naglowek1} text={Tekst1} image={anna} />
        </div>
      </section>
      <section className="mt-20">
        <div className="container mb-22">
          <div>
            <h3 className="text-2xl font-bold mb-2">{Naglowek2}</h3>
            <div dangerouslySetInnerHTML={{ __html: Tekst2 }} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row container gap-18">
          <div className="w-full md:w-1/2">
            <img className="w-full" src={anna} alt="Anna" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">{Naglowek3}</h3>
            <div dangerouslySetInnerHTML={{ __html: Tekst3 }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ONas;
