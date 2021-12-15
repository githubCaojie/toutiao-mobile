import Cookies from 'js-cookie'
export default {
    partyId: (state) => state.user.userView.partyId,
    userView: (state) => {
        return state.user.userView || Cookies.getJSON('userView')
    },
    route: state => state.route.includes,
    pageDir: state => state.route.pageDir,
    authority: state => state.user.authority,
}