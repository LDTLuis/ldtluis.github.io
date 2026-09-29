import { useCopyEmail } from '../hooks/useCopyEmail';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';

/**
 * Botão que copia o e-mail. Com `showLabel`, mostra "Copiar"/"Copiado" ao lado do
 * ícone; sem ele, o texto fica só para leitores de tela.
 */
export function CopyEmailButton({ className, showLabel = false }: { className?: string; showLabel?: boolean }) {
  const { t } = useI18n();
  const { copied, copy } = useCopyEmail();
  const label = copied ? t.contact.emailCopied : t.contact.copyEmail;

  return (
    <button type="button" className={className} onClick={copy} data-copied={copied || undefined} title={label}>
      <Icon name={copied ? 'check' : 'copy'} size={16} strokeWidth={2} />
      {showLabel ? (
        <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
      ) : (
        <span className="sr-only" aria-live="polite">
          {label}
        </span>
      )}
    </button>
  );
}
