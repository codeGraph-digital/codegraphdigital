"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg dark:prose-invert mx-auto"
      >
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information to provide better services to all our users. The types of information we collect include:
        </p>
        <ul>
          <li><strong>Information you give us.</strong> For example, our services require you to sign up for a CodeGraphDigital Account. When you do, we’ll ask for personal information, like your name, email address, or telephone number.</li>
          <li><strong>Information we get from your use of our services.</strong> We may collect information about the services that you use and how you use them.</li>
        </ul>

        <h2>2. How We Use Information We Collect</h2>
        <p>
          We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect CodeGraphDigital and our users. We also use this information to offer you tailored content.
        </p>

        <h2>3. Information We Share</h2>
        <p>
          We do not share personal information with companies, organizations and individuals outside of CodeGraphDigital unless one of the following circumstances applies:
        </p>
        <ul>
          <li><strong>With your consent.</strong> We will share personal information with companies, organizations or individuals outside of CodeGraphDigital when we have your consent to do so.</li>
          <li><strong>For legal reasons.</strong> We will share personal information if we have a good-faith belief that access, use, or disclosure of the information is reasonably necessary to meet any applicable law.</li>
        </ul>

        <h2>4. Information Security</h2>
        <p>
          We work hard to protect CodeGraphDigital and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.
        </p>

        <h2>5. Changes</h2>
        <p>
          Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
        </p>
      </motion.div>
    </div>
  );
}