import { useEffect, useRef } from 'react';

/**
 * Estrelas que flutuam e são atraídas pelo cursor, adaptado do Gravity Stars do
 * Animate UI (https://animate-ui.com/docs/components/backgrounds/gravity-stars).
 *
 * Diferenças do original: o cursor é lido na janela inteira (o fundo fica atrás do
 * conteúdo, com pointer-events: none), a quantidade de estrelas acompanha a área,
 * a animação pausa fora da tela e fica parada com "reduzir movimento".
 * A cor vem do `color` do CSS.
 */
interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  glow: number;
}

const settings = {
  /** Uma estrela a cada tantos px² de área. */
  areaPerStar: 16000,
  minStars: 30,
  maxStars: 90,
  starsSize: 2,
  starsOpacity: 0.75,
  glowIntensity: 15,
  movementSpeed: 0.3,
  mouseInfluence: 110,
  gravityStrength: 75,
};

export function GravityStars({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!container || !canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mouse = { x: -9999, y: -9999 };
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let color = '#fff';
    let frame: number | undefined;
    let visible = true;

    const createStars = () => {
      const count = Math.min(
        settings.maxStars,
        Math.max(settings.minStars, Math.round((width * height) / settings.areaPerStar)),
      );
      stars = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = settings.movementSpeed * (0.5 + Math.random() * 0.5);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * settings.starsSize + 1,
          opacity: settings.starsOpacity,
          glow: 1,
        };
      });
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      color = getComputedStyle(container).color;
      createStars();
      draw();
    };

    const update = () => {
      const { mouseInfluence, gravityStrength, starsOpacity } = settings;
      for (const p of stars) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseInfluence && dist > 0) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          const g = force * gravityStrength * 0.001;
          p.vx += (dx / dist) * g;
          p.vy += (dy / dist) * g;
          p.opacity = Math.min(1, starsOpacity + force * 0.4);
          p.glow += (1 + force * 2 - p.glow) * 0.15;
        } else {
          p.opacity = Math.max(starsOpacity * 0.3, p.opacity - 0.02);
          p.glow = Math.max(1, p.glow + (1 - p.glow) * 0.08);
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx = (p.vx + (Math.random() - 0.5) * 0.001) * 0.999;
        p.vy = (p.vy + (Math.random() - 0.5) * 0.001) * 0.999;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      for (const p of stars) {
        ctx.shadowBlur = settings.glowIntensity * p.glow * 2;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      update();
      draw();
      frame = visible && !reducedMotion.matches ? requestAnimationFrame(loop) : undefined;
    };

    const play = () => {
      if (frame === undefined && visible && !reducedMotion.matches) frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    intersectionObserver.observe(container);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    reducedMotion.addEventListener('change', play);
    play();

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      reducedMotion.removeEventListener('change', play);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
