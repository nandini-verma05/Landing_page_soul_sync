
export default function SafetyPolicy() {
  const sections = [
    {
      title: "Safety Hub",
      text: "Users may access the Safety Hub at any time through the in-app shield icon. The Safety Hub provides information about platform safety tools, community standards, reporting options, and guidance for maintaining safe interactions both online and offline.",
    },
    {
      title: "Unmatch Function",
      text: "Users may unmatch any connection at their discretion. When an unmatch occurs, both users are removed from each other’s match list and can no longer view profiles or exchange messages. Reporting remains available even after an unmatch.",
    },
    {
      title: "Profile Blocking",
      text: "Users may block specific profiles to prevent further visibility or interaction. Blocked profiles will not appear again, and the blocked party will not receive notification of the action.",
    },
    {
      title: "Contact Blocking",
      text: "Users may voluntarily grant access to their contact list to proactively prevent matches with selected individuals. Only contacts specifically chosen by the user will be restricted.",
    },
    {
      title: "Photo Verification",
      text: "Lovitche’ offers a verification process requiring submission of a short video selfie. This is analyzed using facial recognition technology to confirm that the user matches their profile photos. Verification status may be displayed on verified profiles.",
    },
    {
      title: "Verified-Only Messaging",
      text: "Users may choose to receive messages exclusively from accounts that have completed the Photo Verification process. Non-verified users attempting to message such profiles will be prompted to verify first.",
    },
    {
      title: "Message Safety Prompts",
      text: "If automated systems detect language that may violate community standards, the sender may receive a prompt encouraging reconsideration before sending. Recipients may report or flag messages they find inappropriate.",
    },
    {
      title: "Contact Information Alerts",
      text: "When users exchange personal contact details through chat, safety reminders may appear to provide guidance for safer offline meetings.",
    },
    {
      title: "Travel Safety Notifications",
      text: "In regions where local conditions or laws may present risks to certain identities or communities, Lovitche’ may display safety notices and provide options to adjust profile visibility for additional protection.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black  text-gray-200 px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Lovitche’ Safety Features Policy
        </h1>

        <p className="text-gray-400 mb-12 leading-relaxed">
          At Lovitche’, user safety, privacy, and positive interactions are
          fundamental to our platform. We continuously develop and implement
          tools designed to protect users and provide greater control over
          their experience. The following features are available to support
          safe and respectful connections:
        </p>

        {/* Policy Sections */}
        <div className="space-y-10">
          {sections.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-black border border-gray-800 hover:border-gray-600 transition"
            >
              <h2 className="text-xl font-semibold text-white mb-3">
                {index + 1}. {item.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Policy Update Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-black border border-gray-800">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Policy Updates
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Lovitche’ reserves the right to update or modify these safety
            features and related policies at any time to improve platform
            security and user protection. Continued use of the platform
            constitutes acceptance of any updates.
          </p>
        </div>

      </div>
    </section>
  );
}