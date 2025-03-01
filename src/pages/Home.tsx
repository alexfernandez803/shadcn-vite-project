import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Shadcn UI + Vite Home</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to shadcn/ui with Vite</CardTitle>
            <CardDescription>
              A component library built with Radix UI and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This template includes several pre-installed components and pages.</p>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard" className="w-full">
              <Button className="w-full">Go to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Start building your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Add more components by creating them in the components/ui directory.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow the shadcn UI documentation for component patterns.
            </p>
          </CardContent>
          <CardFooter>
            <a 
              href="https://ui.shadcn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full">
                Documentation
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
