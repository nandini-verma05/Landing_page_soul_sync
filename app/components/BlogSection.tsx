"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

interface BlogPost {
  title: string;
  image: string;
  category: string;
  content: string;
}

export default function BlogGrid() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "Astrology and Love",
      image: "/BlogImage/blog1.jpg",
      category: "Content: How Your Birth Chart Shapes Your Way of Loving",
      content: `
        <h3><u><b>Introduction</b></u></h3>
        <p>Astrology is the language of patterns. It does not control our lives, but it reflects the emotional and psychological rhythms we move through. Just as the Moon influences the tides, planetary movements mirror the subtle tides within human emotions. Love, being one of the deepest human experiences, is naturally reflected in this cosmic rhythm.</p>
        <br>
        <p>Astrology does not see love as a coincidence. It sees love as an exchange of energies. When two people meet, it is not just personalities that connect, but emotional histories, unconscious desires, and soul lessons. The stars decide whom we love, and they reveal how we experience love and why certain connections feel powerful.</p>

        
        <h3><u><b>Attraction, Attachment and Soul Bonds</b></u></h3>
        <p>Attraction is the beginning. It is the invisible pull that draws us toward someone before logic arrives. It is not always about comfort or similarity; often, it is about recognition. Something in the other person resonates with something unresolved within us. Astrology views attraction as a magnetic alignment of energies, where two paths momentarily point toward each other. This is why attraction can feel sudden, intense, and unexplainable. Attachment follows attraction. It is where love moves from excitement to intimacy. Attachment is about safety, trust, and emotional grounding. It is the place where we stop performing and start being real. Astrology reflects attachment as our need to feel emotionally held. It shows how we seek closeness, how we handle vulnerability, and how we respond to emotional dependence. When attachment flows naturally, love feels peaceful. When it is disturbed, love becomes anxious or distant.</p>
        <br>
        <p>Attachment follows attraction. It is where love moves from excitement to intimacy. Attachment is about safety, trust, and emotional grounding. It is the place where we stop performing and start being real. Astrology reflects attachment as our need to feel emotionally held. It shows how we seek closeness, how we handle vulnerability, and how we respond to emotional dependence. When attachment flows naturally, love feels peaceful. When it is disturbed, love becomes anxious or distant.</p>
        <br>
        <p>Soul bonds go deeper than attraction and attachment. They feel timeless. These are the connections that enter our lives not to comfort us, but to transform us. They awaken buried emotions, challenge our beliefs about love, and force growth. Astrology views these relationships as karmic in nature, formed not for permanence but for evolution. They often arrive suddenly and leave slowly, changing us long after they are gone.</p>
        <br>
        <p>The stars influence love not by command, but by reflection. They mirror our emotional blueprint. They show our patterns of desire, our ways of bonding, and the lessons our heart is meant to learn. When we understand these patterns, love becomes less confusing and more conscious.</p>
        <br>
        <p>According to Vedic astrology, "Soulmate" is a wrong concept. A soul doesn't need a mate; it is fulfilling from its own. It is the body and karma that make us feel unfulfilled and attached to others.</p>


        <h3><u><b>Conclusion</b></u></h3>
        <p>Astrology reminds us that love is not something we fall into blindly. It is something we grow into with awareness. Attraction teaches us desire. Attachment teaches us intimacy. Soul bonds teach us transformation.</p>
        <br>
        <p>Love is not written in the stars.
But the stars reveal how deeply and consciously we are capable of loving.
</p>
        
        `
    },
    {
      title: "Your Emotional Blueprint",
      image: "/BlogImage/blog2.jpg",
      category: "Content: How Your Birth Chart Shapes Your Way of Loving",
      content: `
        <h3><u><b>Introduction</b></u></h3>
        <p>We often believe love is something we learn from experience. But long before our first relationship, before our first heartbreak or attachment, a silent blueprint already exists within us. Astrology calls this our birth chart. It is not a prediction of whom we will love, but a reflection of how we love.</p>
        <br>
        <p>Your birth chart is like an emotional fingerprint. No two people love in the same way because no two emotional worlds are the same. Some love deeply and quietly. Some love boldly and passionately. Some love carefully, and some love fearlessly. None is wrong. They are simply expressions of inner nature.</p>
        <br>
        <p>Astrology shows that our way of loving is not accidental. It is shaped by our emotional needs, our sense of security, and our idea of connection. When we understand this, love stops feeling confusing and starts feeling meaningful.</p>
        <br>
        <p>Some people are drawn to love like a fire. They need intensity, movement, and excitement. For them, love is alive only when it is dynamic. Others seek love like the earth seeks roots. They need stability, consistency, and loyalty. For them, love is safety. Some love through the mind, needing conversation, understanding, and freedom. Others love through emotion, needing depth, bonding, and emotional merging.</p>
        <br>
        <p>These differences are not incompatibilities. They are different emotional languages.</p>

        <h3><u><b>Love as per Astrology</b></u></h3>
        <p>Your birth chart reflects the way your heart opens, how you express affection, and what makes you feel emotionally seen. It explains why you crave closeness or space, why you fall quickly or slowly, and why certain relationships feel natural while others feel heavy.</p>
        <br>
        <p>Love becomes difficult when we try to love against our nature. When someone who needs emotional depth settles for a surface-level connection, love feels empty. When someone who needs freedom feels trapped, love feels suffocating. Astrology gently reminds us that love must honour our inner design.</p>
        <br>
        <p>Attachment patterns are also part of this blueprint. Some people attach through comfort and familiarity. Some attach through intensity and transformation. Some attach cautiously, protecting their heart until trust is earned. These patterns are not flaws. They are emotional survival mechanisms shaped by the soul's journey.</p>
        <br>
        <p>Understanding your emotional blueprint does not limit love. It frees it.
It gives you permission to stop comparing your love story to others.
It allows you to honour what your heart truly needs.
</p>
<br>        
<p>When we become aware of our emotional nature, relationships stop becoming battles of expectation. They become spaces of understanding. We stop asking, "Why don't they love like me?" and start asking, "How can we meet each other with awareness?"</p>
        
        <h3><u><b>Conclusion</b></u></h3>
        <p>Astrology teaches that love is not about changing yourself to fit someone else.
It is about knowing yourself well enough to choose wisely.
</p>
<br>        
<p>Your birth chart does not tell you whom to love.</p>
<p>It shows you how to love authentically.</p>
<br>        
<p>And when love flows from authenticity, it becomes calmer, deeper, and more conscious.</p>
      `
    },
    {
      title: "Karmic Love vs Conscious Love",
      image: "/BlogImage/blog3.jpg",
      category: "Content: Understanding Love Through astrology.",
      content: `
        <h3><u><b>Introduction</b></u></h3>
        <p>Not all love enters our life for the same reason. Some love arrives like a storm, intense and consuming, leaving us changed forever. Some love arrives quietly, steady and grounding, helping us grow in peace. Astrology describes these two experiences as karmic love and conscious love. Both are important, but they serve very different purposes in our emotional journey.</p>

        <h3><u><b>Karmic Love</b></u></h3>
        <p>Karmic love is the love that feels destined. It carries a strange familiarity, as if we have known the person long before meeting them. These relationships are powerful, magnetic, and often overwhelming. They awaken deep emotions, hidden wounds, and old patterns. Karmic love does not come to make life comfortable. It comes to make us aware.</p>
        <br>
        <p>In karmic relationships, attraction is strong, but stability is often weak. There is passion, attachment, and emotional dependency. We feel pulled toward the person even when the relationship hurts. This is because karmic love reflects unfinished emotional lessons. It shows us our fears, our insecurities, our need for validation, and our tendency to lose ourselves in others.</p>
        <br>
        <p>Astrology sees karmic love as a mirror. The partner reflects what we need to heal. These relationships teach boundaries, self-worth, and emotional responsibility. They often end painfully, but they leave behind deep wisdom. Karmic love is not about permanence. It is about transformation.</p>

        <h3><u><b>Conscious love</b></u></h3>
        <p>Conscious love begins where karmic love ends. It is born from awareness. After understanding our emotional patterns, we no longer chase intensity; we choose stability. Conscious love is not based on emotional addiction or fear of loss. It is based on choice, respect, and understanding.</p>
        <br>
        <p>In conscious love, attraction still exists, but it is calm. Attachment still exists, but it is healthy. Two people meet not to complete each other, but to walk together. There is emotional independence, mutual respect, and space for growth. Love becomes supportive instead of consuming.</p>
        <br>
        <p>Astrology views conscious love as the evolved expression of our emotional blueprint. When we understand our needs, wounds, and patterns, we stop repeating old cycles. We stop mistaking chaos for passion and pain for depth. Love becomes a space of peace rather than survival.</p>
        <br>
        <p>Karmic love asks:</p>
        <p>"What do you need to heal?"</p>
        <br>
        <p>Conscious love asks:</p>
        <p>"How do you choose to grow?"</p>
        <br>
        <p>Both are sacred. Karmic love prepares the soul. Conscious love nurtures it.</p>

      
      `
    },
    {
      title: "Why Letting Go Is Also a Part of Love in Astrology",
      image: "/BlogImage/blog4.jpg",
      category: "Content: The Art Of Letting Go.",
      content: `
      <p>We are taught that love means holding on. Protecting. Fighting to keep what we feel. But astrology quietly teaches something deeper: sometimes, love also means knowing when to release.</p>
      <br>
      <p>Letting go is not the opposite of love. It is one of its purest forms.</p>

        <h3><u><b>Introduction</b></u></h3>
        <p>In astrology, every planet moves, every phase changes, and nothing remains static. This alone reminds us that life is a rhythm of arrival and departure. Love follows the same law. Some connections come to stay, some come to teach, and some come to prepare us for something greater. Holding onto what has completed its purpose only creates suffering.</p>
        <br>
        <p>Astrology sees relationships as part of our soul's evolution. Not every bond is meant to become permanent. Some are meant to awaken us, show us our wounds, and push us toward emotional maturity. When their lesson is complete, the soul naturally seeks closure.</p>
        
        <h3><u><b>Why?</b></u></h3>
        <p>Sometimes we confuse intensity with meaning. We believe that because something hurts deeply, it must be important to hold onto. But pain is not proof of permanence. Often, pain is proof that change is required.</p>
        <br>

        <h3><u><b>When!</b></u></h3>
        <p>Letting go becomes necessary when love turns into attachment, fear, or emotional dependency. When we stay not because of growth, but because of habit, insecurity, or the fear of emptiness. Astrology reminds us that love should expand us, not imprison us.</p>
        <br>

        <h3><u><b>How..</b></u></h3>
        <p>The planets that represent transformation and endings teach this gently. They show that endings are not punishments; they are transitions. They clear emotional space so new awareness can enter. Just like seasons must change for life to continue, relationships must sometimes end for the soul to grow.</p>
        
        <h3><u><b>Conclusion</b></u></h3>
        <p>Letting go is an act of emotional courage.</p>
        <p>It means trusting that love does not disappear when a person leaves.</p>
        <p>It only changes form.</p>
        <br>
        <p>When we release a relationship with awareness, we are not rejecting love. We are honouring its purpose. We are saying, "You came, you taught, and I am grateful."
</p>
        <br>
        <p>Astrology does not teach us to abandon love easily. It teaches us to love wisely. To recognize when holding on is love, and when releasing is love.</p>
        <br>
        <p>Because sometimes:</p>
        <p>Love stays.</p>
        <p>And sometimes:</p>
        <p>Love sets us free.</p>
        <br>
        <p>Both are sacred.</p>     
      `
    },
  ];

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="relative min-h-screen bg-black text-white py-12 px-4 sm:py-16 sm:px-6 md:py-24 md:px-12 lg:px-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl ss-heading mb-4 italic">
              COSMOLOGY
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl ss-body max-w-2xl md:max-w-4xl mx-auto">
              Unlock Destiny&apos;s Door: Astrology Dating Awaits.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Big Left Card */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
              <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full justify-between">
                <span className="ss-tag mb-2 sm:mb-3">{blogPosts[0].category}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                  {blogPosts[0].title}
                </h3>
                <button 
                  onClick={() => openModal(blogPosts[0])}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition"
                >
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Right Card + Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Card */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[180px] sm:min-h-[220px] md:min-h-[300px]">
                <img
                  src={blogPosts[1].image}
                  alt={blogPosts[1].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
                  <span className="ss-tag mb-2 sm:mb-3">{blogPosts[1].category}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                    {blogPosts[1].title}
                  </h3>
                  <button 
                    onClick={() => openModal(blogPosts[1])}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition"
                  >
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
              {/* Side Text */}
              <div className="space-y-2 sm:space-y-3 md:pl-4">
                <h3 className="text-lg sm:text-xl md:text-2xl ss-heading">Stars Are Talking—Will You Listen?</h3>
                <button className="ss-button inline-flex items-center text-blue-400 hover:text-blue-300 transition text-base sm:text-lg">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Remaining Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(2).map((post, i) => (
              <div key={i} className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer border border-white/10 min-h-[180px] sm:min-h-[220px] md:min-h-[300px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
                <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full justify-between">
                  <span className="ss-tag mb-2 sm:mb-3">{post.category}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                    {post.title}
                  </h3>
                  <button 
                    onClick={() => openModal(post)}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition"
                  >
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="ss-body text-white/50 text-sm md:text-base">Discover more .</p>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8 sm:px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="fixed top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition backdrop-blur-sm z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Modal Content */}
              <div className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl overflow-hidden border border-white/10">
                {/* Hero Image */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                    <span className="ss-tag mb-3 inline-block">{selectedPost.category}</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ss-heading text-white">
                      {selectedPost.title}
                    </h1>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                  <div 
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.8"
                    }}
                  />
                </div>
              </div>

              {/* Back to Blog Button */}
              <div className="text-center mt-8 mb-12">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition text-white"
                >
                  Back to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: white;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.95);
        }
        .prose p {
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }
      `}</style>
    </>
  );
}