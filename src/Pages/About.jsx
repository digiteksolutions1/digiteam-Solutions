import HeroSection from '../components/About/HeroSection';
import OurJourney from '../components/About/OurStory';
import LeadershipTeam from '../components/About/TeamSection';
import MissionVision from '../components/About/MissionVision';
import CoreValues from '../components/About/ValuesSection';

export default function About() {
  return (
    <>
      <HeroSection />
      <MissionVision />
      <CoreValues />
      <LeadershipTeam />
      <OurJourney />
    </>
  );
}