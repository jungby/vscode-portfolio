import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/golang_icon.svg" filename="home.go" path="/" />
      <Tab icon="/bash_icon.svg" filename="about.sh" path="/about" />
      <Tab icon="/python_icon.svg" filename="contact.py" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      {/* <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" /> */}
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
