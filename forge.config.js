module.exports = {
  packagerConfig: {
    icon: 'public/icons/icon',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    /*{
      name: '@electron-forge/maker-deb',
      config: {},
    },*/
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
          owner: 'github-user-name',
          name: 'github-repo-name',
        },
        prerelease: false,
        // draft: true,
      },
    },
  ]
};
