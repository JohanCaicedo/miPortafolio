import React from "react";
import styles from "./index.css";
import { motion } from "framer-motion";
import {
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <motion.div className='box'>
          <motion.h1
          whileHover={{scale:1.6}}
          whileTap={{scale:0.9}}
          >
            Hello world
          
          </motion.h1>
        </motion.div>
      <HeroSection sectionId="hero" />
      </Page>
    </>
  );
}
