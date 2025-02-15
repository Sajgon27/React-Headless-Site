interface ButtonProps {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  additionalStyles?:string;
}

export default function Button({ text, href, additionalStyles, bgColor = "bg-primary", textColor = "text-white" }: ButtonProps) {
  return (
    <a 
      href={href} 
      className={`inline-block mt-6 py-[15px] px-[20px] font-bold text-[18px] rounded-full ${additionalStyles} transition ${bgColor} ${textColor} hover:opacity-80`}
    >
      {text}
    </a>
  );
}
