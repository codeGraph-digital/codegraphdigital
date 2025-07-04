"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { motion } from "framer-motion";
import Link from "next/link";

const contentApiExample = `import { CodeGraphDigital } from 'codegraph-sdk';

const client = new CodeGraphDigital({
  apiKey: process.env.CODEGRAPHDIGITAL_API_KEY
});

async function generateIntro() {
  const response = await client.content.generate({
    prompt: "Write a blog post intro about the future of AI in marketing.",
    length: 'short'
  });
  console.log(response.text);
}`;

const campaignApiExample = `async function createWelcomeCampaign() {
  const campaign = await client.campaigns.create({
    name: "New Subscriber Welcome Flow",
    trigger: {
      type: "list_subscription",
      listId: "new-subscribers"
    },
    steps: [
      { type: "send_email", templateId: "welcome-email-v1" },
      { type: "wait", duration: "2d" },
      { type: "send_email", templateId: "follow-up-email" }
    ]
  });
  console.log("Campaign created:", campaign.id);
}`;

const seoApiExample = `async function analyzeUrlSeo() {
  const analysis = await client.seo.analyze({
    url: "https://yourwebsite.com/blog/my-latest-post"
  });
  console.log("SEO Score:", analysis.score);
  console.log("Recommendations:", analysis.recommendations);
}`;

const sections = [
  { id: "getting-started", title: "Getting Started" },
  { id: "content-generation", title: "Content Generation API" },
  { id: "campaign-automation", title: "Campaign Automation API" },
  { id: "seo-analysis", title: "SEO Analysis API" },
];

export default function DocsPage() {
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
            Documentation
          </h1>
          <p className='mt-4 text-lg text-muted-foreground'>
            Integrate our AI tools into your workflow with our comprehensive
            guides and API references.
          </p>
        </div>

        <div className='mt-12 space-y-16'>
          <Card className='bg-muted/50'>
            <CardHeader>
              <CardTitle>On this page</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className='text-primary hover:underline'
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <section id='getting-started'>
            <h2 className='text-2xl font-bold'>Getting Started</h2>
            <p className='mt-2 text-muted-foreground'>
              Begin by installing our client library and authenticating your
              requests.
            </p>
            <Card className='mt-4'>
              <CardHeader>
                <CardTitle>API Key</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your API key is required for all requests. You can find it in
                  your dashboard settings. Keep it secret, keep it safe!
                </p>
                <CodeBlock
                  language='bash'
                  code={`export CODEGRAPHDIGITAL_API_KEY="your_api_key_here"`}
                />
              </CardContent>
            </Card>
          </section>

          <section id='content-generation'>
            <h2 className='text-2xl font-bold'>Content Generation API</h2>
            <p className='mt-2 text-muted-foreground'>
              Generate articles, ad copy, and more with a simple API call.
            </p>
            <Card className='mt-4'>
              <CardHeader>
                <CardTitle>Example Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Here's an example of how to generate content using our Node.js
                  client:
                </p>
                <CodeBlock language='javascript' code={contentApiExample} />
              </CardContent>
            </Card>
          </section>

          <section id='campaign-automation'>
            <h2 className='text-2xl font-bold'>Campaign Automation API</h2>
            <p className='mt-2 text-muted-foreground'>
              Programmatically create and manage automated marketing campaigns.
            </p>
            <Card className='mt-4'>
              <CardHeader>
                <CardTitle>Example: Create a Welcome Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Define triggers and steps to build powerful, automated
                  workflows for your users.
                </p>
                <CodeBlock language='javascript' code={campaignApiExample} />
              </CardContent>
            </Card>
          </section>

          <section id='seo-analysis'>
            <h2 className='text-2xl font-bold'>SEO Analysis API</h2>
            <p className='mt-2 text-muted-foreground'>
              Get on-demand SEO analysis and recommendations for any URL.
            </p>
            <Card className='mt-4'>
              <CardHeader>
                <CardTitle>Example: Analyze a Blog Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Submit a URL to our CodeGraph Output engine for a
                  comprehensive SEO report.
                </p>
                <CodeBlock language='javascript' code={seoApiExample} />
              </CardContent>
            </Card>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
