const initialGenerator = (value) => {
    if (value) {
        let initial = value.split(' ');
        // if (initial[1]) {
        //     return initial[0][0].toUpperCase() + initial[1][0].toUpperCase();
        // } else {
        return initial[0][0].toUpperCase();
        //}
    } else {
        return '';
    }
}

const hRange = [0, 360];
const sRange = [0, 100];
const lRange = [0, 100];

const getHashOfString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
};

const normalizeHash = (hash, min, max) => {
    return Math.floor((hash % (max - min)) + min);
};

const HSLtoString = (hsl) => {
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
};

const generateHSL = (name) => {
    const hash = getHashOfString(name);
    const h = normalizeHash(hash, hRange[0], hRange[1]);
    const s = normalizeHash(hash, sRange[0], sRange[1]);
    const l = normalizeHash(hash, lRange[0], lRange[1]);
    const hsl = HSLtoString([h, s, l])
    return hsl;
};

export { initialGenerator, generateHSL };