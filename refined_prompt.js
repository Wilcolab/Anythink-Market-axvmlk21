/**
 * Converts a string to camelCase format.
 *
 * This function normalizes the input string by replacing underscores, hyphens, and multiple spaces
 * with a single space, then splits the string into words. The first word is converted to lowercase,
 * and subsequent words are capitalized (first letter uppercase, rest lowercase), then concatenated
 * to form a camelCase string.
 *
 * Edge cases handled:
 * - Throws an error if input is undefined, null, or not a string.
 * - Throws an error if the input string is empty after trimming.
 * - Handles multiple whitespaces and mixed delimiters (underscores, hyphens).
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase.
 * @throws {Error} If the input is undefined, null, not a string, or empty after trimming.
 * @returns {string} The camelCase version of the input string.
 * @example
 * toCamelCase("first name"); // returns "firstName"
 * toCamelCase("SCREEN_NAME"); // returns "screenName"
 * toCamelCase("mobile-number"); // returns "mobileNumber"
 * toCamelCase("  multiple   spaces  here "); // returns "multipleSpacesHere"
 */

/**
 * Converts a string to dot.case format.
 *
 * This function normalizes the input string by replacing underscores, hyphens, and multiple spaces
 * with a single space, then splits the string into words. All words are converted to lowercase and
 * joined together using dots as separators to form a dot.case string.
 *
 * Edge cases handled:
 * - Throws an error if input is undefined, null, or not a string.
 * - Throws an error if the input string is empty after trimming.
 * - Handles multiple whitespaces and mixed delimiters (underscores, hyphens).
 *
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case.
 * @throws {Error} If the input is undefined, null, not a string, or empty after trimming.
 * @returns {string} The dot.case version of the input string.
 * @example
 * toDotCase("first name"); // returns "first.name"
 * toDotCase("SCREEN_NAME"); // returns "screen.name"
 * toDotCase("mobile-number"); // returns "mobile.number"
 * toDotCase("  multiple   spaces  here "); // returns "multiple.spaces.here"
 */

function toCamelCase(str) {
    if (str === undefined) {
        throw new Error("Input is undefined. Please provide a valid string.");
    }
    if (str === null) {
        throw new Error("Input is null. Please provide a valid string.");
    }
    if (typeof str !== "string") {
        throw new Error(`Input type is ${typeof str}. Expected a string.`);
    }
    // Trim and check for empty string
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error("Input string is empty after trimming.");
    }

    // Replace underscores, hyphens, and multiple spaces with a single space
    const normalized = trimmed
        .replace(/[_\-]+/g, " ")
        .replace(/\s+/g, " ");

    // Split into words
    const words = normalized.split(" ");

    // Convert to camelCase
    const camelCase = words
        .map((word, idx) => {
            if (word.length === 0) return "";
            if (idx === 0) {
                // First word: lowercase all
                return word.toLowerCase();
            }
            // Capitalize first letter, lowercase rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");

    return camelCase;
}

// Example usage:
try {
    console.log(toCamelCase("first name")); // firstName
    console.log(toCamelCase("SCREEN_NAME")); // screenName
    console.log(toCamelCase("mobile-number")); // mobileNumber
    console.log(toCamelCase("you win it")); // youWinit
    console.log(toCamelCase("  multiple   spaces  here ")); // multipleSpacesHere
    console.log(toCamelCase(undefined)); // Throws error
} catch (err) {
    console.error("Error:", err.message);
}



/**
 * Converts a string to dot.case.
 * Handles edge cases: undefined, null, empty string, multiple whitespaces, mixed delimiters.
 * Throws detailed errors for invalid input.
 * @param {string} str - The input string to convert.
 * @returns {string} - The dot.case version of the string.
 */
function toDotCase(str) {
    if (str === undefined) {
        throw new Error("Input is undefined. Please provide a valid string.");
    }
    if (str === null) {
        throw new Error("Input is null. Please provide a valid string.");
    }
    if (typeof str !== "string") {
        throw new Error(`Input type is ${typeof str}. Expected a string.`);
    }
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error("Input string is empty after trimming.");
    }

    // Replace underscores, hyphens, and multiple spaces with a single space
    const normalized = trimmed
        .replace(/[_\-]+/g, " ")
        .replace(/\s+/g, " ");

    // Split into words
    const words = normalized.split(" ");

    // Convert to dot.case (all lowercase, joined by dots)
    const dotCase = words
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase())
        .join(".");

    return dotCase;
}

// Example usage:
try {
    console.log(toDotCase("first name")); // first.name
    console.log(toDotCase("SCREEN_NAME")); // screen.name
    console.log(toDotCase("mobile-number")); // mobile.number
    console.log(toDotCase("you win it")); // you.win.it
    console.log(toDotCase("  multiple   spaces  here ")); // multiple.spaces.here
    console.log(toDotCase(undefined)); // Throws error
} catch (err) {
    console.error("Error:", err.message);
}


