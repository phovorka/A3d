import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// Lazy loading komponent
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const Featurette = React.lazy(() => import("../components/Featurette"));
const ContactForm = React.lazy(() => import("../components/ContactForm"));
const SectionPlus = React.lazy(() => import("../components/sectionPlus"));

import "../styles/index.css"; 
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
     <Suspense fallback={<div>Loading...</div>}>
    <section>
      <div className="Home container py-2">
            <HeroSection />
      </div>
      
      <Featurette
        heading={t('featurette1.heading')} 
        subheading={t('featurette1.subheading')} 
        description={t('featurette1.description')} 
        modelSrc="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/2.glb?v=1725470571436"
        modelId="bon1"
      />

      <Featurette
        heading={t('featurette2.heading')} 
        subheading={t('featurette2.subheading')} 
        description={t('featurette2.description')} 
        modelSrc="https://cdn.glitch.global/2bc6ab97-e692-4373-99f6-6e1f98a13434/profil.glb?v=1722942266930"
        modelId="bon2"
      />
      <SectionPlus />

      <ContactForm />
    </section>
       </Suspense>
  );
};

export default Home;
