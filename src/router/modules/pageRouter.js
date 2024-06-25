const withPrefix = (prefix, routes) =>
    routes.map((route) => {
        route.path = prefix + route.path;
        return route;
    });
const pageRouter = {
    path: '/',
    name: 'layout',
    redirect: '/main',
    component: () => import('@/layout/index.vue'),
    children: [
        {
            path: '/main',
            name: 'main',
            component: () => import('@/views/main.vue')
        },
        ...withPrefix('/book', [
            {
                path: '/',
                component: () => import('@/views/Books.vue')
            },
            {
                name: 'book',
                path: '/:tabId',
                component: () => import('@/views/Books.vue')
            }
        ]),
        {
            path: '/reference',
            name: 'reference',
            component: () => import('@/views/Reference.vue')
        },
        {
            path: '/movieclass',
            name: 'movieclass',
            component: () => import('@/views/Movieclass.vue')
        },
        {
            path: '/classsample',
            name: 'classsample',
            component: () => import('@/views/Classsample.vue')
        },
        {
            path: '/company',
            name: 'company',
            component: () => import('@/views/Company.vue'),
        }
    ]
};
export default pageRouter;