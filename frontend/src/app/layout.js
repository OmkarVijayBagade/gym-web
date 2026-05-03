import "./globals.css";

export const metadata = {
  title: "Fitness Fort | Premium Fitness Gym",
  description: "Transform your body. Elevate your mind. Join the elite fitness community at Fitness Fort Gym.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
