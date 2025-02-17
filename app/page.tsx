import { Header } from "@/components/header";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Sun, Droplets, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/575101/pexels-photo-575101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // Replace with your farmland background image
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Content container */}
          <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
            {/* Left Content (Text) */}
            <div className="max-w-xl text-center">
              {/* Small pill / badge */}
              <div className="inline-block px-4 py-2 mb-4 bg-yellow-300 text-green-800 font-medium rounded-full">
                We are Producing Natural Products
              </div>

              {/* Main heading */}
              <h1 className="text-7xl md:text-5xl font-bold text-white leading-snug mb-4">
                Connecting Farmers to Global market for 
                <br className="hidden md:block" />
                Smarter Agriculture
              </h1>

              {/* Subtext */}
              <p className="text-white text-lg mb-8">
                List produce, track sales, and access real-time insights—
                all in one platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center flex-wrap gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full">
                  I’m a Farmer
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 px-6 rounded-full">
                  I’m a Buyer
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full">
                  I’m an Agent
                </button>
              </div>
            </div>


          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-center">Featured Products</h2>
              <button className="bg-gray-100 flex flex-row text-green-600 font-medium py-2 px-6 rounded-full">
                View all
                <ArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Image
                      src={'https://www.pexels.com/photo/tomato-lot-1327838'}
                      alt={`Product ${i}`}
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Fresh Tomatoes</CardTitle>
                    <p className="text-sm text-gray-600">Farm-fresh tomatoes, perfect for salads and cooking</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="font-bold">$2.99/kg</span>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-secondary-foreground">Why Choose AgriBazaar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Leaf, title: "Fresh Produce" },
                { icon: Sun, title: "Direct from Farmers" },
                { icon: Droplets, title: "Quality Assured" },
                { icon: TrendingUp, title: "Fair Prices" },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="mx-auto h-12 w-12 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2">{feature.title}</CardTitle>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
