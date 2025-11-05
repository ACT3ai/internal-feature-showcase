import React from 'react';

export default function DownloadButton({ href, filename, label }) {
  return (
    <a
      href={href}
      download={filename}
      className="button button--primary button--lg"
      style={{ marginTop: '1rem' }}
    >
      ⬇ {label}
    </a>
  );
}

