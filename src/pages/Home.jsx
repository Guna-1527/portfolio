import HeroContent from '../components/Home/HeroContent';
import TechAnimation from '../components/Home/TechAnimation';
import MockUp from '../components/MockUp';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-24 pt-20">
      <div className="flex-1 flex items-center justify-center md:justify-start w-full">
        <HeroContent />
      </div>
      <div className="flex-1 h-[300px] md:h-full w-full">
        <MockUp />
      </div>
    </section>
  );
}