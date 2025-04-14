export const formatText = (text: string): string => {
    return text.trim().replace(/\s+/g, ' ');
};

export const validateInput = (input: string): boolean => {
    return input.length > 0 && input.length <= 5000; // Example validation for input length
};

export const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};