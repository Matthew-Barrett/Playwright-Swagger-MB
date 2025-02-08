// urls.ts

export const UrlProperties = {
    // Base URLs
    BASE_URL: 'https://www.saucedemo.com/',
    API_BASE_URL: 'https://petstore.swagger.io/v2',
    POST_PET_URL: 'https://petstore.swagger.io/v2/pet/',
    ADD_PET_ENDPOINT: 'pet/addPet',
    UPDATE_PET_ENDPOINT: 'pet/updatePet',
    GET_PET_ENDPOINT: 'pet/getPetById',
    DELETE_PET_ENDPOINT: 'pet/deletePet',
    
    // Authentication URLs
    LOGIN_PAGE: 'https://www.saucedemo.com/',
    SIGNUP_PAGE: '/signup',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    
    // User Account URLs
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    ACCOUNT_SETTINGS: '/account/settings',
    
    // Product Related URLs
    PRODUCTS: '/products',
    PRODUCT_DETAILS: (productId: string) => `/products/${productId}`,
    PRODUCT_CATEGORY: (category: string) => `/products/category/${category}`,
    PRODUCT_SEARCH: '/products/search',
    
    // Shopping Cart URLs
    CART: '/cart',
    CHECKOUT: '/checkout',
    ORDER_CONFIRMATION: '/order/confirmation',
    ORDER_HISTORY: '/orders',
    ORDER_DETAILS: (orderId: string) => `/orders/${orderId}`,
    
    // Content Pages
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    FAQ: '/faq',
    TERMS: '/terms',
    PRIVACY: '/privacy',
    
    // Admin URLs
    ADMIN_DASHBOARD: '/admin',
    ADMIN_USERS: '/admin/users',
    ADMIN_PRODUCTS: '/admin/products',
    ADMIN_ORDERS: '/admin/orders',
    
    // API Endpoints
    API: {
        AUTH: {
            LOGIN: '/auth/login',
            REGISTER: '/auth/register',
            LOGOUT: '/auth/logout',
            REFRESH_TOKEN: '/auth/refresh-token'
        },
        USERS: {
            GET_USER: (userId: string) => `/users/${userId}`,
            UPDATE_USER: (userId: string) => `/users/${userId}`,
            DELETE_USER: (userId: string) => `/users/${userId}`
        },
        PRODUCTS: {
            LIST: '/products',
            CREATE: '/products',
            GET_ONE: (productId: string) => `/products/${productId}`,
            UPDATE: (productId: string) => `/products/${productId}`,
            DELETE: (productId: string) => `/products/${productId}`
        },
        ORDERS: {
            CREATE: '/orders',
            GET_ONE: (orderId: string) => `/orders/${orderId}`,
            UPDATE: (orderId: string) => `/orders/${orderId}`,
            LIST: '/orders'
        }
    },
    
    // Helper function to construct full URLs
    getFullURL: (path: string): string => {
        return `${UrlProperties.BASE_URL}${path}`;
    },
    
    getFullAPIURL: (path: string): string => {
        return `${UrlProperties.API_BASE_URL}${path}`;
    }
};

// Export some commonly used URL patterns
export const URLPatterns = {
    PRODUCT_ID_PATTERN: /^\/products\/[a-zA-Z0-9-]+$/,
    ORDER_ID_PATTERN: /^\/orders\/[a-zA-Z0-9-]+$/,
    USER_ID_PATTERN: /^\/users\/[a-zA-Z0-9-]+$/
};

// Export route parameters
export const RouteParams = {
    PRODUCT_ID: ':productId',
    ORDER_ID: ':orderId',
    USER_ID: ':userId',
    CATEGORY_ID: ':categoryId'
};

// Export query parameter keys
export const QueryParams = {
    SEARCH: 'q',
    PAGE: 'page',
    LIMIT: 'limit',
    SORT: 'sort',
    FILTER: 'filter'
};

export default UrlProperties;
