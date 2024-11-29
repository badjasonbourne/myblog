import './globals.css';

export const metadata = {
  title: 'Personal Blog | Knowledge Sharing',
  description: 'A personal blog for sharing knowledge and insights about software development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
