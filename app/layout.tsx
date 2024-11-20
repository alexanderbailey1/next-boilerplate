import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import AgeVerificationModal from './components/AgeVerificationModal';
// import NextAuthProvider from "./providers/NextAuthProvider";
import VisitorSideNav from "./ui/visitor-dashboard/VisitorSideNav";
import SideNavWrapper from "./ui/SideNavWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Baileys Buds",
    default: "Baileys Buds",
  },
  description: "stop & smell the flowers",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<NextAuthProvider>*/}
      <body className={`${inter.className} antialiased`}>
        <div className="flex">
          <AgeVerificationModal />
          <SideNavWrapper />
          <div className="flex-1 min-h-screen">{children}</div>
        </div>
      </body>
      {/*</NextAuthProvider>*/}
    </html>
  );
}
