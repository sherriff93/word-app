export const IS_SIGNED_IN = (authUser) => !!authUser
export const IS_ADMIN_USER = (authUser) => !!authUser && authUser.role === 'ADMIN';