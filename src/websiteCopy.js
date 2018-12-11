// Content of the webpage
export default {
  components: [
    {
      '<>': 'section',
      class: 'navbar',
      components: [
        {
          '<>': 'object',
          type: 'image/svg+xml',
          data: 'assets/img/safari-pinned-tab.svg',
          id: 'logo',
          onload: "styleLogo('logo')"
        }
      ]
    },
    {
      '<>': 'section',
      class: 'hero',
      components: [
        {
          '<>': 'h2',
          class: 'page-title',
          value: 'Get performant end-to-end numerical processing pipelines'
        },
        {
          '<>': 'ul',
          components: [
            {
              '<>': 'h3',
              value:
                'Ingest, Process, and Visualize diverse datasets without delay!'
            },
            {
              '<>': 'div',
              class: 'datacenter',
              components: [
                {
                  '<>': 'object',
                  type: 'image/svg+xml',
                  data: 'assets/img/datacenter.svg',
                  id: 'hero-icon',
                  onload: "styleLogo('hero-icon', '#2F2F2F')"
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                {
                  '<>': 'a',
                  href: '#contact',
                  components: [
                    { '<>': 'h2', class: 'contact', value: 'Contact Me' },
                    { '<>': 'span', value: "Let's work together!" }
                  ]
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                {
                  '<>': 'a',
                  href: '#projects',
                  components: [
                    { '<>': 'h2', value: 'Projects' },
                    { '<>': 'span', value: 'Show me some proof' }
                  ]
                }
              ]
            },
            {
              '<>': 'p',
              class: 'convincing',
              value:
                'Pipelines help petabytes of data get processed for companies to provide rich, interactive data visualizations to their customers around the world'
            }
          ]
        }
      ]
    },
    {
      '<>': 'section',
      class: 'content',
      id: 'experience',
      components: [
        {
          '<>': 'h2',
          value:
            'Launch your data processing to the <span class="emphasis">stratosphere</span>'
        },
        {
          '<>': 'h3',
          value: 'You generate innovative and informative data products, but...'
        },
        {
          '<>': 'p',
          value:
            'You have your eyes on the future. You want to go bigger, more information, more products, more answers.'
        },
        { '<>': 'h3', value: 'Data Science is where the fun is at' },
        { '<>': 'p', value: 'Fear of missing out!' },
        { '<>': 'h3', value: "Tell me there's a better way!@" },
        { '<>': 'p', value: 'There is!' },
        { '<>': 'h3', value: "That's SnakeBytes:" },
        { '<>': 'p', value: 'We like to work with you on the hard stuff' },
        { '<>': 'h3', value: 'the data will set you free' },
        { '<>': 'p', value: '...' }
      ]
    },
    {
      '<>': 'section',
      class: 'content',
      id: 'details',
      components: [
        { '<>': 'h1', value: 'Introducing SnakeBytes Technology Ltd.' },
        {
          '<>': 'h3',
          value: 'Your favorite numerical-processing data shop'
        },
        {
          '<>': 'ul',
          components: [
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Ingest' },
                {
                  '<>': 'p',
                  value:
                    'Build diverse data products, you need to be able to collect data points from millions of users and process the results in near real-time.'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Process' },
                {
                  '<>': 'p',
                  value: 'Scalable to produce Diverse data products.'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Visualize' },
                {
                  '<>': 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      '<>': 'section',
      class: 'content',
      id: 'services',
      components: [
        { '<>': 'h3', value: 'Services' },
        {
          '<>': 'ul',
          components: [
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Full Stack Applications' },
                {
                  '<>': 'p',
                  value:
                    'Expert distributed systems, applications that work as websites or mobile apps'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Python + JS' },
                { '<>': 'p', value: 'Our specialities' }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Education + Training' },
                {
                  '<>': 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        },
        {
          '<>': 'p',
          value:
            'Looking for something else? Our innovation lab is always experimenting with new and emerging technology we do not have experience in. We have run free experiments in the past, so as not to bill for time required to get us up to speed.'
        }
      ]
    },
    {
      '<>': 'section',
      class: 'content',
      id: 'process',
      components: [
        { '<>': 'h3', value: 'Process' },
        {
          '<>': 'ul',
          components: [
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Discovery & Concept Stage' },
                {
                  '<>': 'p',
                  value:
                    'Learning, Planning, statement of work you can sign electronically'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Design & Interactive Prototyping' },
                {
                  '<>': 'p',
                  value:
                    'establish agile processes, get you working software you can use as fast as possible; We closely engage with our community and believe that open, honest, feedback results in the best entertainment.'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Development & Testing' },
                {
                  '<>': 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            },
            {
              '<>': 'li',
              components: [
                { '<>': 'h4', value: 'Delivery & Beyond' },
                {
                  '<>': 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      '<>': 'section',
      class: 'contact',
      id: 'contact',
      components: [
        {
          '<>': 'div',
          class: 'about',
          value:
            'SnakeBytes is a small independent software vender and digital product development agency, based in South Dakota, USA. We love application development using network-based architecture for scaleable big-data numerical analysis and visualization.'
        },
        {
          '<>': 'div',
          class: 'address',
          components: [
            {
              '<>': 'p',
              value:
                'If you have any questions, please drop us a line: <a href="mailto:hello@snakebytes.tech">hello@snakebytes.tech</a>'
            },
            {
              '<>': 'p',
              value:
                'Have something cool you want to show off? We are always looking to experiment, develop experience, and get up to speed in new ways to better serve our clients.'
            }
          ]
        }
      ]
    },
    {
      '<>': 'footer',
      components: [
        { '<>': 'p', value: '© Copyright 2018, SnakeBytes Tech.' },
        {
          '<>': 'p',
          value:
            'Except where otherwise noted, content on this site is released under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>'
        },
        {
          '<>': 'p',
          class: 'appendix',
          value:
            'icons cc-by <a href="https://thenounproject.com/term/-/968729/">datacenter</a>'
        },
        {
          '<>': 'iframe',
          src:
            'https://docs.google.com/forms/d/e/1FAIpQLSdWfmK5ArJQ2kKlTzmDyX_3NVhTfRbtSEYhi9jwVW3nHUR25g/viewform?embedded=true',
          value: 'Loading...'
        }
      ]
    }
  ]
}
