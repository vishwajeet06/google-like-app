import Head from "next/head";
import { useRouter } from "next/router";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import Sheader from "../components/Sheader";
import Sresults from "../components/Sresults";

function Search({ results }) {
  const router = useRouter();
  // console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}- google search</title>
      </Head>

      {/* search header */}
      <Sheader />
      <Sresults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
