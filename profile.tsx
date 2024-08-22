import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Linkedin, Twitter, Instagram, Search } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const interests = [
    "Artificial Intelligence", "Blockchain", "Quantum Computing", "Space Technology", "Renewable Energy",
    "Biotechnology", "Nanotechnology", "Augmented Reality", "Autonomous Vehicles", "Internet of Things",
    "Cybersecurity", "3D Printing", "Robotics", "Neurotechnology", "Genomics",
    "Smart Cities", "Vertical Farming", "Sustainable Fashion", "EdTech", "FinTech",
    "Digital Health", "Clean Energy", "Synthetic Biology", "Data Science", "Cloud Computing"
  ]

  const followsReads = [
    "TechCrunch", "Venture Beat", "Y Combinator", "a16z", "First Round Review",
    "Hacker News", "Product Hunt", "Tech Twitter", "Startup Podcasts", "VC Blogs",
    "Tech Newsletters", "Angel List", "Crunchbase", "Pitchbook", "CB Insights",
    "Stratechery", "The Information", "MIT Technology Review", "Wired", "Fast Company"
  ]

  const articles = [
    {
      title: "The Future of AI in Venture Capital",
      summary: "Exploring how artificial intelligence is reshaping investment strategies and decision-making processes in the VC world.",
      tags: ["Artificial Intelligence", "Venture Capital", "Investment Strategies"]
    },
    {
      title: "Blockchain's Impact on Financial Inclusion",
      summary: "Analyzing the potential of blockchain technology to bring financial services to underserved populations globally.",
      tags: ["Blockchain", "FinTech", "Financial Inclusion"]
    },
    {
      title: "The Rise of Sustainable Tech Startups",
      summary: "Examining the growing trend of eco-friendly and sustainable technology startups and their impact on various industries.",
      tags: ["Sustainability", "Clean Energy", "Green Tech"]
    },
    {
      title: "Quantum Computing: A New Era for Data Processing",
      summary: "Delving into the potential applications and challenges of quantum computing in revolutionizing data processing capabilities.",
      tags: ["Quantum Computing", "Data Science", "Technology Innovation"]
    }
  ]

  const raisedFrom = [
    { name: "Sarah Johnson", company: "Acme Ventures", image: "/placeholder.svg?height=40&width=40" },
    { name: "Michael Chen", company: "Horizon Capital", image: "/placeholder.svg?height=40&width=40" },
    { name: "Emily Rodriguez", company: "Stellar Investments", image: "/placeholder.svg?height=40&width=40" },
    { name: "David Kim", company: "Nexus Partners", image: "/placeholder.svg?height=40&width=40" },
    { name: "Olivia Patel", company: "Aurora Fund", image: "/placeholder.svg?height=40&width=40" },
    { name: "Thomas Müller", company: "Global Innovators", image: "/placeholder.svg?height=40&width=40" },
  ]

  const designs = [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Button variant="ghost" className="mb-4 text-white">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
      </Button>
      
      <div className="space-y-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <img
                alt="Profile picture"
                className="rounded-full"
                height="80"
                src="/placeholder.svg?height=80&width=80"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">Guillermo Rauch</h2>
                <p className="text-zinc-400">CEO - Vercel</p>
                <p className="text-zinc-500 text-sm">San Francisco</p>
              </div>
              <div className="ml-auto space-x-2">
                <Button size="sm" variant="secondary">
                  VC
                </Button>
                <Button size="sm" variant="secondary">
                  Founder
                </Button>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button size="sm" variant="outline">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Invests in</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-zinc-400">Stages:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">Series A</Button>
                    <Button size="sm" variant="secondary">Series B</Button>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-zinc-400">Sectors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Robotics", "Analytics", "Future of Work", "E-commerce", "FinTech", "Enterprise", "Consumer Internet", "New York City", "San Francisco Bay Area"].map((sector) => (
                      <Button key={sector} size="sm" variant="secondary">{sector}</Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-zinc-400">Locations:</h4>
                  <Button size="sm" variant="secondary">New York, New York</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Interests</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Button key={index} size="sm" variant="secondary">{interest}</Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Work Experience</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Bedrock",
                  role: "Founder & Managing Partner",
                  description: "Launched in March 2018, Bedrock invests in breakout technology companies that are incongruent with popular narratives. Bedrock currently manages approximately $2 billion in assets across several funds. http://www.bedrockcap.com"
                },
                {
                  name: "OpenAI",
                  role: "Investor",
                  description: ""
                },
                {
                  name: "Nubank",
                  role: "Lead Investor: Series C, Former Member of Board of Directors",
                  description: ""
                },
                {
                  name: "Lyft",
                  role: "Lead Investor: Series B, Former Member of Board of",
                  description: ""
                }
              ].map((job, index) => (
                <div key={index} className="pb-4 border-b border-zinc-800 last:border-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                    <h4 className="font-semibold text-white">{job.name}</h4>
                  </div>
                  <p className="text-sm text-zinc-400">{job.role}</p>
                  {job.description && <p className="text-sm text-zinc-500 mt-2">{job.description}</p>}
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Invested in</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Bedrock",
                  website: "Bedrock.com",
                  description: "Launched in March 2018, Bedrock invests in breakout technology companies that are incongruent with popular narratives. Bedrock currently manages approximately $2 billion in assets across several funds."
                },
                {
                  name: "OpenAI",
                  website: "Openai.com",
                  description: "OpenAI is a technology company focused on discovering and developing AGI for the greater good. Their first mass product ChatGPT was an example..."
                },
                {
                  name: "Nubank",
                  website: "Nubank.com",
                  description: "Nubank is a different type of bank. Founded and based out of Brazil, Nubank offers the US experience of retail banks at a market who've been deprived of such experience and trust."
                }
              ].map((company, index) => (
                <div key={index} className="pb-4 border-b border-zinc-800 last:border-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                    <h4 className="font-semibold text-white">{company.name}</h4>
                  </div>
                  <p className="text-sm text-zinc-400">{company.website}</p>
                  <p className="text-sm text-zinc-500 mt-2">{company.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Raised from</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {raisedFrom.map((investor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={investor.image}
                    alt={`${investor.name}'s profile`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{investor.name}</p>
                    <p className="text-xs text-zinc-400">{investor.company}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Follows/Reads</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {followsReads.map((item, index) => (
                  <Button key={index} size="sm" variant="secondary">{item}</Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* New Designs Card */}
          <Card className="bg-zinc-900 border-zinc-800 md:col-span-3">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Designs</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designs.map((design, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={design}
                      alt={`Product design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Writing / Articles</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              {articles.map((article, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-md font-semibold text-white">{article.title}</h4>
                  <p className="text-sm text-zinc-400">{article.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Button key={tagIndex} size="sm" variant="outline" className="h-6 px-2 text-xs">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="fixed bottom-4 left-0 right-0 px-4">
        <div className="max-w-md mx-auto relative">
          <Input
            type="search"
            placeholder="Ask Guillermo anything..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border-zinc-700 text-white rounded-full shadow-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
        </div>
      </div>
    </div>
  )
}