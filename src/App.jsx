import { useEffect, useMemo, useState } from 'react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import {
  experience,
  navItems,
  profile,
  projects,
  skills,
  socialHandle,
  socials,
} from './data/portfolio'
import './App.css'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const storedTheme = window.localStorage.getItem('portfolio-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const themeLabel = useMemo(
    () => (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'),
    [theme],
  )

  return (
    <div className="portfolio-shell">
      <Header
        profile={profile}
        navItems={navItems}
        theme={theme}
        themeLabel={themeLabel}
        onThemeToggle={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
      />

      <main id="top">
        <Hero profile={profile} />
        <Intro />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} socialHandle={socialHandle} socials={socials} />
    </div>
  )
}

export default App
