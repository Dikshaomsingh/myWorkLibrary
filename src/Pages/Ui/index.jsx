// //Ui
import UiAlert from "./UiAlert";
import UiButtons from "./UiButtons";
import UiCards from "./UiCards";
import UiCarousel from "./UiCarousel";
import UiColors from "./UiColors";
import UiDropdown from "./UiDropdown";
import UiOffCanvas from "./UiOffCanvas";

import UiGeneral from "./UiGeneral";
import UiGrid from "./UiGrid";
import UiImages from "./UiImages";
import UiLightbox from "./UiLightbox";
import UiModal from "./UiModal";
import UiProgressbar from "./UiProgressbar";

import UiTabsAccordions from "./UiTabsAccordions";
import UiTypography from "./UiTypography";
import UiVideo from "./UiVideo";
import UiSessionTimeout from "./UiSessionTimeout";
import UiRating from "./UiRating";
import UiRangeSlider from "./UiRangeSlider";
import UiNotifications from "./UINotifications";

import UiPlaceholders from "./UiPlaceholders";
import UiToasts from "./UiToast";
import UiUtilities from "./UiUtilities";

const publicRoutes = [
    { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-offcanvas", component: <UiOffCanvas /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rating", component: <UiRating /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-utilities", component: <UiUtilities /> },
]

export {  publicRoutes };