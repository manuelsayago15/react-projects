import React, { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import Editor from './components/Editor'

function App() {
  const [openedEditor, setOpenedEditor] = useState('html')
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState(` `);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <div className='App'>
      <p>Welcome to the editor!</p>
      <div className='tab-button-container'>
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }}/>
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }}/>
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }}/>
      </div>

      <div className='editor-container'>
        {
          openedEditor === 'html' ? (
            <Editor 
              language="xml"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor 
              language="css"
              value={css}
              setEditorState={setCss}
            />
          ) : openedEditor === 'js' ? (
            <Editor 
              language="javascript"
              value={js}
              setEditorState={setJs}
            />
          ) : null
        }


        { /*
          openedEditor === 'html' ? (
            <p>The HTML editor is open</p>
          ) : openedEditor === 'css' ? (
            <p>The CSS editor is open</p>
          ) : (
            <p>The Javascript editor is open</p>
          )
        */}
        
      </div>

      <div>
        <iframe 
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  )
}

export default App
