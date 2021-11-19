export const scrollToHash = (hash: string) => {
    const hashElement = document.querySelector(hash) as HTMLElement;
    try {
        window.scrollTo({ top: hashElement.offsetTop, behavior: 'smooth' });
    } catch (error) {
        throw new Error(error);
    }
};
