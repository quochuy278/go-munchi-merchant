export function getUrl(
  path: string,
  idParam?: string | number,
  queryParams?: Array<String>
): string {
  if (process.env.NODE_ENV === "development") {
    let envUrl: string = `${process.env.REACT_APP_API__URL_DEV}`;
    switch (true) {
      case idParam === null || idParam === undefined:
        return (envUrl = `${process.env.REACT_APP_API__URL_DEV}/${path}`);
      default:
        return (envUrl = `${process.env.REACT_APP_API__URL_DEV}/${path}/${idParam}`);
    }
  } else {
    let envUrl: string = `${process.env.REACT_APP_API__URL_PROD}`;
    switch (true) {
      case idParam === null || idParam === undefined:
        return envUrl;
      default:
        return (envUrl = `${process.env.REACT_APP_API__URL_DEV}/${path}/${idParam}`);
    }
  }
}
