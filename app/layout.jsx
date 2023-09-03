import Nav from "@components/Nav"
import Provider from "@components/Provider";
import "@styles/globals.css"


export const metadata={
    title:'IdeaInk | Blogs',
    description:'Share your thoughts'
}

const RootLayout = ({children}) => {
  return (
<html lang='en'>
  <head>
  <link rel="icon" href="http://localhost:3000/_next/image?url=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200224%2Foriginal%2Fpngtree-light-bulb-logo-new-idea-symbol-and-icon-flat-bright-cartoon-png-image_5212484.jpg&w=128&q=75" />
  </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
  )
}

export default RootLayout