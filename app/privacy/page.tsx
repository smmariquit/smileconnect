import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SmileConnect handles patient and student dentist data.",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mt-1">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mt-2">Last updated: July 4, 2026</p>
      </header>

      <article className="space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">What SmileConnect is</h2>
          <p>
            SmileConnect is a platform that matches dental patients with student
            dentists for supervised clinical practice. It is a DOST Scholar project
            and is intended to improve access to affordable dental care while
            helping students gain hands-on experience. SmileConnect is{" "}
            <strong>not</strong> a replacement for licensed clinical records systems
            or emergency dental care.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Information we collect</h2>

          <h3 className="font-medium mt-3 mb-1">Patient data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, age, contact information, and account credentials.</li>
            <li>
              Dental procedure preferences, treatment needs, and scheduling
              availability you provide when seeking a match.
            </li>
            <li>
              Health-adjacent information related to your dental case (e.g., requested
              procedures, prior treatment notes you choose to share). This is
              sensitive — only share what is necessary for matching.
            </li>
          </ul>

          <h3 className="font-medium mt-3 mb-1">Student dentist data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, school affiliation, year level, and contact details.</li>
            <li>Clinical rotation status, available procedures, and schedule.</li>
            <li>Match history and appointment confirmations within the platform.</li>
          </ul>

          <h3 className="font-medium mt-3 mb-1">Technical data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Login sessions, device/browser type, and usage logs.</li>
            <li>IP address and timestamps from our hosting provider.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">How we use information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Match patients with appropriate student dentists.</li>
            <li>Facilitate appointment scheduling and confirmations.</li>
            <li>Improve matching algorithms and user experience.</li>
            <li>Ensure supervision and accountability within the academic clinic context.</li>
            <li>Respond to support requests and enforce platform rules.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Who can access your data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Matched parties</strong> — patients and student dentists see
              information needed to complete a scheduled case.
            </li>
            <li>
              <strong>Supervisors and faculty</strong> — may access records as required
              for clinical oversight and academic evaluation.
            </li>
            <li>
              <strong>Project developers</strong> — limited access for maintenance and
              debugging, subject to confidentiality obligations.
            </li>
          </ul>
          <p className="mt-2">We do not sell personal or health-related information.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Data storage and security</h2>
          <p>
            Data is stored on secure servers with access controls. Passwords are
            hashed. Transmission uses HTTPS. Despite safeguards, no online platform
            is risk-free — avoid uploading unnecessary medical documents.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Your rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Review and update profile information in your dashboard.</li>
            <li>Request deletion of your account and associated match data.</li>
            <li>Withdraw from a match before treatment begins.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Children</h2>
          <p>
            Patients under 18 may only use SmileConnect with parental or guardian
            consent and appropriate clinical supervision.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Changes</h2>
          <p>
            We may update this policy as the platform evolves. Check the date above
            for the latest version.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Privacy questions? Contact the SmileConnect team through the project
            maintainers listed on the About section of our homepage.
          </p>
        </section>
      </article>
    </main>
  );
}
