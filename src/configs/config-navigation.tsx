import SvgColor from "@/components/svg-color";
import { paths } from "@/common/constants";
import { NavSectionInterFace } from "@/types/interface";

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1, color: "#1C252E" }}
  />
);

const ICONS = {
  job: icon("ic_job"),
  blog: icon("ic_blog"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  tour: icon("ic_tour"),
  order: icon("ic_order"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  product: icon("ic_product"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

export const dataNav: NavSectionInterFace[] = [
  // OVERVIEW
  {
    subheader: "Tổng quan",
    items: [
      {
        title: "Thống kê",
        path: paths.dashboard.dashboard,
        icon: ICONS.dashboard,
      },
      // {
      //   title: "ecommerce",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.ecommerce,
      // },
      // {
      //   title: "analytics",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.analytics,
      // },
      // {
      //   title: "banking",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.banking,
      // },
      // {
      //   title: "booking",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.booking,
      // },
      // {
      //   title: "file",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.file,
      // },
    ],
  },

  // MANAGEMENT
  {
    subheader: "Quản lý",
    items: [
      {
        title: "Bệnh nhân",
        path: paths.dashboard.dashboard,
        icon: ICONS.user,
        children: [
          { title: "Danh sách", path: paths.dashboard.users.index },
          { title: "Trang cá nhân", path: paths.dashboard.dashboard },
          { title: "Thành viên", path: paths.dashboard.dashboard },
          { title: "Thêm người dùng", path: paths.dashboard.dashboard },
          { title: "Sửa người dùng", path: paths.dashboard.dashboard },
          { title: "account", path: paths.dashboard.dashboard },
        ],
      },
      // {
      //   title: "product",
      //   path: paths.dashboard.dashboard,
      //   icon: ICONS.product,
      //   children: [
      //     { title: "list", path: paths.dashboard.products.index },
      //     { title: "details", path: paths.dashboard.dashboard },
      //     { title: "create", path: paths.dashboard.dashboard },
      //     { title: "edit", path: paths.dashboard.dashboard },
      //   ],
      // },
    ],
  },

  // OTHERS
  // {
  //   subheader: "Khác",
  //   items: [
  //     {
  //       title: "item_by_roles",
  //       path: paths.dashboard.dashboard,
  //       icon: ICONS.lock,
  //       roles: ["admin", "manager"],
  //       caption: "only_admin_can_see_this_item",
  //     },
  //     {
  //       title: "menu_level",
  //       path: "#/dashboard/menu_level",
  //       icon: ICONS.menuItem,
  //       children: [
  //         {
  //           title: "menu_level_1a",
  //           path: "#/dashboard/menu_level/menu_level_1a",
  //         },
  //         {
  //           title: "menu_level_1b",
  //           path: "#/dashboard/menu_level/menu_level_1b",
  //         },
  //       ],
  //     },
  //     {
  //       title: "item_disabled",
  //       path: "#disabled",
  //       icon: ICONS.disabled,
  //       disabled: true,
  //     },
  //     {
  //       title: "item_label",
  //       path: "#label",
  //       icon: ICONS.label,
  //       // info: <Label color="info">NEW</Label>,
  //     },
  //     {
  //       title: "item_caption",
  //       path: "#caption",
  //       icon: ICONS.menuItem,
  //       // caption: "Một mô tả dài dòng ở đây...",
  //     },
  //     {
  //       title: "item_external_link",
  //       path: "https://www.google.com/",
  //       icon: ICONS.external,
  //     },
  //     {
  //       title: "blank",
  //       path: paths.dashboard.dashboard,
  //       icon: ICONS.blank,
  //     },
  //   ],
  // },
];
