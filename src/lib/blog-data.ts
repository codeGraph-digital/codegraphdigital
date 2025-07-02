export interface Post {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "the-future-of-ai-in-marketing",
    title: "The Future of AI in Marketing: Predictions for 2025",
    author: "Alex Johnson",
    authorRole: "Founder & CEO",
    date: "October 26, 2023",
    excerpt: "Artificial Intelligence is no longer a futuristic concept but a present-day reality reshaping the marketing landscape. Here are our predictions for the coming year.",
    content: `
<p>Artificial Intelligence is no longer a futuristic concept but a present-day reality reshaping the marketing landscape. As we look towards 2025, the integration of AI is set to become even more profound, moving beyond simple automation to become the strategic core of successful marketing operations.</p>
<h3 class="text-xl font-bold mt-6 mb-2">Hyper-Personalization at Scale</h3>
<p>One of the most significant impacts of AI will be in the realm of personalization. Forget basic name-merging in emails. AI will enable marketers to deliver hyper-personalized experiences to millions of users simultaneously, tailoring content, product recommendations, and user journeys based on real-time behavioral data.</p>
<h3 class="text-xl font-bold mt-6 mb-2">Predictive Analytics for Proactive Strategies</h3>
<p>AI-powered predictive analytics will give marketers a crystal ball. By analyzing historical data and current trends, AI models can forecast customer churn, identify high-value leads, and predict which campaigns will have the highest ROI. This allows for a shift from reactive to proactive marketing strategies.</p>
<p>The future is not just about using AI tools; it's about building an AI-first marketing culture. The teams that embrace this shift will be the ones who lead the charge in the years to come.</p>
    `,
  },
  {
    slug: "mastering-seo-with-codegraph",
    title: "Mastering SEO: How CodeGraphDigital's AI Gives You an Unfair Advantage",
    author: "Samantha Lee",
    authorRole: "Chief Technology Officer",
    date: "October 15, 2023",
    excerpt: "Search Engine Optimization can feel like a dark art. Discover how our AI-powered SEO Lab demystifies the process and provides clear, actionable insights.",
    content: `
<p>Search Engine Optimization (SEO) is a critical component of digital marketing, yet it often feels like a complex and ever-changing puzzle. At CodeGraphDigital, we've leveraged the power of our CodeGraph engine to build an SEO Lab that demystifies this process.</p>
<h3 class="text-xl font-bold mt-6 mb-2">Beyond Keywords</h3>
<p>Traditional SEO tools focus heavily on keywords. Our AI goes deeper, analyzing search intent, semantic context, and competitive landscapes to provide recommendations that truly align with what both users and search engines are looking for. It's about creating content that is not just optimized, but genuinely valuable.</p>
<h3 class="text-xl font-bold mt-6 mb-2">Real-Time, Actionable Feedback</h3>
<p>Instead of waiting for a quarterly report, our SEO Lab provides real-time feedback as you create content. From title tag length to internal linking opportunities, you get actionable suggestions that you can implement instantly to improve your rankings. This iterative approach to optimization is what sets our users apart from the competition.</p>
    `,
  },
  {
    slug: "5-campaigns-you-can-automate-today",
    title: "5 High-Impact Marketing Campaigns You Can Automate Today",
    author: "Michael Brown",
    authorRole: "Head of Product",
    date: "September 28, 2023",
    excerpt: "Automation is key to scaling your marketing efforts. Here are five powerful campaigns you can set up in our Campaign Builder to drive growth on autopilot.",
    content: `
<p>Marketing automation is more than just a time-saver; it's a growth engine. By setting up intelligent, automated campaigns, you can nurture leads, engage customers, and drive revenue around the clock. Here are five campaigns you can build today with CodeGraphDigital.</p>
<ol class="list-decimal list-inside space-y-2 mt-4">
  <li><strong>The Welcome Series:</strong> Make a great first impression and onboard new users effectively.</li>
  <li><strong>The Abandoned Cart Flow:</strong> Recover potentially lost sales with timely reminders and incentives.</li>
  <li><strong>The Re-engagement Campaign:</strong> Win back inactive users with targeted content and special offers.</li>
  <li><strong>The Customer Feedback Loop:</strong> Automatically request reviews and testimonials from happy customers.</li>
  <li><strong>The Upsell/Cross-sell Sequence:</strong> Introduce existing customers to other relevant products or services.</li>
</ol>
<p class="mt-4">Each of these can be visually designed and deployed in minutes using our Campaign Builder, allowing you to focus on strategy while our platform handles the execution.</p>
    `,
  },
];