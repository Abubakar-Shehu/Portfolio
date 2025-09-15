import "../styles/globals.css";
import DynamicFavicon from "../components/DynamicFavicon";

export const metadata = {
  title: "Abubakar Shehu",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body>
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}
