"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg dark:prose-invert mx-auto"
      >
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          Welcome to CodeGraphDigital! These Terms of Service ("Terms") govern your use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
        </p>

        <h2>2. Use of Our Services</h2>
        <p>
          You must follow any policies made available to you within the Services. Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.
        </p>
        
        <h3>2.1. Your Account</h3>
        <p>
          You may need a CodeGraphDigital Account to use some of our Services. You are responsible for the activity that happens on or through your Account. Try not to reuse your Account password on third-party applications.
        </p>

        <h2>3. Content in Our Services</h2>
        <p>
          Our Services display some content that is not CodeGraphDigital's. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law.
        </p>

        <h2>4. Disclaimers and Limitations of Liability</h2>
        <p>
          We provide our Services using a commercially reasonable level of skill and care and we hope that you will enjoy using them. But there are certain things that we don't promise about our Services.
        </p>
        <p>
          OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER CODEGRAPHDIGITAL NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. WE PROVIDE THE SERVICES “AS IS”.
        </p>

        <h2>5. About these Terms</h2>
        <p>
          We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page.
        </p>
      </motion.div>
    </div>
  );
}