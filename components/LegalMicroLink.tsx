import Link from "next/link";

type LegalMicroLinkProps = {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
  className?: string;
};

export default function LegalMicroLink({
  href,
  children,
  subtle = false,
  className = "",
}: LegalMicroLinkProps) {
  const styles = subtle
    ? "text-[10px] opacity-50 hover:opacity-80"
    : "text-xs text-blue-600/70 hover:text-blue-700 underline-offset-2 hover:underline";

  return (
    <Link href={href} className={`transition-colors ${styles} ${className}`}>
      {children}
    </Link>
  );
}
