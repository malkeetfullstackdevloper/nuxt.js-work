/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'TRM',

    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'ToolbarAccountMenu',
          },
        ],
      },

      navigation: {
        enabled: true,
        header: {
          component: 'CollapseNavigationHeader',
        },
        footer: {
          component: 'CollapseNavigationFooter',
        },
        items: [
          {
            name: 'Dashboard',
            icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-5 h-5' },
            to: '/dashboard',
          },
          {
            name: 'Start Calling',
            icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-5 h-5' },
            to: '/marketing/start-calling',
          },
          {
            name: 'Marketing',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            activePath: '/marketing',
            children: [
              {
                name: 'Follow- Up List',
                to: '/marketing/follow-up',
                icon: { name: 'ph:coffee-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Pipeline',
                to: '/marketing/pipeline',
                icon: { name: 'ph:coffee-duotone', class: 'w-4 h-4' },
              },
            ],
          },
        ],
      },
    },

    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
