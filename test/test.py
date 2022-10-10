import streamlit.components.v1 as components
import streamlit as st

_my_component = components.declare_component(
    "TS Example",
  url="http://localhost:3001"
)
st.title('StreamLit TS Example')
_my_component()
