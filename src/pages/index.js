import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Johan Caicedo portafolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Perfil profesional" />
        <InterestsSection sectionId="details" heading="Habilidades" />
        <ProjectsSection sectionId="features" heading="Proyectos" />
        <ContactSection sectionId="github" heading="Contacto" />
      </Page>
    </>
  );
}
