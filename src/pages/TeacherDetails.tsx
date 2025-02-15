import { useParams } from "react-router-dom";
import { GET_SINGLE_TEACHER, GET_ALL_TEACHERS } from "../graphql/GetQueries";
import { useQuery } from "@apollo/client";
import arrowRight from "../assets/arrow-right.png";
import arrowLeft from "../assets/arrow-left.png";
import spinner from "../assets/spinner.gif";

export default function TeacherDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_TEACHER, {
    variables: { id: id },
  });
  const { nauczyciel } = data || {};
  const { title, featuredImage, informacje } = nauczyciel || {};

  const {
    loading: allTeachersLoading,
    error: allTeachersError,
    data: allTeachersData,
  } = useQuery(GET_ALL_TEACHERS);

  if (error) return <p>Błąd: {error.message}</p>;

  if (allTeachersLoading || loading)
    return <img className="mx-auto" src={spinner} />;
  if (allTeachersError) return <p>Error: {allTeachersError.message}</p>;

  const currentIndex = allTeachersData.nauczyciele.nodes.findIndex(
    (teacher: any) => teacher.databaseId === Number(id)
  );

  const prevTeacher =
    currentIndex > 0
      ? allTeachersData.nauczyciele.nodes[currentIndex - 1]
      : null;

  const nextTeacher =
    currentIndex < allTeachersData.nauczyciele.nodes.length - 1
      ? allTeachersData.nauczyciele.nodes[currentIndex + 1]
      : null;



  return (
    <section className="bg-yellow py-2">
      <div className="container flex-wrap lg:flex-nowrap flex justify-between items-start gap-8 mt-12">
        <div className="w-full sm:w-[45%] lg:w-1/3">
          <img
            className="max-h-100 sm:max-h-full mx-auto sm:mx-0  rounded-3xl"
            src={featuredImage.node.sourceUrl}
          />
        </div>
        <div className="w-full sm:w-[45%] lg:w-1/3 flex flex-col items-start text-secondary">
          <h3 className="text-3xl font-bold  relative z-10">{title}</h3>
          <p className=" text-sm text-secondary relative z-10">
            {informacje.lokalizacja.miasto} (
            {informacje.lokalizacja.wojewodztwo})
          </p>
          <p className="mt-5 font-bold">Metoda:</p>
          <div className="mt-2">
            {informacje.metody.map((m: any, index: number) => (
              <span
                key={index}
                className="text-sm bg-primary rounded-3xl p-2 font-medium text-white mx-1"
              >
                {m.metoda}
              </span>
            ))}
          </div>
          <p className="mt-3">Spotkanie: {informacje.spotkanie}</p>
          <p className="mt-8 font-bold">Cennik:</p>
          <p
            className="text-15-custom"
            dangerouslySetInnerHTML={{ __html: informacje.cennik as string }}
          />
          <p className="mt-8 font-bold">Kontakt:</p>
          <p
            className="text-15-custom"
            dangerouslySetInnerHTML={{ __html: informacje.kontakt as string }}
          />
          <p className="mt-8 font-bold">Strony internetowe:</p>
          {informacje.stronyInternetowe.map((s: any, index: number) => (
            <a className="text-15-custom" href={s.strona} key={index}>
              {s.strona}
            </a>
          ))}
        </div>

        <div className="w-full lg:w-1/3 text-15-custom text-secondary">
          <p className="font-bold ">Edukacja:</p>
          <p
            dangerouslySetInnerHTML={{ __html: informacje.edukacja as string }}
          />
          <p className="mt-16 font-bold">Opis:</p>
          <p dangerouslySetInnerHTML={{ __html: informacje.opis as string }} />
        </div>
      </div>

      <div className="flex justify-between gap-2 container my-18">
        {prevTeacher && (
          <a
            className="flex gap-3 items-center font-bold"
            href={`/nauczyciel/${prevTeacher.databaseId}`}
          >
            <img className="object-contain" src={arrowLeft} />
            {prevTeacher.title}
          </a>
        )}
        {nextTeacher && (
          <a
            className="flex gap-3 items-center font-bold ml-auto"
            href={`/nauczyciel/${nextTeacher.databaseId}`}
          >
            {nextTeacher.title}{" "}
            <img className="object-contain" src={arrowRight} />
          </a>
        )}
      </div>
    </section>
  );
}
