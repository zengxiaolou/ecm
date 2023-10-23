import i18n from 'i18next';
import I18NexFsBackend from 'i18next-fs-backend';

i18n.use(I18NexFsBackend).init({
  resources: {
    en: {
      translation: {
        'Stop Monitoring Clipboard': 'Stop Monitoring Clipboard',
        'Resume Monitoring Clipboard': 'Resume Monitoring Clipboard',
        Preferences: 'Preferences...',
        About: 'About',
        Hide: 'Hide',
        'Hide Others': 'Hide Others',
        'Show All': 'Show All',
        Quit: 'Quit',
        Edit: 'Edit',
        Undo: 'Undo',
        Redo: 'Redo',
        Cut: 'Cut',
        Copy: 'Copy',
        Paste: 'Paste',
        View: 'View',
        Reload: 'Reload',
        'Toggle Full Screen': 'Toggle Full Screen',
        'Toggle Developer Tools': 'Toggle Developer Tools',
        Window: 'Window',
        Minimize: 'Minimize',
        Close: 'Close',
        'Bring All to Front': 'Bring All to Front',
        Help: 'Help',
        'Learn More': 'Learn More',
        Documentation: 'Documentation',
        'Community Discussions': 'Community Discussions',
        'Search Issues': 'Search Issues',
      },
    },
    zh: {
      translation: {
        'Stop Monitoring Clipboard': '停止监控剪贴板',
        'Resume Monitoring Clipboard': '继续监控剪贴板',
        Preferences: '偏好设置',
        About: '关于',
        Hide: '隐藏',
        'Hide Others': '隐藏其它',
        'Show All': '显示全部',
        Quit: '退出',
        Edit: '编辑',
        Undo: '撤销',
        Redo: '重做',
        Cut: '剪切',
        Copy: '复制',
        Paste: '粘贴',
        View: '视图',
        Reload: '重新加载',
        'Toggle Full Screen': '切换全屏',
        'Toggle Developer Tools': '切换开发者工具',
        Minimize: '最小化',
        Close: '关闭',
        'Bring All to Front': '将所有窗口置顶',
        Help: '帮助',
        'Learn More': '了解更多',
        Documentation: '文档',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { default } from 'i18next';
