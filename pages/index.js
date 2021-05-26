export default function Home({ data }) {
  return (
    <div>
      {data &&
        data.map((result) => (
          <div key={result.id}>
            <h1>{result.Title}</h1>
          </div>
        ))}
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
