
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold mt-12 mb-4">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>;
}

function Section({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 leading-relaxed">{children}</p>;
}
export const metadata = {
  title: "Security | Lovitche",
  description: "Learn how Lovitche protects your privacy, data, and connections."
};

export default function SecurityPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Security at Lovitche</h1>
      <p className="text-lg font-medium mb-10">
        A Safe, Private, and Trusted Space Where Meaningful Connections Thrive
      </p>

      <Section>
        At Lovitche, protecting our community is at the heart of everything we build.
        Our mission is to create not only a platform for authentic relationships but
        also a secure digital environment where every member feels safe sharing,
        communicating, and connecting. When you choose Lovitche, you place your trust
        in us with your personal information and experiences—and we take that
        responsibility seriously.
      </Section>

      <Section>
        We believe security is not a single feature but a continuous commitment. Our
        teams work proactively to design, implement, and refine systems that protect
        against evolving threats while ensuring transparency and accountability at
        every stage.
      </Section>

      <Heading>Internal Security Framework at Lovitche</Heading>

      <Section>
        Our comprehensive security program is built to defend both our platform and our
        community against modern risks. We combine advanced technology, strict internal
        controls, responsible data governance, and globally recognized best practices
        to maintain a resilient environment.
      </Section>

      <SubHeading>Internal Information Security Program</SubHeading>
      <Section>
        We actively reduce risk within Lovitche’s digital environment through carefully
        engineered access controls and infrastructure safeguards. Access to systems and
        data is granted only when necessary and follows the principle of least privilege.
        All internal accounts are protected with strong authentication including
        multi-factor authentication.
      </Section>

      <SubHeading>Application & Infrastructure Security</SubHeading>
      <Section>
        Security is integrated throughout our entire development lifecycle. Every
        feature, system change, or update undergoes structured evaluation before
        release. Independent specialists regularly conduct penetration testing to
        validate defenses and identify weaknesses.
      </Section>

      <SubHeading>Governance, Risk & Compliance</SubHeading>
      <Section>
        Security awareness begins from day one for our team members and continues
        throughout their journey. Regular assessments and reviews ensure systems remain
        resilient and compliant with applicable standards. Third-party partners are
        evaluated carefully before integration.
      </Section>

      <SubHeading>Red Team & Offensive Security</SubHeading>
      <Section>
        Our dedicated internal team performs simulated attack scenarios to uncover
        hidden vulnerabilities, stress-test defenses, and strengthen protection in
        high-risk areas. These insights guide continuous improvement.
      </Section>

      <SubHeading>Monitoring, Detection & Threat Response</SubHeading>
      <Section>
        All infrastructure access is securely logged and monitored. Our threat
        management systems detect unusual behavior, investigate incidents, and respond
        rapidly to contain risks and maintain reliability.
      </Section>

      <Heading>Compliance, Certifications & Standards</Heading>
      <Section>
        Lovitche aligns its security framework with internationally recognized
        standards. Independent reviews and audits validate our safeguards and confirm
        responsible data handling practices.
      </Section>

      <Heading>Responsible Vulnerability Disclosure</Heading>
      <Section>
        We welcome collaboration with the security research community. Researchers can
        report potential vulnerabilities through official channels so our teams can
        investigate and resolve issues promptly and responsibly.
      </Section>

      <Heading>Our Ongoing Commitment</Heading>
      <Section>
        Security is a continuous process of improvement and vigilance. As technology
        evolves, Lovitche remains dedicated to strengthening protections so every
        interaction happens in a trusted environment.
      </Section>

      <p className="mt-10 text-lg font-semibold text-center">
        Your privacy, safety, and trust will always come first.
      </p>
    </main>
  );
}

/* ---------- reusable components ---------- */

