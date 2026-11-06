import Header from "@/src/layout/Header/header";
import Banner from "@/src/sections/herobanner/hero";
import { getXSchool } from "@/src/api/herobanner/herobanner";
import About from "@/src/sections/about/about";
import Founder from "@/src/sections/founder/founder";
import Programs from "@/src/sections/programs/programs";
import Quotes from "@/src/sections/slider/slider";
import Faq from "@/src/sections/questions/questions";

export default async function Home() {
  const data = await getXSchool();

  return (
    <main className="relative bg-[#E0E0E0]">
      <Header />
      <Banner title={data.banner_title} image={data.banner_image} />
      <About
        title={data.about_title}
        description={data.about_description}
        images={data.about_images}
      />
      <Founder founders={data.founders} />
      <Programs programs={data.programs} />
      <Quotes textSlider={data.text_slider} />
      <Faq title={data.faq_title} items={data.xschool_faq} />
    </main>
  );
}