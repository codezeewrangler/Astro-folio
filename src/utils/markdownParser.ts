export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  team: string;
  responsibilities: string[];
  outcomes: string[];
  tools: string;
}

export function parseExperience(markdown: string): ExperienceItem[] {
  const items: ExperienceItem[] = [];
  const sections = markdown.split('\n## ').slice(1);

  for (const sec of sections) {
    const lines = sec.split('\n');
    const header = lines[0].trim();
    const [company, role] = header.split(' - ').map(s => s.trim());

    let duration = '';
    let team = '';
    const responsibilities: string[] = [];
    const outcomes: string[] = [];
    let tools = '';

    let currentSection = '';

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith('- Duration:')) {
        duration = line.replace('- Duration:', '').trim();
      } else if (line.startsWith('- Team:')) {
        team = line.replace('- Team:', '').trim();
      } else if (line.startsWith('- Responsibilities:')) {
        currentSection = 'resp';
      } else if (line.startsWith('- Key Outcomes:')) {
        currentSection = 'out';
      } else if (line.startsWith('- Tools and Technologies:')) {
        currentSection = 'tools';
      } else if (line.startsWith('- ') && !line.includes(':')) {
        // Nested list item or simple item
        const val = line.replace('- ', '').trim();
        if (currentSection === 'resp') responsibilities.push(val);
        else if (currentSection === 'out') outcomes.push(val);
        else if (currentSection === 'tools') tools = val;
      } else if (line.startsWith('  - ')) {
        const val = line.replace('  - ', '').trim();
        if (currentSection === 'resp') responsibilities.push(val);
        else if (currentSection === 'out') outcomes.push(val);
      }
    }

    items.push({
      company: company || header,
      role: role || '',
      duration,
      team,
      responsibilities,
      outcomes,
      tools
    });
  }

  return items;
}

export function getSectionText(md: string, sectionTitle: string): string {
  const regex = new RegExp(`## ${sectionTitle}\\s*\\n\\n([^#]*)`, 'i');
  const match = md.match(regex);
  return match ? match[1].trim() : '';
}

export function getSectionList(md: string, sectionTitle: string): string[] {
  const text = getSectionText(md, sectionTitle);
  if (!text) return [];
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('- '))
    .map(line => line.replace('- ', '').trim());
}
