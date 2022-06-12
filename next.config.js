/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
    $color-primary: #7380ec;
$color-danger:  rgb(205, 207, 73);
$color-success: #41f1b6;
$color-warning: #ffbb55;
$color-white: #fff;
$color-info-dark: #7d8da1;
$color-info-light: #dce1eb;
$color-dark: #363949;
$color-light: rgba(132, 139, 200, 0.18);
$color-primary-variant: #111e88;
$color-dark-variant: #677483;
$color-background: #f6f6f9;

$card-border-radius: 3rem;
$border-radius-1: 0.4rem;
$border-radius-2: 0.8rem;
$border-radius-3: 1.2rem;

$card-padding: 1.8rem;
$padding-1: 1.2rem;

$box-shadow: 0 2rem 3rem $color-light;
// Dark Theme variables

    `,
  },
};
