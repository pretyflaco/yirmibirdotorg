// pages/markdown-page.tsx
import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';

const MarkdownPage: React.FC = () => {
  // Initialize markdown-it with the footnote plugin
  const md = new MarkdownIt();
  md.use(markdownItFootnote);

  // Your Markdown content
  const markdownContent = `
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
`;

  // Convert Markdown content to HTML
  const htmlContent = md.render(markdownContent);

  // Render the HTML content safely
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownPage;
