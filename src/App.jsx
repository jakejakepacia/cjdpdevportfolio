
import Landing from "./components/landing"
import './index.css'
import Tabs from "./components/tabs"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import GithubContributions from "./components/GithubContributions"
import Socials from "./components/Socials"
function App() {

  return (
    <div>
        <Landing  />
        <GithubContributions />
        <Projects />
        <Skills />
        <Socials />
      {/* <section>
        <Tabs />
      </section> */}
    </div>
  )
}

export default App
