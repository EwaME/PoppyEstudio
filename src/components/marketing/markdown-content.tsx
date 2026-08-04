import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownContent({ contenido }: { contenido: string }) {
  return (
    <div className="prose-poppy">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 mb-4 font-heading text-3xl font-bold first:mt-0">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 font-heading text-2xl font-bold first:mt-0">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 font-heading text-xl font-semibold">{children}</h3>
          ),
          p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="mb-4 list-disc space-y-1 pl-5">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 list-decimal space-y-1 pl-5">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-6 rounded-r-lg border-l-4 border-brand-primary-hover bg-brand-secondary px-5 py-4 text-sm text-foreground/80 [&_p]:mb-0">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element -- src viene de markdown, host no configurado en next/image
            <img
              src={typeof src === 'string' ? src : undefined}
              alt={alt ?? ''}
              className="my-6 w-full rounded-xl object-cover"
              loading="lazy"
            />
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary-hover underline underline-offset-2"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          th: ({ children }) => <th className="px-4 py-2 text-left font-semibold">{children}</th>,
          td: ({ children }) => <td className="border-t px-4 py-2">{children}</td>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          hr: () => <hr className="my-8 border-border" />,
        }}
      >
        {contenido}
      </ReactMarkdown>
    </div>
  );
}
