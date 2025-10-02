function toKebabCase(input) {
    if (typeof input !== 'string' || input == null) {
        return 'Error: Input must be a non-null string';
    }

    // Replace all non-alphanumeric characters (except spaces and hyphens) with space
    let str = input.replace(/[^a-zA-Z0-9\s-]/g, ' ');

    // Collapse consecutive spaces or hyphens into a single hyphen
    str = str.replace(/[\s-]+/g, '-');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove leading and trailing hyphens
    str = str.replace(/^-+|-+$/g, '');

    return str;
}