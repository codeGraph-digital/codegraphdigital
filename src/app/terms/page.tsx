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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className='mt-4 text-lg text-muted-foreground'>
            Please read these terms carefully before using our service.
          </p>
        </div>

        <Card className='mt-12'>
          <CardHeader>
            <CardTitle>Agreement to Terms</CardTitle>
            <CardDescription>
              Last updated: {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-8'>
            <LegalSection title='1. Introduction'>
              <p>
                Welcome to CodeGraphDigital! These Terms of Service ("Terms")
                govern your use of our website, products, and services
                (collectively, the "Services"). By accessing or using our
                Services, you agree to be bound by these Terms and our Privacy
                Policy. If you do not agree to these Terms, do not use our
                Services.
              </p>
            </LegalSection>
            <LegalSection title='2. Accounts'>
              <p>
                When you create an account with us, you must provide us with
                information that is accurate, complete, and current at all
                times. Failure to do so constitutes a breach of the Terms, which
                may result in immediate termination of your account on our
                Service. You are responsible for safeguarding the password that
                you use to access the Service and for any activities or actions
                under your password.
              </p>
            </LegalSection>
            <LegalSection title='3. User-Generated Content'>
              <p>
                Our Service allows you to post, link, store, share and otherwise
                make available certain information, text, graphics, or other
                material ("Content"). You are responsible for the Content that
                you post on or through the Service, including its legality,
                reliability, and appropriateness. By posting Content, you grant
                us the right and license to use, modify, publicly perform,
                publicly display, reproduce, and distribute such Content on and
                through the Service.
              </p>
            </LegalSection>
            <LegalSection title='4. Termination'>
              <p>
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
            </LegalSection>
            <LegalSection title='5. Limitation Of Liability'>
              <p>
                In no event shall CodeGraphDigital, nor its directors,
                employees, partners, agents, suppliers, or affiliates, be liable
                for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the Service.
              </p>
            </LegalSection>
            <LegalSection title='6. Changes to Terms'>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide at least 30
                days' notice prior to any new terms taking effect. By continuing
                to access or use our Service after any revisions become
                effective, you agree to be bound by the revised terms.
              </p>
            </LegalSection>
            <div className='mt-8 border-t pt-6'>
              <h2 className='text-lg font-semibold mb-2'>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please{" "}
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
