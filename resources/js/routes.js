const Welcome = () => import('./components/App.vue')
const Login = () => import('./components/Login.vue')
const Register = () => import('./components/Register.vue')
const Dashboard = () => import('./components/Dashboard.vue')

const CreateEmployee = () => import('./components/employees/Create.vue')
const EditEmployee = () => import('./components/employees/Edit.vue')
const IndexEmployee = () => import('./components/employees/Index.vue')


const CreateCompany = () => import('./components/companies/Create.vue')
const EditCompany = () => import('./components/companies/Edit.vue')
const IndexCompany= () => import('./components/companies/Index.vue')



export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },

    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'dashbaord',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'Company-Index',
        path: '/index/company',
        component: IndexCompany 
    },
    {
        name: 'Create-Company',
        path: '/create/company',
        component: CreateCompany  
    },
    {
        name: 'Edit-Company',
        path: '/edit/company:id',
        component: EditCompany 
    },
    {
        name: 'Create-Employee',
        path: '/create/employee',
        component: CreateEmployee
    },

    {
        name: 'Edit-Employee',
        path: '/edit/emplyee:id',
        component: EditEmployee
    },
    
    {
        name: 'Index-Employee',
        path: '/index/employee',
        component: IndexEmployee
    },

]