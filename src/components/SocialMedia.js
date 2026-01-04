import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a href="https://www.linkedin.com/in/ezequiel-oliveira-8a7767189/" target="_blank" rel="noopener noreferrer">
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a href="https://github.com/Ezequieloliveiras" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:github" />
      </a>
      <a href="https://www.instagram.com/ezequieloliveir_/" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:instagram" />
      </a>

      <a href="mailto:ezequieloliveiraes@outlook.com" target="_blank" rel="noopener noreferrer" className="mail-icon">
        <Icon icon="ant-design:mail-outlined" />
      </a>
    </section>
  )
}
