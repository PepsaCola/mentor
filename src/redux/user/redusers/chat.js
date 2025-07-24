export const addMessage = (state, payload) => {
    const { userId, message } = payload;
    const contact = state.user.contacts.find(
        c => c.contact && c.contact._id === userId
    );

    if (!contact) return;

    if (!contact.chat.messages) {
        contact.chat.messages = [];
    }

    contact.chat.messages.push(message);
}