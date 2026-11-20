import React from 'react';

/**
 * Coluna clássica grega minimalista fiel à identidade visual
 * do cartão de visita de Adriano de Souza Pereira (ASP).
 */
export default function GreekColumnIcon({ className = 'w-8 h-8', ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Ábaco superior (capitel) */}
      <rect x="8" y="6" width="48" height="6.5" rx="0.8" />
      <rect x="8" y="14" width="48" height="1.6" rx="0.5" />
      <path d="M12.5 17H51.5L49 19.6H15L12.5 17Z" />

      {/* 6 caneluras verticais (proporção do emblema ASP) */}
      <rect x="13" y="21.5" width="3.2" height="23.5" rx="1.6" />
      <rect x="18.2" y="21.5" width="4.4" height="24.2" rx="2.2" />
      <rect x="24.6" y="21.5" width="5.4" height="24.6" rx="2.7" />
      <rect x="32" y="21.5" width="5.4" height="24.6" rx="2.7" />
      <rect x="39.4" y="21.5" width="4.4" height="24.2" rx="2.2" />
      <rect x="45.8" y="21.5" width="3.2" height="23.5" rx="1.6" />

      {/* Base escalonada (plinto) */}
      <path d="M14.5 47.4H49.5L51.5 50H12.5L14.5 47.4Z" />
      <rect x="8" y="51.4" width="48" height="1.6" rx="0.5" />
      <rect x="7" y="54.4" width="50" height="6.6" rx="0.8" />
    </svg>
  );
}
