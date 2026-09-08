'use client';

import { useEffect, useState } from 'react';

const palettes = [
  { id: 'original', name: 'Original' },
  { id: 'sunset', name: 'Sunset' },
  { id: 'ocean', name: 'Ocean' },
  { id: 'electric', name: 'Electric' },
] as const;

type Palette = (typeof palettes)[number]['id'];

export default function PaletteSwitcher() {
  const [palette, setPalette] = useState<Palette>('original');

  useEffect(() => {
    const saved = window.localStorage.getItem('dream-first-palette');
    const next = palettes.some((item) => item.id === saved) ? saved as Palette : 'original';
    setPalette(next);
    document.documentElement.dataset.palette = next;
  }, []);

  const choosePalette = (next: Palette) => {
    setPalette(next);
    document.documentElement.dataset.palette = next;
    window.localStorage.setItem('dream-first-palette', next);
  };

  return (
    <div className="palette-switcher" aria-label="Choose website colour palette">
      <span className="palette-caption">Colour</span>
      <div className="palette-options">
        {palettes.map((item) => (
          <button
            className={`palette-dot palette-${item.id}`}
            type="button"
            key={item.id}
            aria-label={`Use ${item.name} colours`}
            aria-pressed={palette === item.id}
            title={item.name}
            onClick={() => choosePalette(item.id)}
          ><span /></button>
        ))}
      </div>
      <strong>{palettes.find((item) => item.id === palette)?.name}</strong>
    </div>
  );
}

