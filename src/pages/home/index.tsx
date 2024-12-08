import { menuRoutes } from "@/router/menuRoutes";
import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import { FC, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Home: FC<unknown> = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  return (
    <ProLayout
      route={{
        routes: menuRoutes,
      }}
      location={{
        pathname: pathname,
      }}
      avatarProps={{
        src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        title: "七妮妮",
        size: "small",
        render: (_, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "logout",
                    icon: <LogoutOutlined />,
                    label: "退出登录",
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      actionsRender={() => [
        <InfoCircleFilled key="InfoCircleFilled" />,
        <QuestionCircleFilled key="QuestionCircleFilled" />,
        <GithubFilled key="GithubFilled" />,
      ]}
      fixSiderbar={true}
      layout={"mix"}
      menuItemRender={(item, dom) => (
        <Link
          to={item.path ?? "/"}
          onClick={() => setPathname(item.path ?? "/")}
        >
          {dom}
        </Link>
      )}
      menuFooterRender={() => (
        <div className="text-center p-4">
          <div>© 2021 Made with love</div>
          <div>by X Design</div>
        </div>
      )}
    >
      <Outlet />
    </ProLayout>
  );
};

export default Home;
