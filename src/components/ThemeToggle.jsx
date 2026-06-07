export function ThemeToggle({ theme, onToggle, label }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <span
        className={`theme-icon theme-icon--${theme === 'dark' ? 'moon' : 'sun'}`}
        aria-hidden="true"
      />
    </button>
  )
}
