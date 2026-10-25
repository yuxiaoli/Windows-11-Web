// Modified for Sean: keep app windows within the measured desktop workspace (2026-10-25).
import { useStore } from "nanostores/preact";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { lazy, Suspense } from "react";
import { OpenApps } from "../../store/activeWindow";
import { WindowSize } from "./windowGeometry";
import styles from "./WindowArea.module.css";

const Window = lazy(() =>
  import("./Window").then(({ WindowHolder }) => ({ default: WindowHolder }))
);

export const WindowArea = () => {
  const OpenedApps = useStore(OpenApps);
  const workspaceRef = useRef<HTMLDivElement>();
  const [workspace, setWorkspace] = useState<WindowSize>(() => ({
    width: Math.max(1, document.documentElement.clientWidth),
    height: Math.max(1, window.innerHeight - 50),
  }));

  useLayoutEffect(() => {
    const element = workspaceRef.current;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setWorkspace((previous) => previous.width === width && previous.height === height
          ? previous : { width, height });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={workspaceRef} class={styles.workspace} data-window-workspace>
      <Suspense fallback={<span></span>}>
        {Object.keys(OpenedApps).map((appid) => {
          const app = OpenedApps[appid];
          return app.isActive && (
            <Window
              window_icon={app.icon}
              window_name={app.title}
              key={appid}
              appid={appid}
              height={app.height}
              width={app.width}
              workspace={workspace}
            >
              {app.Component?.()}
            </Window>
          );
        })}
      </Suspense>
    </div>
  );
};
