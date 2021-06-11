export const childRoutes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
            icon: 'dashboard',
            text: 'Dashboard'
        }
    },
    {
        path: 'tables',
        data: {
            icon: 'table_chart',
            text: 'Tables'
        }
    },
    {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule),
        data: {
            icon: 'bar_chart',
            text: 'Charts'
        }
    },
    {
        path: 'slider',
        data: {
            icon: 'slideshow',
            text: 'Slider'
        }
    },
    {
        path: 'list',
        data: {
            icon: 'list',
            text: 'List'
        }
    },
    {
        path: 'mat-components',
        data: {
            icon: 'code',
            text: 'Material Components'
        }
    },
    {
        path: 'forms',
        data: {
            icon: 'assignment',
            text: 'Forms'
        }
    },
    {
        path: 'animations',
        data: {
            icon: 'perm_media',
            text: 'Animations'
        }
    },
    {
        path: 'typography',
        data: {
            icon: 'font_download',
            text: 'Typography'
        }
    },
    {
        path: 'google-maps',
        data: {
            icon: 'place',
            text: 'Google Map'
        }
    },
    {
        path: 'mat-grid',
        data: {
            icon: 'grid_on',
            text: 'Flex Grid'
        }
    }
]