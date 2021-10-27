import React from "react";
import { Redirect } from "react-router";

//choosen
import Login from "../../views/pages/auth/login/login";
import DashboardV3 from "../../views/pages/dashboard/dashboard-v3.js";
import StockGlobalProduksi from "../../views/pages/laporan/stock-global-produksi";
import KirimSaldoTahunan from "../../views/pages/laporan/kirim-saldo-tahunan";
import SaldoBahan from "../../views/pages/laporan/saldo-bahan";
//notyet
import EmailInbox from "../../views/pages/email/email-inbox.js";
import EmailCompose from "../../views/pages/email/email-compose.js";
import EmailDetail from "../../views/pages/email/email-detail.js";
import Widgets from "../../views/pages/widget/widget.js";
import UIGeneral from "../../views/pages/ui/ui-general.js";
import UITypography from "../../views/pages/ui/ui-typography.js";
import UITabsAccordion from "../../views/pages/ui/ui-tabs-accordion.js";
import UIModalNotification from "../../views/pages/ui/ui-modal-notification.js";
import UIWidgetBoxes from "../../views/pages/ui/ui-widget-boxes.js";
import UIMediaObject from "../../views/pages/ui/ui-media-object.js";
import UIButtons from "../../views/pages/ui/ui-buttons.js";
import UIIcons from "../../views/pages/ui/ui-icons.js";
import UISimpleLineIcons from "../../views/pages/ui/ui-simple-line-icons.js";
import UIIonicons from "../../views/pages/ui/ui-ionicons.js";
import UILanguageBarIcon from "../../views/pages/ui/ui-language-bar-icon.js";
import UISocialButtons from "../../views/pages/ui/ui-social-buttons.js";
import Bootstrap4 from "../../views/pages/bootstrap/bootstrap-4.js";
import FormElements from "../../views/pages/form/form-elements.js";
import FormPlugins from "../../views/pages/form/form-plugins.js";
import TableBasic from "../../views/pages/table/table-basic.js";
import TableData from "../../views/pages/table/table-data.js";
import ChartJS from "../../views/pages/chart/chart-js.js";
import ChartD3 from "../../views/pages/chart/chart-d3.js";
import ChartApex from "../../views/pages/chart/chart-apex.js";
import Calendar from "../../views/pages/calendar/calendar.js";
import Map from "../../views/pages/map/map.js";
import Gallery from "../../views/pages/gallery/gallery.js";
import PageBlank from "../../views/pages/option/page-blank.js";
import PageWithFooter from "../../views/pages/option/page-with-footer.js";
import PageWithoutSidebar from "../../views/pages/option/page-without-sidebar.js";
import PageWithRightSidebar from "../../views/pages/option/page-with-right-sidebar.js";
import PageWithMinifiedSidebar from "../../views/pages/option/page-with-minified-sidebar.js";
import PageWithTwoSidebar from "../../views/pages/option/page-with-two-sidebar.js";
import PageFullHeight from "../../views/pages/option/page-full-height.js";
import PageWithWideSidebar from "../../views/pages/option/page-with-wide-sidebar.js";
import PageWithLightSidebar from "../../views/pages/option/page-with-light-sidebar.js";
import PageWithMegaMenu from "../../views/pages/option/page-with-mega-menu.js";
import PageWithTopMenu from "../../views/pages/option/page-with-top-menu.js";
import PageWithBoxedLayout from "../../views/pages/option/page-with-boxed-layout.js";
import PageWithMixedMenu from "../../views/pages/option/page-with-mixed-menu.js";
import PageBoxedLayoutWithMixedMenu from "../../views/pages/option/page-boxed-layout-with-mixed-menu.js";
import PageWithTransparentSidebar from "../../views/pages/option/page-with-transparent-sidebar.js";
import ExtraTimeline from "../../views/pages/extra/extra-timeline.js";
import ExtraComingSoon from "../../views/pages/extra/extra-coming-soon.js";
import ExtraSearch from "../../views/pages/extra/extra-search.js";
import ExtraInvoice from "../../views/pages/extra/extra-invoice.js";
import ExtraError from "../../views/pages/extra/extra-error.js";
import ExtraProfile from "../../views/pages/extra/extra-profile.js";
import LoginV1 from "../../views/pages/user/login-v1.js";
import LoginV2 from "../../views/pages/user/login-v2.js";
import LoginV3 from "../../views/pages/user/login-v3.js";

import RegisterV3 from "../../views/pages/user/register-v3.js";
import HelperCSS from "../../views/pages/helper/helper-css.js";

const routes = [
  //choosen
  // {
  //   path: "/",
  //   exact: true,
  //   component: () => <Redirect to="/user/login-v3" />,
  // },
  {
    path: "/",
    title: "Login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: () => <DashboardV3 />,
  },
  {
    path: "/laporan/stock-global-produksi",
    title: "Laporan Stock Global Produksi",
    component: () => <StockGlobalProduksi />,
  },
  {
    path: "/laporan/kirim-saldo-tahunan",
    title: "Laporan Kirim dan Saldo per Tahun",
    component: () => <KirimSaldoTahunan />,
  },
  {
    path: "/laporan/saldo-bahan",
    title: "Laporan Saldo Bahan",
    component: () => <SaldoBahan />,
  },
  //notyet
  {
    path: "/page-option/blank",
    title: "Blank Page",
    component: () => <PageBlank />,
  },
  {
    path: "/email/inbox",
    title: "Email Inbox",
    component: () => <EmailInbox />,
  },
  {
    path: "/email/compose",
    title: "Email Compose",
    component: () => <EmailCompose />,
  },
  {
    path: "/email/detail",
    title: "Email Detail",
    component: () => <EmailDetail />,
  },
  {
    path: "/widgets",
    title: "Widgets",
    component: () => <Widgets />,
  },
  {
    path: "/ui/general",
    title: "UI General",
    component: () => <UIGeneral />,
  },
  {
    path: "/ui/typography",
    title: "UI Typography",
    component: () => <UITypography />,
  },
  {
    path: "/ui/tabs-accordion",
    title: "UI Tabs Accordion",
    component: () => <UITabsAccordion />,
  },
  {
    path: "/ui/modal-notification",
    title: "UI Modal & Notification",
    component: () => <UIModalNotification />,
  },
  {
    path: "/ui/widget-boxes",
    title: "UI Widget Boxes",
    component: () => <UIWidgetBoxes />,
  },
  {
    path: "/ui/media-object",
    title: "UI Media Object",
    component: () => <UIMediaObject />,
  },
  {
    path: "/ui/buttons",
    title: "UI Buttons",
    component: () => <UIButtons />,
  },
  {
    path: "/ui/icons",
    title: "UI Icons",
    component: () => <UIIcons />,
  },
  {
    path: "/ui/simple-line-icons",
    title: "UI Simple Line Icons",
    component: () => <UISimpleLineIcons />,
  },
  {
    path: "/ui/ionicons",
    title: "UI Ionicons",
    component: () => <UIIonicons />,
  },
  {
    path: "/ui/language-bar-icon",
    title: "UI General",
    component: () => <UILanguageBarIcon />,
  },
  {
    path: "/ui/social-buttons",
    title: "UI Social Buttons",
    component: () => <UISocialButtons />,
  },
  {
    path: "/bootstrap-4",
    title: "Bootstrap 4",
    component: () => <Bootstrap4 />,
  },
  {
    path: "/form/elements",
    title: "Form Elements",
    component: () => <FormElements />,
  },
  {
    path: "/form/plugins",
    title: "Form Plugins",
    component: () => <FormPlugins />,
  },
  {
    path: "/table/basic",
    title: "Basic Tables",
    component: () => <TableBasic />,
  },
  {
    path: "/table/data",
    title: "Data Tables",
    component: () => <TableData />,
  },
  {
    path: "/chart/js",
    title: "Chart JS",
    component: () => <ChartJS />,
  },
  {
    path: "/chart/d3",
    title: "d3 Chart",
    component: () => <ChartD3 />,
  },
  {
    path: "/chart/apex",
    title: "Apex Chart",
    component: () => <ChartApex />,
  },
  {
    path: "/calendar",
    title: "Calendar",
    component: () => <Calendar />,
  },
  {
    path: "/map",
    title: "Map",
    component: () => <Map />,
  },
  {
    path: "/gallery",
    title: "Gallery",
    component: () => <Gallery />,
  },
  {
    path: "/page-option/with-footer",
    title: "Page with Footer",
    component: () => <PageWithFooter />,
  },
  {
    path: "/page-option/without-sidebar",
    title: "Page without Sidebar",
    component: () => <PageWithoutSidebar />,
  },
  {
    path: "/page-option/with-right-sidebar",
    title: "Page with Right Sidebar",
    component: () => <PageWithRightSidebar />,
  },
  {
    path: "/page-option/with-minified-sidebar",
    title: "Page with Minified Sidebar",
    component: () => <PageWithMinifiedSidebar />,
  },
  {
    path: "/page-option/with-two-sidebar",
    title: "PageWithTwoSidebar",
    component: () => <PageWithTwoSidebar />,
  },
  {
    path: "/page-option/full-height",
    title: "Full Height Content",
    component: () => <PageFullHeight />,
  },
  {
    path: "/page-option/with-wide-sidebar",
    title: "Page with Wide Sidebar",
    component: () => <PageWithWideSidebar />,
  },
  {
    path: "/page-option/with-light-sidebar",
    title: "Page with Light Sidebar",
    component: () => <PageWithLightSidebar />,
  },
  {
    path: "/page-option/with-mega-menu",
    title: "Page with Mega Menu",
    component: () => <PageWithMegaMenu />,
  },
  {
    path: "/page-option/with-top-menu",
    title: "Page with Top Menu",
    component: () => <PageWithTopMenu />,
  },
  {
    path: "/page-option/with-boxed-layout",
    title: "Page with Boxed Layout",
    component: () => <PageWithBoxedLayout />,
  },
  {
    path: "/page-option/with-mixed-menu",
    title: "Page with Mixed Menu",
    component: () => <PageWithMixedMenu />,
  },
  {
    path: "/page-option/boxed-layout-with-mixed-menu",
    title: "Boxed Layout with Mixed Menu",
    component: () => <PageBoxedLayoutWithMixedMenu />,
  },
  {
    path: "/page-option/with-transparent-sidebar",
    title: "Page with Transparent Sidebar",
    component: () => <PageWithTransparentSidebar />,
  },
  {
    path: "/extra/timeline",
    title: "Extra Timeline",
    component: () => <ExtraTimeline />,
  },
  {
    path: "/extra/coming-soon",
    title: "Extra Coming Soon",
    component: () => <ExtraComingSoon />,
  },
  {
    path: "/extra/search",
    title: "Extra Search Results",
    component: () => <ExtraSearch />,
  },
  {
    path: "/extra/invoice",
    title: "Extra Invoice",
    component: () => <ExtraInvoice />,
  },
  {
    path: "/extra/error",
    title: "Extra Error",
    component: () => <ExtraError />,
  },
  {
    path: "/extra/profile",
    title: "Extra Profile",
    component: () => <ExtraProfile />,
  },
  {
    path: "/user/login-v1",
    title: "Login",
    component: () => <LoginV1 />,
  },
  {
    path: "/user/login-v2",
    title: "Login v2",
    component: () => <LoginV2 />,
  },
  {
    path: "/user/login-v3",
    title: "Login v3",
    component: () => <LoginV3 />,
  },
  {
    path: "/user/register-v3",
    title: "Register v3",
    component: () => <RegisterV3 />,
  },
  {
    path: "/helper/css",
    title: "Predefined CSS Classes",
    component: () => <HelperCSS />,
  },
];

export default routes;
