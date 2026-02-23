export const metadata = {
  title: "Privacy Policy | Lovitche",
  description: "Read the Lovitche privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg text-white/80 mb-8">
        This page is reserved for Lovitche privacy policy details.
      </p>

      <section className="space-y-6 text-white/80 leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Privacy Notice</h2>
          <p>
            This Consumer Health Data Privacy Notice is meant to be read alongside our general Privacy Policy and applies specifically to individuals residing in Washington and Nevada. It is designed to explain how certain information that could fall within the legal definition of "consumer health data" may be handled within those jurisdictions.
          </p>
        </div>

        <div>
          <p>
            Lovitchè does not intentionally collect information for the purpose of identifying or drawing conclusions about a person's physical or mental health, whether past, present, or future. However, because some laws interpret the term "consumer health data" very broadly, certain information we gather in the normal course of providing our services could be classified under that category. When such information is collected, it is used in the same way as other data we process—primarily to operate the platform effectively, personalize your experience, and help facilitate meaningful connections between members.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Data Sharing</h3>
          <p>
            In the course of running our services, there may be circumstances where this type of information is shared with trusted third parties whose involvement is necessary to support platform functionality. For example, when you choose to share details on your profile or otherwise make them visible, that information becomes accessible to other users. We may also work with specialized vendors who support essential operations such as hosting infrastructure, maintaining systems, assisting with customer support, and managing security processes. In addition, affiliated organizations that assist us with technical and operational tasks—like safeguarding data, maintaining services, or preventing spam, fraud, and misuse—may process information on our behalf as part of these responsibilities.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Business Operations & Disclosure</h3>
          <p>
            There are also situations related to business operations where information may be disclosed. If Lovitchè is involved in a corporate event such as a merger, acquisition, restructuring, sale, or similar transaction affecting ownership or control, relevant data may be transferred as part of that process. Furthermore, we may share information when required to comply with applicable laws or legal procedures, including court orders, subpoenas, or official investigations. Such disclosures may also occur when necessary to help prevent unlawful activity, ensure the safety of individuals, or support legal rights and claims.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Security & Responsible Disclosure</h3>
          <p>
            Through these practices, Lovitchè aims to balance transparency, legal compliance, and responsible data handling while continuing to provide a secure and trustworthy platform for its community. We are committed to addressing security issues responsibly and in a timely manner. To protect our members, we request that you please refrain from sharing information about any potential vulnerabilities with anyone outside of Lovitchè until we have had the opportunity to review and address them with you. We appreciate your help in keeping Lovitchè secure for our members.
          </p>
        </div>
      </section>
    </main>
  );
}
