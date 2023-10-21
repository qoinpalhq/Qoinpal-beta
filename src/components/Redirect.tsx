interface RedirectProps {
  href: string;
  linkText: string;
  linkColor: string;
  normalText?: string;
  className?: string;
  icon?: string;
}

function Redirect({
  href,
  className,
  linkColor,
  linkText,
  normalText,
  icon,
}: RedirectProps) {
  return (
    <div className={`${className}`}>
      <p className="w-full flex items-center gap-2">
        <span>{normalText && normalText} </span>
        <a href={href} className={`${linkColor} flex gap-2`}>
          {linkText}{" "}
          <span className="flex items-center">
            <img src={icon} alt="" width={"20px"} />
          </span>
        </a>
      </p>
    </div>
  );
}

export default Redirect;
