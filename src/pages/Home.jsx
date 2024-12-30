
import SecBlogHome from "../components/section/SecBlogHome";
import SecHero from "../components/section/SecHero";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <SecHero />
      <SecBlogHome />
    </MainLayout>
  );
}
