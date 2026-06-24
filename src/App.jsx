import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FullscreenMenu from './components/FullscreenMenu';
import HomePage from './pages/HomePage';
import RealWeddingsPage from './pages/RealWeddingsPage';
import Footer from './components/Footer';

// Smooth scroll libraries
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 1. Initialize Lenis + GSAP ScrollTrigger Synchronization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo kinetics
      smoothWheel: true,
      wheelMultiplier: 1.15,
    });

    lenis.on('scroll', ScrollTrigger.update);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Save globally for hash scroll interactions
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  // 2. Route Change Actions (Scroll-to-top & re-init reveal triggers)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }

    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    // Wait slightly to ensure components are drawn in the DOM
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
    };
  }, [location.pathname]);

  // 3. GSAP ScrollTrigger clip-path animation for Scroll Hero Headers
  useEffect(() => {
    // Kill any existing ScrollTriggers before recreation
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const timer = setTimeout(() => {
      const heroBgs = document.querySelectorAll('.scroll-hero-bg');
      
      heroBgs.forEach(bg => {
        const container = bg.closest('.scroll-hero-container');
        if (container) {
          gsap.fromTo(bg,
            { clipPath: 'inset(0% 0% 0% 0%)' },
            {
              clipPath: 'inset(100% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
              }
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);

  // 4. Smooth scroll to hash anchor tags on load/hashchange
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement && window.lenis) {
        setTimeout(() => {
          window.lenis.scrollTo(targetElement, { offset: -60, duration: 1.5 });
        }, 300);
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/real-weddings" element={<RealWeddingsPage />} />
      </Routes>

      <Footer />
    </>
  );
}
