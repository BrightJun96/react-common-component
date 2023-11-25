type RouteMeta = {
  menu?: {
    display: boolean; // menu 노출
    name: string; // menu 이름
  };
};

export type Route = {
  name: string;
  path: string;
  meta?: RouteMeta;
};
