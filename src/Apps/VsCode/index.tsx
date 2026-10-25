// Modified for Sean's fork: develop source and visible fallback links (2026-10-25).
export const VsCodeApp = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <nav aria-label="Source viewer links" style={{ padding: "10px 14px", fontSize: "12px", display: "flex", gap: "20px" }}>
        <a href="https://github.com/yuxiaoli/Windows-11-Web/tree/develop" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>View source on GitHub</a>
        <a href="https://github1s.com/yuxiaoli/Windows-11-Web/tree/develop" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Open editor in a new tab</a>
      </nav>
      <iframe
        src="https://github1s.com/yuxiaoli/Windows-11-Web/tree/develop"
        title="Sean's Windows 11 Web source"
        width="100%"
        style={{ flex: 1, minHeight: 0, borderRadius: "0 0 6px 6px", border: "none" }}
      />
    </div>
  );
};
