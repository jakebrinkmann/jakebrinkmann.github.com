// Content of the webpage
const websiteCopy = {
  components: [
    {
      '<>': 'div',
      $class: 'header',
      components: [
        {
          '<>': 'div',
          $class: 'home-menu pure-menu pure-menu-horizontal pure-menu-fixed',
          components: [
            {
              '<>': 'object',
              type: 'image/svg+xml',
              data: 'assets/img/safari-pinned-tab.svg',
              id: 'logo',
              onload: '',
              $class: 'pure-menu-heading'
            },
            {
              '<>': 'a',
              href: 'https://twitter.com/SnakeBytes_Tech',
              id: 'twitter-badge',
              components: [
                { '<>': 'fa-icon', name: 'brands/twitter', id: 'twitter' }
              ]
            }
          ]
        }
      ]
    },
    {
      '<>': 'div',
      $class: 'splash-container',
      components: [
        {
          '<>': 'div',
          $class: 'splash',
          components: [
            {
              '<>': 'h1',
              $class: 'splash-head',
              value: 'performant processing pipelines',
              xvalue: 'Get performant end-to-end numerical processing pipelines'
            },
            {
              '<>': 'p',
              $class: 'splash-subhead',
              value: `
                Custom solutions to Ingest, Process, and Visualize diverse
                datasets without delay!
                `
            },
            {
              '<>': 'p',
              components: [
                {
                  '<>': 'a',
                  href: '#contact',
                  $class: 'pure-button pure-button-primary',
                  value: 'Contact Us',
                  onclick: `document.getElementById('contact-modal').style.display='block'`
                },
                {
                  '<>': 'a',
                  href: '#projects',
                  $class: 'pure-button',
                  value: 'Projects'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      '<>': 'div',
      $class: 'content-wrapper',
      components: [
        {
          '<>': 'div',
          $class: 'content',
          components: [
            {
              '<>': 'h2',
              $class: 'content-head is-center',
              value: 'Launch your data processing to the ',
              components: [
                {
                  '<>': 'span',
                  class: 'emphasis',
                  value: 'stratosphere'
                }
              ]
            },
            {
              '<>': 'div',
              $class: 'pure-g',
              components: [
                {
                  '<>': 'div',
                  $class: 'l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
                  components: [
                    {
                      '<>': 'h3',
                      $class: 'content-subhead',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'file-import'
                        },
                        { '<>': 'span', value: 'Ingest' }
                      ]
                    },
                    {
                      '<>': 'p',
                      value: `
                        Where did all this data come from?
                        When building diverse data products, you need to be able
                        to collect data points from millions of users and process
                        the results in near real-time.
                        `
                    },
                    {
                      '<>': 'div',
                      $class: 'icon-box',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'brands/python'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'brands/r-project'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'coins'
                        }
                      ]
                    }
                  ]
                },
                {
                  '<>': 'div',
                  $class: 'l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
                  components: [
                    {
                      '<>': 'h3',
                      $class: 'content-subhead',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'cogs'
                        },
                        { '<>': 'span', value: 'Process' }
                      ]
                    },
                    {
                      '<>': 'p',
                      value: `
                        You need distributed, fault-tolerant, serverless systems
                        which can dynamically scale, from 0 to infinity. Systems
                        also need to be able to handle a diversity of loads,
                        from long-running batch to real-time streams.
                        `
                    },
                    {
                      '<>': 'div',
                      $class: 'icon-box',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'brands/docker'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'brands/linux'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'brands/aws'
                        }
                      ]
                    }
                  ]
                },
                {
                  '<>': 'div',
                  $class: 'l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
                  components: [
                    {
                      '<>': 'h3',
                      $class: 'content-subhead',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'images'
                        },
                        { '<>': 'span', value: 'Visualize' }
                      ]
                    },
                    {
                      '<>': 'p',
                      value: `
                        Static charts just don't cut it! You want to explore and
                        understand, without having to wait. You need full-stack
                        applications that work as websites or mobile apps, serving
                        up interactive graphics.
                        `
                    },
                    {
                      '<>': 'div',
                      $class: 'icon-box',
                      components: [
                        {
                          '<>': 'fa-icon',
                          name: 'brands/node-js'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'map-marked-alt'
                        },
                        {
                          '<>': 'fa-icon',
                          name: 'chart-line'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          '<>': 'div',
          $class: 'ribbon l-box-lrg pure-g',
          components: [
            {
              '<>': 'div',
              $class:
                'l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5',
              components: [
                {
                  '<>': 'object',
                  type: 'image/svg+xml',
                  data: 'assets/img/datacenter.svg',
                  id: 'icon-noun-datacenter',
                  onload: ''
                }
              ]
            },
            {
              '<>': 'div',
              $class: 'pure-u-1 pure-u-md-1-2 pure-u-lg-3-5',
              components: [
                {
                  '<>': 'h2',
                  $class: 'content-head content-head-ribbon',
                  value: 'Introducing SnakeBytes Tech Ltd.'
                },
                {
                  '<>': 'p',
                  value: `
                    You need a favorite, go-to numerical data processing shop.
                    We enjoy working on the hard stuff. This means together we can build
                    pipelines that process petabytes of data for
                    companies large and small to provide rich, interactive
                    data visualizations to their customers around the world.
                    `
                }
              ]
            }
          ]
        },
        {
          '<>': 'div',
          $class: 'content',
          components: [
            {
              '<>': 'h2',
              $class: 'content-head is-center',
              value: "Let's work together!"
            },
            {
              '<>': 'div',
              $class: 'pure-g',
              components: [
                {
                  '<>': 'div',
                  $class: 'l-box-lrg pure-u-1 pure-u-md-3-5',
                  components: [
                    {
                      '<>': 'h4',
                      value: 'About'
                    },
                    {
                      '<>': 'p',
                      value: `
                        SnakeBytes is a micro independent software vender (µISV) and
                        digital product development agency, based in South Dakota, USA.
                        We love application development using network-based architecture
                        for scaleable, big-data numerical analysis and visualization.
                        `
                    },
                    {
                      '<>': 'h4',
                      value: 'Contact '
                    },
                    {
                      '<>': 'p',
                      value:
                        'Do you have questions? Have something cool you want to show off?'
                    },
                    {
                      '<>': 'p',
                      value: 'Please drop us a line:',
                      components: [
                        {
                          '<>': 'a',
                          href: 'mailto:hello@snakebytes.tech',
                          value: 'hello@snakebytes.tech'
                        }
                      ]
                    }
                  ]
                },
                {
                  '<>': 'div',
                  $class: 'l-box-lrg pure-u-1 pure-u-md-2-5',
                  components: [
                    {
                      '<>': 'h4',
                      value: 'Innovation Labs'
                    },
                    {
                      '<>': 'p',
                      value: `
                        We are always looking to experiment with new and
                        emerging technology, develop experience, and get up to
                        speed in new ways to better serve our clients.
                        `,
                      TODO: `
                      We  have run free experiments in the past, so as not to
                      bill for time required to get us up to speed.
                      `
                    },
                    {
                      '<>': 'a',
                      id: 'github-badge',
                      href: 'https://github.com/SnakeBytesTech',
                      components: [
                        { '<>': 'fa-icon', name: 'brands/github-square' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          '<>': 'div',
          $class: 'footer l-box is-center',
          components: [
            {
              '<>': 'p',
              components: [
                { '<>': 'span', value: '‹/› with ' },
                {
                  '<>': 'span',
                  $class: 'with-heart',
                  value: '♥'
                },
                {
                  '<>': 'span',
                  value: 'from South Dakota © SnakeBytes Tech, Ltd.'
                },
                { '<>': 'br' },
                {
                  '<>': 'span',
                  value:
                    'Except where otherwise noted, content on this site is released under '
                },
                {
                  '<>': 'a',
                  href: 'https://creativecommons.org/licenses/by/4.0/',
                  value: 'CC-BY-4.0'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      '<>': 'div',
      $class: 'modal',
      id: 'contact-modal',
      onclick: `document.getElementById('contact-modal').style.display='none'`,
      components: [
        {
          '<>': 'iframe',
          $class: 'modal-panel',
          src:
            'https://docs.google.com/forms/d/e/1FAIpQLSdWfmK5ArJQ2kKlTzmDyX_3NVhTfRbtSEYhi9jwVW3nHUR25g/viewform?embedded=true',
          value: 'Loading...'
        }
      ]
    }
  ]
}
export default websiteCopy
