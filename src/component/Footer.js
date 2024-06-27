export default function Footer() {
  return (
    <footer
      className={`flex md:gap-48 gap-10 justify-center items-center bg-orange-100 h-48 w-full`}
    >
      <div className="LinkedIn">
        <a href="https://linkedin.com/in/morry-yu-690027301">
          <img
            className="w-7"
            src="/resources/linkedin-icon.svg"
            alt="linkedin-icon"
          />
        </a>
      </div>
      <div className="Github">
        <a href="https://github.com/Stamptax">
          <img className="w-7" src="/resources/github-icon.svg" alt="" />
        </a>
      </div>
      <div className="Email">
        <a href="mailt0:morry.haosenyu@gmail.com">
          <img className="w-7" src="/resources/google-gmail.svg" alt="" />
        </a>
      </div>
    </footer>
  );
}
