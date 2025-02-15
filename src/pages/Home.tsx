import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DynamicSection from "../components/DynamicSection";
import SingleTeacher from "../components/SingleTeacherCard";
import LoadingError from "../components/LoadingError";
import anna from "../assets/anna.png";
import { useQuery } from "@apollo/client";
import { GET_TEACHERS, GET_HOME_CONTENT } from "../graphql/GetQueries";

function Home() {
  const nauczycieleRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#nauczyciele" && nauczycieleRef.current) {
      nauczycieleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const {
    loading: contentLoading,
    error: contentError,
    data: contentData,
  } = useQuery(GET_HOME_CONTENT);

  const {
    loading: teachersLoading,
    error: teachersError,
    data: teachersData,
  } = useQuery(GET_TEACHERS);

  if (contentLoading || contentError) {
    return <LoadingError loading={contentLoading} error={contentError} />;
  }

  return (
    <section className="container mx-auto">
      {/* Main Section */}
      <DynamicSection
        title={contentData.pageBy.stronaglowna.tresc.naglowek}
        text={contentData.pageBy.stronaglowna.tresc.tekst}
        image={anna}
        buttonText="Dowiedz się więcej o NPR"
        buttonLink="/metody-nauczania"
      />

      {/* Nauczyciele Section */}
      <div ref={nauczycieleRef} className="nauczyciele">
        <h2 className="text-3xl font-bold mt-16 mb-12">Nauczyciele</h2>
        {teachersLoading || teachersError ? (
          <LoadingError loading={teachersLoading} error={teachersError} />
        ) : (
          <div className="flex justify-center md:justify-between flex-wrap gap-4 mt-8">
            {teachersData.nauczyciele.nodes.map((teacher: any) => (
              <SingleTeacher
                key={teacher.databaseId}
                fullName={teacher.title}
                city={teacher.informacje.lokalizacja.miasto}
                state={teacher.informacje.lokalizacja.wojewodztwo}
                image={teacher.featuredImage.node.sourceUrl}
                methods={["Angielska", "Termiczna", "Kalendarzyk"]}
                meetings={teacher.informacje.spotkanie}
                buttonLink={`/nauczyciel/${teacher.databaseId}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Partnerzy Section */}
      <h2 className="text-3xl font-bold mt-16 mb-12">Partnerzy</h2>
      <div className="flex justify-between flex-wrap gap-4 my-8">
        {contentData.pageBy.stronaglowna.partnerzy.map(
          (p: any, index: number) => (
            <a
              key={index}
              className="w-[46%] md:w-[28%] lg:w-[20%] flex"
              href={p.partner.adresUrl}
            >
              <img
                className="object-contain rounded-3xl w-full shadow-2xl shadow-gray-500 p-6"
                src={p.partner.logo.node.sourceUrl}
                alt={`Partner ${index}`}
              />
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default Home;
