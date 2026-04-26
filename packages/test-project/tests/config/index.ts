/**
 * Application-specific configuration
 * Selectors and constants for the example implementation
 */

export const SELECTORS = {
  LOGIN_PAGE: {
    username: 'input[data-test="username"]',
    password: 'input[data-test="password"]',
    loginBtn: 'input[data-test="login-button"]',
    errorMsg: '[data-test="error"]',
    resetPwdLink: 'a[href*="reset_password"]',
    container: ".login_container",
  },

  INVENTORY_PAGE: {
    container: ".inventory_container",
    productList: ".inventory_list",
    productItem: ".inventory_item",
    productName: ".inventory_item_name",
    productPrice: ".inventory_item_price",
    addToCartBtn: 'button[data-test^="add-to-cart"]',
    removeFromCartBtn: 'button[data-test^="remove"]',
    cartIcon: "a.shopping_cart_link",
    cartBadge: ".shopping_cart_badge",
    menuBtn: "#react-burger-menu-btn",
    logout: "a#logout_sidebar_link",
  },

  CART_PAGE: {
    container: ".cart_container",
    cartItem: ".cart_item",
    cartQuantity: ".cart_quantity",
    checkoutBtn: '[data-test="checkout"]',
    continueShoppingBtn: '[data-test="continue-shopping"]',
  },

  COMMON: {
    header: ".header_secondary_container",
    footer: ".footer",
    logo: ".app_logo",
  },
};

export const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com';

export const TEST_USERS = {
  VALID: {
    username: process.env.VALID_USERNAME || 'standard_user',
    password: process.env.VALID_PASSWORD || 'secret_sauce',
  },
  INVALID: {
    username: process.env.INVALID_USERNAME || 'invalid_user',
    password: process.env.INVALID_PASSWORD || 'wrong_password',
  },
};

export const ENDPOINTS = {
  LOGIN: '/',
  INVENTORY: '/inventory.html',
  CART: '/cart.html',
  CHECKOUT: '/checkout-step-one.html',
};

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service',
  EMPTY_USERNAME: 'Epic sadface: Username is required',
  EMPTY_PASSWORD: 'Epic sadface: Password is required',
};
