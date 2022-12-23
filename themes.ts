import { buildLegacyTheme } from "sanity";

const props = {
    "--black": "#131515",
    "--black2": "#2b2c28",
    "--lightgreen": "#7de2d1",
    "--darkgreen": "#339989",
    "--white": "#fffafb",

}

export const myTheme = buildLegacyTheme({
    "--black": props["--black"],
    "--default-button-color": props["--lightgreen"],
    "--white": props["--white"],
    "--state-info-color": props["--black2"],
    "--brand-primary": props["--darkgreen"],
    "--component-bg":  props["--white"],
})