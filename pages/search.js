import Head from "next/head";
import Sheader from "./components/Sheader";

function Search() {
  return (
    <div>
      <Head>
        <title>Google search result</title>
      </Head>

      {/* search header */}
      <Sheader />
    </div>
  );
}

export default Search;
