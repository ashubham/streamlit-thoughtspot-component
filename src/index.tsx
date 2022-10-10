import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import { ThoughtspotComponent } from "./ThoughtspotComponent"

console.log("testing")

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <ThoughtspotComponent />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
