import { generateSitePath } from '../../../lib/SitePath';
import TAInfoPage from '../../../pages/TAInfoPage';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: W 3:30&ndash;4:30pm, Th 2:00&ndash;3:00pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 9:00&ndash;9:50am, LINC 210'
    },
    {
      title: 'Office Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA office hours'
    },
    {
      title: 'Grading Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA grading hours'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1Rwiv-QjO3pDNKtdqAICA8s5immQbDpjrQ3SHzSbE3u0/edit?usp=sharing">CS 290 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs290">CS 290 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: [
    {
      week: 1,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Course Intro &ndash; <a href="https://docs.google.com/document/d/1PHwPcCxBNeLSV9wbgd_yRrcCKOn7AAmzjzIq1BEQUPI/edit?usp=sharing">notes</a>',
            'Git and GitHub &ndash; <a href="https://docs.google.com/document/d/1ya0X-WIdBzNKWZZ-gQFaW40IGWV23ldQX8V3vLKD5to/edit?usp=sharing">notes</a>',
            'HTML &ndash; <a href="https://docs.google.com/document/d/1-dCjGCQu_LhQ96sXMF5zqWuGbpxqiz2fmu2UY_8FUUM/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/html">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://git-scm.com/book/en/v2">Chapters 1 and 2</a> &ndash; Pro Git',
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a> &ndash; MDN',
          ]
        }
      ]
    },
    {
      week: 2,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'CSS &ndash; <a href="https://docs.google.com/document/d/17yv1VXIy1_PBzqU6wvGHnBLNrY8JxCtSOXC1B2c7EgE/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/css">example code</a>',
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS">Introduction to CSS</a> &ndash; MDN',
          ]
        }
      ]
    },
    {
      week: 3,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'CSS &ndash; <a href="https://docs.google.com/document/d/17yv1VXIy1_PBzqU6wvGHnBLNrY8JxCtSOXC1B2c7EgE/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/css">example code</a>',
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://csswizardry.com/2015/04/cyclomatic-complexity-logic-in-css/">Cyclomatic Complexity: Logic in CSS</a> &ndash; CSS Wizardry',
            '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">Using CSS Flexible Boxes</a> &ndash; MDN',
            '<a href="https://developers.google.com/web/fundamentals/design-and-ui/responsive/">Responsive Web Design Basics</a> &ndash; Google Web Fundamentals'
          ]
        }
      ]
    },
    {
      week: 4,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'JavaScript Fundamentals &ndash; <a href="https://docs.google.com/document/d/1QQtkKwb3tqxnbcZdvaNPnW8WH2ZJoGynrgIrXwtRAvs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/js">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps">JavaScript first steps</a> &ndash; MDN',
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks">JavaScript building blocks</a> &ndash; MDN'
          ]
        }
      ]
    },
    {
      week: 5,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'JavaScript DOM Manipulation &ndash; <a href="https://docs.google.com/document/d/166D2inrjYSFJZQdcS42UMY2MHU6k2TosY_yRlLRg7Uc/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/js-dom-manipulation">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">Introduction to the DOM</a> &ndash; MDN',
            '<a href="http://eloquentjavascript.net/13_dom.html">The Document Object Model</a> &ndash; Eloquent Javascript, Chapter 13'
          ]
        }
      ]
    },
    {
      week: 6,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'JavaScript Event Handling &ndash; <a href="https://docs.google.com/document/d/1JW9Stt44SDDjvVR3lx4uLknBPRSC1qgMYstoeoANSUo/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/js-events">example code</a> &ndash; <a href="https://jsfiddle.net/robwhess/kmo8ksm4/">JSFiddle event handling and DOM manipulation demo</a> &ndash; <a href="https://jsfiddle.net/robwhess/e3bzs31j/">JSFiddle forms demo</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers">Overview of Events and Handlers</a> &ndash; MDN',
            '<a href="http://eloquentjavascript.net/14_event.html">Handling Events</a> &ndash; Eloquent Javascript, Chapter 14',
            '<a href="http://eloquentjavascript.net/18_forms.html">Forms and Fields</a> &ndash; Eloquent Javascript, Chapter 18'
          ]
        }
      ]
    },
    {
      week: 7,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Node.js Basics &ndash; <a href="https://docs.google.com/document/d/1fDUYKsdWBGEb0OTv-eN_PcUKmJaSqxRR2xc2Ec1myUA/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/nodejs-basics">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://eloquentjavascript.net/20_node.html">Node.js</a> &ndash; Eloquent Javascript, Chapter 20',
            '<a href="https://github.com/maxogden/art-of-node/#the-art-of-node">The Art of Node</a>',
            '<a href="https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/">Anatomy of an HTTP Transaction</a> &ndash; Node.js Docs'
          ]
        }
      ]
    },
    {
      week: 8,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Packages and npm &ndash; <a href="https://docs.google.com/document/d/14NgVlxruAz_oAbeJ037AZKIVAxRarlfWyRXPjgbgwB8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/nodejs-basics">example code</a>',
            'Express Basics &ndash; <a href="https://github.com/OSU-CS290-Sp2017/express-middleware-demo">example code</a>',
            'Dynamic Content with Express &ndash; <a href="https://github.com/OSU-CS290-Sp2017/express-dynamic-content">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://docs.npmjs.com/getting-started/what-is-npm">What is npm?</a> &ndash; npm docs',
            '<a href="https://docs.npmjs.com/getting-started/installing-npm-packages-locally">Installing npm packages locally</a> &ndash; npm docs',
            '<a href="https://docs.npmjs.com/getting-started/using-a-package.json">Using a package.json</a> &ndash; npm docs',
            '<a href="https://expressjs.com/en/starter/hello-world.html">Hello world example</a> &ndash; Express docs',
            '<a href="https://expressjs.com/en/starter/static-files.html">Serving static files in Express</a> &ndash; Express docs',
            '<a href="https://expressjs.com/en/starter/basic-routing.html">Basic routing</a> &ndash; Express docs',
            '<a href="https://expressjs.com/en/guide/writing-middleware.html">Writing middleware for use in Express apps</a> &ndash; Express docs'
          ]
        }
      ]
    },
    {
      week: 9,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Rendering Dynamic Content with Handlebars &ndash; <a href="https://github.com/OSU-CS290-Sp2017/express-handlebars">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://expressjs.com/en/guide/using-middleware.html">Using middleware</a> &ndash; Express docs',
            '<a href="https://expressjs.com/en/guide/routing.html">Routing</a> &ndash; Express docs',
            '<a href="http://handlebarsjs.com/expressions.html">Expressions</a> &ndash; Handlebars docs',
            '<a href="http://handlebarsjs.com/builtin_helpers.html">Build-In Helpers</a> &ndash; Handlebars docs',
            '<a href="http://handlebarsjs.com/partials.html">Partials</a> &ndash; Handlebars docs',
            '<a href="https://github.com/ericf/express-handlebars/#readme">Express Handlebars</a> &ndash; GitHub',
            '<a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Model-view-controller</a> &ndash; Wikipedia'
          ]
        }
      ]
    },
    {
      week: 10,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Client-Server Communication &ndash; <a href="https://github.com/OSU-CS290-Sp2017/simple-api-server">example code</a>',
            'MongoDB &ndash; <a href="https://github.com/OSU-CS290-Sp2017/simple-mongo-server">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a> &ndash; MDN',
            '<a href="https://docs.mongodb.com/getting-started/shell/">Getting Started with MongoDB</a> &ndash; MongoDB docs',
            '<a href="https://docs.mongodb.com/manual/crud/">MongoDB CRUD Operations</a> &ndash; MongoDB docs',
            '<a href="http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/">Node.js Quick Start</a> &ndash; MongoDB docs'
          ]
        }
      ]
    }
  ],

  assignments: {
    preambleHTML: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: [
      {
        link : 'https://classroom.github.com/assignment-invitations/31b9a7d362d610fb0f5bf3884eec945e',
        title: 'Assignment 1 – HTML',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 4/17/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 4/17/2017',
          'Demo due by 11:59pm on Monday, 5/1/2017'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/b67f8710f4d589d4d5697db72243fdce',
        title: 'Assignment 2 – CSS',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/1/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 5/1/2017',
          'Demo due by 11:59pm on Monday, 5/15/2017'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/b539394ec7edfdddcaf0b79ae0474634',
        title: 'Assignment 3 - Client-side JS',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/15/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 5/15/2017',
          'Demo due by 11:59pm on Monday, 5/29/2017'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/88293175bded5b60b1b82b50c50927dc',
        title: 'Assignment 4 - Simple Node.js-based file server',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/22/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 5/22/2017',
          '<b>NO DEMO for this assignment</b>'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/178c0738221464fa4eeccfcd38f2123b',
        title: 'Assignment 5 - Dynamic content with Express and Handlebars',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 6/5/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 6/5/2017',
          '<b>NO DEMO for this assignment</b>'
        ]
      }
    ]
  },

  finalProject: {
    preambleHTML: "<p>For the final project in this course, you will work in teams to implement a complete web application that serves dynamic, interactive data that is stored in a database on the back end.  You can find more info below.</p>",
    assignments: [
      {
        title: 'Final Project Description',
        link: 'https://docs.google.com/document/d/17gPYAuI1xME3_YF5W96B2AyU1ORB9NV9I-9Id_LKYDo/edit?usp=sharing'
      },
      {
        link : 'https://doodle.com/poll/2tcxb25td4shqac5',
        title: 'Final Project Demo Signup',
        notesHTML: [
          'Sign up for a Final Project demo using the link above',
          'Sign up for one slot per team',
          'Code is due on GitHub when when you do your demo'
        ]
      }
    ]
  },

  taInfo: {
    officeHoursLocation: "KEC Atrium",
    gradingHoursLocation: "KEC Atrium",
    TAs: [
      {
        name: "Purbasha Chatterjee",
        email: "chattepu@oregonstate.edu",
        officeHours: [ "W 2:00–3:00pm" ],
        gradingHours: [
          "M 1:50–2:50pm",
          "W 3:00–4:00pm",
          "F 12:00–1:30pm"
        ],
        gradingHoursPollLink: "https://doodle.com/poll/n7a4gxtk37mvmp5g"
      },
      {
        name: "Sudhanshu Shobhakant Pathak",
        email: "pathaks@oregonstate.edu",
        officeHours: [ "Th 9:00–11:00am" ],
        gradingHours: [
          "MW 8:00–9:00am, 10:00am-12:00pm",
          "Th 8:00–9:00am"
        ],
        gradingHoursPollLink: "https://doodle.com/poll/t7ssf5b46vsp476c"
      },
      {
        name: "Naimisha Reddy Saireddy",
        email: "saireddn@oregonstate.edu",
        officeHours: [ "Tu 8:15–9:45am" ],
        gradingHours: [
          "Tu 9:45am–2:00pm",
          "Th 8:00am–10:50am"
        ],
        gradingHoursPollLink: "https://doodle.com/poll/v6m5qwq39qethr6k"
      },
      {
        name: "Meghamala Sinha",
        email: "sinham@oregonstate.edu",
        officeHours: [ "W 2:30–4:30pm" ],
        gradingHours: [
          "M 2:30–3:30pm",
          "TuThF 2:30–4:30pm"
        ],
        gradingHoursPollLink: "https://doodle.com/poll/se9budhyxku4dn3e"
      }
    ]
  },

  subPages: {
    'ta-info': TAInfoPage
  }
};

export default courseDetails;
