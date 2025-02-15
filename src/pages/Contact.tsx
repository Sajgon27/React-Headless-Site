import { useMutation } from "@apollo/client";
import  { useState } from "react";
import anna from "../assets/anna.png";
import { useForm } from "react-hook-form";

import { SEND_CONTACT_EMAIL } from "../graphql/PostQueries";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendEmail, {  loading, error }] = useMutation(SEND_CONTACT_EMAIL);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (formData: any) => {
    try {
      const { data } = await sendEmail({ variables: formData });
      if (data.sendContactEmail.success) {
        setSubmitted(true);
      } else {
        alert(data.sendContactEmail.message);
      }
    } catch (err) {
      console.error("Submission error", err);
    }
  };



  return (
    <section className="bg-yellow">
      <div className="container flex flex-col md:flex-row py-16 md:py-28">
        <div className="w-full md:w-1/2 md:pr-12">
          <h1>Chcesz się z nami skontaktować?</h1>
          <p className="mt-8 mb-6">
            Chętnych do kontaktu w celu umieszczenia wlasnego ogloszenia oraz
            innych spraw zapraszamy do kontaktu na:{" "}
            <span>
              <a href="mailto:apostolstwo@szansaspotkania.pl">
                {" "}
                apostolstwo@szansaspotkania.pl
              </a>
            </span>
            , lub za pomocą formularza kontaktowego:
          </p>

          {submitted ? (
            <div className="text-green-600 text-lg mt-4">
              Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <input
                {...register("name", { required: "Imię jest wymagane" })}
                placeholder="Imię i nazwisko"
                className="p-2 border border-gray-300 rounded"
              />
              {errors.name && typeof errors.name.message === "string" && (
                <span className="text-red-500">{errors.name.message}</span>
              )}

              <input
                {...register("email", {
                  required: "Email jest wymagany",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                    message: "Nieprawidłowy email",
                  },
                })}
                placeholder="Email"
                className="p-2 border mt-4 border-gray-300 rounded"
              />
              {errors.email && typeof errors.email.message === "string" && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <textarea
                {...register("message", {
                  required: "Wiadomość jest wymagana",
                })}
                placeholder="Wiadomość"
                className="p-2 h-32 mt-4 border border-gray-300 rounded"
              />
              {errors.message && typeof errors.message.message === "string" && (
                <span className="text-red-500">{errors.message.message}</span>
              )}

              <button
                type="submit"
                className="bg-primary cursor-pointer mt-4 py-[15px] px-[20px] font-bold text-[18px] rounded-full text-white p-2 hover:opacity-80"
                disabled={loading}
              >
                {loading ? "Wysyłanie..." : "Wyślij"}
              </button>
              {error && (
                <p className="text-red-500">
                  Błąd podczas wysyłania wiadomości.
                </p>
              )}
            </form>
          )}
        </div>
        <div className="w-full mt-16 md:mt-0 md:w-1/2">
          <img className="w-full" src={anna} alt="Anna" />
        </div>
      </div>
    </section>
  );
}
