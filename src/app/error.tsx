"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="not-found"><p className="section-eyebrow">Something went wrong</p><h1>Unable to load this page.</h1><p>Please try again. If the issue continues, return to the homepage.</p><button onClick={reset} type="button">Try again</button></main>;
}
