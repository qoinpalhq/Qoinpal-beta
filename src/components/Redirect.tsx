interface RedirectProps {
  href: string;
  linkText: string;
  linkColor: string;
  normalText?: string;
  className?: string;
}

function Redirect({ href, linkColor, linkText, normalText }: RedirectProps) {
  return (
    <div>
      <p>
        <span>{normalText && normalText}</span>
        <a href={href} className={linkColor}>
          {linkText}
        </a>
      </p>
    </div>
  );
}

export default Redirect;
