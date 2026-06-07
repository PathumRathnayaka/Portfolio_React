import { BrandMark } from './BrandMark'
import { SocialIcon } from './SocialIcon'

export function Footer({ profile, socialHandle, socials }) {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="#top" aria-label={`${profile.name} home`}>
          <BrandMark />
          <span>{profile.name}</span>
        </a>
        <p>@{socialHandle}</p>
      </div>

      <div className="footer-socials" aria-label="Social media links">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            title={social.name}
          >
            <SocialIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}
