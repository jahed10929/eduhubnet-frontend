// src/app/page.js

import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import WorldMap from '../components/WorldMap';
import SearchSection from '../components/SearchSection'; // <-- This was the missing line

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