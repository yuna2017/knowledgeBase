module.exports = {
    title: 'YUNA KnowledgeBase',
    base: "/knowledgeBase/",
    description: '',
    head: [
      [
          'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
          { rel: 'icon', href: 'logo.png' }
      ]
  ],
  themeConfig: {
        displayAllHeaders: true, // 默认值：false
        //sidebar: 'auto',
        nav: [
            { text: '问题速查', link: '/intro/' },
            { text: '校园网', link: '/campusNet/' },
            { text: '在线服务', link: '/service/' },
            { text: '正版化', link: '/ms/' },
            { text: '校园邮箱', link: '/mail/' },
            { text: '关于我们', link: '/about/' },
          ],
        
          sidebar: {
            '/campusNet/': [
              '',     /* /foo/ */
              'faq',  /* /foo/one.html */
              'connect' ,  /* /foo/two.html */
              'advanced'
            ],
      
            '/ms/': [
              '',      /* /bar/ */
              'foxin', /* /bar/three.html */
              'ms'   /* /bar/four.html */
            ],

            '/mail/': [
                '',
                'signup',
                'res'
              ],
            
              '/service/': [
                '',
                'intro',
                'auth',
                'grade',
                'program',
                'schedule',
                'zongce',
                'vpn',
                'jwc'
              ],
      
            // fallback
            '/': [
                /* /about.html */
            ]
          }
    }
}