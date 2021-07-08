import sanitiszeHtml from 'sanitize-html';

export const sanitise = (html: string, options: Record<string, any> = {}): string =>
    sanitiszeHtml(html, options);
