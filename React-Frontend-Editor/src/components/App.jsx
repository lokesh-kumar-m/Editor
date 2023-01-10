import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import Header from "./Header"

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javascript, setJavascript] = useLocalStorage('javascript', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
    }, 100)

    return () => clearTimeout(timeout)
  }, [html, css, javascript])

  useEffect(()=>{
   const clear= setTimeout(() => {
     setSrcDoc(`
        <html>
          <body></body>
          <style></style>
          <script></script>
        </html>
      `)
   })
      return () => clearTimeout(clear)
  })
  return (
    <>
      <Header></Header>

            <div className="pane top-section">
                <Editor
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    language="javascript"
                    displayName="JS"
                    value={javascript}
                    onChange={setJavascript}
                />
            </div>
            <div className="pane bottom-section">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
      
    </>
  )
}

export default App;
