import { useEffect, useId } from 'react';

interface SchemaOrgProps {
  schema: Record<string, unknown>;
}

/**
 * Injects a JSON-LD <script> into <head> for the current page
 * and removes it on unmount — safe for SPA routing.
 */
export default function SchemaOrg({ schema }: SchemaOrgProps) {
  const uid = useId();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-id', uid);
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(`script[data-schema-id="${CSS.escape(uid)}"]`);
      if (el) el.remove();
    };
  }, [uid, schema]);

  return null;
}
