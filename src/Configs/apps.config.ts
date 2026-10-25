// Modified by Sean: add Edge home and preserve implemented app launch components.
import edge from '../assets/icons/taskbar/edge.ico'
import ms_store from '../assets/icons/taskbar/ms_store.png'
import file_explorer from '../assets/icons/taskbar/file_explorer.webp'
import { MSEdgeIcon, MSStoreIcon, SettingsIcon, VSCodeIcon } from '../assets/icons/startmenu'
import { ControlPanel, RecycleBin, ThisPC } from '../assets/icons/Desktop'
import { Apps } from './startMenu.config'
import { EdgeApp, VsCodeApp } from '../Apps'

export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
        pinned?: boolean,
        Component?: any,
        height?: number,
        width?: number
    }
}

export const AppsConfig: App = {
    // Set menu defaults first so they cannot erase implemented app components.
    ...Apps(),
    edge: {
        title: "Edge",
        isActive: false,
        icon: MSEdgeIcon,
        pinned: true,
        Component: EdgeApp,
        height: 530,
        width: 740
    },
    "file-explorer": {
        title: "File Explorer",
        isActive: false,
        icon: file_explorer,
        pinned: true
    },
    "ms-store": {
        title: "Microsoft Store",
        isActive: false,
        icon: MSStoreIcon,
        pinned: true
    },
    "this-pc": {
        title: "This PC",
        isActive: false,
        icon: ThisPC
    },
    "recycle-bin": {
        title: "Recycle Bin",
        isActive: false,
        icon: RecycleBin
    },
    "control-panel": {
        title: "Control Panel",
        isActive: false,
        icon: ControlPanel
    },
    "settings": {
        title: "Settings",
        isActive: false,
        icon: SettingsIcon
    },
    "vscode": {
        title: "Visual Studio Code",
        isActive: false,
        icon: VSCodeIcon,
        Component: VsCodeApp,
        height: 500,
        width: 800
    },
    // The start menu uses a title-derived ID; keep both launch paths consistent.
    Edge: {
        title: "Edge",
        isActive: false,
        icon: MSEdgeIcon,
        Component: EdgeApp,
        height: 530,
        width: 740
    },
} as const
