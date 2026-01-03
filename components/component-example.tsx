"use client";

import * as React from "react";

import { Example, ExampleWrapper } from "@/components/example";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardMini,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  CircleUserRound,
  FileUser,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    role: "IT Specialist",
    company: "MedStar Philippines",
    year: "Jan. 2023 - Present",
  },
  {
    role: "Web Developer",
    company: "Khayil Digital Solutions",
    year: "Feb. 2025 - Oct. 2025",
  },
  {
    role: "College IT Instructor",
    company: "STI - West Negros University",
    year: "Sep. 2022 - Jan. 2023",
  },
  {
    role: "Lead Generation Specialist",
    company: "HopTask",
    year: "Dec. 2020 - Oct. 2023",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-xl border bg-background p-6 shadow-sm">
      <p className="text-sm leading-relaxed">“{quote}”</p>

      <div className="mt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

function CarouselDots() {
  const { api } = useCarousel();
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());

    api.on("select", () => {
      setSelected(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mt-4 flex justify-end gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          className={cn(
            "h-2 w-2 rounded-full transition-all",
            i === selected ? "bg-foreground w-4" : "bg-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export function ComponentExample() {
  return (
    <ExampleWrapper>
      <div>
        <Header />
      </div>
      <div className="grid lg:grid-cols-[2fr_1fr] ">
        <About />
        <Experience />
      </div>
      <div className="grid lg:grid-cols-[1fr_2fr] items-stretch">
        <div className="flex lg:flex-col">
          <SocialLinks />
          <Contact />
        </div>
        <div className="flex">
          <TechStack />
        </div>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] ">
        <Testimonials />
        <Others />
      </div>

      <div>
        <RecentProjects />
      </div>

      <div className="">
        <FooterSection />
      </div>
    </ExampleWrapper>
  );
}

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

function Header() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardContent>
          <div className="flex flex-row items-center gap-5">
            <div>
              <Image
                src="/sam-2.png"
                alt="Sam Banihit"
                width={160}
                height={160}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="flex gap-2 items-center">
                  <p className="text-2xl font-bold">Sam Banihit</p>
                  <svg
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    aria-label="Verified user"
                  >
                    <path
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                      fill="#1d9bf0"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Bacolod City, Philippines
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg">Full-Stack Web Developer</p>
              </div>
              <div className="flex gap-2">
                <a href="mailto:sambanihit@gmail.com">
                  <Button
                    className="px-4 gap-x-2 text-xs cursor-pointer"
                    size="sm"
                  >
                    <Mail className="h-4 w-4" /> Send Email
                  </Button>
                </a>
                {/* <Button
                  className="px-4 gap-x-2 text-xs"
                  size="sm"
                  variant="outline"
                >
                  <FileUser className="h-4 w-4" /> View Resume
                </Button> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function About() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <CircleUserRound className="h-5 w-5" />
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <p>
              I’m a web developer specializing in building functional,
              user-focused websites and web-based applications using Laravel. I
              create responsive, well-structured solutions that are easy to
              manage, scalable, and aligned with real business needs—primarily
              using WordPress for websites and Laravel for application
              development.
            </p>
            <p>
              I have a background in IT support and web maintenance, which
              allows me to build systems with stability, security, and long-term
              usability in mind. I’ve also worked as a Lead Generation
              Specialist, where accuracy, data handling, and system reliability
              were essential—skills I now apply when developing data-driven
              features and backend logic.
            </p>
            <p>
              My work includes custom WordPress websites and web-based
              applications built with Laravel, translating designs from Figma
              and Photoshop into clean, functional implementations. When default
              themes, builders, or layouts aren’t enough, I customize structures
              and workflows to match the intended design and user experience.
            </p>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function Experience() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Experience</CardTitle>
        </CardHeader>

        <CardContent className="relative">
          {items.map((item, i) => (
            <div key={i} className="relative flex gap-4 pb-6">
              <span className="relative left-1 top-2 h-2 w-2 rounded-full bg-foreground" />

              <div className="flex-1">
                <p className="font-semibold">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <Badge variant="outline" className="mt-1">
                  {item.year}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </Example>
  );
}

function Testimonials() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <CircleUserRound className="h-5 w-5" />
          <CardTitle>Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <TestimonialCard
                  quote="Sam is an effective leader and a reliable team player who thrives in collaborative environments. He is very keen to details, ensuring accuracy and quality in every task he handles."
                  name="Law Tanatan"
                  role="CEO and Project Manager of HopTask"
                />
              </CarouselItem>

              <CarouselItem>
                <TestimonialCard
                  quote="Sam is an invaluable asset to our team. His exceptional work ethic and keen intellect consistently enhances the quality of our projects"
                  name="MJ Litorja"
                  role="Head of Branding and Design of HopTask"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselDots />
          </Carousel>
        </CardContent>
      </Card>
    </Example>
  );
}

function Others() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Let’s Work Together</CardTitle>
        </CardHeader>

        <CardContent className="relative flex flex-col justify-between h-full">
          <div>
            <p>
              If you're a business seeking to establish a web presence or an
              employer or individual in search of a developer to hire, don’t
              hesitate to get in touch.
            </p>
          </div>
          <div className="flex justify-end">
            <a href="mailto:sambanihit@gmail.com">
              <Button size="sm" variant="outline" className="cursor-pointer">
                <Mail />
                Let’s talk
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function TechStack() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <CardSubTitle>Frontend</CardSubTitle>
            <div className="mt-2 space-x-2 space-y-1">
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">Javascript</Badge>
              <Badge variant="outline">JQuery</Badge>
              <Badge variant="outline">Bootstrap</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Alpine.js</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Framer Motion</Badge>
              <Badge variant="outline">Aceternity UI</Badge>
              <Badge variant="outline">Shadcn</Badge>
            </div>
          </div>

          <div>
            <CardSubTitle>Backend</CardSubTitle>
            <div className="mt-2 space-x-2 space-y-1">
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">Laravel</Badge>
              <Badge variant="outline">Livewire</Badge>
              <Badge variant="outline">Filament</Badge>
              <Badge variant="outline">MySQL</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
            </div>
          </div>

          <div>
            <CardSubTitle>DevOps / Hosting / Deployment</CardSubTitle>
            <div className="mt-2 space-x-2 space-y-1">
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">Render</Badge>
              <Badge variant="outline">Vercel</Badge>
              <Badge variant="outline">Hostinger</Badge>
            </div>
          </div>

          <div>
            <CardSubTitle>
              Developer Tools / Design / Version Control
            </CardSubTitle>
            <div className="mt-2 space-x-2 space-y-1">
              <Badge variant="outline">VSCode</Badge>
              <Badge variant="outline">TablePlus</Badge>
              <Badge variant="outline">Laravel Herd</Badge>
              <Badge variant="outline">XAMPP</Badge>
              <Badge variant="outline">Photoshop</Badge>
              <Badge variant="outline">Figma</Badge>
              <Badge variant="outline">Git</Badge>
              <Badge variant="outline">Github</Badge>
            </div>
          </div>

          <div>
            <CardSubTitle>CMS</CardSubTitle>
            <div className="mt-2 space-x-2 space-y-1">
              <Badge variant="outline">WordPress</Badge>
              <Badge variant="outline">Elementor</Badge>
              <Badge variant="outline">WPBakery</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function SocialLinks() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Social Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <CardMini className="hover:bg-accent">
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/samson-banihit/"
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                    <p className="text-xs font-semibold">Linkedin</p>
                  </div>
                </a>
              </CardContent>
            </CardMini>
            <CardMini className="hover:bg-accent">
              <CardContent>
                <a href="https://github.com/sambanihit98" target="_blank">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-xs font-semibold">Github</p>
                  </div>
                </a>
              </CardContent>
            </CardMini>
            <CardMini className="hover:bg-accent">
              <CardContent>
                <a href="https://www.facebook.com/sam.banihit" target="_blank">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.309c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs font-semibold">Facebook</p>
                  </div>
                </a>
              </CardContent>
            </CardMini>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function Contact() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <CardMini className="hover:bg-accent">
              <CardContent>
                <a href="mailto:sambanihit@gmail.com">
                  <div className="space-y-2">
                    <div className="flex gap-1 items-center">
                      <Mail className="h-3 w-3" />
                      <p className="text-xs font-semibold">Email</p>
                    </div>
                    <div>
                      <p className="text-xs">sambanihit@gmail.com</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </CardMini>
            <CardMini className="hover:bg-accent">
              <CardContent>
                <a href="tel:+639276106684">
                  <div className="space-y-2">
                    <div className="flex gap-1 items-center">
                      <Phone className="h-3 w-3" />
                      <p className="text-xs font-semibold">Phone Number</p>
                    </div>
                    <div>
                      <p className="text-xs">+639276106684</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </CardMini>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function RecentProjects() {
  const [theme, setTheme] = React.useState("light");

  return (
    <Example>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <section>
            <div className="mb-3">
              <CardSubTitle>Web-Based App</CardSubTitle>
            </div>
            <div className="gap-4 grid lg:grid-cols-3">
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">WorkHive</p>
                      <p className="text-xs">
                        A job posting platform for Canlaon City
                      </p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://workhive-6drl.onrender.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          workhive-6drl.onrender.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Untold Within</p>
                      <p className="text-xs">
                        Where you can share your thoughts
                      </p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://untold-within-rr3q.onrender.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          untold-within-rr3q.onrender.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">AidPoints</p>
                      <p className="text-xs">
                        Web-based emergency response app
                      </p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a href="#" target="_blank" rel="noreferrer">
                          <Globe className="h-4 w-4" />
                          aidpoints.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <hr />

          <section>
            <div className="mb-3">
              <CardSubTitle>WordPress Websites</CardSubTitle>
            </div>
            <div className="gap-4 grid lg:grid-cols-3">
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">
                        Consortium for Global Education
                      </p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://cgeinc.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          cgeinc.org
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">MedStar BTR</p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://www.medstarbtr.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          medstarbtr.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Khayil Digital Solutions</p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://khayildigital.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          khayildigital.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">IAMFAME Inc.</p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://iamfame.uno/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          iamfame.uno
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">In Christ Alone Ministry</p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://icaphil.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          icaphil.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">MedStar Philippines</p>
                    </div>
                    <div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="gap-2 cursor-pointer"
                      >
                        <a
                          href="https://medstarphim.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          medstarphim.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </CardContent>
      </Card>
    </Example>
  );
}

function FooterSection() {
  const [theme, setTheme] = React.useState("light");
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center py-10">
      <p className="text-sm">
        &copy; {currentYear} Sam Banihit. All rights reserved.
      </p>
    </div>
  );
}
