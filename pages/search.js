import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function Search({ results }) {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.inputRef} - Google Search</title>
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {


    const fakeData = true;
    const start = context.query.start || "0";


  const data = fakeData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.inputRef}&start=${start}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
