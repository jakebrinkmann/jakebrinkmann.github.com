// Content of the webpage
export default {
  components: [
    {
      type: 'section',
      class: 'navbar',
      components: [
        {
          type: 'image/svg+xml',
          data: 'assets/img/safari-pinned-tab.svg',
          id: 'logo',
          onload: "styleLogo('logo')"
        }
      ]
    },
    {
      type: 'section',
      class: 'hero',
      components: [
        {
          type: 'h2',
          class: 'page-title',
          value: 'Get performant end-to-end numerical processing pipelines'
        },
        {
          type: 'ul',
          components: [
            {
              type: 'h3',
              value:
                'Ingest, Process, and Visualize diverse datasets without delay!'
            },
            {
              type: 'div',
              class: 'datacenter',
              components: [
                {
                  type: 'image/svg+xml',
                  data: 'assets/img/datacenter.svg',
                  id: 'hero-icon',
                  onload: "styleLogo('hero-icon', '#2F2F2F')"
                }
              ]
            },
            {
              type: 'li',
              components: [
                {
                  type: 'a',
                  href: '#contact',
                  components: [
                    { type: 'h2', class: 'contact', value: 'Contact Me' },
                    { type: 'span', value: "Let's work together!" }
                  ]
                }
              ]
            },
            {
              type: 'li',
              components: [
                {
                  type: 'a',
                  href: '#projects',
                  components: [
                    { type: 'h2', value: 'Projects' },
                    { type: 'span', value: 'Show me some proof' }
                  ]
                }
              ]
            },
            {
              type: 'p',
              class: 'convincing',
              value:
                'Pipelines help petabytes of data get processed for companies to provide rich, interactive data visualizations to their customers around the world'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      class: 'content',
      id: 'experience',
      components: [
        {
          type: 'h2',
          value:
            'Launch your data processing to the <span class="emphasis">stratosphere</span>'
        },
        {
          type: 'h3',
          value: 'You generate innovative and informative data products, but...'
        },
        {
          type: 'p',
          value:
            'You have your eyes on the future. You want to go bigger, more information, more products, more answers.'
        },
        { type: 'h3', value: 'Data Science is where the fun is at' },
        { type: 'p', value: 'Fear of missing out!' },
        { type: 'h3', value: "Tell me there's a better way!@" },
        { type: 'p', value: 'There is!' },
        { type: 'h3', value: "That's SnakeBytes:" },
        { type: 'p', value: 'We like to work with you on the hard stuff' },
        { type: 'h3', value: 'the data will set you free' },
        { type: 'p', value: '...' }
      ]
    },
    {
      type: 'section',
      class: 'content',
      id: 'details',
      components: [
        { type: 'h1', value: 'Introducing SnakeBytes Technology Ltd.' },
        {
          type: 'h3',
          value: 'Your favorite numerical-processing data shop'
        },
        {
          type: 'ul',
          components: [
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Ingest' },
                {
                  type: 'p',
                  value:
                    'Build diverse data products, you need to be able to collect data points from millions of users and process the results in near real-time.'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Process' },
                {
                  type: 'p',
                  value: 'Scalable to produce Diverse data products.'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Visualize' },
                {
                  type: 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      class: 'content',
      id: 'services',
      components: [
        { type: 'h3', value: 'Services' },
        {
          type: 'ul',
          components: [
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Full Stack Applications' },
                {
                  type: 'p',
                  value:
                    'Expert distributed systems, applications that work as websites or mobile apps'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Python + JS' },
                { type: 'p', value: 'Our specialities' }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Education + Training' },
                {
                  type: 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        },
        {
          type: 'p',
          value:
            'Looking for something else? Our innovation lab is always experimenting with new and emerging technology we do not have experience in. We have run free experiments in the past, so as not to bill for time required to get us up to speed.'
        }
      ]
    },
    {
      type: 'section',
      class: 'content',
      id: 'process',
      components: [
        { type: 'h3', value: 'Process' },
        {
          type: 'ul',
          components: [
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Discovery & Concept Stage' },
                {
                  type: 'p',
                  value:
                    'Learning, Planning, statement of work you can sign electronically'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Design & Interactive Prototyping' },
                {
                  type: 'p',
                  value:
                    'establish agile processes, get you working software you can use as fast as possible; We closely engage with our community and believe that open, honest, feedback results in the best entertainment.'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Development & Testing' },
                {
                  type: 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            },
            {
              type: 'li',
              components: [
                { type: 'h4', value: 'Delivery & Beyond' },
                {
                  type: 'p',
                  value: 'Explore and understand, without having to wait.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      class: 'contact',
      id: 'contact',
      components: [
        {
          type: 'div',
          class: 'about',
          value:
            'SnakeBytes is a small independent software vender and digital product development agency, based in South Dakota, USA. We love application development using network-based architecture for scaleable big-data numerical analysis and visualization.'
        },
        {
          type: 'div',
          class: 'address',
          components: [
            {
              type: 'p',
              value:
                'If you have any questions, please drop us a line: <a href="mailto:hello@snakebytes.tech">hello@snakebytes.tech</a>'
            },
            {
              type: 'p',
              value:
                'Have something cool you want to show off? We are always looking to experiment, develop experience, and get up to speed in new ways to better serve our clients.'
            }
          ]
        }
      ]
    },
    {
      type: 'footer',
      components: [
        { type: 'p', value: '© Copyright 2018, SnakeBytes Tech.' },
        {
          type: 'p',
          value:
            'Except where otherwise noted, content on this site is released under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>'
        },
        {
          type: 'p',
          class: 'appendix',
          value:
            'icons cc-by <a href="https://thenounproject.com/term/-/968729/">datacenter</a>'
        },
        {
          type: 'iframe',
          src:
            'https://docs.google.com/forms/d/e/1FAIpQLSdWfmK5ArJQ2kKlTzmDyX_3NVhTfRbtSEYhi9jwVW3nHUR25g/viewform?embedded=true',
          value: 'Loading...'
        }
      ]
    }
  ]
}
