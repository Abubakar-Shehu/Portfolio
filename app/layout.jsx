import "../styles/globals.css";

export const metadata = {
  title: "Abubakar Shehu",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
