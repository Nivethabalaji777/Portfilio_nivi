import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-30 bg-red pt-2 pb-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-dancingscript font-semibold text-4xl text-yellow">
            <span style={{color:"white"}}>N</span>ivetha <span style={{color:"white"}}>T</span>hangabharathi
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 <span style={{color:"white"}}>NIVETHA</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
