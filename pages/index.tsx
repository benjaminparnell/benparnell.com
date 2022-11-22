import Head from 'next/head'
import Image from 'next/image'

const Link: React.FC<
  { children: React.ReactNode } & React.LinkHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <a className="text-primary" {...props}>
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Parnell</title>
        <meta name="description" content="Full Stack Software Enigneer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 flex-1 flex flex-col md:justify-center md:items-center md:min-h-screen">
        <Image
          className="rounded-full mb-4 border-2 p-1 border-primary"
          alt="Ben"
          width="200"
          height="200"
          src="/ben.jpeg"
        />
        <h1 className="text-7xl text-primary font-bold">Ben Parnell</h1>

        <div className="border-t mt-4 pt-4 max-w-lg md:text-center">
          <p>
            Hi there. I&apos;m a software engineer. I currently work at{' '}
            <Link href="https://clock.co.uk">Clock</Link>, and I&apos;ve
            previously worked at the likes of{' '}
            <Link href="https://cinch.co.uk">cinch</Link> and{' '}
            <Link href="https://booking.com">Booking.com</Link>.
          </p>

          <p className="mt-4">
            I like solving hard problems with elegant solutions. I have 8 years
            experience in developing full stack applications at a bunch of
            different scales and team sizes, along with a proven track record of
            leadership and delivery.
          </p>

          <p className="mt-4">
            Want to chat? Connect with me on{' '}
            <Link href="https://www.linkedin.com/in/benjamin-parnell-78317b5b/">
              LinkedIn
            </Link>
            . Want to see some of my code? Check out my{' '}
            <Link href="https://github.com/benjaminparnell">GitHub</Link>.
          </p>
        </div>
      </main>
    </>
  )
}
