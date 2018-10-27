export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(options) {
    const {content} = options;
    return {
        type: OPEN_MODAL,
        content
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}
