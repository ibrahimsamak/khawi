// Import our Controllers
const auth = require("../controllers/auth");
const userController = require("../controllers/userController");
const notificationController = require("../controllers/notificationController");
const constantController = require("../controllers/constantController");
const adminController = require("../controllers/adminController");
const favoriteController = require("../controllers/favoriteController");
const couponController = require("../controllers/couponController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const orderController = require("../controllers/orderController");
const employeeController = require("../controllers/employeeController");
const providerController = require("../controllers/providerController");
const homeController = require("../controllers/homeController");

const fastify = require("fastify")({
  logger: true,
});

// Import Swagger documentation
// const documentation = require('./documentation/carApi')
const admin_routes = [
  
  {
    method: "POST",
    url: "/api/sms/add",
    handler: userController.AddSMS,
  },

  //admins
  {
    method: "GET",
    url: "/api/admin/list",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.getAdmins,
  },
  {
    method: "GET",
    url: "/api/admin/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.getSingleAdmin,
  },
  {
    method: "POST",
    url: "/api/admin/delete/:id",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.deleteAdmin,
  },
  {
    method: "POST",
    url: "/api/admin/update/:id",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.updateAdmin,
  },
  {
    method: "POST",
    url: "/api/admin/my/:id",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.updateMyProfile,
  },
  {
    method: "POST",
    url: "/api/admin/add",
    beforeHandler: [auth.getAdminToken],
    handler: adminController.addAdmin,
  },
  {
    method: "POST",
    url: "/api/admin/loginAdmin",
    handler: adminController.login,
  },
  //constant
  {
    method: "GET",
    url: "/api/constant/settings",
    handler: constantController.getSettings,
  },
  {
    method: "GET",
    url: "/api/constant/settings/:id",
    handler: constantController.getSingleSettings,
  },
  {
    method: "POST",
    url: "/api/constant/settings/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateSetting,
  },
  {
    method: "GET",
    url: "/api/constant/static-pages",
    handler: constantController.getStaticPages,
  },
  {
    method: "GET",
    url: "/api/constant/static/:id",
    handler: constantController.getSingleStaticAdmin,
  },
  {
    method: "POST",
    url: "/api/constant/static/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateStatic,
  },
  {
    method: "GET",
    url: "/api/constant/contact",
    handler: constantController.getContactOptionAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/contact/:id",
    handler: constantController.getSingleContract,
  },
  {
    method: "POST",
    url: "/api/constant/contact/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateContact,
  },

  {
    method: "GET",
    url: "/api/constant/complaints",
    handler: constantController.getComplains,
  },
  {
    method: "POST",
    url: "/api/constant/reply-complaints",
    handler: constantController.addReplyComplains,
  },
  {
    method: "POST",
    url: "/api/constant/complaints/:id",
    handler: constantController.deleteComplains,
  },

  {
    method: "GET",
    url: "/api/constant/welcome",
    handler: constantController.getWelcomeAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/welcome/:id",
    handler: constantController.getSingleWelcomeAdmin,
  },
  {
    method: "POST",
    url: "/api/constant/welcome",
    handler: constantController.addWelcome,
  },
  {
    method: "POST",
    url: "/api/constant/welcome/:id",
    handler: constantController.updateWelcome,
  },
  {
    method: "POST",
    url: "/api/constant/delete-welcome/:id",
    handler: constantController.deleteWelcome,
  },

  {
    method: "GET",
    url: "/api/constant/welocome/:id",
    handler: constantController.getSingleWelcomeAdmin,
  },
  {
    method: "POST",
    url: "/api/constant/welocome",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addWelcome,
  },
  {
    method: "POST",
    url: "/api/constant/welocome/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateWelcome,
  },
  {
    method: "POST",
    url: "/api/constant/delete-welocome/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deleteWelcome,
  },

  {
    method: "GET",
    url: "/api/constant/country",
    handler: constantController.getCountryAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/country/:id",
    handler: constantController.getSingleCountry,
  },
  {
    method: "POST",
    url: "/api/constant/delete-country/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deleteCountry,
  },
  {
    method: "POST",
    url: "/api/constant/country",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addCountry,
  },
  {
    method: "POST",
    url: "/api/constant/country/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateCountry,
  },
  {
    method: "GET",
    url: "/api/constant/city/:id",
    handler: constantController.getCityAdmins,
  },
  {
    method: "GET",
    url: "/api/constant/city",
    handler: constantController.getAlCityAdmins,
  },
  {
    method: "GET",
    url: "/api/constant/single-city/:id",
    handler: constantController.getSingleCity,
  },
  {
    method: "POST",
    url: "/api/constant/city",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addCity,
  },
  {
    method: "POST",
    url: "/api/constant/city/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateCity,
  },
  {
    method: "POST",
    url: "/api/constant/delete-city/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deleteCity,
  },
  //advs
  {
    method: "GET",
    url: "/api/constant/advs",
    handler: constantController.getAdvsAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/single-advs/:id",
    handler: constantController.getSingleAdvsAdmin,
  },
  {
    method: "POST",
    url: "/api/constant/advs",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addAdvs,
  },
  {
    method: "POST",
    url: "/api/constant/advs/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateAdvs,
  },
  {
    method: "POST",
    url: "/api/constant/delete-advs/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deleteAdvs,
  },
  //category
  {
    method: "GET",
    url: "/api/constant/category",
    handler: constantController.getCategory,
  },
  {
    method: "GET",
    url: "/api/constant/category/:id",
    handler: constantController.getSingleCategory,
  },
  {
    method: "POST",
    url: "/api/constant/category",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addCategory,
  },
  {
    method: "POST",
    url: "/api/constant/category/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updateCategory,
  },
  {
    method: "POST",
    url: "/api/constant/delete-category/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deleteCategory,
  },

  //notification
  {
    method: "POST",
    url: "/api/admin/notification",
    beforeHandler: [auth.getAdminToken],
    handler: notificationController.getAdminNotification,
  },
  {
    method: "GET",
    url: "/api/admin/top_notification",
    beforeHandler: [auth.getAdminToken],
    handler: notificationController.getTop10AdminNotification,
  },
  {
    method: "POST",
    url: "/api/admin/add_notification",
    beforeHandler: [auth.getAdminToken],
    handler: notificationController.addMassNotification,
  },
  {
    method: "POST",
    url: "/api/admin/add_notification/:id",
    beforeHandler: [auth.getAdminToken],
    handler: notificationController.addSingleNotification,
  },
  //maps
  {
    method: "GET",
    url: "/api/admin/order/map",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getOrdersMap,
  },
  {
    method: "GET",
    url: "/api/admin/user/uncovarage",
    beforeHandler: [auth.getAdminToken],
    handler: userController.getUnCovered,
  },
  {
    method: "GET",
    url: "/api/admin/user/driversOnFirebase",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.driversOnFirebase,
  },
  
  //users
  {
    method: "POST",
    url: "/api/users/clients",
    beforeHandler: [auth.getAdminToken],
    handler: userController.getUsers,
  },
  {
    method: "POST",
    url: "/api/users/clients-excel",
    beforeHandler: [auth.getAdminToken],
    handler: userController.getUsersExcel,
  },
  {
    method: "GET",
    url: "/api/users/address/:id",
    beforeHandler: [auth.getAdminToken],
    handler: userController.getUserAddressAdmin,
  },
  {
    method: "POST",
    url: "/api/users/address/discount/:id",
    beforeHandler: [auth.getAdminToken],
    handler: userController.updateUserAddressAdmin,
  },
  {
    method: "GET",
    url: "/api/users/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: userController.getSingleUsersAdmin,
  },
  {
    method: "POST",
    url: "/api/users/block",
    beforeHandler: [auth.getAdminToken],
    handler: userController.block,
  },
  {
    method: "POST",
    url: "/api/users/sms/:id",
    beforeHandler: [auth.getAdminToken],
    handler: userController.sendUserSMS,
  },

  {
    method: "POST",
    url: "/api/users/update",
    beforeHandler: [auth.getAdminToken],
    handler: userController.updateUser,
  },
  {
    method: "GET",
    url: "/api/users/orders/:id",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getUserOrders,
  },
  //providers

  {
    method: "GET",
    url: "/api/users/providers/list",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.getAllSupplier,
  },
  {
    method: "POST",
    url: "/api/users/providers",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.getSupplier,
  },
  {
    method: "POST",
    url: "/api/users/providers-excel",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.getProviderExcel,
  },
  {
    method: "GET",
    url: "/api/providers/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.getSingleProviderAdmin,
  },
  {
    method: "POST",
    url: "/api/providers/sms/:id",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.sendSupplierMS,
  },

  {
    method: "POST",
    url: "/api/providers/update",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.updateProvider,
  },
  {
    method: "POST",
    url: "/api/providers/block",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.block,
  },
  {
    method: "POST",
    url: "/api/providers/delete",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.delete,
  },
  {
    method: "POST",
    url: "/api/providers/add",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.addProvider,
  },
  {
    method: "GET",
    url: "/api/providers/times/:id",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.getProviderTimes,
  },
  {
    method: "POST",
    url: "/api/provider/delete-time/:id",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.deleteTime,
  },
  {
    method: "POST",
    url: "/api/provider/add-time",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.addTime,
  },
  {
    method: "POST",
    url: "/api/provider/update-time/:id",
    beforeHandler: [auth.getAdminToken],
    handler: providerController.updateTime,
  },
  {
    method: "GET",
    url: "/api/providers/orders/:id",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getProivdeOrders,
  },

  //employee
  {
    method: "GET",
    url: "/api/stores/employee/:id",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.getStoresEmployees,
  },
  {
    method: "POST",
    url: "/api/users/employee",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.getEmployees,
  },
  {
    method: "POST",
    url: "/api/users/employee-excel",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.getEmployeesExcel,
  },
  {
    method: "GET",
    url: "/api/employee/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.getSingleEmployeesAdmin,
  },
  {
    method: "POST",
    url: "/api/employee/sms/:id",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.sendEmployeeSMS,
  },

  {
    method: "POST",
    url: "/api/employee/update",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.updateEmploye,
  },
  {
    method: "POST",
    url: "/api/employee/block",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.block,
  },
  {
    method: "POST",
    url: "/api/employee/add",
    beforeHandler: [auth.getAdminToken],
    handler: employeeController.addEmployee,
  },
  {
    method: "GET",
    url: "/api/employee/orders/:id",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getEmployeesOrder,
  },

  //places
  {
    method: "GET",
    url: "/api/constant/place/:id",
    handler: constantController.getPlacesAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/all-place/:id",
    handler: constantController.getAllPlacesAdmin,
  },
  {
    method: "GET",
    url: "/api/constant/single-place/:id",
    handler: constantController.getSinglePlace,
  },
  {
    method: "POST",
    url: "/api/constant/place",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.addPlace,
  },
  {
    method: "POST",
    url: "/api/constant/place/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.updatePlace,
  },
  {
    method: "POST",
    url: "/api/constant/delete-place/:id",
    beforeHandler: [auth.getAdminToken],
    handler: constantController.deletePlace,
  },
  //coupons
  {
    method: "GET",
    url: "/api/coupon/list",
    beforeHandler: [auth.getAdminToken],
    handler: couponController.getcoupon,
  },
  {
    method: "GET",
    url: "/api/coupon/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: couponController.getSinglecoupon,
  },
  {
    method: "POST",
    url: "/api/coupon/add",
    beforeHandler: [auth.getAdminToken],
    handler: couponController.addcoupon,
  },
  {
    method: "POST",
    url: "/api/coupon/update/:id",
    beforeHandler: [auth.getAdminToken],
    handler: couponController.updatecoupon,
  },
  {
    method: "POST",
    url: "/api/coupon/delete/:id",
    beforeHandler: [auth.getAdminToken],
    handler: couponController.deletecoupon,
  },

  //products
  {
    method: "POST",
    url: "/api/products/list",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getAllProductsByAdmin,
  },
  {
    method: "GET",
    url: "/api/products/list/all",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getAllProductsList,
  },
  {
    method: "POST",
    url: "/api/products/list_excel",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getAllProductsExcelByAdmin,
  },
  {
    method: "POST",
    url: "/api/products/delete/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.deleteProduct,
  },
  {
    method: "POST",
    url: "/api/products/add",
    beforeHandler: [auth.getAdminToken],
    handler: productController.addProduct,
  },
  {
    method: "POST",
    url: "/api/products/update/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.updateProduct,
  },
  {
    method: "GET",
    url: "/api/products/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getSingleProduct,
  },

  //place_Products
  {
    method: "POST",
    url: "/api/products/places/list",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getAllProductPlaceByAdmin,
  },
  {
    method: "POST",
    url: "/api/products/places/list_excel",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getAllProductPlaceExcelByAdmin,
  },
  {
    method: "POST",
    url: "/api/products/places/delete/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.deleteProductPlace,
  },
  {
    method: "POST",
    url: "/api/products/places/add",
    beforeHandler: [auth.getAdminToken],
    handler: productController.addProductPlace,
  },
  {
    method: "POST",
    url: "/api/products/places/update/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.updateProductPlace,
  },
  {
    method: "GET",
    url: "/api/products/places/details/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getSingleProductPlace,
  },
  //orders
  {
    method: "POST",
    url: "/api/admin/orders",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getOrders,
  },
  {
    method: "POST",
    url: "/api/admin/update_order/:id",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.updateOrder,
  },
  {
    method: "POST",
    url: "/api/admin/rates",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.getOrdersRateList,
  },
  {
    method: "POST",
    url: "/api/users/rates/:id",
    beforeHandler: [auth.getAdminToken],
    handler: orderController.deleteRate,
  },
  {
    method: "POST",
    url: "/api/supplier/place",
    beforeHandler: [auth.getAdminToken],
    handler: productController.addSupplierPlace,
  },
  {
    method: "POST",
    url: "/api/supplier/place/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.updateSupplierPlace,
  },
  {
    method: "POST",
    url: "/api/supplier/delete-place/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.deleteSupplierPlace,
  },
  {
    method: "POST",
    url: "/api/supplier/place/list",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getSupplierPlaceAdmin,
  },
  {
    method: "GET",
    url: "/api/supplier/place/:id",
    beforeHandler: [auth.getAdminToken],
    handler: productController.getSingleSupplierPlace,
  },
  //charts
  {
    method: "GET",
    url: "/api/home/getTop10NewUsers",
    handler: homeController.getTop10NewUsers,
  },
  {
    method: "GET",
    url: "/api/home/getTop10Orders",
    beforeHandler: [auth.getAdminToken],
    handler: homeController.getTop10Orders,
  },
  {
    method: "GET",
    url: "/api/home/getCounterOrdersWithStatus",
    beforeHandler: [auth.getAdminToken],
    handler: homeController.getCounterOrdersWithStatus,
  },
  {
    method: "GET",
    url: "/api/home/getCounterUsers",
    handler: homeController.getCounterUsers,
  },
  {
    method: "GET",
    url: "/api/home/UsersproviderPerYear",
    handler: homeController.UsersproviderPerYear,
  },
  {
    method: "GET",
    url: "/api/home/getTopProductsCategory",
    beforeHandler: [auth.getAdminToken],
    handler: homeController.getTopProductsCategory,
  },
  {
    method: "GET",
    url: "/api/home/getTopProductsPlace",
    beforeHandler: [auth.getAdminToken],
    handler: homeController.getTopProductsPlace,
  },
  {
    method: "GET",
    url: "/api/home/getProviderOrdersPerYear",
    beforeHandler: [auth.getAdminToken],
    handler: homeController.getProviderOrdersPerYear,
  },
];

//mobile client
const mobile_routes = [
  {
    method: "GET",
    url: "/api/getSuppliers",
    handler: productController.getSuppliers,
  },
  {
    method: "GET",
    url: "/api/getPlaces",
    handler: constantController.getPlaces,
  },
  {
    method: "POST",
    url: "/api/addPlace",
    handler: constantController.addPlace,
  },
  {
    method: "GET",
    url: "/api/city/:id",
    handler: constantController.getCity,
  },
  //guest
  {
    method: "GET",
    url: "/api/mobile/guest/token",
    handler: userController.guestToken,
  },
  //Constants

  {
    method: "GET",
    url: "/api/mobile/constant/contact_options",
    handler: constantController.getContactOption,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/get",
    handler: constantController.getSettings,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/days",
    handler: constantController.getDays,
  },
  {
    method: "POST",
    url: "/api/mobile/constant/times",
    handler: constantController.getTimesByDate,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/welcome",
    handler: constantController.welcomeList,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/package",
    handler: constantController.packageList,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/country",
    handler: constantController.getCountry,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/city/:id",
    handler: constantController.getCity,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/static",
    handler: constantController.getStaticPage,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/static/:id",
    handler: constantController.getSingleStatic,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/help",
    handler: constantController.getSocialOption,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/complains-type",
    handler: constantController.getComplainsType,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/subject-type",
    handler: constantController.getTypes,
  },
  {
    method: "GET",
    url: "/api/mobile/constant/languages",
    handler: constantController.getLanguages,
  },
  {
    method: "POST",
    url: "/api/mobile/constant/add-complain",
    // beforeHandler: [auth.getToken],
    handler: constantController.addComplains,
  },
  //products
  {
    method: "GET",
    url: "/api/mobile/category/list",
    handler: productController.getCategories,
  },
  {
    method: "POST",
    url: "/api/mobile/home/get",
    beforeHandler: [auth.getToken],
    handler: productController.getHome,
  },
  {
    method: "GET",
    url: "/api/mobile/category/get/:id",
    beforeHandler: [auth.getToken],
    handler: productController.getProductsByCategoryId,
  },
  {
    method: "POST",
    url: "/api/mobile/category/search",
    beforeHandler: [auth.getToken],
    handler: productController.getProductsSearchFilter,
  },
  {
    method: "GET",
    url: "/api/mobile/product/refill",
    beforeHandler: [auth.getToken],
    handler: productController.getRefillProducts,
  },

  //Users
  {
    method: "POST",
    url: "/api/mobile/user/create_login",
    handler: userController.addUsers,
  },
  {
    method: "POST",
    url: "/api/mobile/user/verify",
    handler: userController.verify,
  },
  {
    method: "POST",
    url: "/api/mobile/user/forgetPassword",
    handler: userController.forgetPassword,
  },
  {
    method: "POST",
    url: "/api/mobile/user/change-phone",
    beforeHandler: [auth.getToken],
    handler: userController.changePhone,
  },
  {
    method: "POST",
    url: "/api/mobile/user/update-profile",
    beforeHandler: [auth.getToken],
    handler: userController.updateProfile,
  },
  // {
  //   method: "POST",
  //   url: "/api/mobile/user/logout",
  //   handler: userController.logout,
  // },
  {
    method: "GET",
    url: "/api/mobile/user/get-user",
    beforeHandler: [auth.getToken],
    handler: userController.getSingleUsers,
  },
  {
    method: "POST",
    url: "/api/mobile/user/refresh-token",
    handler: userController.refreshAPIToken,
  },
  {
    method: "POST",
    url: "/api/mobile/user/refresh-fcm-token",
    handler: userController.refreshFCMToken,
  },
  {
    method: "POST",
    url: "/api/mobile/user/resend",
    handler: userController.Resend,
  },
  {
    method: "GET",
    url: "/api/mobile/user/get_address",
    beforeHandler: [auth.getToken],
    handler: userController.getUserAddress,
  },
  {
    method: "POST",
    url: "/api/mobile/user/add_address",
    beforeHandler: [auth.getToken],
    handler: userController.addUserAddress,
  },
  {
    method: "POST",
    url: "/api/mobile/user/update_address",
    beforeHandler: [auth.getToken],
    handler: userController.updateUserAddress,
  },
  {
    method: "POST",
    url: "/api/mobile/user/delete_address",
    beforeHandler: [auth.getToken],
    handler: userController.deleteUserAddress,
  },
  {
    method: "POST",
    url: "/api/mobile/user/default_address",
    beforeHandler: [auth.getToken],
    handler: userController.defaultUserAddress,
  },
  {
    method: "POST",
    url: "/api/mobile/user/logout/:id",
    // beforeHandler: [auth.getToken],
    handler: userController.logout,
  },
  //favorite
  {
    method: "POST",
    url: "/api/mobile/favorite/add",
    beforeHandler: [auth.getToken],
    handler: favoriteController.addDeleteFavorite,
  },
  {
    method: "GET",
    url: "/api/mobile/favorite/get",
    beforeHandler: [auth.getToken],
    handler: favoriteController.getFavoriteByUserId,
  },
  //Cart
  {
    method: "POST",
    url: "/api/mobile/cart/add",
    beforeHandler: [auth.getToken],
    handler: cartController.addProduct,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/update",
    beforeHandler: [auth.getToken],
    handler: cartController.UpdateCart,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/delete-cart",
    beforeHandler: [auth.getToken],
    handler: cartController.deleteCart,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/delete",
    beforeHandler: [auth.getToken],
    handler: cartController.deleteItemCart,
  },
  {
    method: "GET",
    url: "/api/mobile/cart/count",
    beforeHandler: [auth.getToken],
    handler: cartController.getCartCount,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/total",
    beforeHandler: [auth.getToken],
    handler: cartController.getCartTotalsUserId,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/replacment_total",
    beforeHandler: [auth.getToken],
    handler: cartController.getCartReplacmentTotalsUserId,
  },
  {
    method: "POST",
    url: "/api/mobile/cart/get",
    beforeHandler: [auth.getToken],
    handler: cartController.getCartUserId,
  },
  //notifications
  {
    method: "GET",
    url: "/api/mobile/notification/get",
    beforeHandler: [auth.getToken],
    handler: notificationController.getNotfications,
  },
  {
    method: "POST",
    url: "/api/mobile/notification/delete/:id",
    beforeHandler: [auth.getToken],
    handler: notificationController.deleteNotifications,
  },
  //check current place
  {
    method: "POST",
    url: "/api/mobile/check/place",
    handler: constantController.checkCurrentPlace,
  },
  {
    method: "POST",
    url: "/api/mobile/supplier/get",
    handler: orderController.getNearstSupplierByPlace,
  },
  {
    method: "POST",
    url: "/api/mobile/uncovered/add",
    beforeHandler: [auth.getToken],
    handler: userController.addUnCoveredOrder,
  },

  //order
  {
    method: "POST",
    url: "/api/mobile/order/check",
    beforeHandler: [auth.getToken],
    handler: orderController.checkDestinationInOrder,
  },
  {
    method: "POST",
    url: "/api/mobile/order/add",
    beforeHandler: [auth.getToken],
    handler: orderController.addOrder,
  },
  {
    method: "POST",
    url: "/api/mobile/order/refill",
    beforeHandler: [auth.getToken],
    handler: orderController.addRefillOrder,
  },
  {
    method: "GET",
    url: "/api/mobile/order/get",
    beforeHandler: [auth.getToken],
    handler: orderController.getUserOrder,
  },
  {
    method: "POST",
    url: "/api/mobile/order/cancel/:id",
    beforeHandler: [auth.getToken],
    handler: orderController.updateOrderByUser,
  },

  {
    method: "POST",
    url: "/api/mobile/order/rate/:id",
    beforeHandler: [auth.getToken],
    handler: orderController.addRateFromUserToEmployee,
  },
  {
    method: "GET",
    url: "/api/mobile/order/single/:id",
    beforeHandler: [auth.getToken],
    handler: orderController.getOrderDetails,
  },
  //coupon
  {
    method: "POST",
    url: "/api/mobile/cart/coupon",
    beforeHandler: [auth.getToken],
    handler: couponController.checkCouponCart,
  },
  {
    method: "POST",
    url: "/api/mobile/replacment/coupon",
    beforeHandler: [auth.getToken],
    handler: couponController.checkCouponReplacment,
  },
];

//mobile driver
const driver_routes = [
  {
    method: "GET",
    url: "/api/driver/constant/welcome",
    handler: constantController.welcomeDriver,
  },
  {
    method: "POST",
    url: "/api/driver/login",
    handler: employeeController.loginEmployee,
  },
  {
    method: "POST",
    url: "/api/driver/verify",
    handler: employeeController.verify,
  },
  {
    method: "POST",
    url: "/api/driver/resend",
    handler: employeeController.Resend,
  },
  {
    method: "POST",
    url: "/api/driver/forget",
    handler: employeeController.forgetPassword,
  },
  {
    method: "POST",
    url: "/api/driver/logout/:id",
    handler: employeeController.logout,
  },
  {
    method: "POST",
    url: "/api/driver/available/update",
    beforeHandler: [auth.getToken],
    handler: employeeController.updateAvailable,
  },
  {
    method: "GET",
    url: "/api/driver/profile",
    beforeHandler: [auth.getToken],
    handler: employeeController.getSingleEmployee,
  },
  {
    method: "GET",
    url: "/api/driver/order",
    beforeHandler: [auth.getToken],
    handler: orderController.getEmployeeOrder,
  },
  {
    method: "POST",
    url: "/api/driver/order-update/:id",
    beforeHandler: [auth.getToken],
    handler: orderController.updateOrderByEmployee,
  },
  {
    method: "POST",
    url: "/api/driver/change-password",
    beforeHandler: [auth.getToken],
    handler: employeeController.changePassword,
  },
  {
    method: "GET",
    url: "/api/driver/order/:id",
    beforeHandler: [auth.getToken],
    handler: orderController.getOrderDetails,
  },
  {
    method: "POST",
    url: "/api/driver/order/search",
    beforeHandler: [auth.getToken],
    handler: orderController.getOrdersSearchFilter,
  },
];

const routes = [...admin_routes, ...mobile_routes, ...driver_routes];
module.exports = routes;