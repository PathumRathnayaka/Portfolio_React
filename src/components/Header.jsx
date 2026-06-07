import { BrandMark } from './BrandMark'
import { ThemeToggle } from './ThemeToggle'

export function Header({ profile, navItems, theme, themeLabel, onThemeToggle }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <BrandMark />
        <span>{profile.name}</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>

      <ThemeToggle theme={theme} label={themeLabel} onToggle={onThemeToggle} />
    </header>
  )
}
