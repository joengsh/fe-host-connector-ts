import { defineUserConfig } from 'vuepress';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'en-US',
  title: 'fe-host-connector',
  description: 'Just playing around',
  plugins: [
    mdEnhancePlugin({
      mermaid: true,
      flowchart: true
    })
  ],
  theme: defaultTheme({
    // default theme config
    sidebar: [
      {
        text: 'Home',
        link: '/',
        children: [
          {
            text: 'General',
            link: '/general.md'
          },
          {
            text: 'Pitboss',
            link: '/pitboss.md'
          }
        ]
      }
    ]
  })
});
