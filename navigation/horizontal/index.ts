export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'ri-home-smile-line' },
  },
  {
    title: 'Dashboard',
    to: { name: 'dashboard-teacher' },
    icon: { icon: 'ri-dashboard-3-line' },
  },
  {
    title: 'Account Settings',
    to: { name: 'account-settings-account' },
    icon: { icon: 'ri-user-settings-line' },
  },
  {
    title: 'Users',
    to: { name: 'user' },
    icon: { icon: 'ri-group-line' },
    permission: 'view.user',
  },
]
