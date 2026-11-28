import { contactHref, CONTACT_FORM, SITE } from "@/site";

/**
 * Contact form. A plain HTML form that posts straight to Web3Forms, which emails the
 * submission to the project inbox and then redirects back to /thanks. No client code.
 * Without an access key (local dev, preview builds) it falls back to the mailto link.
 */
export function Contact() {
  return (
    <section className="screen alt contact" id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Contact us</p>
          <h2>Tell us about your floor.</h2>
          <p className="lead">
            Questions, a walkthrough or a pilot: send a note and the founder replies by email.
          </p>
        </div>

        {CONTACT_FORM.accessKey ? (
          <form className="contact-form" action={CONTACT_FORM.endpoint} method="POST">
            <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />
            <input type="hidden" name="subject" value={`${SITE.name} enquiry from the website`} />
            <input type="hidden" name="from_name" value={`${SITE.name} website`} />
            <input type="hidden" name="redirect" value={CONTACT_FORM.redirectUrl} />
            {/* Honeypot: hidden from people, bots that tick it are dropped. */}
            <input
              type="checkbox"
              name="botcheck"
              className="contact-trap"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label>
              <span>Name</span>
              <input type="text" name="name" required maxLength={120} autoComplete="name" />
            </label>
            <label>
              <span>Work email</span>
              <input type="email" name="email" required maxLength={200} autoComplete="email" />
            </label>
            <label className="wide">
              <span>
                Company <em>(optional)</em>
              </span>
              <input type="text" name="company" maxLength={160} autoComplete="organization" />
            </label>
            <label className="wide">
              <span>Message</span>
              <textarea name="message" required minLength={10} maxLength={5000} rows={6} />
            </label>

            <div className="contact-actions wide">
              <button className="btn primary" type="submit">
                Send message
              </button>
              <p className="contact-note">
                Or email <a href={contactHref}>{SITE.contactEmail}</a>.
              </p>
            </div>
          </form>
        ) : (
          <div className="actions">
            <a className="btn primary" href={contactHref}>
              Email {SITE.contactEmail}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
