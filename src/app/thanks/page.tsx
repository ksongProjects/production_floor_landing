import type { Metadata } from "next";
import { SITE } from "@/site";

export const metadata: Metadata = {
  title: `Message sent · ${SITE.name}`,
  robots: { index: false, follow: false },
};

/** Where the contact form lands after Web3Forms has emailed the message. */
export default function Thanks() {
  return (
    <main id="main" className="screen hero cta thanks">
      <div className="wrap">
        <h1>Thanks, your message is on its way.</h1>
        <p className="lead">We will reply to the email address you gave.</p>
        <div className="actions">
          <a className="btn primary" href="/">
            Back to {SITE.name}
          </a>
        </div>
      </div>
    </main>
  );
}
