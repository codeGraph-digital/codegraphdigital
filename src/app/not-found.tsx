import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className='container py-24 flex flex-col items-center justify-center min-h-[60vh] text-center mx-auto'>
      <h1 className='text-6xl font-bold mb-4 text-primary'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
      <p className='mb-8 text-muted-foreground'>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href='/'>
        <Button className='text-lg px-8 py-3'>Go Home</Button>
      </Link>
    </div>
  );
}
