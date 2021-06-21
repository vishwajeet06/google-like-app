import Head from "next/head";
import Header from "./api/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
      </Head>
      {/* header */}
      <Header />
      {/* body */}

      {/* footer */}
    </div>
  );
}
