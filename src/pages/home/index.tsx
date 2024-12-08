import { menuRoutes } from "@/router";
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Home: FC<unknown> = () => {
  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");

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
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuItemRender={(item, dom) => (
        <Link
          to={item.path ?? "/"}
          onClick={() => setPathname(item.path ?? "/")}
        >
          {dom}
        </Link>
      )}
    >
      <PageContainer>
        <ProCard className="h-screen w-full">
          <Outlet />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default Home;
