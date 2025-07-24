export const getAuth = state => state.auth;
export const getToken = state => state.auth.token;
export const getUser = state => state.user.user;
export const getContactsFromState = state => state.user.user.contacts;
export const getMessagesById = (state, id) => {
    const contact = state.user.user.contacts.find(
        (c) => c.contact._id === id
    );
    return contact?.chat?.messages || [];
};;