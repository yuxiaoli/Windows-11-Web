import styles from "./Edge.module.css";
import welcomeText from "./welcome.txt?raw";

// Modified by Sean / yuxiaoli on 2026-10-27: exact approved welcome copy.
const welcomeParagraphs = welcomeText.split("\n\n");
const homepage = "https://vectorindex.cloud";

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
      {welcomeParagraphs.map((paragraph, index) =>
        index === 0 ? <h1 key={index}>{paragraph}</h1> : (
          <p key={index}>
            {index === welcomeParagraphs.length - 1 ? <>
              {paragraph.slice(0, -homepage.length)}
              <a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a>
            </> : paragraph}
          </p>
        )
      )}
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
