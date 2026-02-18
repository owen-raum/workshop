import { readFileSync } from 'fs';
import { join } from 'path';
import { RessourcenClient } from './RessourcenClient';

interface Doc {
  slug: string;
  title: string;
  emoji: string;
  content: string;
}

const DOCS: Array<{ slug: string; title: string; emoji: string; filename: string }> = [
  { slug: 'overview',          title: 'Übersicht',            emoji: '📋', filename: 'README.md' },
  { slug: 'security',          title: 'Security-Checkliste',  emoji: '🔴', filename: 'Security-Checkliste.md' },
  { slug: 'soul',              title: 'SOUL Template',         emoji: '✨', filename: 'SOUL-Template.md' },
  { slug: 'agents',            title: 'AGENTS Template',       emoji: '🤖', filename: 'AGENTS-Template.md' },
  { slug: 'memory',            title: 'MEMORY Template',       emoji: '🧠', filename: 'MEMORY-Template.md' },
  { slug: 'tools',             title: 'TOOLS Template',        emoji: '🛠️', filename: 'TOOLS-Template.md' },
  { slug: 'heartbeat',         title: 'HEARTBEAT Template',    emoji: '💓', filename: 'HEARTBEAT-Template.md' },
];

export const metadata = {
  title: 'Deep Dive Unterlagen | OpenClaw × Andy Steinberger',
  description: 'Exklusive Materialien und Templates für Teilnehmer des OpenClaw Deep Dives.',
  robots: { index: false, follow: false },
};

export default function RessourcenPage() {
  const contentDir = join(process.cwd(), 'content', 'ressourcen');

  const docs: Doc[] = DOCS.map(({ slug, title, emoji, filename }) => {
    const filePath = join(contentDir, filename);
    let content = '';
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch {
      content = `# ${title}\n\nInhalt nicht gefunden.`;
    }
    return { slug, title, emoji, content };
  });

  return <RessourcenClient docs={docs} />;
}
