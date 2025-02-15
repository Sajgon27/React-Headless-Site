import { GET_POLITYKA_CONTENT } from "../graphql/GetQueries";
import { useQuery } from "@apollo/client";

import LoadingError from "../components/LoadingError";

export default function PrivacyPolicy() {
  const { loading, error, data } = useQuery(GET_POLITYKA_CONTENT);

  return (
    <section className="bg-yellow py-8">
      <div className="container">
        <h1 className="text-center mt-18 mb-12">Polityka Prywatności</h1>
        {loading || error ? (
          <LoadingError loading={loading} error={error} />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: data.pageBy.politykaPrywatnosci.tekst,
            }}
          />
        )}
      </div>
    </section>
  );
}
