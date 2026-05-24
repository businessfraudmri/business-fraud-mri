import { useEffect } from 'react';
import { setSEO } from '../utils/seo';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import MainContent from '../components/MainContent';
import BottomSections from '../components/BottomSections';

export default function Home() {
  useEffect(() => {
    setSEO(
      'Home',
      'See what others miss. Prevent fraud before it hurts. Business Fraud MRI™ helps organizations identify hidden fraud risks, red flags, vulnerabilities and control gaps.'
    );
  }, []);

  return (
    <>
      <Hero />
      <StatsBar />
      <MainContent />
      <BottomSections />
    </>
  );
}
