import Button from "./Button";
interface DynamicSectionProps {
  title: string;
  text: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function DynamicSection({
  title,
  text,
  image,
  buttonText,
  buttonLink,
}: DynamicSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-12 gap-8 items-center w-full mx-auto ">
      <div className="text-center lg:pr-8 md:text-left w-full lg:w-1/2">
        <h1>{title}</h1>
        <div
          className="mt-8 mb-6 text-"
          dangerouslySetInnerHTML={{ __html: text }}
        />

        {buttonText && buttonLink && (
          <Button
            text={buttonText}
            href={buttonLink}
            bgColor="bg-primary"
            textColor="text-white"
          />
        )}
      </div>

      <div className="lg:flex justify-center hidden  lg:w-1/2">
        <img src={image} alt="Dynamic" className="max-w-full h-auto " />
      </div>
    </div>
  );
}
