
function Section({ title, children }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Tip({ title, text }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  );
}

function Bullet({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-gray-300">
            <span className="text-white">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent">
         Lovitché Safety Guide
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Meeting new people should feel exciting, not stressful. This guide helps you stay safe,
          protect your privacy, and build genuine connections with confidence. While you cannot
          control others’ behavior, you can always control your boundaries, awareness, and choices.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-14">

        {/* ONLINE SAFETY */}
        <Section title="Online Safety">

          <Tip
            title="Never send money or financial details"
            text="No genuine match will ask for money, investments, gift cards, or financial access. Scammers often create emotional stories or emergencies to manipulate trust. Financial transfers are rarely recoverable once sent."
          />

          <Tip
            title="Protect personal information"
            text="Avoid sharing your address, workplace, schedule, passwords, ID numbers, or anything that can reveal your location or identity. Small details can be combined to trace or impersonate you."
          />

          <Tip
            title="Keep chats on Lovitche"
            text="Staying on the platform adds a layer of protection. Suspicious users often push for WhatsApp, Telegram, email, or phone numbers quickly to bypass safety monitoring."
          />

          <Tip
            title="Watch for red-flag behavior"
            text="Be cautious if someone declares strong feelings very quickly, avoids answering questions, refuses video calls, or gives inconsistent information. Authentic connections develop gradually."
          />

          <Bullet
            title="Immediately report users who:"
            items={[
              "Ask for money or financial help",
              "Pressure you for personal information",
              "Send abusive or threatening messages",
              "Use fake identities or stolen photos",
              "Promote services or suspicious links",
              "Attempt to manipulate or guilt-trip you"
            ]}
          />
        </Section>


        {/* PROFILE SAFETY */}
        <Section title=" Profile & Identity Protection">

          <Tip
            title="Use smart profile choices"
            text="Avoid displaying sensitive details such as last name, workplace name, school name, or exact neighborhood. Choose photos that don’t reveal your address, car plate, or documents."
          />

          <Tip
            title="Separate dating and personal accounts"
            text="Consider using a dedicated email or number for dating apps. This protects your primary accounts if someone misuses your contact details."
          />

          <Tip
            title="Reverse image search awareness"
            text="Public photos can sometimes be traced online. Avoid uploading images that are already used on public social media profiles."
          />

        </Section>


        {/* MEETING */}
        <Section title=" Meeting In Person">

          <Tip
            title="Take your time first"
            text="Before meeting, talk long enough to understand personality, tone, and consistency. A short video call can confirm identity and reduce risk."
          />

          <Tip
            title="Meet only in public spaces"
            text="Choose busy cafés, restaurants, or public venues. Avoid private homes, isolated parks, hotel rooms, or rides together on a first meeting."
          />

          <Tip
            title="Tell someone you trust"
            text="Share your meeting location, time, and the person’s profile with a friend or family member. Check in with them after the date."
          />

          <Tip
            title="Stay in control of transport"
            text="Use your own vehicle or ride service. Never rely on someone you just met for transportation, especially for returning home."
          />

          <Tip
            title="Know your limits"
            text="Alcohol or substances can reduce awareness and decision-making. Stay within your comfort zone and never feel pressured."
          />

          <Tip
            title="Keep belongings secure"
            text="Do not leave drinks unattended and avoid accepting drinks from strangers. Keep your phone, wallet, and essentials with you."
          />

          <Tip
            title="Trust instincts immediately"
            text="If something feels wrong, you do not need proof to leave. Your comfort and safety always matter more than politeness."
          />

        </Section>


        {/* SCAM AWARENESS */}
        <Section title="Scam Awareness">

          <Bullet
            title="Common scam patterns"
            items={[
              "Claims of sudden emergencies",
              "Requests for travel funds",
              "Investment opportunities",
              "Military or overseas worker stories",
              "Requests for verification fees",
              "Sob stories designed to build sympathy"
            ]}
          />

          <Tip
            title="Golden rule"
            text="If someone you haven’t met asks for money or favors, it is almost always a scam. Genuine people respect boundaries and never rush financial trust."
          />

        </Section>


        {/* TRAVEL */}
        <Section title=" Travel Awareness">
          <p className="text-gray-300 leading-relaxed">
            Laws, customs, and safety conditions vary by location. When traveling, research local
            regulations and cultural norms before meeting anyone new. In unfamiliar environments,
            consider hiding your profile until you feel comfortable. Avoid sharing your hotel name,
            room number, or travel schedule with matches.
          </p>
        </Section>


        {/* HEALTH */}
        <Section title=" Health, Boundaries & Consent">

          <Tip
            title="Protect yourself"
            text="Use protection consistently to reduce risks of infections. Some conditions can spread through skin contact, and vaccinations may help prevent certain infections."
          />

          <Tip
            title="Stay informed about your health"
            text="Many infections show no symptoms. Regular testing protects both you and your partners."
          />

          <Tip
            title="Communicate honestly"
            text="Discuss expectations, comfort levels, and health status openly. Healthy communication builds trust and prevents misunderstandings."
          />

          <Tip
            title="Consent is mandatory"
            text="Consent must be clear, enthusiastic, and ongoing. It can be withdrawn anytime. Silence or hesitation is not consent."
          />

          <Tip
            title="Respect boundaries"
            text="Healthy relationships respect personal space, decisions, and limits. Anyone who pressures or ignores boundaries is showing a major warning sign."
          />

        </Section>


        {/* DIGITAL WELLBEING */}
        <Section title=" Emotional & Digital Well-Being">

          <Tip
            title="Move at your own pace"
            text="Real connections don’t require urgency. Anyone rushing intimacy, commitment, or personal disclosures is not respecting your comfort."
          />

          <Tip
            title="Avoid emotional manipulation"
            text="Be cautious if someone tries to guilt-trip you, create dependency, or isolate you from friends or family."
          />

          <Tip
            title="Take breaks when needed"
            text="Online interactions can be intense. It’s healthy to pause conversations and step away whenever you need space."
          />

        </Section>


        {/* FOOTER */}
        <div className="text-center pt-12 border-t border-white/10 text-gray-400">
          Safe connections are real connections. Stay aware, trust yourself, and always put your
          well-being first while building meaningful relationships on Lovitche.
        </div>

      </div>
    </main>
  );
}


/* ---------- Components ---------- */
