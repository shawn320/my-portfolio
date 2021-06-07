import CustomButton from "../components/CustomButton";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Portait from "../components/Portrait";
import Footer from "../components/Footer";

export default function Home({ data }) {
  return (
    <div className="bg-space m-0 h-screen w-screen font-mono text-primary">
      <NavBar about="ABOUT" projects="PROJECTS" contact="CONTACT" />
      <div className="content-intro">
        <Intro line1="Hello, I'm Shawn" line2="Junior web developer" />
        <CustomButton
          customStyles="intro-button px-8 py-4 text-gray-200"
          lable="More about me"
        />
      </div>
      <div className="flex-col content-portrait">
        <Portait />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // get contents from api
  const res = await fetch("http://localhost:1337/posts");
  const data = await res.json();
  return {
    props: { data },
  };
}
