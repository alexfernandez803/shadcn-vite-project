import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Shadcn UI + Vite</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to shadcn/ui with Vite</CardTitle>
              <CardDescription>
                A component library built with Radix UI and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This template includes several pre-installed components.</p>
              <div className="flex items-center justify-center my-4">
                <Button 
                  onClick={() => setCount((count) => count + 1)}
                  className="mr-2"
                >
                  Count is {count}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCount(0)}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Component Examples</CardTitle>
              <CardDescription>
                Try out the tabs component below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
                  <h3 className="font-medium mb-2">Tab Content 1</h3>
                  <p className="text-sm text-muted-foreground">
                    This is the content for tab 1. You can add any components here.
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
                  <h3 className="font-medium mb-2">Tab Content 2</h3>
                  <p className="text-sm text-muted-foreground">
                    This is the content for tab 2. Try clicking on other tabs!
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
                  <h3 className="font-medium mb-2">Tab Content 3</h3>
                  <p className="text-sm text-muted-foreground">
                    This is the content for tab 3. The tabs component is fully accessible.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <a 
                href="https://ui.shadcn.com" 
                target="_blank" 
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
    </>
  )
}

export default App
