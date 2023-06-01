import './App.css';
import MenuBar from "./components/MenuBar";
import MenuButton from "./components/MenuButton";
import WelcomeBlock from "./components/WelcomeBlock";
import Console from "./components/Console";
import BlockWithTitle from "./components/BlockWithTitle";
import SkillsCard from "./components/SkillsCard";
import EducationBlock from "./components/EducationBlock";
import LanguagesCard from "./components/LanguagesCard";
import ContactsCard from "./components/ContactsCard";
import FooterBlock from "./components/FooterBlock";

function App() {
  return (
      <>
          <MenuBar>
              <MenuButton scroll_id="welcome-block">welcome</MenuButton>
              <MenuButton scroll_id="skills-block">skills</MenuButton>
              <MenuButton scroll_id="projects-block">projects</MenuButton>
              <MenuButton scroll_id="education-block">education</MenuButton>
              <MenuButton scroll_id="languages-block">languages</MenuButton>
              <MenuButton scroll_id="contacts-block">contacts</MenuButton>
          </MenuBar>
          <WelcomeBlock id="welcome-block" />
          <BlockWithTitle id="skills-block" color="black" title="professional skills">
              <SkillsCard />
          </BlockWithTitle>
          <BlockWithTitle id="projects-block" color="milk" title="projects">

          </BlockWithTitle>
          <BlockWithTitle id="education-block" color="grey" title="education">
              <EducationBlock />
          </BlockWithTitle>
          <BlockWithTitle id="languages-block" color="lightGreen" title="languages">
              <LanguagesCard />
          </BlockWithTitle>
          <BlockWithTitle id="contacts-block" color="black" title="contacts">
              <ContactsCard />
          </BlockWithTitle>
          <FooterBlock />
      </>
  );
}

export default App;
