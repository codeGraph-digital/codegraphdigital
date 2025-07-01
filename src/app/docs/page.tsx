"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { motion } from "framer-motion";

const apiExample = `import { CodeGraphDigital } from 'codegraph-sdk';

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

export default function DocsPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Integrate our AI tools into your workflow with our comprehensive
            guides and API references.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <p className="mt-2 text-muted-foreground">
              Begin by installing our client library and authenticating your
              requests.
            </p>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>API Key</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your API key is required for all requests. You can find it in
                  your dashboard settings.
                </p>
                <CodeBlock
                  language="bash"
                  code={`export CODEGRAPHDIGITAL_API_KEY="your_api_key_here"`}
                />
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Content Generation API</h2>
            <p className="mt-2 text-muted-foreground">
              Generate articles, ad copy, and more with a simple API call.
            </p>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Example Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Here's an example of how to generate content using our
                  Node.js client:
                </p>
                <CodeBlock language="javascript" code={apiExample} />
              </CardContent>
            </Card>
          </section>
        </div>
      </motion.div>
    </div>
  );
}