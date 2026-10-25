// Modified for Sean: bounded placement, responsive resize and accessible window actions (2026-10-25).
// Original window styling in this upstream was adapted from puruVJ's macOS Web.
import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";
import { getValue } from "nanostores";
import styles from "./Window.module.css";
import { MaximizeIcon, RestoreIcon, BackIcon, CloseIcon, MinimizeIcon } from "./Icons";
import { useStore } from "nanostores/preact";
import { ThemeStore } from "../../../store/darkMode";
import { FunctionComponent } from "preact";
import { OpenApps } from "../../../store/activeWindow";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { createWindowRect, fitWindowRect, WindowRect, WindowSize } from "../windowGeometry";

interface Props {
  window_name: string;
  window_icon: string;
  show_back?: boolean;
  appid: string;
  height?: number;
  width?: number;
  workspace: WindowSize;
}

export const WindowHolder: FunctionComponent<Props> = ({
  children, window_icon, window_name = "Hello World", show_back = false,
  appid, height = 300, width = 320, workspace,
}) => {
  const theme = useStore(ThemeStore);
  const iconColor = theme === "dark" ? "#ffffff" : "#000000";
  const WindowRef = useRef<HTMLDivElement>();
  const [normalRect, setNormalRect] = useState<WindowRect>(() => createWindowRect({ width, height }, workspace));
  const [isMaximized, setIsMaximized] = useState(false);

  useLayoutEffect(() => {
    setNormalRect((previous) => {
      const next = fitWindowRect(previous, workspace);
      return Object.keys(next).every((key) => next[key as keyof WindowRect] === previous[key as keyof WindowRect])
        ? previous : next;
    });
  }, [workspace.width, workspace.height]);

  const rect = isMaximized
    ? { x: 0, y: 0, width: workspace.width, height: workspace.height }
    : fitWindowRect(normalRect, workspace);

  const handleDragStop: RndDragCallback = (_, position) =>
    setNormalRect((previous) => fitWindowRect({ ...previous, x: position.x, y: position.y }, workspace));
  const handleResizeStop: RndResizeCallback = (_, __, element, ___, position) =>
    setNormalRect(fitWindowRect({ ...position, width: element.offsetWidth, height: element.offsetHeight }, workspace));

  const closeWindow = () => {
    const element = WindowRef.current;
    element.classList.add(styles.close);
    setTimeout(() => {
      element.classList.remove(styles.close);
      const apps = getValue(OpenApps);
      OpenApps.set({ ...apps, [appid]: { ...apps[appid], isActive: false } });
    }, 100);
  };

  return (
    <Rnd
      size={{ width: rect.width, height: rect.height }}
      position={{ x: rect.x, y: rect.y }}
      minWidth={Math.min(300, workspace.width)}
      minHeight={Math.min(300, workspace.height)}
      maxWidth={workspace.width}
      maxHeight={workspace.height}
      bounds="parent"
      style={{ pointerEvents: "auto" }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      cancel="button"
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      dragHandleClassName="app-drag-handler"
    >
      <div ref={WindowRef} class={styles.container} data-window-app={appid}>
        <div className={[styles.titlebar, "app-drag-handler"].join(" ")}>
          <div className={styles.title_stuff}>
            {show_back ? <BackIcon /> : <img src={window_icon} class={styles.title_icon} alt="" />}
            <p>{window_name}</p>
          </div>
          <div className={styles.window_actions}>
            <div class={styles.icon} aria-hidden="true">
              <MinimizeIcon height="14" width="14" color={iconColor} />
            </div>
            <button type="button" onClick={() => setIsMaximized((previous) => !previous)}
              aria-label={`${isMaximized ? "Restore" : "Maximize"} ${window_name}`} class={styles.icon}>
              {isMaximized ? <RestoreIcon color={iconColor} height="14" width="14" /> : <MaximizeIcon color={iconColor} height="14" width="14" />}
            </button>
            <button type="button" onClick={closeWindow} aria-label={`Close ${window_name}`}
              class={[styles.icon, styles.close].join(" ")}>
              <CloseIcon color={iconColor} height="14" width="14" />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          {children || <><img class={styles.content_image} src={window_icon} alt={window_name} /><h4>Coming Soon!</h4></>}
        </div>
      </div>
    </Rnd>
  );
};
