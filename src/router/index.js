import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/main',
      component: resolve => require(['../components/common/Main.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Home.vue'], resolve)
        },
        {
          path: '/registration',
          component: resolve => require(['../components/page/appointment/Registration.vue'], resolve)
        },
        {
          path: '/cancel',
          component: resolve => require(['../components/page/appointment/Cancel.vue'], resolve)
        },
        {
          path: '/search',
          component: resolve => require(['../components/page/appointment/AppointmentInfo.vue'], resolve)
        },
        {
          path: '/money',
          component: resolve => require(['../components/page/appointment/Charge.vue'], resolve)
        },
        {
          path: '/return',
          component: resolve => require(['../components/page/appointment/Return.vue'], resolve)
        },
        {
          path: '/bill',
          component: resolve => require(['../components/page/appointment/SearchBill.vue'], resolve)
        },
        {
          path: '/day',
          component: resolve => require(['../components/page/appointment/Day.vue'], resolve)
        },
        {
          path: '/diagnose',
          component: resolve => require(['../components/page/diagnosis/Diagnose.vue'], resolve)
        },
        {
          path: '/diagnose1',
          component: resolve => require(['../components/page/diagnosis/Diagnose1.vue'], resolve)
        },
        {
          path: '/template',
          component: resolve => require(['../components/page/diagnosis/Template.vue'], resolve)
        },
        {
          path: '/check',
          component: resolve => require(['../components/page/medicalTechnology/Check.vue'], resolve)
        },
        {
          path: '/examine',
          component: resolve => require(['../components/page/medicalTechnology/Examine.vue'], resolve)
        },
        {
          path: '/do',
          component: resolve => require(['../components/page/medicalTechnology/Do.vue'], resolve)
        },
        {
          path: '/tec-management',
          component: resolve => require(['../components/page/medicalTechnology/TecManagement.vue'], resolve)
        },
        {
          path: '/item',
          component: resolve => require(['../components/page/finance/Item.vue'], resolve)
        },
        {
          path: '/checkday',
          component: resolve => require(['../components/page/finance/Checkday.vue'], resolve)
        },
        {
          path: '/count',
          component: resolve => require(['../components/page/finance/Count'], resolve)
        },
        {
          path: '/doctor',
          component: resolve => require(['../components/page/finance/Doctor.vue'], resolve)
        },
      ]
    }
  ]
})
