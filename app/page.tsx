import Header from "@/src/layout/Header/header";
import Banner from "@/src/sections/herobanner/hero";
import { getXSchool } from "@/src/api/herobanner/herobanner";
export default async function Home() {
  const data = await getXSchool();
  return (
    <main className="relative">
      <Header />
      <Banner title={data.banner_title} image={data.banner_image} />
    </main>
  );
}