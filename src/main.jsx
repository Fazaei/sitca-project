import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/landingComponent/index.css'
import App from './component/landingComponent/App.jsx'
import AddSkill1 from './component/landingComponent/skills.jsx'
import { AddSkill2 } from './component/landingComponent/skills.jsx'

createRoot(document.getElementById('team')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('developerSkills')).render(
  <StrictMode>
    <AddSkill1 />
  </StrictMode>,
)

createRoot(document.getElementById('designerSkills')).render(
  <StrictMode>
    <AddSkill2 />
  </StrictMode>,
)