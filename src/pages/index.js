import React from "react";
import {
  AboutSection,
  ArticlesSection,
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
      <Seo title="Gatsby Starter for Portfolio Minimal" />
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
