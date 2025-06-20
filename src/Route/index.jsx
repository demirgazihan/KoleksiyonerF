import React from "react";
import { useRoutes } from "react-router-dom";
import {
    DashboardRoutes,
    MaterialRoutes,
    AppsRoutes,
    BlankRoutes,
    IndependentRoutes,
    UiKitRoutes,
    AdvanceUiRoutes,
    IconsRoutes,
    MISC_PAGE,
    mapRoutes,
    chartRoutes,
    apexChartRoutes,
    AuthRoutes,
    ErrorRoutes,
    OtherRoutes,
    TableRoutes,
    FormElementRoutes,
    ReadyUseRoutes
} from "./AuthRoutes";
import Layout from "../Layout";

// DashboardRoutes
const Ecommerce = React.lazy(() => import("../Pages/Dashboard/Ecommerce"));
const ProjectPage = React.lazy(() => import("../Pages/Dashboard/ProjectsPage"));
const Crypto = React.lazy(() => import("../Pages/Dashboard/Crypto"));
const Education = React.lazy(() => import("../Pages/Dashboard/Education"));

// MaterialRoutes
const FabricPage = React.lazy(() => import("../Pages/Material/Fabric"));
const FabricCreatePage = React.lazy(() => import("../Pages/Material/Fabric/CreateFabric"));
const FabricDetailPage = React.lazy(() => import("../Pages/Material/Fabric/DetailFabric"));


//
// // AppsRoutes
const Calendar = React.lazy(() => import("../Pages/Apps/Calendar"));
const Profile = React.lazy(() => import("../Pages/Apps/ProfilePage/Profile"));
const Settings = React.lazy(() => import("../Pages/Apps/ProfilePage/Settings"));
const Project = React.lazy(() => import("../Pages/Apps/ProjectPage/Project"));
const ProjectDetails = React.lazy(() => import("../Pages/Apps/ProjectPage/ProjectDetails"));
const ToDo = React.lazy(() => import("../Pages/Apps/ToDo"));
const Team = React.lazy(() => import("../Pages/Apps/Team"));
const API = React.lazy(() => import("../Pages/Apps/API"));
const Ticket = React.lazy(() => import("../Pages/Apps/TicketPage/Ticket"));
const TicketDetails = React.lazy(() => import("../Pages/Apps/TicketPage/TicketDetails"));
const EmailPage = React.lazy(() => import("../Pages/Apps/EmailsPage/EmailPage"));
const ReadEmail = React.lazy(() => import("../Pages/Apps/EmailsPage/ReadEmail"));
const Cart = React.lazy(() => import("../Pages/Apps/Eshop/Cart"));
const Product = React.lazy(() => import("../Pages/Apps/Eshop/Product"));
const AddProduct = React.lazy(() => import("../Pages/Apps/Eshop/AddProduct"));
const ProductDetails = React.lazy(() => import("../Pages/Apps/Eshop/ProductDetails"));
const ProductList = React.lazy(() => import("../Pages/Apps/Eshop/ProductList"));
const Orders = React.lazy(() => import("../Pages/Apps/Eshop/Orders"));
const OrderDetails = React.lazy(() => import("../Pages/Apps/Eshop/OrderDetails"));
const OrderList = React.lazy(() => import("../Pages/Apps/Eshop/OrderList"));
const Checkout = React.lazy(() => import("../Pages/Apps/Eshop/Checkout"));
const Wishlist = React.lazy(() => import("../Pages/Apps/Eshop/Wishlist"));
const Invoice = React.lazy(() => import("../Pages/Apps/Invoice"));
const Chat = React.lazy(() => import("../Pages/Apps/Chat"));
const FileManager = React.lazy(() => import("../Pages/Apps/FileManager"));
const Bookmark = React.lazy(() => import("../Pages/Apps/Bookmark"));
const KanbanBoard = React.lazy(() => import("../Pages/Apps/KanbanBoard"));
const Timeline = React.lazy(() => import("../Pages/Apps/Timeline"));
const FAQs = React.lazy(() => import("../Pages/Apps/FAQs"));
const Pricing = React.lazy(() => import("../Pages/Apps/Pricing"));
const Gallery = React.lazy(() => import("../Pages/Apps/Gallery"));
const Blog = React.lazy(() => import("../Pages/Apps/BlogPage/Blog"));
const BlogDetails = React.lazy(() => import("../Pages/Apps/BlogPage/BlogDetails"));
const AddBlog = React.lazy(() => import("../Pages/Apps/BlogPage/AddBlog"));
const Widget = React.lazy(() => import("../Pages/Widget"));





// UIKITROUTES
const CheatSheet = React.lazy(() => import("../Pages/Uikit/Cheatsheet"));
const Alert = React.lazy(() => import("../Pages/Uikit/Alert"));
const Badge = React.lazy(() => import("../Pages/Uikit/Badge"));
const Button = React.lazy(() => import("../Pages/Uikit/Button"));
const Card = React.lazy(() => import("../Pages/Uikit/Card"));
const Dropdown = React.lazy(() => import("../Pages/Uikit/Dropdown"));
const Grid = React.lazy(() => import("../Pages/Uikit/Grid"));
const Avatar = React.lazy(() => import("../Pages/Uikit/Avatar"));
const Tabs = React.lazy(() => import("../Pages/Uikit/Tabs"));
const Accordion = React.lazy(() => import("../Pages/Uikit/Accordion"));
const Progress = React.lazy(() => import("../Pages/Uikit/Progress"));
const Notification = React.lazy(() => import("../Pages/Uikit/Notification"));
const List = React.lazy(() => import("../Pages/Uikit/List"));
const HelperClass = React.lazy(() => import("../Pages/Uikit/HelperClass"));
const Background = React.lazy(() => import("../Pages/Uikit/Background"));
const Divider = React.lazy(() => import("../Pages/Uikit/Divider"));
const Ribbon = React.lazy(() => import("../Pages/Uikit/Ribbon"));
const Editor = React.lazy(() => import("../Pages/Uikit/Editor"));
const Collapse = React.lazy(() => import("../Pages/Uikit/Collapse"));
const FooterPage = React.lazy(() => import("../Pages/Uikit/FooterPage"));
const Shadow = React.lazy(() => import("../Pages/Uikit/Shadow"));
const Wrapper = React.lazy(() => import("../Pages/Uikit/Wrapper"));
const Bullet = React.lazy(() => import("../Pages/Uikit/Bullet"));
const Placeholder = React.lazy(() => import("../Pages/Uikit/Placeholder"));
const AlignmentThing = React.lazy(() => import("../Pages/Uikit/AlignmentThing"));


// AdvanceUiRoutes
const Modals = React.lazy(() => import("../Pages/AdvancedUi/Modals"));
const OffcanvasToggle = React.lazy(() => import("../Pages/AdvancedUi/OffcanvasToggle"));
const SweetAlert = React.lazy(() => import("../Pages/AdvancedUi/SweetAlert"));
const Scrollbar = React.lazy(() => import("../Pages/AdvancedUi/Scrollbar"));
const Spinners = React.lazy(() => import("../Pages/AdvancedUi/Spinners"));
const Animation = React.lazy(() => import("../Pages/AdvancedUi/Animation"));
const VideoEmbed = React.lazy(() => import("../Pages/AdvancedUi/VideoEmbed"));
const Tour = React.lazy(() => import("../Pages/AdvancedUi/Tour"));
const Slider = React.lazy(() => import("../Pages/AdvancedUi/Slider"));
const BootstrapSlider = React.lazy(() => import("../Pages/AdvancedUi/BootstrapSlider"));
const Scrollpy = React.lazy(() => import("../Pages/AdvancedUi/Scrollpy"));
const TooltipPopovers = React.lazy(() => import("../Pages/AdvancedUi/TooltipPopovers"));
const Rating = React.lazy(() => import("../Pages/AdvancedUi/Rating"));
const Prismjs = React.lazy(() => import("../Pages/AdvancedUi/Prismjs"));
const CountDown = React.lazy(() => import("../Pages/AdvancedUi/CountDown"));
const CountUp = React.lazy(() => import("../Pages/AdvancedUi/CountUp"));
const Draggable = React.lazy(() => import("../Pages/AdvancedUi/Draggable"));
const TreeView = React.lazy(() => import("../Pages/AdvancedUi/TreePage"));
const BlockUi = React.lazy(() => import("../Pages/AdvancedUi/BlockUi"));

// IconsRoutes
const Fontawesome = React.lazy(() => import("../Pages/Icon/Fontawesome"));
const Flag = React.lazy(() => import("../Pages/Icon/Flag"));
const Tabler = React.lazy(() => import("../Pages/Icon/Tabler"));
const Weather = React.lazy(() => import("../Pages/Icon/Weather"));
const Animated = React.lazy(() => import("../Pages/Icon/Animated"));
const Iconoir = React.lazy(() => import("../Pages/Icon/Iconoir"));
const Phosphor = React.lazy(() => import("../Pages/Icon/Phosphor"));

const Misc = React.lazy(() => import("../Pages/Misc"));

// mapRoutes
const GoogleMaps = React.lazy(() => import("../Pages/Map/GoogleMaps"));
const LeafletMap = React.lazy(() => import("../Pages/Map/LeafletMap"));
const VectorMap = React.lazy(() => import("../Pages/Map/VectorMap"));

// chartRoutes
const ChartJS = React.lazy(() => import("../Pages/Chart/ChartJS"));

// apexChartRoutes

const LineChart = React.lazy(() => import("../Pages/Chart/Apexcharts/LineChart"));
const AreaCharts = React.lazy(() => import("../Pages/Chart/Apexcharts/AreaChart"));
const ColumnChart = React.lazy(() => import("../Pages/Chart/Apexcharts/ColumnChart"));
const BarChart = React.lazy(() => import("../Pages/Chart/Apexcharts/BarChart"));
const MixedChart = React.lazy(() => import("../Pages/Chart/Apexcharts/MixedChart"));
const TimelineRangeBars = React.lazy(() => import("../Pages/Chart/Apexcharts/TimelineRangeBars"));
const CandlestickChart = React.lazy(() => import("../Pages/Chart/Apexcharts/CandlestickChart"));
const BoxplotChart = React.lazy(() => import("../Pages/Chart/Apexcharts/BoxplotChart"));
const BubbleChart = React.lazy(() => import("../Pages/Chart/Apexcharts/BubbleChart"));
const ScatterChart = React.lazy(() => import("../Pages/Chart/Apexcharts/ScatterChart"));
const HeatmapChart = React.lazy(() => import("../Pages/Chart/Apexcharts/HeatmapChart"));
const TreemapChart = React.lazy(() => import("../Pages/Chart/Apexcharts/TreemapChart"));
const PieChart = React.lazy(() => import("../Pages/Chart/Apexcharts/PieChart"));
const RadialBarChart = React.lazy(() => import("../Pages/Chart/Apexcharts/RadialBarChart"));
const RadarChart = React.lazy(() => import("../Pages/Chart/Apexcharts/RadarChart"));

// AuthRoutes
const SignIn = React.lazy(() => import("../Pages/AuthPages/SignIn"));
const SignInBgImage = React.lazy(() => import("../Pages/AuthPages/SignInBgImage"));
const SignUp = React.lazy(() => import("../Pages/AuthPages/SignUp"));
const SignUpBgImage = React.lazy(() => import("../Pages/AuthPages/SignUpBgImage"));
const PasswordReset = React.lazy(() => import("../Pages/AuthPages/PasswordReset"));
const PasswordResetBgImage = React.lazy(() => import("../Pages/AuthPages/PasswordResetBgImage"));
const PasswordCreate = React.lazy(() => import("../Pages/AuthPages/PasswordCreate"));
const PasswordCreateBgImage = React.lazy(() => import("../Pages/AuthPages/PasswordCreateBgImage"));
const LockScreen = React.lazy(() => import("../Pages/AuthPages/LockScreen"));
const LockScreenBgImage = React.lazy(() => import("../Pages/AuthPages/LockScreenBgImage"));
const Verification = React.lazy(() => import("../Pages/AuthPages/Verification"));
const VerificationBgImg = React.lazy(() => import("../Pages/AuthPages/VerificationBgImg"));


// ErrorRoutes
const BadRequest = React.lazy(() => import("../Pages/ErrorPages/BadRequest"));
const Forbidden = React.lazy(() => import("../Pages/ErrorPages/Forbidden"));
const NotFound = React.lazy(() => import("../Pages/ErrorPages/NotFound"));
const InternalServer = React.lazy(() => import("../Pages/ErrorPages/InternalServer"));
const ServiceUnavailable = React.lazy(() => import("../Pages/ErrorPages/ServiceUnavailable"));

// OtherRoutes
const Blank = React.lazy(() => import("../Pages/OtherPage/Blank"));
const Maintenance = React.lazy(() => import("../Pages/OtherPage/Maintenance"));
const ComingSoon = React.lazy(() => import("../Pages/OtherPage/ComingSoon"));
const Landing = React.lazy(() => import("../Pages/OtherPage/Landing"));
const Sitemap = React.lazy(() => import("../Pages/OtherPage/Sitemap"));
const PrivacyPolicy = React.lazy(() => import("../Pages/OtherPage/PrivacyPolicy"));
const TermsCondition = React.lazy(() => import("../Pages/OtherPage/TermsCondition"));


// TableRoutes

const BasicTable = React.lazy(() => import("../Pages/Tables/BasicTable"));
const DataTable = React.lazy(() => import("../Pages/Tables/DataTable"));
const ListTable = React.lazy(() => import("../Pages/Tables/ListTable"));
const AdvanceTable = React.lazy(() => import("../Pages/Tables/AdvanceTable"));



const FormValidation = React.lazy(() => import("../Pages/FormElements/FormValidation"));
const BaseInput = React.lazy(() => import("../Pages/FormElements/BaseInput"));
const CheckboxRadio = React.lazy(() => import("../Pages/FormElements/CheckboxRadio"));
const InputGroups = React.lazy(() => import("../Pages/FormElements/InputGroups"));
const InputMasks = React.lazy(() => import("../Pages/FormElements/InputMasks"));
const FloatingLabels = React.lazy(() => import("../Pages/FormElements/FloatingLabels"));
const Datetimepicker = React.lazy(() => import("../Pages/FormElements/Datetimepicker"));
const TouchSpin = React.lazy(() => import("../Pages/FormElements/TouchSpin"));
const FormSelect = React.lazy(() => import("../Pages/FormElements/FormSelect"));
const Switch = React.lazy(() => import("../Pages/FormElements/Switch"));
const RangeSlider = React.lazy(() => import("../Pages/FormElements/RangeSlider"));
const FormTextarea = React.lazy(() => import("../Pages/FormElements/FormTextarea"));
const Typeahead = React.lazy(() => import("../Pages/FormElements/Typeahead"));
const FormClipboard = React.lazy(() => import("../Pages/FormElements/FormClipboard"));
const FIleUpload = React.lazy(() => import("../Pages/FormElements/FileUpload"));
const DualListBoxes = React.lazy(() => import("../Pages/FormElements/DualListBoxes"));
const DefaultForms = React.lazy(() => import("../Pages/FormElements/DefaultForms"));

const FormWizards = React.lazy(() => import("../Pages/ReadyToUse/FormWizards"));
const FormWizards1 = React.lazy(() => import("../Pages/ReadyToUse/FormWizards1"));
const FormWizards2 = React.lazy(() => import("../Pages/ReadyToUse/FormWizards2"));
const ReadyUseForm = React.lazy(() => import("../Pages/ReadyToUse/ReadyUseForm"));
const ReadyUseTable = React.lazy(() => import("../Pages/ReadyToUse/ReadyUseTable"));

const Routes = () => {
    let element = [
        {
            path: "/",
            element: <Layout />,
            children: [
                // IndependentRoutes
                { path: IndependentRoutes.WIDGETS_PAGE, element: <Widget /> },

                // DashboardRoutes
                { path: DashboardRoutes.MAIN_PAGE, element: <Ecommerce /> },
                { path: DashboardRoutes.ECOMMERCE_PAGE, element: <Ecommerce /> },
                { path: DashboardRoutes.PROJECT_PAGE, element: <ProjectPage /> },
                { path: DashboardRoutes.CRYPTO_PAGE, element: <Crypto /> },
                { path: DashboardRoutes.EDUCATION_PAGE, element: <Education /> },
                // 

                // MaterialRoutes
                { path: MaterialRoutes.FABRIC_PAGE, element: <FabricPage /> },
                { path: MaterialRoutes.FABRIC_CREATE_PAGE, element: <FabricCreatePage /> },
                { path: MaterialRoutes.FABRIC_DETAIL_PAGE, element: <FabricDetailPage /> },

                // // AppsRoutes
                { path: AppsRoutes.CALENDAR_PAGE, element: <Calendar /> },
                { path: AppsRoutes.PROFILE_PAGE, element: <Profile /> },
                { path: AppsRoutes.SETTING_PAGE, element: <Settings /> },
                { path: AppsRoutes.PROJECTS_PAGE, element: <Project /> },
                { path: AppsRoutes.PROJECTS_DETAILS_PAGE, element: <ProjectDetails /> },
                { path: AppsRoutes.TODO_PAGE, element: <ToDo /> },
                { path: AppsRoutes.TEAM_PAGE, element: <Team /> },
                { path: AppsRoutes.API_PAGE, element: <API /> },
                { path: AppsRoutes.Email_PAGE, element: <EmailPage /> },
                { path: AppsRoutes.READ_EMAIL_PAGE, element: <ReadEmail /> },
                { path: AppsRoutes.SHOP_CART_PAGE, element: <Cart /> },
                { path: AppsRoutes.SHOP_PRODUCT_PAGE, element: <Product /> },
                { path: AppsRoutes.SHOP_ADD_PRODUCT_PAGE, element: <AddProduct /> },
                { path: AppsRoutes.SHOP_PRODUCT_DETAILS_PAGE, element: <ProductDetails /> },
                { path: AppsRoutes.SHOP_PRODUCT_LIST_PAGE, element: <ProductList /> },
                { path: AppsRoutes.SHOP_ORDERS_PAGE, element: <Orders /> },
                { path: AppsRoutes.SHOP_ORDERS_DETAILS_PAGE, element: <OrderDetails /> },
                { path: AppsRoutes.SHOP_ORDERS_LIST_PAGE, element: <OrderList /> },
                { path: AppsRoutes.SHOP_CHECKOUT_PAGE, element: <Checkout /> },
                { path: AppsRoutes.SHOP_WISHLIST_PAGE, element: <Wishlist /> },
                { path: AppsRoutes.INVOICE_PAGE, element: <Invoice /> },
                { path: AppsRoutes.CHAT_PAGE, element: <Chat /> },
                { path: AppsRoutes.FILE_MANAGER_PAGE, element: <FileManager /> },
                { path: AppsRoutes.BOOKMARK_PAGE, element: <Bookmark /> },
                { path: AppsRoutes.KANBAN_BOARD_PAGE, element: <KanbanBoard /> },
                { path: AppsRoutes.TIMELINE_PAGE, element: <Timeline /> },
                { path: AppsRoutes.FAQ_PAGE, element: <FAQs /> },
                { path: AppsRoutes.PRICING_PAGE, element: <Pricing /> },
                { path: AppsRoutes.GALLERY_PAGE, element: <Gallery /> },
                { path: AppsRoutes.BLOG_PAGE, element: <Blog /> },
                { path: AppsRoutes.BLOG_DETAILS_PAGE, element: <BlogDetails /> },
                { path: AppsRoutes.Add_BLOG_PAGE, element: <AddBlog /> },
                { path: AppsRoutes.TICKET_PAGE, element: <Ticket /> },
                { path: AppsRoutes.TICKET_DETAILS_PAGE, element: <TicketDetails /> },



                // uilitroutes
                { path: UiKitRoutes.CHEATSHEET_PAGE, element: <CheatSheet /> },
                { path: UiKitRoutes.ALERT_PAGE, element: <Alert /> },
                { path: UiKitRoutes.BADGE_PAGE, element: <Badge /> },
                { path: UiKitRoutes.BUTTON_PAGE, element: <Button /> },
                { path: UiKitRoutes.CARD_PAGE, element: <Card /> },
                { path: UiKitRoutes.DROPDOWN_PAGE, element: <Dropdown /> },
                { path: UiKitRoutes.GRID_PAGE, element: <Grid /> },
                { path: UiKitRoutes.AVATAR_PAGE, element: <Avatar /> },
                { path: UiKitRoutes.TAB_PAGE, element: <Tabs /> },
                { path: UiKitRoutes.ACCORDION_PAGE, element: <Accordion /> },
                { path: UiKitRoutes.PROGRESS_PAGE, element: <Progress /> },
                { path: UiKitRoutes.NOTIFICATION_PAGE, element: <Notification /> },
                { path: UiKitRoutes.LIST_PAGE, element: <List /> },
                { path: UiKitRoutes.HELPER_CLASSES_PAGE, element: <HelperClass /> },
                { path: UiKitRoutes.BACKGROUND_PAGE, element: <Background /> },
                { path: UiKitRoutes.DIVIDER_PAGE, element: <Divider /> },
                { path: UiKitRoutes.RIBBONS_PAGE, element: <Ribbon /> },
                { path: UiKitRoutes.EDITOR_PAGE, element: <Editor /> },
                { path: UiKitRoutes.COLLAPSE_PAGE, element: <Collapse /> },
                { path: UiKitRoutes.FOOTER_PAGE, element: <FooterPage /> },
                { path: UiKitRoutes.SHADOW_PAGE, element: <Shadow /> },
                { path: UiKitRoutes.WRAPPER_PAGE, element: <Wrapper /> },
                { path: UiKitRoutes.BULLET_PAGE, element: <Bullet /> },
                { path: UiKitRoutes.PLACEHOLDER_PAGE, element: <Placeholder /> },
                { path: UiKitRoutes.ALIGNMENT_PAGE, element: <AlignmentThing /> },
                //
                // AdvanceUiRoutes
                { path: AdvanceUiRoutes.MODAL_PAGE, element: <Modals /> },
                { path: AdvanceUiRoutes.OFF_CANVAS_PAGE, element: <OffcanvasToggle /> },
                { path: AdvanceUiRoutes.SWEETALERT_PAGE, element: <SweetAlert /> },
                { path: AdvanceUiRoutes.SCROLLBAR_PAGE, element: <Scrollbar /> },
                { path: AdvanceUiRoutes.SPINNER_PAGE, element: <Spinners /> },
                { path: AdvanceUiRoutes.ANIMATION_PAGE, element: <Animation /> },
                { path: AdvanceUiRoutes.VIDEO_EMBED_PAGE, element: <VideoEmbed /> },
                { path: AdvanceUiRoutes.TOUR_PAGE, element: <Tour /> },
                { path: AdvanceUiRoutes.SLIDER_PAGE, element: <Slider /> },
                { path: AdvanceUiRoutes.BOOTSTRAP_SLIDER_PAGE, element: <BootstrapSlider /> },
                { path: AdvanceUiRoutes.SCROLLSPY_PAGE, element: <Scrollpy /> },
                { path: AdvanceUiRoutes.TOOLTIP_POPOVERS_PAGE, element: <TooltipPopovers /> },
                { path: AdvanceUiRoutes.RATINGS_PAGE, element: <Rating /> },
                { path: AdvanceUiRoutes.PRISMJS_PAGE, element: <Prismjs /> },
                { path: AdvanceUiRoutes.COUNT_DOWN_PAGE, element: <CountDown /> },
                { path: AdvanceUiRoutes.COUNT_UP_PAGE, element: <CountUp /> },
                { path: AdvanceUiRoutes.DRAGGABLE_PAGE, element: <Draggable /> },
                { path: AdvanceUiRoutes.TREE_VIEW_PAGE, element: <TreeView /> },
                { path: AdvanceUiRoutes.BLOG_UI_PAGE, element: <BlockUi /> },

                // IconsRoutes
                { path: IconsRoutes.FONT_AWESOME_PAGE, element: <Fontawesome /> },
                { path: IconsRoutes.FLAG_ICONS_PAGE, element: <Flag /> },
                { path: IconsRoutes.TABLER_ICONS_PAGE, element: <Tabler /> },
                { path: IconsRoutes.WEATHER_ICONS_PAGE, element: <Weather /> },
                { path: IconsRoutes.ANIMATED_ICONS_PAGE, element: <Animated /> },
                { path: IconsRoutes.ICONOIR_ICONS_PAGE, element: <Iconoir /> },
                { path: IconsRoutes.PHOSPHOR_ICONS_PAGE, element: <Phosphor /> },

                // Misc
                { path: MISC_PAGE, element: <Misc /> },

                // mapRoutes
                { path: mapRoutes.GOOGLE_MAP, element: <GoogleMaps /> },
                { path: mapRoutes.LEAFLET_MAP, element: <LeafletMap /> },
                { path: mapRoutes.VECTOR_MAP, element: <VectorMap /> },


                // chartRoutes
                { path: chartRoutes.CHART_JS_PAGE, element: <ChartJS /> },


                // Apex Charts
                { path: apexChartRoutes.LINE_PAGE, element: <LineChart /> },
                { path: apexChartRoutes.AREA_PAGE, element: <AreaCharts /> },
                { path: apexChartRoutes.COLUMN_PAGE, element: <ColumnChart /> },
                { path: apexChartRoutes.BAR_PAGE, element: <BarChart /> },
                { path: apexChartRoutes.MIXED_PAGE, element: <MixedChart /> },
                { path: apexChartRoutes.TIMELINE_PAGE, element: <TimelineRangeBars /> },
                { path: apexChartRoutes.CANDLESTICK_PAGE, element: <CandlestickChart /> },
                { path: apexChartRoutes.BOXPLOT_PAGE, element: <BoxplotChart /> },
                { path: apexChartRoutes.BUBBLE_PAGE, element: <BubbleChart /> },
                { path: apexChartRoutes.SCATTER_PAGE, element: <ScatterChart /> },
                { path: apexChartRoutes.HEATMAP_PAGE, element: <HeatmapChart /> },
                { path: apexChartRoutes.TREEMAP_PAGE, element: <TreemapChart /> },
                { path: apexChartRoutes.PIE_PAGE, element: <PieChart /> },
                { path: apexChartRoutes.RADIAL_BAR_PAGE, element: <RadialBarChart /> },
                { path: apexChartRoutes.RADAR_PAGE, element: <RadarChart /> },

                // OtherRoutes
                { path: OtherRoutes.OTHER_BLANK_PAGE, element: <Blank /> },

                { path: OtherRoutes.SITE_MAP, element: <Sitemap /> },
                { path: OtherRoutes.PRIVACY_POLICY, element: <PrivacyPolicy /> },
                { path: OtherRoutes.TERMS_CONDITION, element: <TermsCondition /> },



                // // BlankRoutes
                { path: BlankRoutes.ANOTHER_BLANK_PAGE, element: <Blank /> },

                //TableRoutes
                { path: TableRoutes.BASIC_TABLE, element: <BasicTable /> },
                { path: TableRoutes.DATA_TABLE, element: <DataTable /> },
                { path: TableRoutes.LIST_JS_TABLE, element: <ListTable /> },
                { path: TableRoutes.ADVANCE_TABLE, element: <AdvanceTable /> },


                // FormElement
                { path: FormElementRoutes.FORM_VALIDATION, element: <FormValidation /> },
                { path: FormElementRoutes.BASE_INPUT, element: <BaseInput /> },
                { path: FormElementRoutes.CHECKBOX_RADIO, element: <CheckboxRadio /> },
                { path: FormElementRoutes.INPUT_GROUPS, element: <InputGroups /> },
                { path: FormElementRoutes.INPUT_MASKS, element: <InputMasks /> },
                { path: FormElementRoutes.FLOATING_LABEL, element: <FloatingLabels /> },
                { path: FormElementRoutes.DATE_TIME_PICKER, element: <Datetimepicker /> },
                { path: FormElementRoutes.TOUCH_SPINE, element: <TouchSpin /> },
                { path: FormElementRoutes.FORM_SELECT, element: <FormSelect /> },
                { path: FormElementRoutes.SWITCH, element: <Switch /> },
                { path: FormElementRoutes.RANGE_SLIDER, element: <RangeSlider /> },
                { path: FormElementRoutes.TYPEAHEAD, element: <Typeahead /> },
                { path: FormElementRoutes.FORM_TEXTAREA, element: <FormTextarea /> },
                { path: FormElementRoutes.FORM_CLIPBOARD, element: <FormClipboard /> },
                { path: FormElementRoutes.FILE_UPLOAD, element: <FIleUpload /> },
                { path: FormElementRoutes.DUAL_LIST_BOX, element: <DualListBoxes /> },
                { path: FormElementRoutes.DEFAULT_FORMS, element: <DefaultForms /> },

                // ReadyToUSe
                { path: ReadyUseRoutes.READY_FORM_WIZARDS, element: <FormWizards /> },
                { path: ReadyUseRoutes.READY_FORM_WIZARDS_1, element: <FormWizards1 /> },
                { path: ReadyUseRoutes.READY_FORM_WIZARDS_2, element: <FormWizards2 /> },
                { path: ReadyUseRoutes.READY_USE_FORM, element: <ReadyUseForm /> },
                { path: ReadyUseRoutes.READY_USE_TABLE, element: <ReadyUseTable /> },

            ]
        },
        // AuthRoutes
        { path: AuthRoutes.AUTH_SIGN_IN, element: <SignIn /> },
        { path: AuthRoutes.AUTH_SIGN_IN_IMG, element: <SignInBgImage /> },
        { path: AuthRoutes.AUTH_SIGN_UP, element: <SignUp /> },
        { path: AuthRoutes.AUTH_SIGN_UP_IMG, element: <SignUpBgImage /> },
        { path: AuthRoutes.AUTH_PASSWORD_RESET, element: <PasswordReset /> },
        { path: AuthRoutes.AUTH_PASSWORD_RESET_IMG, element: <PasswordResetBgImage /> },
        { path: AuthRoutes.AUTH_PASSWORD_CREATE, element: <PasswordCreate /> },
        { path: AuthRoutes.AUTH_PASSWORD_CREATE_IMG, element: <PasswordCreateBgImage /> },
        { path: AuthRoutes.AUTH_LOCK_SCREEN, element: <LockScreen /> },
        { path: AuthRoutes.AUTH_LOCK_SCREEN_IMG, element: <LockScreenBgImage /> },
        { path: AuthRoutes.AUTH_VERIFICATION, element: <Verification /> },
        { path: AuthRoutes.AUTH_VERIFICATION_IMG, element: <VerificationBgImg /> },



        // / ErrorRotes
        { path: ErrorRoutes.ERROR_400, element: <BadRequest /> },
        { path: ErrorRoutes.ERROR_403, element: <Forbidden /> },
        { path: ErrorRoutes.ERROR_404, element: <NotFound /> },
        { path: ErrorRoutes.ERROR_500, element: <InternalServer /> },
        { path: ErrorRoutes.ERROR_503, element: <ServiceUnavailable /> },


        // otherRoutes
        { path: OtherRoutes.MAINTENANCE_PAGE, element: <Maintenance /> },
        { path: OtherRoutes.OTHER_LANDING_PAGE, element: <Landing /> },

        { path: OtherRoutes.COMING_SOON, element: <ComingSoon /> }

    ];
    return useRoutes(element);
};

export default Routes;