"use client";
import HomeNavbar from "@/components/HomeNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <main className="w-full flex flex-1 flex-col">
      <HomeNavbar />

      {/* Hero with diagonal image */}
      <section className="relative h-[calc(100vh-69px)]">
        {/* Diagonal cut image background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero_image.png"
            alt="Beautiful custom deck"
            fill
            priority
            className="object-cover"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
            }}
          />
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 bg-black/40"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
            }}
          />
        </div>

        {/* Content on top */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            BUILT TO LAST
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Custom decks • Free estimates • Lifetime warranty
          </p>
          <Button className="mt-8 text-sm sm:text-base">
            Get Free Quote →
          </Button>
        </div>
      </section>

      <section className="flex-1 my-12 sm:my-16 md:my-24 px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap gap-6 justify-center w-full">
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Lorem, ipsum dolor.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2 text-sm sm:text-base">
                <li className="text-sm sm:text-base">
                  ✓ Free design consultation
                </li>
                <li className="text-sm sm:text-base">
                  ✓ Premium materials only
                </li>
                <li className="text-sm sm:text-base">
                  ✓ 10-year craftsmanship warranty
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Explore Wood Decks →
              </Button>
            </CardFooter>
          </Card>

          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Lorem, ipsum dolor.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2 text-sm sm:text-base">
                <li className="text-sm sm:text-base">
                  ✓ No staining or sealing
                </li>
                <li className="text-sm sm:text-base">
                  ✓ Fade & stain resistant
                </li>
                <li className="text-sm sm:text-base">
                  ✓ 25-year manufacturer warranty
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Explore Composite →
              </Button>
            </CardFooter>
          </Card>

          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Lorem, ipsum dolor.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2 text-sm sm:text-base">
                <li className="text-sm sm:text-base">✓ Rot & damage repair</li>
                <li className="text-sm sm:text-base">✓ Railing replacement</li>
                <li className="text-sm sm:text-base">
                  ✓ Power washing & sealing
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Get Repair Quote →
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="flex-center flex-1 my-12 sm:my-16 md:my-24 mt-24 sm:mt-32 md:mt-48 flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Let&apos;s see what you may be missing out on in your backyard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mx-auto w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-full">
              <Card className="w-full aspect-square bg-card/30 flex-center p-4">
                <p className="text-xs sm:text-sm text-center">
                  your Image would be here cuzzy {i + 1}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="flex-center flex-col gap-8 sm:gap-10 md:gap-12 flex-1 my-12 sm:my-16 md:my-24 mt-24 sm:mt-32 md:mt-48 px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            See why we&apos;re the top-rated deck builder in Connecticut
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto w-full">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="max-w-md w-full hover:shadow-lg transition-shadow py-4 sm:py-6"
            >
              <CardContent>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-background fill-background/50"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 italic text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>

                {/* Project type */}
                <p className="text-xs sm:text-sm text-background font-medium">
                  Project: {testimonial.project}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-center flex-col gap-8 sm:gap-10 md:gap-12 flex-1 my-12 sm:my-16 md:my-24 mt-24 sm:mt-32 md:mt-48 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Fill out the form and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left side - Contact info */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-primary/10 border-primary text-primary">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      ✓ 500+ decks built
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      ✓ Fully licensed & insured
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      ✓ Free lifetime warranty
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      ✓ 0% financing available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        Call Us
                      </p>
                      <p className="text-muted text-xs sm:text-sm">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        Email
                      </p>
                      <p className="text-muted text-xs sm:text-sm">
                        hello@derbyvilledecks.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        Visit Us
                      </p>
                      <p className="text-muted text-xs sm:text-sm">
                        123 Main St, Derby, CT
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Form */}
            <Card className="shadow-xl">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">
                  Request Your Free Quote
                </CardTitle>
                <p className="text-muted text-sm sm:text-base">
                  Fill out the form and we&apos;ll contact you shortly
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-1 block">
                        First name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-1 block">
                        Last name *
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-1 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-1 block">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-1 block">
                      Project type
                    </label>
                    <select className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>New deck construction</option>
                      <option>Deck repair / restoration</option>
                      <option>Deck replacement</option>
                      <option>Just getting ideas</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-1 block">
                      Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your dream deck..."
                      className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-background text-primary hover:bg-background/90 text-sm sm:text-base"
                  >
                    Send Request →
                  </Button>

                  <p className="text-xs text-muted text-center">
                    By submitting, you agree to our privacy policy. We&apos;ll
                    never share your info.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <HomeFooter />
    </main>
  );
}
