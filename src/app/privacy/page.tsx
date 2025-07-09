"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LegalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className='space-y-2'>
    <h3 className='text-xl font-semibold'>{title}</h3>
    <div className='text-muted-foreground space-y-4'>{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto max-w-4xl'
      >
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Privacy Policy
          </h1>
          <p className='mt-4 text-lg text-muted-foreground'>
            Your privacy is important to us.
          </p>
        </div>

        <Card className='mt-12'>
          <CardHeader>
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
            <CardDescription>
              Last updated: {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-8'>
            <LegalSection title='1. Information We Collect'>
              <p>
                We collect information to provide better services to all our
                users. This includes:
              </p>
              <ul className='list-disc list-inside space-y-2'>
                <li>
                  <strong>Information you provide us:</strong> This includes
                  personal information you provide when you register for an
                  account, such as your name and email address.
                </li>
                <li>
                  <strong>Information from your use of our services:</strong> We
                  collect information about how you use our services, such as
                  the features you use and the content you generate.
                </li>
                <li>
                  <strong>Cookies and similar technologies:</strong> We use
                  cookies to collect and store information when you visit our
                  service.
                </li>
              </ul>
            </LegalSection>
            <LegalSection title='2. How We Use Your Data'>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to develop new ones, and to protect
                CodeGraphDigital and our users. We also use this information to
                offer you tailored content, such as giving you more relevant
                search results and ads.
              </p>
            </LegalSection>
            <LegalSection title='3. Data Security'>
              <p>
                We work hard to protect our users from unauthorized access to or
                unauthorized alteration, disclosure, or destruction of
                information we hold. We encrypt many of our services using SSL
                and review our information collection, storage, and processing
                practices to guard against unauthorized access to systems.
              </p>
            </LegalSection>
            <LegalSection title='4. Your Rights and Choices'>
              <p>
                You have rights over your personal data. Depending on your
                location, these may include the right to access, correct,
                delete, or restrict the use of your personal data. You can
                manage your information and privacy settings in your account
                dashboard.
              </p>
            </LegalSection>
            <LegalSection title='5. Changes to This Policy'>
              <p>
                Our Privacy Policy may change from time to time. We will not
                reduce your rights under this Privacy Policy without your
                explicit consent. We will post any privacy policy changes on
                this page and, if the changes are significant, we will provide a
                more prominent notice.
              </p>
            </LegalSection>
            <div className='mt-8 border-t pt-6'>
              <h2 className='text-lg font-semibold mb-2'>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please{" "}
                <a href='/contact' className='text-primary underline'>
                  contact us
                </a>{" "}
                or email us at{" "}
                <a
                  href='mailto:hello@codegraphdigital.com'
                  className='text-primary underline'
                >
                  hello@codegraphdigital.com
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
