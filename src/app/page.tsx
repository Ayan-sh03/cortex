import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Brain, Calendar, Mail, Stethoscope, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Ghibli-inspired background */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center hero-bg"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('/hero2.jpg')",
        }}
      >
        {/* Floating medical elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Stethoscope className="w-8 h-8 text-white/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
            <Brain className="w-12 h-12 text-white/25" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
            <Zap className="w-6 h-6 text-white/20" />
          </div>
          <div className="absolute top-60 left-1/3 animate-float" style={{ animationDelay: "1s" }}>
            <Mail className="w-10 h-10 text-white/25" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              Neural-Augmented Medical Intelligence
            </Badge>

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight drop-shadow-lg">
              Cortex
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto font-serif drop-shadow-md">
              AI-powered medical intelligence that transforms research into actionable clinical insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex w-full sm:w-auto max-w-md">
                <Input
                  placeholder="Enter your email address"
                  className="rounded-r-none border-r-0 focus:ring-2 focus:ring-white/20 bg-white/90 backdrop-blur-sm"
                />
                <Button className="rounded-l-none bg-emerald-600 hover:bg-emerald-700 px-6 text-white">
                  Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-4 h-4" />
                <span>50,000+ Cognitive Practitioners</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span>Algorithmic Intelligence Streams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Neural-Augmented Medical Intelligence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Advanced AI algorithms analyze medical research to deliver personalized clinical insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Cognitive Synthesis Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Advanced AI that extracts medical insights from complex research data with precision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-serif">Precision-Targeted Epistemic Domains</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Access 20+ medical specialties with targeted AI insights for better clinical decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Temporal Intelligence Streams</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Real-time updates from the latest medical research and breakthrough discoveries.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest Cognitive Intelligence Synthesis</h2>
            <p className="text-lg text-muted-foreground font-serif">
              Latest medical research insights curated by our AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-md bg-card/90 backdrop-blur">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg">
                <Image
                  src="/cardiology-research.png"
                  alt="Cardiology Research"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/10 text-primary">Cardiology</Badge>
                <CardTitle className="group-hover:text-primary transition-colors font-serif">
                  Quantum-Enhanced Cardiac Intervention Protocols
                </CardTitle>
                <CardDescription>
                  Neural-guided surgical methodologies demonstrating 95% efficacy through machine learning optimization
                  frameworks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-md bg-card/90 backdrop-blur">
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-t-lg">
                <Image
                  src="/neurology-brain-scan.png"
                  alt="Neurology Research"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent/10 text-accent">Neurology</Badge>
                <CardTitle className="group-hover:text-primary transition-colors font-serif">
                  Predictive Neurodegeneration Intelligence
                </CardTitle>
                <CardDescription>
                  Deep learning architectures achieving temporal cognitive mapping, predicting Alzheimer&apos;s pathogenesis
                  with decade-level precision
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-md bg-card/90 backdrop-blur">
              <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-t-lg">
                <Image
                  src="/oncology-breakthrough.png"
                  alt="Oncology Research"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary/10 text-secondary">Oncology</Badge>
                <CardTitle className="group-hover:text-primary transition-colors font-serif">
                  Adaptive Immunotherapeutic Orchestration
                </CardTitle>
                <CardDescription>
                  Personalized therapeutic algorithms demonstrating unprecedented efficacy in advanced-stage malignancy
                  management protocols
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ascend to the Apex of Medical Cognition</h2>
            <p className="text-lg text-muted-foreground mb-8 font-serif">
              Transcend conventional medical knowledge boundaries. Synchronize with our neural intelligence network and
              achieve cognitive supremacy in your specialized domain.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Initiate Neural Synchronization
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Complimentary cognitive enhancement • Adaptive termination • 50,000+ synchronized practitioners
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cortex
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering healthcare cognoscenti through neural-augmented medical intelligence and quantum-curated
                research synthesis.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-serif">Specialties</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Oncology</li>
                <li>Pediatrics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-serif">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Cortex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
