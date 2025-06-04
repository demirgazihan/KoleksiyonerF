import {
    DashboardRoutes,
    MaterialRoutes,

} from "../../Route/AuthRoutes";

export const sidebarConfig = [
    {
        type: "dropdown",
        title: "Malzemeler",
        iconClass: "ph-duotone ph-house-line",
        name: "Malzemeler",
        collapseId: "material",
        path: '/material',
        children: [
            { name: "Kumaşlar", path: MaterialRoutes.FABRIC_PAGE },
        ],
    },

];