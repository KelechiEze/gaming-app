import React from 'react';
import Link from 'next/link';
import './FooterLinkColumn.css';

interface LinkItem {
  name: string;
  href: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => {
  return (
    <div className="link-column">
      <h3 className="column-title">{title}</h3>
      <ul className="column-links">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <Link href={link.href} className="link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
