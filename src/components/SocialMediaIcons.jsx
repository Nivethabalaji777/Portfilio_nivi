const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href= {process.env.REACT_APP_LINKED_IN}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href= {`https://mail.google.com/mail/?view=cm&fs=1&to=nivethabharathi77@gmail.com`}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="gmail-link" src="../assets/email.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href= {process.env.REACT_APP_GITHUB}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
