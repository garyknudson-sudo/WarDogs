import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

const benefits = [
  "Elite position-specific coaching for 12U & 14U players",
  "Build game IQ, speed, and disciplined execution",
  "Culture that develops confidence, leadership, and grit"
];

const process = [
  {
    step: "01",
    title: "Register",
    body: "Complete your fall evaluation form in under 2 minutes."
  },
  {
    step: "02",
    title: "Evaluate",
    body: "Attend your age-group session for combine drills and live reps."
  },
  {
    step: "03",
    title: "Compete",
    body: "Accepted athletes begin structured preseason training immediately."
  }
];

const testimonials = [
  {
    quote:
      "My son came in shy and left calling defenses at middle linebacker. The coaches demand excellence.",
    author: "Parent of 14U Athlete"
  },
  {
    quote:
      "War Dogs gave me confidence and taught me how to lead under pressure.",
    author: "8th Grade Captain"
  }
];

export default function HomePage() {
  return (
    <main>
      <Section className="clip-angle border-b-2 border-ash bg-steel">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <p className="inline-block border-2 border-ember px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-ember">
              Fall Evaluations Open
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">
              Built for Players Who Refuse to Be Average.
            </h1>
            <p className="max-w-xl text-lg text-ash/80 md:text-xl">
              War Dogs Football develops 7th and 8th grade athletes into relentless,
              disciplined competitors. If your player wants real coaching, real standards,
              and real growth — this is the program.
            </p>
            <Link
              href="#signup"
              className="inline-block border-2 border-ember bg-ember px-8 py-4 text-lg font-black uppercase tracking-widest text-coal transition hover:-translate-y-1"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-ember" />
            <Image
              src="/team-huddle.svg"
              alt="War Dogs players in pre-game huddle"
              width={700}
              height={600}
              priority
              className="relative border-2 border-ash object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="problem" className="border-b-2 border-ash">
        <div className="section-shell">
          <h2 className="font-display text-4xl uppercase md:text-6xl">Too Many Programs Promise. Few Develop.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Players get lost in oversized rosters.",
              "Talent stalls without serious technical coaching.",
              "Parents waste seasons waiting for confidence to click."
            ].map((pain) => (
              <p key={pain} className="brutalist-card text-lg">
                {pain}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="benefits" className="bg-steel border-b-2 border-ash">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-4xl uppercase md:text-6xl">The War Dogs Difference</h2>
            <p className="mt-6 max-w-2xl text-lg text-ash/80">
              We train the total athlete: fundamentals, football IQ, and mental toughness.
              Every rep has purpose. Every coach teaches with urgency.
            </p>
          </div>
          <ul className="space-y-4">
            {benefits.map((item) => (
              <li key={item} className="brutalist-card text-lg font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="process" className="border-b-2 border-ash">
        <div className="section-shell">
          <h2 className="font-display text-4xl uppercase md:text-6xl">How It Works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="brutalist-card">
                <p className="text-5xl font-display text-ember">{item.step}</p>
                <h3 className="mt-2 text-2xl font-bold uppercase">{item.title}</h3>
                <p className="mt-3 text-ash/80">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="testimonials" className="bg-steel border-b-2 border-ash">
        <div className="section-shell">
          <h2 className="font-display text-4xl uppercase md:text-6xl">Built on Results</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="brutalist-card">
                <p className="text-xl leading-relaxed">“{item.quote}”</p>
                <footer className="mt-4 text-sm uppercase tracking-widest text-ember">
                  — {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="border-b-2 border-ash">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl uppercase md:text-6xl">About War Dogs</h2>
            <p className="mt-6 text-lg text-ash/80">
              War Dogs is an elite tackle football organization for 12U and 14U athletes.
              Our staff includes former high school and collegiate players committed to
              developing disciplined, coachable leaders on and off the field.
            </p>
            <p className="mt-4 text-lg text-ash/80">
              We believe football is a proving ground for life — accountability, preparation,
              and brotherhood.
            </p>
          </div>
          <Image
            src="/helmet.svg"
            alt="War Dogs football helmet graphic"
            width={600}
            height={600}
            className="mx-auto w-full max-w-md border-2 border-ash"
          />
        </div>
      </Section>

      <Section id="signup" className="bg-ember text-coal">
        <div className="section-shell text-center">
          <h2 className="font-display text-4xl uppercase md:text-7xl">Earn Your Spot This Fall.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
            Evaluations are filling quickly for 12U and 14U rosters. Lock in your athlete&apos;s
            session today and step into a program that demands and delivers growth.
          </p>
          <Link
            href="mailto:info@wardogsfootball.com?subject=Fall%20Evaluation%20Signup"
            className="mt-10 inline-block border-2 border-coal bg-coal px-10 py-4 text-lg font-black uppercase tracking-widest text-ash transition hover:-translate-y-1"
          >
            Claim Evaluation Slot
          </Link>
        </div>
      </Section>

      <footer className="border-t-2 border-coal bg-coal">
        <div className="section-shell flex flex-col gap-4 py-10 text-sm uppercase tracking-wider text-ash/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} War Dogs Football</p>
          <nav className="flex gap-6">
            <Link href="#problem" className="hover:text-ember">
              Program
            </Link>
            <Link href="#about" className="hover:text-ember">
              Coaches
            </Link>
            <Link href="#signup" className="hover:text-ember">
              Sign Up
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
