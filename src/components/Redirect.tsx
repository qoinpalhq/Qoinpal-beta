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
      <p>
        <span>{normalText && normalText} </span>
        <a href={href} className={linkColor}>
          {linkText} <img src={icon} alt="" />
        </a>
      </p>
    </div>
  );
}

export default Redirect;
