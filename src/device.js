// breakpoints for media queries
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    medium: '550px',
    tablet: '768px',
    tabletL: '950px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

// devices for media queries
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    medium: `(min-width: ${size.medium})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};