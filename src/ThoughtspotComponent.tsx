import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import { useRenderData } from "streamlit-component-lib-react-hooks"
import {
  SearchEmbed,
  AuthType,
  init,
  prefetch,
  EmbedEvent,
  HostEvent,
} from "@thoughtspot/visual-embed-sdk"
import React, { useEffect, ReactElement, ReactNode } from "react"

interface State {
  numClicks: number
  isFocused: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */

export function ThoughtspotComponent(): ReactElement {
  const { args }: any = useRenderData()
  Streamlit.setFrameHeight(600)
  console.log("Hey there!")
  init({
    thoughtSpotHost: "https://embed-1-do-not-delete.thoughtspotdev.cloud/#",
    authType: AuthType.None,
  })
  useEffect(() => {
    var element: any = document.getElementById("ts-embed")
    const searchEmbed = new SearchEmbed(element, {
      frameParams: {
        width: "600px",
        height: "600px",
      },
    })
    searchEmbed.render()
    element.style.background = "#cccccc"
  }, [])
  return (
    <div
      style={{ width: "600px", height: "600px", background: "#cccccc" }}
      id="ts-embed"
    >
      TS Embed
    </div>
  )
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
// export default withStreamlitConnection(ThoughtspotComponent)
