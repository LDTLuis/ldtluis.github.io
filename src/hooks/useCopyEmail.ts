import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from '../data/site';

/** Copia o e-mail do perfil; `copied` fica true por alguns segundos para dar o retorno visual. */
export function useCopyEmail(resetAfter = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Sem a API de área de transferência (contexto inseguro ou permissão negada).
      const input = document.createElement('textarea');
      input.value = profile.email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), resetAfter);
  }, [resetAfter]);

  return { copied, copy };
}
