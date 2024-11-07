const experience = {
  $title: 'Research and Applied Data Scientist.',
  $subtitle:
    'Building custom full-stack distributed numerical processing & visualization platforms.',
  $contact: [
    {
      link: `mailto:jakebrinkmann@gmail.com?subject=Hi Jake!&amp;body=I found your
  website and wanted to learn more about you! Do you have some time to talk?
  Thanks!`,
      icon: 'envelope'
    },
    { link: '//twitter.com/jakebrinkmann', icon: 'brands/twitter' },
    { link: '//github.com/jakebrinkmann', icon: 'brands/github' },
    {
      link: '//scholar.google.com/citations?user=hZNcv7UAAAAJ',
      icon: 'user-graduate'
    }
  ],
  $projects: [
    {
      $title: 'Cloud Computing',
      $subtitle: 'Building high-performance data processing pipelines at scale.',
      $items: [
        {
          label: 'Docker Recipes',
          link: 'docker-recipes',
          text:
            'Experimental sandbox for templating tech-stacks built around docker.'
        },
        {
          label: 'ESPA (USGS/EROS)',
          link: 'https://espa.cr.usgs.gov',
          text:
            'Worked towards making a UI+API Map/Reduce distributed system Cloud-Native.'
        }
      ]
    },
    {
      $title: 'Data Visualization',
      $subtitle: 'A passion to get scientists easy access their data.',
      $items: [
        {
          label: 'Workshop on Interactive Data Viz (NASA GSFC)',
          link: 'http://jakebrinkmann.com/2015-PUG-flask-data-vis/#/',
          text: 'Tutorial to build interactive applications using the Flask Python Web Framework. '
        }
      ]
    },
    {
      $title: 'Numerical Analytics',
      $subtitle: 'Strengths in finding the information hidden in data.',
      $items: [
        {
          label: 'Remote Sensing - Thermal Emissive Imaging Research',
          link: '//dx.doi.org/10.3390/rs8020158',
          text:
            'Aggregated data from weather research station (Dome-C) to inter-compare sensors (Aqua MODIS, NPP VIIRS) performance'
        },
        {
          label: 'NASA JPL - Reflective Stability Research',
          link:
            '//hyspiri.jpl.nasa.gov/downloads/2015_Symposium/day2/13_Multi-tempCross-calTerraMODIS_Landsat7ETM_ReflecBand_Angal.pdf',
          text:
            'A hyperspectral surface profile (EO1 Hyperion) used to inter-compare sensor (Terra MODIS, Landsat7 ETM+) performance'
        },
        {
          label: '2013 NASA Robert H. Goddard Award',
          link: 'http://landsat.gsfc.nasa.gov/?p=8017',
          text:
            'Recognition for contributions to the Landsat Cal/Val team in statistical data analytics.'
        }
      ]
    },
    {
      $title: 'Website Design',
      $subtitle: 'Keeping up with the rapidly evolving Web Development field.',
      $items: [
        {
          label: 'Emergent Planner',
          link: 'emergent-planner',
          text:
            'A todo and time management application for hyper-focus on getting things done.'
        },
        {
          label: 'Circular Almanac',
          link: 'circular-almanac',
          text:
            'A glowing color-coded seasons clock with CSS keyframes to show the cycles of nature.'
        },
        {
          label: 'Home Screen',
          link: 'my-home-screen',
          text: 'A basic HTML/CSS page full of tools to help productively get things done.'
        }
      ]
    },
    {
      $title: 'Video Games',
      $subtitle: 'Getting kids interested in programming.',
      $items: [
        {
          label: 'Balloon Party',
          link: 'balloon-party-cljs',
          text:
            'An arcade game written in ClojureScript using the "play-cljs" library'
        }
      ]
    },
    {
      $title: 'More Skills',
      $subtitle: 'Short story of things I am rather proud of in my life.',
      $items: [
        {
          label: 'Successful Recovery of Flagship NASA Instrument',
          link:
            'https://mcst.gsfc.nasa.gov/news/mcst-summary-terra-modis-safe-mode-recovery',
          text:
            'Responsible for planning the recovery of the then 16yo sensor on an international stage.'
        },
        {
          label: 'SDSU Grad Student & NASA award winner',
          link:
            'https://www.sdstate.edu/sites/default/files/2017-04/Impulse-Spring-2014.pdf#page=22',
          text:
            'First SDSU grad-student named among NASA award winners (Image Processing).'
        },
        {
          label: 'NCAA Division 1 Outdoor Championships - Prelim Qualifier',
          link: 'http://www.gojacks.com/news/2012/5/21/205429096.aspx',
          text:
            'Qualified in hammer and discus events to compete in Austin, Texas.'
        },
        {
          label: 'SDSU Impact Award for Student-Athletes',
          link: 'http://www.gojacks.com/news/2012/5/4/205423487.aspx',
          text: 'Setting school records while majoring in Electrical Engineering.'
        },
        {
          label: 'MN High School State Track & Field Meet',
          link: 'https://www.twincities.com/2007/06/09/2007-minnesota-high-school-track-and-field-meet-2/',
          text: 'My father coached me to a silver medal in discus.'
        }
      ]
    }
  ]
}

export default experience
