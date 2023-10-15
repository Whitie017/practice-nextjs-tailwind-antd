import "../styles/globals.css";
import { color } from "../theme/theme.config";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    fontSize: 16,
    colorPrimary: color.primary,
    colorSecondary: color.secondary,
    colorSuccess: color.success,
    colorWarning: color.warning,
    colorError: color.error,
    colorInfo: color.info,
    colorTextBase: color.textBase,
    colorBgBase: color.bgBase,
    colorWhite: color.white,
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
