import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

const styles = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  text: "button button-text",
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = `${styles[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );
  }

  return <Link className={classes} href={href} {...props}>{children}</Link>;
}
