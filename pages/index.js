import CustomButton from "../components/CustomButton";
import NavBar from "../components/NavBar";

export default function Home({ data }) {
  return (
    <div className="font-mono text-primary">
      <NavBar about="ABOUT" projects="PROJECTS" contact="CONTACT" />
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
