import styles from "./Edge.module.css";

const shortcuts = [
  {
    title: "Vector Index",
    description: "Sean's home on the web",
    url: "https://vectorindex.cloud",
    label: "VI",
  },
  {
    title: "GitHub",
    description: "Explore yuxiaoli's public projects",
    url: "https://github.com/yuxiaoli",
    label: "GH",
  },
  {
    title: "This desktop",
    description: "Read the source. Make it your own.",
    url: "https://github.com/yuxiaoli/Windows-11-Web/tree/develop",
    label: "11",
  },
];

export const EdgeApp = () => (
  <section class={styles.page} aria-label="Edge home">
    <div class={styles.address}>vectorindex.cloud</div>
    <div class={styles.intro}>
      <p style={{ whiteSpace: "pre-wrap" }}>{"Welcome. Curiosity has a desktop now.\n\nI’m Sean. This is a browser pretending to be somewhere else, built on the work of open-source communities.\n\nOpen a window. Follow a hunch. Try the command you think should work. Some things will feel familiar; others are still being figured out.\n\nThe interesting part isn’t making pixels look like an operating system. It’s seeing how much of the experience lives in the details.\n\nFound a rough edge? That’s a good place to contribute.\n\nKeep exploring: https://vectorindex.cloud"}</p>
    </div>
    <nav class={styles.shortcuts} aria-label="Personal shortcuts">
      {shortcuts.map(({ title, description, url, label }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
          <span class={styles.mark} aria-hidden="true">{label}</span>
          <strong>{title}</strong>
          <span>{description}</span>
          <small>Open in a new tab ↗</small>
        </a>
      ))}
    </nav>
    <p class={styles.credit}>
      Windows 11 Web by{" "}
      <a href="https://github.com/PiyushSuthar/Windows-11-Web" target="_blank" rel="noopener noreferrer">Piyush Suthar and contributors</a>.
      {" "}Personalized by Sean.
    </p>
  </section>
);
