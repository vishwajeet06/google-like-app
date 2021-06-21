import Head from "next/head";
import Header from "./api/components/Header";
import Body from "./api/components/Body";
import Footer from "./api/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      {/* header */}
      <Header />
      {/* body */}
      <Body />

      {/* footer */}
      <Footer />
    </div>
  );
}
