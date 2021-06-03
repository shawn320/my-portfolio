import CustomButton from "../components/CustomButton";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Portait from "../components/Portrait";
import Icons from "../components/Icons";

export default function Home({ data }) {
  return (
    <div className="bg-midnight m-0 h-screen w-screen font-mono text-primary">
      <NavBar about="ABOUT" projects="PROJECTS" contact="CONTACT" />
      <div className="flex flex-wrap content m-0">
        <Portait />
        <Icons />
      </div>
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
