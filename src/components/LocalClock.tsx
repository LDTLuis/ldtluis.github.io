import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';

/** Goiás segue o horário de Brasília. */
const TIME_ZONE = 'America/Sao_Paulo';

/** Hora atual em Goiás, atualizada na virada de cada minuto. */
export function LocalClock({ className = '' }: { className?: string }) {
  const { lang, t } = useI18n();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      setNow(new Date());
      interval = window.setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  const time = new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);

  return (
    <p className={className}>
      <Icon name="clock" size={15} strokeWidth={2} />
      <span className="sr-only">{t.hero.localTime}: </span>
      <time dateTime={now.toISOString()}>{time}</time>
      <span aria-hidden="true">·</span>
      <span>{t.hero.location}</span>
    </p>
  );
}
