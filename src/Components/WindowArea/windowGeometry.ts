export interface WindowSize { width: number; height: number }
export interface WindowRect extends WindowSize { x: number; y: number }

export const fitWindowRect = (rect: WindowRect, workspace: WindowSize): WindowRect => {
  const width = Math.min(Math.max(1, rect.width), workspace.width);
  const height = Math.min(Math.max(1, rect.height), workspace.height);
  return {
    width,
    height,
    x: Math.min(Math.max(0, rect.x), workspace.width - width),
    y: Math.min(Math.max(0, rect.y), workspace.height - height),
  };
};

export const createWindowRect = (size: WindowSize, workspace: WindowSize): WindowRect => {
  const fitted = fitWindowRect({ ...size, x: 0, y: 0 }, workspace);
  return { ...fitted, x: (workspace.width - fitted.width) / 2, y: (workspace.height - fitted.height) / 2 };
};
