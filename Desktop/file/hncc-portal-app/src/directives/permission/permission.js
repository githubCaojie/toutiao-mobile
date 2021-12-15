import store from '@/store/store'

const permissionDirective = {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const authority = store.getters && store.getters.authority;

    if (value && Array.isArray(value) && value.length > 0) {
      const permissionRoles = value

      const hasPermission = authority.some(auth => {
        return permissionRoles.includes(auth)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! like v-permission="['admin','editor']"`)
    }
  }
}

export default permissionDirective;