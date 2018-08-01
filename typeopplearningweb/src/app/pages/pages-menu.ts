import { NbMenuItem } from '@nebular/theme';
import { group } from '@angular/animations/src/animation_metadata';

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'Customer List',
    icon: 'fa fa-users',
    link: '/pages/customers',
    home: true,
  },
  {
    title: 'Training library',
    icon: 'fa fa-list-ul',
    link: '/pages/traininglibs',
  }
]

export const MENU_ITEMS_CUSTOMER: NbMenuItem[] = [
  {
    title: 'How To',
    icon: 'fa fa-commenting-o',
    link: '/pages/howto',
  },
  {
    title: 'FAQ',
    icon: 'fa fa-question-circle-o',
    link: '/pages/faq',
  },
  {
    title: 'Profile page',
    icon: 'fa fa-user-o',
    link: '/pages/profiles',
  },
  {
    title: 'Subscriptions',
    icon: 'fa fa-clipboard',
    link: '/pages/subscriptions',
    children: [
        {
          title: 'Purchase Training',
          link: '/pages/subscriptions/purchase'
        },
        {
          title: 'Allowed Training',
          link: '/pages/subscriptions/allowedtraining'
        },
        {
          title: 'Budget',
          link: '/pages/subscriptions/budget'
        },
        // {
        //   title: 'Invoices list',
        //   link: '/pages/subscriptions/invoices'
        // },
    ]
  },
  {
    title: 'User list',
    icon: 'fa fa-address-book-o',
    link: '/pages/userlist'
  },
  /* {
    title: 'Trainings',
    icon: 'fa fa-list-ul',
    link: '/pages/trainings'
  }, */
  {
    title: 'Certificates',
    icon: 'fa fa-certificate',
    link: '/pages/certificates'
  }
]

export const MENU_ITEMS_USER: NbMenuItem[] = [
  {
    title: 'How To',
    icon: 'fa fa-commenting-o',
    link: '/pages/howto',
  },
  {
    title: 'FAQ',
    icon: 'fa fa-question-circle-o',
    link: '/pages/faq',
  },
  {
    title: 'Profile page',
    icon: 'fa fa-user-o',
    link: '/pages/profiles',
  },
  {
    title: 'Trainings',
    icon: 'fa fa-list-ul',
    link: '/pages/trainings'
  },
  {
    title: 'Certificates',
    icon: 'fa fa-certificate',
    link: '/pages/certificates'
  }
]


//   {
//     title: 'How To',
//     icon: 'fa fa-commenting-o',
//     link: '/pages/howto',
//   },
//   {
//     title: 'FAQ',
//     icon: 'fa fa-question-circle-o',
//     link: '/pages/faq',
//   },
//   {
//     title: 'Profile page',
//     icon: 'fa fa-user-o',
//     link: '/pages/profiles',
//   },
//   {
//     title: 'Subscriptions',
//     icon: 'fa fa-clipboard',
//     // link: '/pages/subscriptions',
//     group: true,
//     // children: [

//     // ]

//   },
//   {
//     title: 'Purchase Training',
//     link: '/pages/subscriptions/purchase'
//   },
//   {
//     title: 'Allowed Training',
//     link: '/pages/subscriptions/allowedtraining'
//   },
//   {
//     title: 'Budget',
//     link: '/pages/subscriptions/budget'
//   },
//   {
//     title: 'User list',
//     icon: 'fa fa-address-book-o',
//     link: '/pages/userlist'
//   },
//   {
//     title: 'Invoices list',
//     icon: 'fa fa-usd',
//     link: '/pages/invoices'
//   },
//   {
//     title: 'Trainings',
//     icon: 'fa fa-list-ul',
//     link: '/pages/trainings'
//   },
//   {
//     title: 'Certificates',
//     icon: 'fa fa-certificate',
//     link: '/pages/certificates'
//   }
// ];


