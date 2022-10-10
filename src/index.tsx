import React from "react"
import ReactDOM from "react-dom"
import ThoughtspotComponent from "./ThoughtspotComponent"
import {
  SearchEmbed,
  AuthType,
  init,
  prefetch,
  EmbedEvent,
  HostEvent
}
from '@thoughtspot/visual-embed-sdk';

ReactDOM.render(
  <React.StrictMode>
    <ThoughtspotComponent />
  </React.StrictMode>,
  document.getElementById("root")
)
