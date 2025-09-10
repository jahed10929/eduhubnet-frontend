// src/app/page.js

// We'll create these components in the next step
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import WorldMap from '../components/WorldMap';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchSection /> 
      <Stats />
      <WorldMap />
    </main>
  );
}