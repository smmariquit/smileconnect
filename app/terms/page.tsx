import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the SmileConnect dental matching platform.",
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 pb-16 text-gray-900">
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline mb-8 inline-block"
      >
        ← Back to SmileConnect
      </Link>

      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-gray-500">Legal</p>
        <h1 className="text-3xl font-bold mt-1">Terms of Service</h1>
        <p className="text-sm text-gray-600 mt-2">Last updated: July 4, 2026</p>
      </header>

      <article className="space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Agreement</h2>
          <p>
            By using SmileConnect, you agree to these Terms. If you do not agree, do
            not use the platform. SmileConnect connects student dentists with patients
            under academic supervision — it is not an emergency service.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Eligibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Student dentists</strong> must be enrolled in an accredited
              dental program and authorized by their institution to participate.
            </li>
            <li>
              <strong>Patients</strong> must provide accurate health and contact
              information relevant to their dental needs.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Clinical supervision</h2>
          <p>
            All treatment facilitated through SmileConnect must occur under the
            supervision of licensed faculty or clinical instructors. Student dentists
            may not perform procedures outside their authorized scope of practice.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Acceptable use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Do not provide false medical or dental history.</li>
            <li>Do not harass, discriminate against, or endanger other users.</li>
            <li>Do not use the platform for commercial solicitation unrelated to care.</li>
            <li>Do not attempt to access other users&apos; private records.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">No medical advice</h2>
          <p>
            Information on SmileConnect is for matching and scheduling only. It does
            not constitute medical or dental advice. Seek emergency care directly for
            urgent conditions.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Fees and payment</h2>
          <p>
            Any fees for dental procedures are arranged between patients and the
            supervising clinic. SmileConnect does not process payments unless
            explicitly stated in a future feature.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Limitation of liability</h2>
          <p>
            SmileConnect facilitates connections but is not liable for clinical
            outcomes, missed appointments, or disputes between patients and student
            dentists. The service is provided &quot;as is&quot; during its development
            phase.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Termination</h2>
          <p>
            We may suspend accounts that violate these Terms or pose a safety risk.
            You may stop using the platform at any time.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Changes</h2>
          <p>
            These Terms may be updated. Continued use after changes means you accept
            the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions? Reach the SmileConnect team through the contact information on
            our homepage.
          </p>
        </section>
      </article>
    </main>
  );
}
