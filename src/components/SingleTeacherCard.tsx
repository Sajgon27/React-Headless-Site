import Button from "./Button"; 

interface SingleTeacherProps {
  fullName: string;
  city: string;
  state: string;
  image: string;
  methods: string[];
  meetings: string;
  buttonLink: string;
}

export default function SingleTeacher({
  fullName,
  city,
  state,
  image,
  methods,
  meetings,
  buttonLink,
}: SingleTeacherProps) {
  return (
    <div className="relative flex flex-col bg-[#CEC0C0] rounded-3xl p-5 w:[90%] md:w-[48%] lg:w-[31%] overflow-hidden">
    <div
      className="p-5 m-auto rounded-3xl bg-center bg-cover flex justify-end flex-col max-w-full text-left w-100 h-100 md:h-120 relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-t before:from-black/50 before:to-transparent"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="text-2xl font-bold text-white relative z-10">{fullName}</h3>
      <p className="text-white text-sm relative z-10">
        {city} ({state})
      </p>
    </div>
  
    <p className="mt-4 text-secondary-100">Metoda:</p>
  
    <div className="flex flex-wrap  gap-y-2 flex-row mt-2">
      {methods.map((method, index) => (
        <span
          key={index}
          className="text-[15px] bg-white rounded-3xl p-2 font-medium text-black mx-1"
        >
          {method}
        </span>
      ))}
    </div>
  
    <p className="mt-4 text-secondary-100">Spotkanie: {meetings}</p>
    <Button
      text="Dowiedz się więcej"
      href={buttonLink}
      bgColor="bg-primary-100"
      textColor="text-white"
      additionalStyles = "self-end w-fit"
    />
  </div>
  
  );
}
