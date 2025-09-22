import { Helmet } from 'react-helmet';

export default ({ sitename, title, description, social_img }: { sitename: string, title: string, description: string, social_img: string }) => {
  const url = window.location.origin + window.location.pathname;
  return (<Helmet>
    <meta name="title" content={sitename} />
    <meta name="description" content={description} />
    <meta name="keywords" content="drupal,react,javascript,php,html,css" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="90 days" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={social_img} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={social_img} />
    <title>{title} :: {sitename}</title>
  </Helmet>);
};
