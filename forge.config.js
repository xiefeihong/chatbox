module.exports = {
  packagerConfig: {
    icon: 'public/icons/icon',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'windows'],
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        options: {
          icon: 'public/icons/icon.ico',
        },
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: 'public/icons/icon.icns',
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'public/icons/icon.png',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: 'public/icons/icon.png'
        },
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'xiefeihong',
          name: 'chatbox',
        },
        prerelease: true,
        draft: false,
      },
    },
  ]
};
