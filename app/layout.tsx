import Header from './Header';
import Footer from './Footer';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
