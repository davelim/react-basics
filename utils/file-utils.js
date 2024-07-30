export function makeURL(path, base) {
    // TODO: check if path contains file
    return new URL(path, base);
}